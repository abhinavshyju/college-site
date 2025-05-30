import type { APIRoute } from "astro";
import { db } from "@/utils/db";
import { eq } from "drizzle-orm";
import { User } from "@/models/schema";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const POST: APIRoute = async ({ request }) => {
  try {
    const { username, password } = await request.json();

    // Basic input validation
    if (!username || !password) {
      return new Response(
        JSON.stringify({ message: "Username and password are required" }),
        { status: 400 }
      );
    }

    // Find user in database
    const user = await db
      .select()
      .from(User)
      .where(eq(User.username, username));

    if (!user[0]) {
      return new Response(
        JSON.stringify({ message: "Invalid username or password" }),
        { status: 401 }
      );
    }

    const isValidPassword = await bcrypt.compare(password, user[0].password);

    if (!isValidPassword) {
      return new Response(
        JSON.stringify({ message: "Invalid username or password" }),
        { status: 401 }
      );
    }

    const token = jwt.sign(
      { userId: user[0].id, username: user[0].username, isAdmin: "true" },
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "1d" }
    );

    return new Response(JSON.stringify({ message: "Login successful" }), {
      status: 200,
      headers: {
        "Set-Cookie": `token=${token}; HttpOnly; Path=/; SameSite=Strict; Max-Age=86400`,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return new Response(
      JSON.stringify({ message: "Internal server error", error }),
      {
        status: 500,
      }
    );
  }
};
