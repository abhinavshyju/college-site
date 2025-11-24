import type { APIRoute } from "astro";
import { db as getDb } from "@/db";
import { departmentsTable } from "@/db/schema/academics";
import { eq } from "drizzle-orm";
import { Auth } from "@/lib/auth";

export const GET: APIRoute = async (ctx) => {
  const db = ctx.locals.db;
  const id = ctx.params.id;

  if (!id) {
    return new Response("Department ID is required", { status: 400 });
  }

  const rows = await db
    .select()
    .from(departmentsTable)
    .where(eq(departmentsTable.id, id));

  if (rows.length === 0) {
    return new Response("Department not found", { status: 404 });
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
    return new Response("Department ID is required", { status: 400 });
  }

  try {
    const body = await ctx.request.json();

    if (
      !body.name ||
      !body.hod ||
      body.faculty === undefined ||
      body.labs === undefined
    ) {
      return new Response("Missing required fields", { status: 400 });
    }

    const values = {
      name: String(body.name),
      hod: String(body.hod),
      faculty: Number(body.faculty),
      labs: Number(body.labs),
      description: body.description ? String(body.description) : null,
      specializations:
        Array.isArray(body.specializations) && body.specializations.length > 0
          ? body.specializations.filter((spec: string) => spec && spec.trim())
          : null,
      updatedAt: new Date(),
    } as const;

    await db
      .update(departmentsTable)
      .set(values)
      .where(eq(departmentsTable.id, id));
    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error updating department:", error);
    return new Response("Internal server error", { status: 500 });
  }
};

export const DELETE: APIRoute = async (ctx) => {
  const db = ctx.locals.db;
  const user = ctx.locals.user;
  if (!user) return new Response("Unauthorized", { status: 401 });

  const id = ctx.params.id;
  if (!id) {
    return new Response("Department ID is required", { status: 400 });
  }

  try {
    const existing = await db
      .select()
      .from(departmentsTable)
      .where(eq(departmentsTable.id, id));

    if (existing.length === 0) {
      return new Response("Department not found", { status: 404 });
    }

    await db.delete(departmentsTable).where(eq(departmentsTable.id, id));
    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error deleting department:", error);
    return new Response("Internal server error", { status: 500 });
  }
};
