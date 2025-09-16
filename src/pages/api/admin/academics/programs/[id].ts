import type { APIRoute } from "astro";
import { programsTable } from "@/db/schema/academics";
import { eq } from "drizzle-orm";

export const GET: APIRoute = async (ctx) => {
  const db = ctx.locals.db;
  const id = ctx.params.id;

  if (!id) {
    return new Response("Program ID is required", { status: 400 });
  }

  const rows = await db
    .select()
    .from(programsTable)
    .where(eq(programsTable.id, id));

  if (rows.length === 0) {
    return new Response("Program not found", { status: 404 });
  }

  return new Response(JSON.stringify(rows[0]), {
    headers: { "Content-Type": "application/json" },
  });
};

export const PUT: APIRoute = async (ctx) => {
  const db = ctx.locals.db;
  const user = ctx.locals.user;
  if (!user) return new Response("Unauthorized", { status: 401 });

  const id = ctx.params.id;
  if (!id) {
    return new Response("Program ID is required", { status: 400 });
  }

  const body = await ctx.request.json();
  const values = {
    name: String(body.name || ""),
    level: String(body.level || "Undergraduate"),
    duration: String(body.duration || ""),
    seats: Number(body.seats || 0),
    affiliation: String(body.affiliation || ""),
    description: body.description ? String(body.description) : null,
    eligibility: body.eligibility ? String(body.eligibility) : null,
    curriculum: Array.isArray(body.curriculum) ? body.curriculum : null,
    updatedAt: new Date(),
  } as const;

  await db.update(programsTable).set(values).where(eq(programsTable.id, id));
  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
  });
};

export const DELETE: APIRoute = async (ctx) => {
  const db = ctx.locals.db;
  const user = ctx.locals.user;
  if (!user) return new Response("Unauthorized", { status: 401 });

  const id = ctx.params.id;
  if (!id) {
    return new Response("Program ID is required", { status: 400 });
  }

  await db.delete(programsTable).where(eq(programsTable.id, id));
  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
  });
};
