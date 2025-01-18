import { AboutHero } from "@/components/AboutHero";
import { BrandFeatures } from "@/components/BrandFeatures";
import PopularProducts from "@/components/PopularProduct";
import { client } from "@/sanity/lib/client";

const AboutPage = async () => {
  const popularProductByGallery = await client.fetch(
    `*[_type == "products" && tags match "gallery"]`
  );

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto py-12 md:px-0 px-6">
        <AboutHero />
        <BrandFeatures />
        <PopularProducts popularProductByGallery={popularProductByGallery} />
      </div>
    </div>
  );
};

export default AboutPage;
