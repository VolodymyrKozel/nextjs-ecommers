import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
  uuid,
  numeric,
  varchar,
} from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

const products = pgTable("products", {
  id: uuid("id")
    .defaultRandom() // gen_random_uuid()
    .primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique("product_slug_idx"),
  category: text("category").notNull(),

  // Prisma: String[]
  // Drizzle: store as JSON array or as text[] (both supported)
  images: text("images").array().notNull(), // TEXT[]
  brand: text("brand").notNull(),
  description: text("description").notNull(),
  stock: integer("stock").notNull().default(0),

  // Prisma Decimal → drizzle numeric
  price: numeric("price", { precision: 12, scale: 2 }).notNull().default("0"),
  rating: numeric("rating", { precision: 3, scale: 2 }).notNull().default("0"),
  numReviews: integer("num_reviews").notNull().default(0),
  isFeatured: boolean("is_featured").notNull().default(false),
  banner: text("banner"),
  createdAt: timestamp("created_at", { precision: 6 }).notNull().defaultNow(),
});

export { products };
