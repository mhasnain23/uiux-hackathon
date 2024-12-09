import { CartItem } from "@/components/CartItem";
import { OrderSummary } from "@/components/OrderSummary";
import React from "react";

const CartPage = () => {
  const cartItems = [
    {
      image:
        "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=300",
      title: "Library Stool Chair",
      price: 99,
      subtitle: "Ashen Slate/Cobalt Bliss",
      quantity: 1,
    },
    {
      image:
        "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&q=80&w=300",
      title: "Library Stool Chair",
      price: 99,
      subtitle: "Ashen Slate/Cobalt Bliss",
      quantity: 1,
    },
  ];

  const orderSummaryData = {
    subtotal: 198,
    shipping: "Free",
    total: 198,
  };

  return (
    <div className=" bg-white">
      <div className="max-w-7xl mx-auto py-8 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-2xl font-medium text-gray-900 mb-6 md-px-0 px-5">
              Bag
            </h1>
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <CartItem key={index} {...item} />
              ))}
            </div>
          </div>
          <div>
            <OrderSummary
              subtotal={orderSummaryData.subtotal}
              shipping={orderSummaryData.shipping}
              total={orderSummaryData.total}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartPage;
