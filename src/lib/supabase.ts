import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY;
const supabaseServiceKey = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseAnonKey || !supabaseServiceKey) {
  throw new Error("Missing Supabase environment variables");
}

// Client for public operations
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Admin client for server-side operations
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

// Storage bucket name
export const GALLERY_BUCKET = "gallery-images";

// Initialize storage bucket if it doesn't exist
export async function initializeStorageBucket() {
  try {
    const { data: buckets } = await supabaseAdmin.storage.listBuckets();
    const bucketExists = buckets?.some(
      (bucket) => bucket.name === GALLERY_BUCKET
    );

    if (!bucketExists) {
      const { error } = await supabaseAdmin.storage.createBucket(
        GALLERY_BUCKET,
        {
          public: true,
          allowedMimeTypes: [
            "image/jpeg",
            "image/png",
            "image/webp",
            "image/gif",
          ],
          fileSizeLimit: 10 * 1024 * 1024, // 10MB
        }
      );

      if (error) {
        console.error("Error creating storage bucket:", error);
        throw error;
      }

      console.log(`Storage bucket '${GALLERY_BUCKET}' created successfully`);
    }
  } catch (error) {
    console.error("Error initializing storage bucket:", error);
    throw error;
  }
}

// Upload image to Supabase storage
export async function uploadImage(
  file: File,
  fileName: string
): Promise<string> {
  try {
    const fileExt = fileName.split(".").pop();
    const filePath = `${Date.now()}-${Math.random()
      .toString(36)
      .substring(2)}.${fileExt}`;

    const { data, error } = await supabaseAdmin.storage
      .from(GALLERY_BUCKET)
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      throw error;
    }

    // Get public URL
    const { data: urlData } = supabaseAdmin.storage
      .from(GALLERY_BUCKET)
      .getPublicUrl(data.path);

    return urlData.publicUrl;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
}

// Delete image from Supabase storage
export async function deleteImage(filePath: string): Promise<void> {
  try {
    const { error } = await supabaseAdmin.storage
      .from(GALLERY_BUCKET)
      .remove([filePath]);

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error("Error deleting image:", error);
    throw error;
  }
}

// Extract file path from URL
export function extractFilePathFromUrl(url: string): string {
  const urlParts = url.split("/");
  return urlParts[urlParts.length - 1];
}
