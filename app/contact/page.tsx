import { ContactForm } from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import { FeatureSection } from "@/components/FeatureSection";
import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-semibold mb-4">Get In Touch With Us</h1>
          <p className="text-gray-600">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
      {/* Features Section */}
      <FeatureSection />
    </div>
  );
};

export default AboutPage;
