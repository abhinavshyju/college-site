import type { APIRoute } from "astro";
import { db as getDb } from "@/db";
import { departmentsTable } from "@/db/schema/academics";
import { Auth } from "@/lib/auth";

export const GET: APIRoute = async (ctx) => {
  const db = ctx.locals.db;

  const rows = await db.select().from(departmentsTable);
  return new Response(JSON.stringify(rows), {
    headers: { "Content-Type": "application/json" },
  });
};

export const POST: APIRoute = async (ctx) => {
  const db = ctx.locals.db;
  const user = ctx.locals.user;
  if (!user) return new Response("Unauthorized", { status: 401 });

  try {
    const body = await ctx.request.json();
    const id = crypto.randomUUID();

    // Validate required fields
    if (
      !body.name ||
      !body.hod ||
      body.faculty === undefined ||
      body.labs === undefined
    ) {
      return new Response("Missing required fields", { status: 400 });
    }

    const values = {
      id,
      name: String(body.name),
      hod: String(body.hod),
      faculty: Number(body.faculty),
      labs: Number(body.labs),
      description: body.description ? String(body.description) : null,
      specializations:
        Array.isArray(body.specializations) && body.specializations.length > 0
          ? body.specializations.filter((spec: string) => spec && spec.trim())
          : null,
    } as const;

    await db.insert(departmentsTable).values(values);
    return new Response(JSON.stringify({ id }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating department:", error);
    return new Response("Internal server error", { status: 500 });
  }
};
