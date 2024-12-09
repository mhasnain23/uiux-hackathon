import Newsletter from "@/components/NewsLetter";
import ProductsGrid from "@/components/ProductGrid";
import React from "react";
const ProductPage = () => {
  return (
    <div className="w-full md:px-5 px-10">
      <h1 className="text-center font-semibold text-3xl mb-8">All Products</h1>
      <ProductsGrid />
      <Newsletter />
      {/* <ProductDetail /> */}
    </div>
  );
};

export default ProductPage;
