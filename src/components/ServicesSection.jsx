import React from 'react';
import { ChevronRight } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Web Development',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
    icon: '📝'
  },
  {
    title: 'UX/UX Design',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
    icon: '🎨'
  },
  {
    title: 'SEO',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
    icon: '🔍'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

