import { AboutHero } from "@/components/AboutHero";
import { BrandFeatures } from "@/components/BrandFeatures";
import { PopularProducts } from "@/components/PopularProduct";
// import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto py-12 md:px-0 px-6">
        <AboutHero />
        <BrandFeatures />
        <PopularProducts />
      </div>
    </div>
  );
};

export default AboutPage;
