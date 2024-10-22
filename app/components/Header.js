import Image from "next/image";
import granvia from "../assets/_920x1080_granvia_entrada.webp"; // Adjust the path if necessary

function Header() {
  return (
    <div className="  min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <div className="bg-black text-orange-400 font-bold text-center p-4 w-full">
        <h1 className="text-3xl">Real Madrid CF Shop</h1>
        <p className="text-lg">Our shop is the best CF Shop</p>
      </div>

      {/* Image Section */}
      <div className="text-center">
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
      </div>
    </div>
  );
}

export default Header;
