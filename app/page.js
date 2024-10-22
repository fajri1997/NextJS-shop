import ProductList from "./components/ProductList";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="bg-cyan-50 min-h-screen">
      <Header />
      <ProductList />
    </div>
  );
}
