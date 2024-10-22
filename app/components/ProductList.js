import products from "../products";

function ProductList() {
  const productList = products.map((product) => (
    <div key={product.id} className="text-center">
      <img
        src={product.image}
        alt={product.name}
        className="mx-auto w-64 h-auto"
      />
      <p>{product.name}</p>
      <p>{product.price} KWD</p>
    </div>
  ));

  return <div className="grid grid-cols-2 gap-4">{productList}</div>;
}

export default ProductList;
