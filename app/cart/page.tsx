"use client";

import { CartItem } from "@/components/CartItem";
import { OrderSummary } from "@/components/OrderSummary";
import React from "react";
import { useCartStore } from "@/store/cartStore";
import { imageURL } from "@/sanity/lib/image";

const CartPage = () => {
  const cartItems = useCartStore((state) => state.cart);

  // Calculate order summary dynamically based on cart items
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price! * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? "Free" : "$0"; // Free shipping for any order with items
  const total = subtotal; // Assuming no taxes or additional fees for now

  const handleCheckout = () => {};

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-8 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-2xl font-medium text-gray-900 mb-6 md-px-0 px-5">
              Bag
            </h1>
            <div className="space-y-4">
              {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                  <CartItem
                    key={index}
                    id={item._id}
                    image={imageURL(item.image!).url()}
                    title={item.title || "sanity image"}
                    price={item.price!}
                    description={item.description!}
                    quantity={item.quantity}
                  />
                ))
              ) : (
                <p className="text-gray-500 px-5">
                  Your cart is empty. Add some items to your bag!
                </p>
              )}
            </div>
          </div>
          <div>
            <OrderSummary
              subtotal={subtotal}
              shipping={shipping}
              total={total}
              handleCheckout={handleCheckout}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
