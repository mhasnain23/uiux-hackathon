import { Products } from "@/sanity.types";
import { imageURL } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

export default async function PopularProducts({
  popularProductByGallery,
}: {
  popularProductByGallery: Products[];
}) {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-semibold mb-12 text-[#272343]">
        Our Popular Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {popularProductByGallery.map((product) => (
          <div key={product._id} className="group cursor-pointer">
            <div className="relative overflow-hidden mb-4">
              <Link href={`/${product._id}`}>
                <Image
                  src={imageURL(product.image!).url()}
                  alt={product.title! || "sanity image"}
                  width={300}
                  height={300}
                  className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-[1.1]"
                />
              </Link>
            </div>
            <h3 className="text-lg font-medium text-[#2A254B]">
              {product.title}
            </h3>
            <p className="text-[#2A254B]">${product?.price?.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
