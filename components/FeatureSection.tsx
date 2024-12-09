import React from "react";
import { Trophy, Shield, HeadphonesIcon } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => (
  <div className="flex md:flex-row flex-col items-center justify-center gap-5">
    <div className="mb-4 text-gray-600">{icon}</div>
    <div className="flex flex-col md:items-start items-center justify-center">
      <h3 className="text-[20px] font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-[#898989] text-[18px]">{description}</p>
    </div>
  </div>
);

export function FeatureSection() {
  const features = [
    {
      icon: <Trophy size={32} />,
      title: "High Quality",
      description: "Crafted from top materials",
    },
    {
      icon: <Shield size={32} />,
      title: "Warranty Protection",
      description: "Over 2 years",
    },
    {
      icon: <HeadphonesIcon size={32} />,
      title: "24 / 7 Support",
      description: "Dedicated support",
    },
  ];

  return (
    <div className="w-full py-12 mt-16">
      <div className="max-w-7xl mx-auto bg-[#f4f4f4] py-14 md:px-8 px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}
