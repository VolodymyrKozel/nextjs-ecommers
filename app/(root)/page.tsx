import ProductList from "@/components/shared/header/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

const HomePage = async () => {
  const latestProducts = await getLatestProducts();

  return (
    <>
      <ProductList data={latestProducts} title="Featured Products" />
    </>
  );
};

export default HomePage;
