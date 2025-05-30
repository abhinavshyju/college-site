import type { APIContext } from "astro";
import jwt from "jsonwebtoken";

export async function isAdmin(context: APIContext) {
  const token = context.cookies.get("token")?.value;

  if (!token) {
    return false;
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "your-secret-key"
    );
    return (decoded as { isAdmin: string }).isAdmin === "true";
  } catch {
    return false;
  }
}
