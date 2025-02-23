import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Web Development",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
    icon: "📝",
  },
  {
    title: "UX/UX Design",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
    icon: "🎨",
  },
  {
    title: "SEO",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
    icon: "🔍",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-20 px-6 bg-gray-50 z-10">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"> 
        {services.map((service, index) => (
          <div className="relative -mt-32 lg:-mt-40 flex justify-center"> 
            <ServiceCard key={index} {...service} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;