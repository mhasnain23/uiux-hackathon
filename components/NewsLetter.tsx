import React from "react";
import { InstagramSection } from "./InstagramSection";

const Newsletter = () => {
  return (
    <div className="bg-gray-100 py-14 mt-20">
      <div className="max-w-7xl h-auto flex items-center justify-center mx-auto px-4">
        <div className="text-center">
          <h3 className="text-[50px] font-bold mb-4">
            Or Subscribe To The Newsletter
          </h3>
          <div className="max-w-md mx-auto">
            <form>
              <div className="flex gap-8">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-3 border-b bg-transparent border-gray-700 focus:border-none transition-all duration-300 placeholder-gray-400"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-transparent border-b border-gray-700 text-black hover:bg-transparent transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <InstagramSection />
    </div>
  );
};
export default Newsletter;
