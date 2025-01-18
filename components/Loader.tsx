import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin w-16 h-16 border-2 border-blue-600 rounded-full md:w-20 md:h-20 md:border-4"></div>
    </div>
  );
};

export default Loader;
