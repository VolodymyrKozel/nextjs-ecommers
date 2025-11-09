CREATE TABLE "products" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"category" text NOT NULL,
	"images" text[] NOT NULL,
	"brand" text NOT NULL,
	"description" text NOT NULL,
	"stock" integer DEFAULT 0 NOT NULL,
	"price" numeric(12, 2) DEFAULT '0' NOT NULL,
	"rating" numeric(3, 2) DEFAULT '0' NOT NULL,
	"num_reviews" integer DEFAULT 0 NOT NULL,
	"is_featured" boolean DEFAULT false NOT NULL,
	"banner" text,
	"created_at" timestamp (6) DEFAULT now() NOT NULL,
	CONSTRAINT "product_slug_idx" UNIQUE("slug")
);
