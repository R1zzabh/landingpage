import React from 'react';
import StatsCard from './StatsCard';
import aboutImage from '../assets/about-image.png';

const stats = [
  { value: '900K', label: 'Visitors on our site every month' },
  { value: '98%', label: 'Satisfaction rate from our awesome customers' },
  { value: '68%', label: 'Average increase in the conversion rate of our clients this month' }
];

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-center gap-10 lg:gap-16">
        
        {/* Right Content (Text) */}
        <div className="max-w-xl text-center lg:text-left">
          <span className="text-blue-600 font-medium">WHO WE ARE</span>
          <h2 className="text-4xl font-bold mt-4 mb-6">About our agency</h2>
          <p className="text-gray-600">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
          </p>
          
          {/* Button with Seamless Moving Blue Shadows */}
          <div className="relative inline-block mt-10">
            <button className="relative z-10 bg-blue-600 text-white font-bold px-8 py-3 rounded-lg transition-transform duration-300 transform hover:-translate-y-2">
              Get started
            </button>
            {/* Glow effect directly attached to the button */}
            <div className="absolute inset-0 rounded-lg blur-lg animate-glow bg-blue-500 opacity-75"></div>
          </div>

        </div>

        {/* Left Image - Bigger & Closer */}
        <div className="relative animate-float-slow">
          <img 
            src={aboutImage} 
            alt="About us" 
            className="w-[500px] lg:w-[600px] object-contain rounded-xl"
            style={{ mixBlendMode: 'multiply' }} 
          />
        </div>
        
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stats.map((stat) => (
          <StatsCard key={stat.value} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
