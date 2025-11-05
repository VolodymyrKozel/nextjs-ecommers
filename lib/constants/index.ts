const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "My Store";
const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "Ecommerce store built with Nextjs";
const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

export { APP_NAME, APP_DESCRIPTION, SERVER_URL };

export const LATEST_PRODUCTS_LIMIT =
  process.env.NEXT_PUBLIC_LATEST_PRODUCTS_LIMIT || "3";
