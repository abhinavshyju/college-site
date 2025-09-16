CREATE TABLE "gallery_images" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" text,
	"category" varchar(50) NOT NULL,
	"image_url" text NOT NULL,
	"file_name" varchar(255) NOT NULL,
	"file_size" serial NOT NULL,
	"mime_type" varchar(100),
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
