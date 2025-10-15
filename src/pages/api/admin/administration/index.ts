import type { APIRoute } from "astro";
import { eq } from "drizzle-orm";
import { db as getDb } from "@/db";
import { staffTable } from "@/db/schema/administration";
import { departmentsTable } from "@/db/schema/academics";
import { Auth } from "@/lib/auth";

export const GET: APIRoute = async (ctx) => {
  const db = ctx.locals.db;

  const rows = await db
    .select({
      // Select the entire staffTable object
      staff: staffTable, 
      // And the specific departmentName
      departmentName: departmentsTable.name,
    })
    .from(staffTable)
    .leftJoin(departmentsTable, eq(staffTable.departmentId, departmentsTable.id));

  // The result will be an array like [{ staff: { ... }, departmentName: "..." }]
  // We can simplify this for the frontend with a map
  const result = rows.map(row => ({
    ...row.staff,
    departmentName: row.departmentName
  }));

  return new Response(JSON.stringify(result), {
    headers: { "Content-Type": "application/json" },
  });
};

export const POST: APIRoute = async (ctx) => {
  const db = ctx.locals.db;
  const auth = Auth.getInstance(db);
  const user = ctx.locals.user;
  if (!user) return new Response("Unauthorized", { status: 401 });
  const body = await ctx.request.json();
  const id = crypto.randomUUID();
  const values = {
    id,
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
  await db.insert(staffTable).values(values);
  return new Response(JSON.stringify({ id }), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
};
