import { productsData, topCategoriesData } from "@/lib";
import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";

const TopCategories = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:items-start items-center gap-5 py-24">
      <div className="flex items-center justify-center">
        <h2 className="font-semibold text-3xl">Top Categories</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 gap-5">
        {topCategoriesData.map((item) => (
          <Card key={item.id} className="relative overflow-hidden">
            <div className="aspect-square">
              <Image src={item.image} alt={item.alt} width={424} height={424} />
              <div className="absolute bottom-0 w-full h-[80px] flex flex-col items-start justify-center bg-black/80 px-5">
                <h4 className="text-white">{item.title}</h4>
                <div>
                  <span className="text-gray-400">{item.productCount}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
