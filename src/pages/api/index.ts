import { Post } from "@/models/schema";
import { db } from "@/utils/db";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const retest = await db.select().from(Post);
  return new Response(JSON.stringify(retest), {
    headers: { "Content-Type": "application/json" },
  });
};
