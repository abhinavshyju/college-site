# Gallery Management System Setup

This document explains how to set up the gallery management system with Supabase storage.

## Prerequisites

1. A Supabase project set up
2. Database schema already migrated (gallery_images table)

## Environment Variables

Add the following environment variables to your `.env` file:

```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

## Setup Steps

### 1. Initialize Storage Bucket

Run the initialization script to create the storage bucket:

```bash
npx tsx src/scripts/init-gallery.ts
```

This will:

- Create a public storage bucket named `gallery-images`
- Set up proper file type restrictions (images only)
- Set a 10MB file size limit

### 2. Access Admin Interface

1. Navigate to `/admin/gallery` in your browser
2. You'll need to be logged in as an admin user
3. Use the "Add New Image" button to upload images

### 3. Public Gallery

The public gallery is available at `/gallery` and will automatically display all uploaded images with:

- Category filtering
- Lightbox view
- Responsive design

## API Endpoints

### GET /api/gallery

- Fetches all gallery images
- Optional query parameter: `?category=campus` to filter by category

### POST /api/gallery

- Creates a new gallery image
- Requires admin authentication
- Accepts multipart/form-data with:
  - `title` (required)
  - `description` (optional)
  - `category` (required)
  - `file` (required, image file)

### GET /api/gallery/[id]

- Fetches a single gallery image by ID

### PUT /api/gallery/[id]

- Updates an existing gallery image
- Requires admin authentication
- Accepts JSON with: `title`, `description`, `category`

### DELETE /api/gallery/[id]

- Deletes a gallery image
- Requires admin authentication
- Removes both database record and file from storage

## Database Schema

The `gallery_images` table includes:

- `id` - Primary key
- `title` - Image title
- `description` - Optional description
- `category` - Image category (campus, events, academics, sports, cultural, graduation)
- `imageUrl` - Public URL from Supabase storage
- `fileName` - Original filename
- `fileSize` - File size in bytes
- `mimeType` - MIME type of the image
- `createdAt` - Timestamp when created
- `updatedAt` - Timestamp when last updated

## Categories

The system supports the following categories:

- `campus` - Campus Life
- `events` - Events
- `academics` - Academics
- `sports` - Sports
- `cultural` - Cultural
- `graduation` - Graduation

## Security

- All write operations require admin authentication
- File uploads are restricted to image types only
- File size is limited to 10MB
- Storage bucket is public for read access but write access requires service role key

## Troubleshooting

### Storage Bucket Not Created

- Ensure your Supabase service role key has proper permissions
- Check that the Supabase URL is correct

### Upload Failures

- Verify file is an image type
- Check file size is under 10MB
- Ensure admin authentication is working

### Images Not Displaying

- Check that the storage bucket is public
- Verify image URLs are accessible
- Check browser console for any CORS errors
