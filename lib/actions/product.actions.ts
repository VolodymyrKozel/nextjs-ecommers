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
export { getLatestProducts };
