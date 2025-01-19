import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { Products } from "@/sanity.types";
import { imageURL } from "@/sanity/lib/image";
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";

const ProductDetail = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  // Await the params promise;
  const { id } = await params;

  // Fetch all products
  const products: Products[] = await client.fetch(`*[_type == "products"]`);

  // Get the product ID from params

  // Find the single product
  const featuredProduct = products.find((product) => product._id === id);

  // If product is not found, return early
  if (!featuredProduct) {
    return <div className="text-center">Product not found</div>;
  }

  // Filter related products (excluding the current product)
  const relatedProducts = products.filter((product) => product._id !== id);

  return (
    <div className="max-w-7xl mx-auto md:px-0 px-5 mt-20">
      {/* Single Product Section */}
      <div className="flex md:flex-row flex-col items-center justify-between gap-10">
        {/* Product Image */}
        <div className="bg-[#FFF3F3] rounded-lg overflow-hidden aspect-square">
          <Image
            src={imageURL(featuredProduct?.image!).url()}
            alt={featuredProduct.title || "sanity image"}
            className="w-full h-full object-cover"
            width={500}
            height={500}
            priority
            quality={100}
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {featuredProduct.title}
          </h1>
          <div className="w-[130px] text-white bg-[#029FAE] flex items-center justify-center text-lg font-semibold mb-4 rounded-3xl py-2">
            <span>${featuredProduct.price?.toFixed(2)} USD</span>
          </div>
          <p className="text-gray-600 mb-6 max-w-xs">
            {featuredProduct.description}
          </p>
          {featuredProduct.inventory === 0 ? (
            <div className="text-gray-200 bg-gray-700 text-center px-4 py-2 rounded-lg">
              Out of Stock
            </div>
          ) : (
            <div className="hover:opacity-70 flex transition-opacity duration-300 cursor-pointer">
              <AddToCartButton product={featuredProduct} className="mt-auto" />
            </div>
          )}
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">RELATED PRODUCTS</h2>
          <Link
            href="/products"
            className="text-gray-600 hover:text-[#029FAE] border-b-2 border-transparent hover:border-[#029FAE] transition-colors duration-300"
          >
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {relatedProducts.map((product) => (
            <div key={product._id} className="group cursor-pointer">
              <div className="bg-gray-100 rounded-lg overflow-hidden mb-2">
                <Link href={`/${product._id}`}>
                  <Image
                    src={imageURL(product.image!).url()}
                    alt={product.title || "sanity image"}
                    width={400}
                    height={400}
                    className="w-full h-48 object-cover group-hover:scale-[1.1] transition-transform duration-300"
                  />
                </Link>
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">
                  {product.title}
                </h3>
                <p className="md:text-base text-md font-bold text-gray-600">
                  ${product?.price?.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
