import React from 'react';
import StatsCard from './StatsCard';

const stats = [
  { 
    value: '900K', 
    label: 'Visitors on our site every month' 
  },
  { 
    value: '98%', 
    label: 'Satisfaction rate from our awesome customers' 
  },
  { 
    value: '68%', 
    label: 'Average increase in the conversion rate of our clients this month' 
  }
];

const AboutSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-20">
          <div className="max-w-xl">
            <span className="text-blue-600 font-medium">WHO WE ARE</span>
            <h2 className="text-4xl font-bold mt-4 mb-6">About our agency</h2>
            <p className="text-gray-600">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui 
              blanditiis praesentium voluptatum deleniti atque corrupti quos 
              dolores et quas molestias excepturi sint occaecati cupiditate 
              non provident.
            </p>
            <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-full 
              hover:bg-blue-700 transition-all duration-500 transform hover:-translate-y-2">
              Get started
            </button>
          </div>
          <div className="animate-float-slow mt-10 lg:mt-0">
            <img 
              src="/api/placeholder/400/400" 
              alt="About illustration" 
              className="w-96 object-contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <StatsCard key={stat.value} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
