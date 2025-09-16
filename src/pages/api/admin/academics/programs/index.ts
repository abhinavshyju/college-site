import type { APIRoute } from "astro";
import { programsTable } from "@/db/schema/academics";

export const GET: APIRoute = async (ctx) => {
  const db = ctx.locals.db;

  const rows = await db.select().from(programsTable);
  return new Response(JSON.stringify(rows), {
    headers: { "Content-Type": "application/json" },
  });
};

export const POST: APIRoute = async (ctx) => {
  const db = ctx.locals.db;

  const user = ctx.locals.user;
  if (!user) return new Response("Unauthorized", { status: 401 });

  const body = await ctx.request.json();
  const id = crypto.randomUUID();
  const values = {
    id,
    name: String(body.name || ""),
    level: String(body.level || "Undergraduate"),
    duration: String(body.duration || ""),
    seats: Number(body.seats || 0),
    affiliation: String(body.affiliation || ""),
    description: body.description ? String(body.description) : null,
    eligibility: body.eligibility ? String(body.eligibility) : null,
    curriculum: Array.isArray(body.curriculum) ? body.curriculum : null,
  } as const;

  await db.insert(programsTable).values(values);
  return new Response(JSON.stringify({ id }), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
};
