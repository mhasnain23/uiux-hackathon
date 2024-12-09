import AllProducts from "@/components/AllProducts";
import Companies from "@/components/Companies";
// import ExploreNewProduct from "@/components/ExploreNewProduct";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/Products";

export default function Home() {
  return (
    <>
      <Hero />
      <Companies />
      <ProductsSection />
      {/* <main className="w-full min-h-screen flex flex-col items-center justify-center overflow-x-hidden">
        <ExploreNewProduct />
      </main> */}
      <AllProducts />
    </>
  );
}
