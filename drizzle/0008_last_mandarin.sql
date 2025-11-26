CREATE TABLE "announcements" (
	"id" text PRIMARY KEY NOT NULL,
	"text" text NOT NULL,
	"highlight" text,
	"active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);