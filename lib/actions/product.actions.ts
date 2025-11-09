"use server";
import { db } from "@/db/db"; // your Drizzle client
import { products } from "@/db/schema"; // your table schema
import { eq, desc } from "drizzle-orm"; // operators

import { LATEST_PRODUCTS_LIMIT } from "../constants";
import { Product } from "@/types";

/* const getLatestProducts = async () => {
  const products = await prisma.product.findMany({
    take: Number(LATEST_PRODUCTS_LIMIT),
    orderBy: {
      createdAt: "desc",
    },
  });
  return products.map((product: Product) => ({
    ...product,
    price: product.price.toString(),
    rating: product.rating.toString(),
    stock: product.stock ?? 0,
  }));
}; */

const getLatestProducts = async () => {
  const latestProducts = await db
    .select()
    .from(products)
    .orderBy(products.createdAt, desc(products.createdAt))
    .limit(Number(LATEST_PRODUCTS_LIMIT));

  return latestProducts.map((product: Product) => ({
    ...product,
    price: product.price.toString(),
    rating: product.rating.toString(),
    stock: product.stock ?? 0,
  }));
};

/* const getProductBySlug = async (slug: string) => {
  const prisma = new PrismaClient();
  const product = await prisma.product.findFirst({
    where: {
      slug,
    },
  });
  return {
    ...product,
    price: product?.price.toString(),
    rating: product?.rating.toString(),
    stock: product?.stock ?? 0,
  };
}; */

const getProductBySlug = async (slug: string) => {
  const product = await db
    .select()
    .from(products)
    .where(eq(products.slug, slug))
    .limit(1)
    .then((rows) => rows[0]);

  if (!product) return null;

  return {
    ...product,
    price: product.price.toString(),
    rating: product.rating.toString(),
    stock: product.stock ?? 0,
  };
};

export { getLatestProducts, getProductBySlug };
