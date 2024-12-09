import React from "react";
import { products } from "../lib/index";
import Link from "next/link";

export const InstagramSection: React.FC = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-[32px] font-medium mb-8 text-center">
          Follow Products And Discounts On Instagram
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {products.slice(0, 5).map((product) => (
            <div
              key={product.id}
              className="aspect-square overflow-hidden rounded-lg cursor-pointer"
            >
              <Link href={`/${product.id}`}>
                <img
                  src={product.imageUrl}
                  alt={product.alt}
                  className="w-full h-full object-cover hover:scale-[1.1] transition-transform duration-300"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
