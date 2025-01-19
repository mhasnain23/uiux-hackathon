import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import { Categories } from "@/sanity.types";
import { imageURL } from "@/sanity/lib/image";
import Link from "next/link";

const TopCategories = ({ topCategories }: { topCategories: Categories[] }) => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:items-start items-center gap-5 py-24">
      {/* Heading */}
      <div className="flex items-center justify-center">
        <h2 className="font-semibold text-3xl">Top Categories</h2>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 gap-5">
        {topCategories.map((category: Categories) => (
          <Card key={category._id} className="relative overflow-hidden">
            <div className="aspect-square">
              {/* Link to dynamic route */}
              <Link href={`/categories/${category.slug?.current}`}>
                <Image
                  src={imageURL(category.image!).url()}
                  alt={category.title || "Category image"}
                  width={424}
                  height={424}
                  className="cursor-pointer object-cover"
                />
              </Link>
              {/* Title Overlay */}
              <div className="absolute bottom-0 w-full h-[80px] flex items-center justify-center bg-black/80 px-5">
                <h4 className="text-white font-semibold text-lg">
                  {category.title}
                </h4>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
