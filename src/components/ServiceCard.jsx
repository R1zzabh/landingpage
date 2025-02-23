import React from 'react';
import { ChevronRight } from 'lucide-react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className="text-blue-600 flex items-center group">
        Learn more 
        <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
      </a>
    </div>
  );
};

export default ServiceCard;