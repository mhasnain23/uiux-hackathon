import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";
import ExploreNewProduct from "./ExploreNewProduct";
import { ProductBadge } from "./ProductBage";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { Products } from "@/sanity.types";
import { imageURL } from "@/sanity/lib/image";
import TopCategories from "./TopCategories";
import AddToCartButton from "./AddToCartButton";

const ProductsSection = async () => {
  const products: Products[] = await client.fetch(
    `*[_type == "products" && tags match "featured"]`
  );
  if (products.length === 0) {
    console.warn("No products with tag 'featured' found");
  }

  const AllProducts: Products[] = await client.fetch(`*[_type == "products"]`);

  const topCategories = await client.fetch(`*[_type == "categories"]`);

  // console.log(topCategories);

  return (
    <div className="w-full h-auto md:mt-0 mt-32">
      <div className="max-w-7xl mx-auto flex flex-col md:items-start items-center md:px-0 px-6">
        <h2 className="font-semibold text-[24px] sm:text-[28px] mt-20">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-5 gap-6">
          {products.map((item: Products) => (
            <Card className="border-none shadow-none" key={item._id}>
              {/* Product Image */}
              <div className="aspect-square rounded overflow-hidden relative">
                <Link href={`/${item._id}`}>
                  <Image
                    src={imageURL(item.image!).url()}
                    alt={item.title || "sanity image"}
                    width={312}
                    height={312}
                    priority
                    quality={100}
                    className="hover:scale-[1.1] transition-transform duration-300 ease-in-out cursor-pointer"
                  />
                  <ProductBadge badge={item.badge} />
                  {item.inventory === 0 && (
                    <div className="absolute inset-0 bg-gray-900/40 flex items-center justify-center">
                      <p className="text-white font-semibold text-lg">
                        Out of Stock
                      </p>
                    </div>
                  )}
                </Link>
              </div>
              {/* Product Content */}
              <CardContent className="p-0 flex items-center justify-between mt-4">
                <CardFooter className="p-0 border-none flex flex-col items-start gap-2">
                  <span className={"text-black text-sm sm:text-base"}>
                    {item.title}
                  </span>
                  <p className="font-[600] text-md sm:text-lg">
                    ${item.price}{" "}
                    <span className="font-medium text-sm text-gray-400 line-through">
                      {item.priceWithoutDiscount}
                    </span>
                  </p>
                </CardFooter>
                <div className="hover:opacity-70 transition-opacity duration-300 cursor-pointer">
                  {item.inventory! > 0 && (
                    <div className="hover:opacity-70 flex transition-opacity duration-300 cursor-pointer">
                      <AddToCartButton product={item} className="mt-auto" />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {/* Responsive Components */}
      <TopCategories topCategories={topCategories} />
      <div className="mt-10">
        <div className="max-w-7xl mx-auto flex items-start py-10">
          <h4 className="text-3xl uppercase text-start font-semibold text-gray-700 md:px-0 px-5">
            Explore new and popular styles
          </h4>
        </div>
        <ExploreNewProduct products={AllProducts} />
      </div>
    </div>
  );
};

export default ProductsSection;
