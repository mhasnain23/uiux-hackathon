import React from "react";
import { ProductBadge } from "./ProductBage";
import Image from "next/image";
import { products } from "@/lib";
import Link from "next/link";

// interface ProductCardProps {
//   product: Product;
// }

export function ProductCard() {
  return (
    <>
      {products.map((product) => (
        <div className="group relative" key={product.id}>
          <div className="aspect-square w-full relative overflow-hidden rounded-lg bg-gray-100 cursor-pointer">
            <Link href={`/${product.id}`}>
              <img
                src={product.imageUrl}
                alt={product.name}
                className="h-full w-full object-cover absolute hover:scale-[1.1] object-center transition-all ease-in-out duration-[0.2s]"
              />
              <ProductBadge isNew={product.isNew} isSale={product.isSale} />
            </Link>
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
    </>
  );
}
