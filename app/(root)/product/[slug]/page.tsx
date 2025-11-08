import ProductImages from "@/components/shared/product/product-images";
import ProductPrice from "@/components/shared/product/product-price";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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

  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Images column */}
          <div className="col-span-2">
            {/* Images component */}
            <ProductImages images={product.images} name={product.name} />
          </div>
          <div className="col-span-2 p-5">
            <div className="flex flex-col gap-6">
              <p>
                {product.brand} {product.category}
              </p>
              <h1 className="h3-bold">{product.name}</h1>
              <p>
                {product.rating} of {product.numReviews} Reviews
              </p>
              <div className="flex flex-col sm:items-center gap-3 sm:flex-row">
                <ProductPrice
                  value={Number(product.price)}
                  className="w-24 rounded-full bg-green-100 text-gray-700 py-2 px-5"
                />
                {product.stock > 0 ? (
                  product.stock > 5 ? (
                    <p className="text-green-600">
                      In stock — {product.stock} available
                    </p>
                  ) : (
                    <p className="text-yellow-600">
                      Only {product.stock} left in stock — order soon
                    </p>
                  )
                ) : (
                  <p className="text-red-600">Out of stock</p>
                )}
              </div>
            </div>
            <div className="mt-10">
              <p className="font-semibold mb-2">Description</p>
              <p>{product.description}</p>
            </div>
          </div>
          {/* Action column */}
          <div>
            <Card>
              <CardContent className="p-4">
                <div className="mb-2 flex justify-between">
                  <div>Price</div>
                  <ProductPrice value={Number(product.price)} />
                </div>
                <div className="mb-2 flex justify-between">
                  <div>Status</div>
                  {product.stock > 0 ? (
                    <Badge variant="outline">In stock</Badge>
                  ) : (
                    <Badge variant="destructive">Out of stock</Badge>
                  )}
                </div>
                {product.stock > 0 && (
                  <div className="flex-center">
                    <Button className="w-full">Add To Cart</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailPage;
