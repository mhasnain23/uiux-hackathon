import React from "react";

interface OrderSummaryProps {
  subtotal: number;
  shipping: string;
  total: number;
}

export function OrderSummary({ subtotal, shipping, total }: OrderSummaryProps) {
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
        <button className="w-full bg-[#029fae] text-white py-3 rounded-full hover:bg-[#017e8b] transition-colors">
          Member Checkout
        </button>
      </div>
    </div>
  );
}
