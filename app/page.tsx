import AllProducts from "@/components/AllProducts";
import Companies from "@/components/Companies";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/Products";
import { Products } from "@/sanity.types";
import { client } from "@/sanity/lib/client";

export default async function Home() {
  const products: Products[] = await client.fetch(`*[_type == "products"]`);

  return (
    <>
      <Hero />
      <Companies />
      <ProductsSection />
      <AllProducts products={products} />
    </>
  );
}
