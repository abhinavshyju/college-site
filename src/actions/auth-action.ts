import { userTable } from "@/db/schema/user";
import { Auth } from "@/lib/auth";
import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";

export const authActions = {
  signUp: defineAction({
    input: z.object({
      name: z.string().min(3),
      email: z.string().email(),
      phone_number: z.string(),
      password: z.string().min(8),
    }),
    handler: async (input, context) => {
      const { db } = context.locals;
      const auth = Auth.getInstance(db);

      try {
        const [existingUser] = await db
          .select()
          .from(userTable)
          .where(eq(userTable.username, input.name));

        if (existingUser) {
          throw new ActionError({
            code: "CONFLICT",
            message: "User already exists",
          });
        }

        const userId = crypto.randomUUID();
        const hashedPassword = await bcrypt.hash(input.password, 10);

        await db.insert(userTable).values({
          id: userId,

          username: input.name,

          password_hash: hashedPassword,
        });

        const session = await auth.createSession(userId);
        const sessionCookie = auth.createSessionCookie(session.id);

        context.cookies.set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes
        );

        return {
          success: true,
          message: "Signup successful",
        };
      } catch (error) {
        if (error instanceof ActionError) throw error;

        console.error("Signup Error:", {
          username: input.name,
          error: error instanceof Error ? error.message : error,
        });

        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: `An internal error occurred during signup : ${error}`,
        });
      }
    },
  }),

  logIn: defineAction({
    input: z.object({
      username: z.string(),
      password: z.string(),
    }),
    handler: async (input, context) => {
      const { db } = context.locals;
      const auth = Auth.getInstance(db);
      try {
        const [user] = await db
          .select()
          .from(userTable)
          .where(eq(userTable.username, input.username));

        if (!user) {
          console.log(await bcrypt.hash(input.password, 10));
          throw new ActionError({
            code: "NOT_FOUND",
            message: "Invalid credentials",
          });
        }

        const isValidPassword = await bcrypt.compare(
          input.password,
          user.password_hash
        );

        if (!isValidPassword) {
          throw new ActionError({
            code: "UNAUTHORIZED",
            message: "Invalid credentials",
          });
        }

        const session = await auth.createSession(user.id);
        const sessionCookie = auth.createSessionCookie(session.id);
        context.cookies.set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes
        );

        return {
          success: true,
          message: "Login successful",
        };
      } catch (error) {
        if (error instanceof ActionError) throw error;

        console.error("Login Error:", {
          email: input.username,
          error: error instanceof Error ? error.message : error,
        });

        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: `An internal error occurred during login : ${error}`,
        });
      }
    },
  }),
};
