import React from "react";

interface ProductProps {
  image: string;
  name: string;
  price: number;
}

const Product = ({ image, name, price }: ProductProps) => (
  <div className="group cursor-pointer">
    <div className="relative overflow-hidden mb-4">
      <img
        src={image}
        alt={name}
        className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-[1.1]"
      />
    </div>
    <h3 className="text-lg font-medium text-[#2A254B]">{name}</h3>
    <p className="text-[#2A254B]">${price.toFixed(2)}</p>
  </div>
);

export function PopularProducts() {
  const products = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80",
      name: "The Poplar Inside Sofa",
      price: 99.0,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80",
      name: "The Dandy Chair",
      price: 99.0,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80",
      name: "The Dandy Stool",
      price: 99.0,
    },
  ];

  return (
    <div className="py-16">
      <h2 className="text-3xl font-semibold mb-12 text-[#272343]">
        Our Popular Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
