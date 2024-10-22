import products from "../products";

// calling the array how ever we need <img> to call url how ever i thought <p>{product.image} would work but we need <img src and we use with alt  alt={product.name}
function ProductList() {
  const productList = products.map((product) => (
    <div key={product.id} className="text-center text-black">
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
