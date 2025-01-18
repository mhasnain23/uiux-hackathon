import React from "react";
import { Heart, Trash2 } from "lucide-react";
import Image from "next/image";

interface CartItemProps {
  image: string;
  title: string;
  price: number;
  subtitle: string;
  quantity: number;
}

export function CartItem({
  image,
  title,
  price,
  subtitle,
  quantity,
}: CartItemProps) {
  return (
    <div className="flex items-center gap-4 py-4 border-b border-gray-200 md:px-0 px-5">
      <Image
        src={image}
        alt={title}
        width={100}
        height={100}
        className="w-24 h-24 object-cover rounded-md"
      />
      <div className="flex-1">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        {subtitle && <p className="text-sm text-gray-500">Size: {subtitle}</p>}
        <p className="text-sm text-gray-500">Size L - Quantity: {quantity}</p>
        <div className="flex items-center gap-4 mt-2">
          <button className="text-gray-400 hover:text-gray-600">
            <Heart size={20} />
          </button>
          <button className="text-gray-400 hover:text-gray-600">
            <Trash2 size={20} />
          </button>
        </div>
      </div>
      <div className="text-right">
        <p className="text-lg font-medium">MRP: ${price}</p>
      </div>
    </div>
  );
}
