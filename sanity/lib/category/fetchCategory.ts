import { client } from "@/sanity/lib/client";

export async function fetchProductsByCategory(slug: string) {
  const query = `
    *[_type == "products" && category->slug.current == $slug]`;


  const products = await client.fetch(query, { slug });

  if (!products) {
    console.error(`No products found for category slug: ${slug}`);
    return [];
  }

  return products;
}