import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY;
const supabaseServiceKey = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseAnonKey || !supabaseServiceKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

export const GALLERY_BUCKET = "gallery-images";
export const DOCUMENTS_BUCKET = "academic-documents";

export async function initializeStorageBucket() {
  try {
    const { data: buckets } = await supabaseAdmin.storage.listBuckets();

    const galleryBucketExists = buckets?.some(
      (bucket) => bucket.name === GALLERY_BUCKET
    );

    if (!galleryBucketExists) {
      const { error } = await supabaseAdmin.storage.createBucket(
        GALLERY_BUCKET,
        {
          public: true,
          allowedMimeTypes: [
            "image/jpeg",
            "image/png",
            "image/webp",
            "image/gif",
            "video/mp4",
            "video/webm",
            "application/pdf",
          ],
          fileSizeLimit: 50 * 1024 * 1024,
        }
      );

      if (error) {
        console.error("Error creating gallery bucket:", error);
      }
    }

    const documentsBucketExists = buckets?.some(
      (bucket) => bucket.name === DOCUMENTS_BUCKET
    );

    if (!documentsBucketExists) {
      const { error } = await supabaseAdmin.storage.createBucket(
        DOCUMENTS_BUCKET,
        {
          public: true,
          allowedMimeTypes: [
            "application/pdf",
            "image/jpeg",
            "image/png",
            "image/webp",
            "video/mp4",
            "video/webm",
          ],
          fileSizeLimit: 50 * 1024 * 1024,
        }
      );

      if (error) {
        console.error("Error creating documents bucket:", error);
      }
    }
  } catch (error) {
    console.error("Error initializing storage bucket:", error);
    throw error;
  }
}

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
        contentType: file.type,
      });

    if (error) {
      throw error;
    }

    const { data: urlData } = supabaseAdmin.storage
      .from(GALLERY_BUCKET)
      .getPublicUrl(data.path);

    return urlData.publicUrl;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
}

export async function uploadDocument(
  file: File,
  fileName: string
): Promise<string> {
  try {
    const fileExt = fileName.split(".").pop();
    const filePath = `${Date.now()}-${Math.random()
      .toString(36)
      .substring(2)}.${fileExt}`;

    await initializeStorageBucket();

    const { data, error } = await supabaseAdmin.storage
      .from(DOCUMENTS_BUCKET)
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
        contentType: file.type,
      });

    if (error) {
      throw error;
    }

    const { data: urlData } = supabaseAdmin.storage
      .from(DOCUMENTS_BUCKET)
      .getPublicUrl(data.path);

    return urlData.publicUrl;
  } catch (error) {
    console.error("Error uploading document:", error);
    throw error;
  }
}

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

export async function deleteDocument(filePath: string): Promise<void> {
  try {
    const { error } = await supabaseAdmin.storage
      .from(DOCUMENTS_BUCKET)
      .remove([filePath]);

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error("Error deleting document:", error);
    throw error;
  }
}

export function extractFilePathFromUrl(url: string): string {
  const urlParts = url.split("/");
  return urlParts[urlParts.length - 1];
}
