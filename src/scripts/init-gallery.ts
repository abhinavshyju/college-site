import { db } from "../db";
import { galleryImages } from "../db/schema/gallery";
import { initializeStorageBucket } from "../lib/supabase";

async function initializeGallery() {
  try {
    console.log("Initializing gallery system...");

    await initializeStorageBucket();
    console.log("✅ Supabase storage bucket initialized");

    // Check if we already have images
    const existingImages = await db().select().from(galleryImages);

    if (existingImages.length === 0) {
      console.log(
        "No existing images found. You can now upload images through the admin interface."
      );
    } else {
      console.log(
        `Found ${existingImages.length} existing images in the database.`
      );
    }

    console.log("✅ Gallery system initialization complete!");
    console.log("📝 Next steps:");
    console.log("   1. Set up your Supabase environment variables");
    console.log("   2. Access the admin panel at /admin/gallery");
    console.log("   3. Upload your first images");
  } catch (error) {
    console.error("❌ Error initializing gallery system:", error);
    process.exit(1);
  }
}

initializeGallery();
