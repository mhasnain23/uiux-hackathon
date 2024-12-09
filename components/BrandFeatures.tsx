import React from "react";
import { Heart, Zap, Shield, Target } from "lucide-react";

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => (
  <div className="flex flex-col items-start p-6 bg-[#f9f9f9] rounded-lg shadow-sm">
    <img src={icon} alt={title} className="mb-4 text-[#007580]" />
    <h3 className="text-lg font-medium text-[#007580] mb-2">{title}</h3>
    <p className="text-[#007580] text-sm">{description}</p>
  </div>
);

export function BrandFeatures() {
  const features = [
    {
      icon: "/delivery.svg",
      title: "Next Day Delivery",
      description:
        "Order today, receive tomorrow with our expedited shipping service",
    },
    {
      icon: "/checkmark.svg",
      title: "Made by True Artisans",
      description:
        "Handcrafted by skilled artisans with attention to every detail",
    },
    {
      icon: "/purchase.svg",
      title: "Unbeatable Prices",
      description:
        "Quality furniture at competitive prices, guaranteed satisfaction",
    },
    {
      icon: "/grow.png",
      title: "Recycled Packaging",
      description: "Eco-friendly packaging to minimize environmental impact",
    },
  ];

  return (
    <div className="py-20">
      <h2 className="text-3xl font-semibold text-center mb-12">
        What Makes Our Brand Different
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </div>
  );
}
