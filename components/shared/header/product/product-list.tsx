const ProductList = ({
  data,
  title,
  limit,
}: {
  data: any;
  title?: string;
  limit?: number;
}) => {
  const limitedData = limit ? data.slice(0, limit) : data;
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {limitedData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {limitedData.map((product: any) => (
            <div key={product.id} className="p-4 rounded-lg shadow">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>No products found.</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
