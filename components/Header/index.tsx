"use client";

import Image from "next/image";
import React from "react";
import Language from "../Languages";
import Link from "next/link";
import { Button } from "../ui/button";
import Navigation from "../Navigation";
import { useCartStore } from "@/store/cartStore";

const Header = () => {
  const { cart } = useCartStore();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="w-full h-auto flex flex-col items-center">
      {/* A Wrapper DIV for bg color and full width */}
      <div className="w-full bg-[#272343] md:py-0 py-5">
        <div className="max-w-7xl h-[45px] mx-auto flex md:flex-row flex-col items-center justify-between">
          <div>
            <p className="flex items-center gap-2 text-[#e0e0e0] opacity-[70%]">
              <span>
                <Image src={"/check.svg"} alt="logo" width={15} height={15} />
              </span>{" "}
              Free shipping on all orders over $50
            </p>
          </div>
          <div className="flex items-center justify-center gap-10">
            <Language />
            <Link href={"/faqs"}>
              <span className="text-white font-medium text-[13px] opacity-[80%]">
                Faqs
              </span>
            </Link>
            <Link
              href={"/contact"}
              className="flex gap-2 text-[#ffffff] opacity-[80%]"
            >
              <Image
                src={"/alertcircle.svg"}
                alt="alert circle icon"
                width={16}
                height={16}
              />{" "}
              Need Help
            </Link>
          </div>
        </div>
      </div>
      {/* for the primary nav */}
      <div className="w-full bg-[#F0F2F3] md:px-5  md:py-0 py-5">
        <div className="max-w-7xl mx-auto h-[84px] flex md:flex-row flex-col items-center justify-between">
          <div className=" font-semibold text-2xl">
            <Link href={"/"} className="flex items-center justify-center gap-3">
              <Image
                src={"/comfortylogo.svg"}
                alt="comforty logo"
                width={40}
                height={40}
              />
              <span>Comforty</span>
            </Link>
          </div>
          <div>
            <Button className="bg-[#ffffff] hover:bg-[#dfdfdf] text-black rounded-lg">
              <Link href={"/cart"} className="flex items-center gap-3">
                <Image
                  src={"/cart.svg"}
                  alt="cart icon"
                  width={22}
                  height={22}
                />
                <p className="font-medium text-[12px]">Cart</p>
                <span className="w-[20px] h-[20px] bg-[#007580] rounded-full text-white flex items-center justify-center">
                  {totalItems}
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
      {/* for the secondary navbar */}
      <Navigation />
    </div>
  );
};

export default Header;
