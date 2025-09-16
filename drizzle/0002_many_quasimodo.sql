CREATE TABLE "departments" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"hod" text NOT NULL,
	"faculty" integer NOT NULL,
	"labs" integer NOT NULL,
	"description" text,
	"specializations" jsonb DEFAULT 'null'::jsonb,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "programs" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"level" varchar(50) NOT NULL,
	"duration" text NOT NULL,
	"seats" integer NOT NULL,
	"affiliation" text NOT NULL,
	"description" text,
	"eligibility" text,
	"curriculum" jsonb DEFAULT 'null'::jsonb,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
