"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

const SuccessPage = () => {
  const searchParams = useSearchParams();

  const orderId = searchParams.get("orderId");
  const amount = searchParams.get("amount");
  const currency = searchParams.get("currency") || "USD"; // Default to USD
  const customerEmail = searchParams.get("email");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          🎉 Thank You for Your Order!
        </h1>
        <p className="text-gray-700">
          Your order has been successfully placed. Below are your order details:
        </p>

        <div className="mt-4 text-left">
          {orderId && (
            <p className="text-lg">
              <strong>Order ID:</strong> {orderId}
            </p>
          )}
          {amount && (
            <p className="text-lg">
              <strong>Amount Paid:</strong> {amount} {currency}
            </p>
          )}
          {customerEmail && (
            <p className="text-lg">
              <strong>Email:</strong> {customerEmail}
            </p>
          )}
        </div>

        <a
          href="/"
          className="mt-6 inline-block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Continue Shopping
        </a>
      </div>
    </div>
  );
};

export default SuccessPage;
