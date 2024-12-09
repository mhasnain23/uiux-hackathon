"use client";

import { useState } from "react";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("eng");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
    // console.log("Selected Language:", e.target.value);
  };

  return (
    <div className="bg-transparent mx-auto">
      {/* <label className="block text-sm font-medium text-gray-700 mb-2">
        Select Language:
      </label> */}
      <select
        value={selectedLanguage}
        onChange={handleChange}
        className="block w-full px-4 py-1.5 text-white/80 bg-[#272343] backdrop-blur-md border border-white/20 rounded-lg shadow-md focus:ring focus:ring-blue-300 focus:outline-none"
      >
        <option value="eng" className="text-white bg-gray-600">
          Eng
        </option>
        <option value="fre" className="text-white bg-gray-600">
          Fren
        </option>
        <option value="espo" className="text-white bg-gray-600">
          Spani
        </option>
      </select>
    </div>
  );
};

export default LanguageSelector;
