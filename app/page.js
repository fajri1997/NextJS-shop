import Image from "next/image";
import granvia from "./assets/_920x1080_granvia_entrada.webp";
import ProductList from "./components/ProductList";

export default function Welcome() {
  return (
    <div className="bg-cyan-50 min-h-screen">
      <div className="text-orange-400 font-bold text-center">
        <h1>Real Madrid CF Shop</h1>
        <p>Our shop is the best CF Shop</p>

        <Image
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          src={granvia}
          alt="Gran Via Entrance"
          width={1000}
          height={500}
          className="py-3"
        />

        {/* Render ProductList here */}
        <ProductList />
      </div>
      <br />
    </div>
  );
}
