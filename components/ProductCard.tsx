import React from "react";
import { ProductBadge } from "./ProductBage";
import Image from "next/image";
import Link from "next/link";
import { Products } from "@/sanity.types";
import { imageURL } from "@/sanity/lib/image";
import { ShoppingCart } from "lucide-react";

export function ProductCard({ products }: { products: Products[] }) {
  return (
    <>
      {products.map((product: Products) => (
        <div
          className={`group relative ${
            product.inventory === 0 ? "opacity-50 pointer-events-none" : ""
          }`}
          key={product._id}
        >
          <div className="aspect-square w-full relative overflow-hidden rounded-lg bg-gray-100 cursor-pointer">
            <Link href={`/${product._id}`}>
              <Image
                src={imageURL(product.image!).url()}
                alt={product.title! || "sanity image"}
                fill
                className="h-full w-full object-cover absolute hover:scale-[1.1] object-center transition-all ease-in-out duration-200"
              />
              <ProductBadge badge={product.badge} />
            </Link>
            {product.inventory === 0 && (
              <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
                <p className="text-white font-semibold text-lg">Out of Stock</p>
              </div>
            )}
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-black/90">{product.title}</h3>
              <div className="flex items-center gap-2">
                <p className="text-md font-semibold text-gray-900">
                  ${product.price}
                </p>
                {product.priceWithoutDiscount && (
                  <p className="text-sm text-gray-500 line-through">
                    ${product.priceWithoutDiscount}
                  </p>
                )}
              </div>
            </div>
            {product.inventory! <= 0 && (
              <div className="hover:opacity-70 transition-opacity duration-300 cursor-pointer">
                <ShoppingCart />
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
