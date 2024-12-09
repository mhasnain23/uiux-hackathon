import { companies } from "@/lib";
import Image from "next/image";
import React from "react";

const Companies = () => {
  return (
    <div className="w-full bg-white md:px-0 px-5">
      <div className="max-w-7xl mx-auto h-[139px] md:flex items-center justify-center gap-10 grid grid-cols-4">
        {companies.map((item) => (
          <div className="" key={item.id}>
            <Image
              src={item.src}
              alt={item.alt}
              width={120}
              height={100}
              priority
              quality={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
