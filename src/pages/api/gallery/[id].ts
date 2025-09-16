import type { APIRoute } from "astro";
import { galleryImages } from "../../../db/schema/gallery";
import { eq } from "drizzle-orm";

// GET /api/gallery/[id] - Get single gallery image
export const GET: APIRoute = async ({ params, locals }) => {
  try {
    const id = parseInt(params.id!);

    if (isNaN(id)) {
      return new Response(JSON.stringify({ error: "Invalid image ID" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const database = locals.db;
    const [image] = await database
      .select()
      .from(galleryImages)
      .where(eq(galleryImages.id, id));

    if (!image) {
      return new Response(JSON.stringify({ error: "Image not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    return new Response(JSON.stringify(image), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching gallery image:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch gallery image" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};

// PUT /api/gallery/[id] - Update gallery image
export const PUT: APIRoute = async ({ params, request, locals }) => {
  try {
    // Check authentication
    if (!locals.user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const id = parseInt(params.id!);

    if (isNaN(id)) {
      return new Response(JSON.stringify({ error: "Invalid image ID" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const body = await request.json();
    const { title, description, category } = body;

    if (!title || !category) {
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

    const database = locals.db;
    const [updatedImage] = await database
      .update(galleryImages)
      .set({
        title,
        description: description || null,
        category,
        updatedAt: new Date(),
      })
      .where(eq(galleryImages.id, id))
      .returning();

    if (!updatedImage) {
      return new Response(JSON.stringify({ error: "Image not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    return new Response(JSON.stringify(updatedImage), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error updating gallery image:", error);
    return new Response(
      JSON.stringify({ error: "Failed to update gallery image" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};

// DELETE /api/gallery/[id] - Delete gallery image
export const DELETE: APIRoute = async ({ params, locals }) => {
  try {
    // Check authentication
    if (!locals.user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const id = parseInt(params.id!);

    if (isNaN(id)) {
      return new Response(JSON.stringify({ error: "Invalid image ID" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    // Get image data first to get the file path
    const database = locals.db;
    const [image] = await database
      .select()
      .from(galleryImages)
      .where(eq(galleryImages.id, id));

    if (!image) {
      return new Response(JSON.stringify({ error: "Image not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    // Delete from Supabase storage
    const { deleteImage, extractFilePathFromUrl } = await import(
      "../../../lib/supabase"
    );
    const filePath = extractFilePathFromUrl(image.imageUrl);
    await deleteImage(filePath);

    // Delete from database
    await database.delete(galleryImages).where(eq(galleryImages.id, id));

    return new Response(
      JSON.stringify({ message: "Image deleted successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error deleting gallery image:", error);
    return new Response(
      JSON.stringify({ error: "Failed to delete gallery image" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
