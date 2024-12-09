import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

interface ContactDetailProps {
  icon: string;
  title: string;
  content: string[];
}

const ContactDetail = ({ icon, title, content }: ContactDetailProps) => (
  <div className="flex gap-6 items-start">
    <Image src={icon} alt={title} width={24} height={24} />
    <div className="flex flex-col gap-1">
      <h3 className="font-medium text-2xl">{title}</h3>
      {content.map((line, index) => (
        <span key={index} className="text-base text-gray-600">
          {line}
        </span>
      ))}
    </div>
  </div>
);

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: "/location.svg",
      title: "Address",
      content: ["236 5th SE Avenue, New York NY10000, United States"],
    },
    {
      icon: "/phone.svg",
      title: "Phone",
      content: ["Mobile: +(84) 546-6789", "Hotline: +(84) 456-6789"],
    },
    {
      icon: "clock.svg",
      title: "Working Time",
      content: ["Monday-Friday: 9:00 - 22:00", "Saturday-Sunday: 9:00 - 21:00"],
    },
  ];

  return (
    <div className="flex flex-col gap-12">
      {contactDetails.map((detail, index) => (
        <ContactDetail key={index} {...detail} />
      ))}
    </div>
  );
}
