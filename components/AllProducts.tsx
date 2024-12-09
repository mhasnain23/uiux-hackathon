import React from "react";
import { ProductCard } from "./ProductCard";
import { products } from "@/lib/index";

const AllProducts = () => {
  return (
    <section className="bg-white md:py-2 py-10">
      <div className="max-w-7xl mx-auto md:px-0 px-8">
        <div className="text-center">
          <h2 className="text-[32px] font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Our Products
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <ProductCard />
        </div>
      </div>
    </section>
  );
};
export default AllProducts;
