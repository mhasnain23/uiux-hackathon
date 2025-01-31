"use client";

import { imageURL } from "@/sanity/lib/image";
import { useCartStore } from "@/store/cartStore";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { useState } from "react";

interface OrderSummaryProps {
  subtotal: number;
  shipping: string;
  total: number;
  // handleCheckout: () => void;
}

export function OrderSummary({
  subtotal,
  shipping,
  total,
  // handleCheckout,
}: OrderSummaryProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { user } = useUser();
  const cartItems = useCartStore((state) => state.cart);

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    setIsLoading(true)
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cartItems.map((item) => ({
            name: item.title,
            image: imageURL(item.image!).url(),
            price: item.price,
            quantity: item.quantity,
          })),
          userEmail: "jhon@gmail.com", // Replace with actual user email from auth
        }),
      });

      const data = await res.json();
      if (data.url) {
      setIsLoading(false)
        window.location.href = data.url; // Redirect to Stripe Checkout
      } else {
        alert("Something went wrong with checkout!");
      }
    } catch (error) {
      setIsLoading(false)
      console.error("Checkout error:", error);
      alert("Failed to process checkout. Please try again.");
    }finally{
      setIsLoading(false)
    }
  };

  return (
    <div className="rounded-lg md:p-2 p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Estimated Delivery & Handling</span>
          <span className="font-medium">{shipping}</span>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between">
            <span className="text-gray-900 font-medium">Total</span>
            <span className="text-gray-900 font-medium">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
        <button
        disabled={isLoading}
        type="submit"
          onClick={() => (user ? handleCheckout() : redirect("/sign-in"))}
          className="disabled:opacity-60 w-full bg-[#029fae] text-white py-3 rounded-full hover:bg-[#017e8b] transition-colors"
        >
          {user ? "Checkout" : "Sign in to checkout"}
        </button>
      </div>
    </div>
  );
}
