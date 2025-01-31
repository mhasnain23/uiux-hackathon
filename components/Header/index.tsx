"use client";

import Image from "next/image";
import React, { useState } from "react";
import Language from "../Languages";
import Link from "next/link";
import { Button } from "../ui/button";
import Navigation from "../Navigation";
import { useCartStore } from "@/store/cartStore";
import { useRouter } from "next/navigation";
import { SearchIcon } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
  const { cart } = useCartStore();
  const [value, setValue] = useState("");

  const router = useRouter();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      router.push(`/search?query=${value}`);
    } catch (error) {
      console.log(error);
      setValue("");
    } finally {
      setValue("");
    }
  };

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
          <div className=" font-semibold text-2xl flex flex-wrap gap-10">
            <Link href={"/"} className="flex items-center justify-center gap-3">
              <Image
                src={"/comfortylogo.svg"}
                alt="comforty logo"
                width={40}
                height={40}
              />
              <span>Comforty</span>
            </Link>
            <div className="flex items-center justify-center">
              <form
                onSubmit={handleSubmit}
                className="flex items-center justify-center relative gap-2"
              >
                <input
                  type="text"
                  name="query"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Search by name or tags"
                  className="w-full bg-white border border-gray-300 px-10 py-3 text-base rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                  <SearchIcon className="absolute right-2 text-gray-400"/>
                {/* <Button
                  type="submit"
                  size={"icon"}
                  className="bg-blue-500 hover:bg-blue-600 text-white rounded-md"
                >
                </Button> */}
              </form>
            </div>
          </div>
          {/* for search bar */}
          <div className="flex items-center gap-5">
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
            <UserButton/>
          </div>
        </div>
      </div>
      {/* for the secondary navbar */}
      <Navigation />
    </div>
  );
};

export default Header;
