import Newsletter from "@/components/NewsLetter";
import ProductsGrid from "@/components/ProductGrid";
import { client } from "@/sanity/lib/client";
import React from "react";
const ProductPage = async () => {
  const products = await client.fetch(`*[_type == "products"]`);
  const productsByTag = await client.fetch(
    `*[_type == "products" && tags match "instagram"]`
  );

  return (
    <div className="w-full md:px-5 px-10">
      <h1 className="text-center font-semibold text-3xl mb-8">All Products</h1>
      <ProductsGrid products={products} />
      <Newsletter products={productsByTag} />
    </div>
  );
};

export default ProductPage;
