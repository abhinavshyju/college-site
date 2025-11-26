import type { APIRoute } from "astro";
import { galleryImages } from "../../../db/schema/gallery";
import { eq } from "drizzle-orm";

export const GET: APIRoute = async ({ request, locals }) => {
  try {
    const url = new URL(request.url);
    const category = url.searchParams.get("category");

    const database = locals.db;

    let images;
    if (category && category !== "all") {
      images = await database
        .select()
        .from(galleryImages)
        .where(eq(galleryImages.category, category))
        .orderBy(galleryImages.createdAt);
    } else {
      images = await database
        .select()
        .from(galleryImages)
        .orderBy(galleryImages.createdAt);
    }

    return new Response(JSON.stringify(images), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching gallery images:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch gallery images" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};

export const POST: APIRoute = async ({ request, locals }) => {
  try {

    if (!locals.user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const formData = await request.formData();
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const category = formData.get("category") as string;
    const file = formData.get("file") as File;

    if (!title || !category || !file) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const { uploadImage } = await import("../../../lib/supabase");
    const imageUrl = await uploadImage(file, file.name);


    const database = locals.db;
    const [newImage] = await database
      .insert(galleryImages)
      .values({
        title,
        description: description || null,
        category,
        imageUrl,
        fileName: file.name,
        fileSize: file.size,
        mimeType: file.type,
      })
      .returning();

    return new Response(JSON.stringify(newImage), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error creating gallery image:", error);
    return new Response(
      JSON.stringify({ error: "Failed to create gallery image" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
