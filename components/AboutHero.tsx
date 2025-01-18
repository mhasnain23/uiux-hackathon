import Image from "next/image";
import React from "react";

export function AboutHero() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="h-[400px] flex flex-col justify-center items-start bg-[#007580] p-8 text-white rounded-lg">
        <h1 className="text-3xl font-semibold mb-4">About Us - Comforty</h1>
        <p className="mb-6">
          At Comforty, we believe that the right chair can transform your space
          and enhance your daily life. Our passion for modern furniture design
          drives us to create pieces that blend elegance, comfort, and style in
          a timeless way based area with technology.
        </p>
        <button className="bg-[#258992] px-6 py-2 rounded-md hover:bg-[#1b6c7b] transition-colors">
          View Collection
        </button>
      </div>
      <div className="hidden md:block">
        <Image
          src="/assets/img4.png"
          alt="Modern Chair"
          fill
          className="w-full h-[400px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
