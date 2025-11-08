"use server";
import { PrismaClient } from "@/lib/generated/prisma/client";
import { convertPrismaObjectToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

const getLatestProducts = async () => {
  const prisma = new PrismaClient();
  const products = await prisma.product.findMany({
    take: Number(LATEST_PRODUCTS_LIMIT),
    orderBy: {
      createdAt: "desc",
    },
  });
  return convertPrismaObjectToPlainObject(products);
};

const getProductBySlug = async (slug: string) => {
  const prisma = new PrismaClient();
  const product = await prisma.product.findFirst({
    where: {
      slug,
    },
  });
  return convertPrismaObjectToPlainObject(product);
};

export { getLatestProducts, getProductBySlug };
