import React from "react";
import { ProductBadge } from "./ProductBage";
import Image from "next/image";
import Link from "next/link";
import { imageURL } from "@/sanity/lib/image";
import AddToCartButton from "./AddToCartButton";

const ProductsGrid = ({ products }: { products: any }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {products.map((product: any) => (
        <div className="group relative" key={product._id}>
          <div className="aspect-square w-full relative overflow-hidden rounded-lg bg-gray-100 cursor-pointer">
            <Link href={`/${product._id}`}>
              <Image
                src={imageURL(product.image).url()}
                alt={product.title || "sanity image"}
                width={675}
                height={607}
                priority
                quality={100}
                className="object-cover absolute hover:scale-[1.1] object-center transition-all ease-in-out duration-200"
              />
            </Link>
            <ProductBadge badge={product.badge} />
            {product.inventory === 0 && (
              <div className="absolute inset-0 bg-gray-900/60 flex items-center justify-center">
                <p className="text-white font-semibold text-lg">Out of Stock</p>
              </div>
            )}
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3
                className={`${
                  product.title ? "text-content" : "text-black/90"
                }`}
              >
                {product.name}
              </h3>
              <div className="flex items-center gap-2">
                <p className="text-md font-semibold text-gray-900">
                  ${product.price}
                </p>
                {product.originalPrice && (
                  <p className="text-sm text-gray-500 line-through">
                    ${product.originalPrice}
                  </p>
                )}
              </div>
            </div>
            <div className="hover:opacity-70 transition-opacity duration-300 cursor-pointer">
              {product.inventory > 0 && (
                <div className="hover:opacity-70 flex transition-opacity duration-300 cursor-pointer">
                  <AddToCartButton product={product} className="mt-auto" />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;
