import type { APIRoute } from "astro";
import { db } from "@/utils/db";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { User } from "@/models/schema";

export const POST: APIRoute = async ({ request }) => {
  try {
    const { username, email, password } = await request.json();

    // Input validation
    if (!username || !email || !password) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ message: "Invalid email format" }), {
        status: 400,
      });
    }

    // Validate password strength
    if (password.length < 8) {
      return new Response(
        JSON.stringify({
          message: "Password must be at least 8 characters long",
        }),
        { status: 400 }
      );
    }

    // Check if username already exists
    const existingUser = await db
      .select()
      .from(User)
      .where(eq(User.username, username))
      .limit(1)
      .then((rows) => rows[0]);

    if (existingUser) {
      return new Response(
        JSON.stringify({ message: "Username already taken" }),
        { status: 409 }
      );
    }

    // Check if email already exists
    const existingEmail = await db
      .select()
      .from(User)
      .where(eq(User.email, email))
      .limit(1)
      .then((rows) => rows[0]);

    if (existingEmail) {
      return new Response(
        JSON.stringify({ message: "Email already registered" }),
        { status: 409 }
      );
    }

    // Hash password
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    await db.insert(User).values({
      username,
      email,
      password: hashedPassword,
    });

    return new Response(
      JSON.stringify({
        message: "User registered successfully",
        username,
        email,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
};
