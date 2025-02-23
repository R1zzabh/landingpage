import React from "react";
import heroImage from "../assets/hero.png"; // Ensure the image path is correct

const HeroSection = () => {
  return (
    <section className="relative pt-40 pb-32 px-8 lg:px-16 -mb-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16">
        <div className="max-w-2xl">
          <span className="text-blue-600 font-medium text-lg lg:text-xl">FLY ON TOP</span>
          <h2 className="text-6xl lg:text-7xl font-bold mt-6 mb-8">
            Get on top of the web industry with Baza
            <span className="text-blue-600">.</span>
          </h2>
          <p className="text-gray-600 mb-10 text-lg lg:text-xl">
            Our web development agency will help you create an incredible website 
            in no time and take your business to the next level. From layout to 
            SEO. Perfection in everything.
          </p>
          <button class="mt-8 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-500 transform hover:-translate-y-2">Get started</button>
        </div>
        <div className="relative mt-10 lg:mt-0 flex-shrink-0">
          <div className="animate-float">
            <img 
              src={heroImage} 
              alt="Hero illustration" 
              className="w-96 lg:w-[500px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
