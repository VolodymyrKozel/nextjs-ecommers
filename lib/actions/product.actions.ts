"use server";
import { PrismaClient } from "@/lib/generated/prisma/client";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

const getLatestProducts = async () => {
  const prisma = new PrismaClient();
  const products = await prisma.product.findMany({
    take: Number(LATEST_PRODUCTS_LIMIT),
    orderBy: {
      createdAt: "desc",
    },
  });
  return products.map((product) => ({
    ...product,
    price: product.price.toString(),
    rating: product.rating.toString(),
    stock: product.stock ?? 0,
  }));
};

const getProductBySlug = async (slug: string) => {
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
};

export { getLatestProducts, getProductBySlug };
