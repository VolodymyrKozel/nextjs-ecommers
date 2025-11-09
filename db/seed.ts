// db/seed.ts
import "dotenv/config";
import { db } from "./db"; // your Drizzle client
import { products, usersTable } from "./schema";
import sampleData from "./sample-data";

async function main() {
  console.log("Seeding database...");

  async function main() {
    const user: typeof usersTable.$inferInsert = {
      name: "John",
      age: 30,
      email: "john@example.com",
    };

    await db.insert(usersTable).values(user);
    console.log("New user created!");

    /*   await db.insert(products).values({
    name: "Polo Sporting Stretch Shirt",
    slug: "polo-sporting-stretch-shirt",
    category: "Men's Dress Shirts",
    description: "Classic Polo style with modern comfort",
    images: [
      "/images/sample-products/p1-1.jpg",
      "/images/sample-products/p1-2.jpg",
    ],
    price: "59.99",
    brand: "Polo",
    rating: "4.5",
    numReviews: 10,
    stock: 5,
    isFeatured: true,
    banner: "banner-1.jpg",
  }); */

    console.log("Database seeded successfully!");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
