import ProductList from "@/components/shared/header/product/product-list";
import sampleData from "@/db/sample-data";

const HomePage = () => {
  return (
    <>
      <ProductList
        data={sampleData.products}
        title="Featured Products"
        limit={4}
      />
    </>
  );
};

export default HomePage;
