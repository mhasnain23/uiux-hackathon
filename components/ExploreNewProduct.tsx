"use client";

import { useState } from "react";
import { Products } from "@/sanity.types";
import { imageURL } from "@/sanity/lib/image";
import Image from "next/image";

const ExploreNewProduct = ({ products }: { products: Products[] }) => {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );

  //for singal product
  const newBadgeProduct = products.find((item) => item.badge === "New");
  //for multiple products
  const newBadgeProducts = products.filter((item) => item.badge === "New");

  return (
    <div className="max-w-7xl mx-auto flex md:flex-row flex-col items-center justify-center px-4 md:px-0 mb-5">
      {/* Main Image Section */}
      <div className="w-full">
        {/* Main Image */}
        {selectedImage ? (
          <Image
            src={selectedImage}
            alt={newBadgeProduct?.title || ""}
            width={500}
            height={500}
            priority
            quality={100}
            className="object-cover rounded-3xl"
          />
        ) : newBadgeProduct?.image ? (
          <Image
            src={imageURL(newBadgeProduct.image).url()}
            alt={newBadgeProduct.title || ""}
            width={500}
            height={500}
            priority
            quality={100}
            className="object-cover rounded-3xl"
          />
        ) : (
          <p className="text-gray-500 text-center">No new product available.</p>
        )}
      </div>

      {/* Product Grid Section */}
      <div className="w-full md:w-1/2 grid grid-cols-2 sm:grid-cols-2 gap-4">
        {newBadgeProducts.length > 0 ? (
          newBadgeProducts.map((item) => (
            <div
              key={item._id}
              className="cursor-pointer"
              onClick={() => setSelectedImage(imageURL(item.image!).url())}
            >
              <Image
                src={imageURL(item.image!).url()}
                alt={item.title || "sanity image"}
                width={312}
                height={312}
                className="object-cover rounded-lg"
              />
            </div>
          ))
        ) : (
          <p className="col-span-2 text-gray-500 text-center">
            No new products available.
          </p>
        )}
      </div>
    </div>
  );
};

export default ExploreNewProduct;
