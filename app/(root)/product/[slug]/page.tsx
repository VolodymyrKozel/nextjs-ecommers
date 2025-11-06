import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";

const ProductDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  return <div>{slug}</div>;
};

export default ProductDetailPage;
