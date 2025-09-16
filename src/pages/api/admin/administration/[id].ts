import type { APIRoute } from "astro";
import { db as getDb } from "@/db";
import { staffTable } from "@/db/schema/administration";
import { eq } from "drizzle-orm";
import { Auth } from "@/lib/auth";

export const GET: APIRoute = async (ctx) => {
  const db = ctx.locals.db;
  const user = ctx.locals.user;
  if (!user) return new Response("Unauthorized", { status: 401 });
  const id = ctx.params.id!;
  const [row] = await db.select().from(staffTable).where(eq(staffTable.id, id));
  if (!row) return new Response("Not Found", { status: 404 });
  return new Response(JSON.stringify(row), {
    headers: { "Content-Type": "application/json" },
  });
};

export const PUT: APIRoute = async (ctx) => {
  const db = ctx.locals.db;
  const user = ctx.locals.user;
  if (!user) return new Response("Unauthorized", { status: 401 });
  const id = ctx.params.id!;
  const body = await ctx.request.json();
  const values = {
    name: String(body.name || ""),
    position: String(body.position || ""),
    qualification: body.qualification ? String(body.qualification) : null,
    experience: body.experience ? String(body.experience) : null,
    email: body.email ? String(body.email) : null,
    phone: body.phone ? String(body.phone) : null,
    image: body.image ? String(body.image) : null,
    category: String(body.category || "faculty"),
    achievements: Array.isArray(body.achievements) ? body.achievements : null,
  } as const;
  await db.update(staffTable).set(values).where(eq(staffTable.id, id));
  return new Response(null, { status: 204 });
};

export const DELETE: APIRoute = async (ctx) => {
  const db = ctx.locals.db;
  const user = ctx.locals.user;
  if (!user) return new Response("Unauthorized", { status: 401 });
  const id = ctx.params.id!;
  await db.delete(staffTable).where(eq(staffTable.id, id));
  return new Response(null, { status: 204 });
};
