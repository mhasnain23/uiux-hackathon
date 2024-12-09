import { exploreNewProductsData } from "@/lib";
import Image from "next/image";

const ExploreNewProduct = () => {
  return (
    // <div className="w-full py-10 flex items-center justify-center">
    <div className="max-w-7xl mx-auto flex items-start justify-center gap-5 px-4 md:px-0">
      {/* Main Image Section */}
      <div className="w-full items-center">
        {/* Main Image */}
        <Image
          src={"/assets/img1.png"}
          alt="img 1 product"
          width={648}
          height={648}
          priority
          quality={100}
          className="object-cover rounded-lg" // Added `ml-10` for spacing
        />
      </div>

      {/* Product Grid Section */}
      <div className="w-full md:w-1/2 grid grid-cols-2 sm:grid-cols-2 gap-4">
        {exploreNewProductsData.map((item, index) => (
          <Image
            key={index}
            src={item.image}
            alt={item.alt}
            width={312}
            height={312}
            className="object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
    // </div>
  );
};

export default ExploreNewProduct;
