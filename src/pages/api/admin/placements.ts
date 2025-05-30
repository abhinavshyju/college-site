import type { APIRoute } from "astro";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client with service role key for admin operations
const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.SUPABASE_SERVICE_ROLE_KEY,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);

export const POST: APIRoute = async ({ request }) => {
  try {
    // Get form data from request
    const formData = await request.formData();
    const studentName = formData.get("studentName") as string;
    const companyName = formData.get("companyName") as string;
    const imageFile = formData.get("image") as File;

    // Validate inputs
    if (!studentName || !companyName || !imageFile) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Upload image to Supabase Storage
    const imagePath = `placements/${Date.now()}-${imageFile.name}`;
    const { error: imageError } = await supabase.storage
      .from("images")
      .upload(imagePath, imageFile);

    if (imageError) {
      console.error("Image upload error:", imageError);
      return new Response(JSON.stringify({ error: "Failed to upload image" }), {
        status: 500,
      });
    }

    // Insert placement record in database
    const { error: placementError } = await supabase.from("placements").insert({
      student_name: studentName,
      company_name: companyName,
      image_url: imagePath,
    });

    if (placementError) {
      console.error("Placement insert error:", placementError);
      return new Response(
        JSON.stringify({ error: "Failed to add placement" }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Placement added successfully",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Server error:", error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
};

export const GET: APIRoute = async () => {
  try {
    const { data: placements, error } = await supabase
      .from("placements")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching placements:", error);
      return new Response(
        JSON.stringify({ error: "Failed to fetch placements" }),
        { status: 500 }
      );
    }

    // Generate public URLs for each placement image
    const placementsWithUrls = placements.map((placement) => {
      const imageUrl = supabase.storage
        .from("images")
        .getPublicUrl(placement.image_url).data.publicUrl;

      return {
        ...placement,
        public_image_url: imageUrl,
      };
    });

    return new Response(JSON.stringify({ placements: placementsWithUrls }), {
      status: 200,
    });
  } catch (error) {
    console.error("Server error:", error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
};

export const DELETE: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return new Response(JSON.stringify({ error: "Missing placement ID" }), {
        status: 400,
      });
    }

    const { error } = await supabase.from("placements").delete().eq("id", id);

    if (error) {
      console.error("Error deleting placement:", error);
      return new Response(
        JSON.stringify({ error: "Failed to delete placement" }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Placement deleted successfully",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Server error:", error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
};
