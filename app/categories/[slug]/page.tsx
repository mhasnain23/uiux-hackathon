import React from "react";
import { fetchCategoryBySlug } from "@/sanity/lib/category/fetchCategoryBySlug";
import { fetchProductsByCategory } from "@/sanity/lib/category/fetchCategory";
import { Products, Categories } from "@/sanity.types";
import Image from "next/image";
import Link from "next/link";
import { imageURL } from "@/sanity/lib/image";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category: Categories | null = await fetchCategoryBySlug(slug);

  console.log("category", category);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto py-16 px-4 text-center">
        <h1 className="text-3xl font-bold">Category Not Found</h1>
        <p className="text-gray-600 mt-4">
          The category you are looking for does not exist.
        </p>
      </div>
    );
  }

  const products: Products[] = await fetchProductsByCategory(slug);

  console.log("products", products);

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold">{category.title}</h1>
        {/* <p className="text-gray-600 mt-2">{category.description}</p> */}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <Link
              key={product._id}
              href={`/${product._id}`}
              className="group block rounded-lg overflow-hidden border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative aspect-square">
                <Image
                  src={imageURL(product.image!).url()}
                  alt={product.title || "Product image"}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <p className="text-gray-600">${product.price}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-600">
            No products available in this category.
          </p>
        )}
      </div>
    </div>
  );
}
