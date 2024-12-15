import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full md:px-0 px-10">
      <div className="max-w-7xl mx-auto bg-[#f0f2f3] min-h-screen flex md:flex-row flex-col items-center justify-between md:py-0 py-4 px-12">
        <div className="max-w-xl h-[450px] flex flex-col items-start gap-8 md:order-none order-2">
          <span className="font-medium text-[14px] text-[#272343]">
            Welcome to chairy
          </span>
          <h1 className="font-bold text-6xl text-[#272343] capitalize">
            Best Furniture
            <br /> Collection for your
            <br /> interior.
          </h1>
          <Button className="bg-[#029FAE] hover:bg-[#029FAE]" size={"lg"}>
            <Link
              href={"/products"}
              className="flex items-center justify-center gap-3"
            >
              Shop Now{" "}
              <Image
                src={"/arrowright.png"}
                alt="arrow right"
                className="hover:ml-[5px]"
                width={24}
                height={24}
              />
            </Link>
          </Button>
        </div>
        {/* for hero image product */}
        <div className="lg:w-[434px] lg:h-[584px] max-w-lg md:order-none order-1">
          <Image
            src={"/heroproduct.png"}
            alt="hero product image"
            width={360}
            height={584}
            priority
            quality={100}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
