import React from "react";
import { ProductCard } from "./ProductCard";
import { products } from "../lib/index";
import { ProductBadge } from "./ProductBage";
import Image from "next/image";
import Link from "next/link";

const ProductsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {products.map((product) => (
        <div className="group relative" key={product.id}>
          <div className="aspect-square w-full relative overflow-hidden rounded-lg bg-gray-100 cursor-pointer">
            <Link href={`/${product.id}`}>
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={675}
                height={607}
                priority
                quality={100}
                className="object-cover absolute hover:scale-[1.1] object-center transition-all ease-in-out duration-[0.2s]"
              />
            </Link>
            <ProductBadge isNew={product.isNew} isSale={product.isSale} />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3
                className={`${
                  product.titleStyle ? "text-[#4DBCC6]" : "text-black/90"
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
              <Image
                src={product.cartIcon}
                alt={product.alt}
                width={44}
                height={44}
                className={`${product.cartStyle} rounded-xl p-3`}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;
