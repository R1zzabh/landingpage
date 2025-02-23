import React from "react";
import heroBg from "../assets/hero-bg.jpg"; 
import heroImage from "../assets/hero.png"; 

const HeroSection = () => {
  return (
    <section 
      className="relative pt-52 pb-32 px-8 lg:px-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Blurred Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-lg"></div> 

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16">
        {/* Left Content */}
        <div className="max-w-2xl text-white">
          <span className="font-medium text-lg lg:text-xl text-blue-400">FLY ON TOP</span>
          <h1 className="text-6xl lg:text-7xl font-bold mt-6 mb-8">
            Get on top of the web industry with Baza
            <span className="text-blue-400">.</span>
          </h1>
          <p className="text-gray-200 mb-10 text-lg lg:text-xl">
            Our web development agency will help you create an incredible website 
            in no time and take your business to the next level. From layout to 
            SEO. Perfection in everything.
          </p>

          {/* Button with Glowing Shadow */}
          <div className="relative inline-block mt-8">
            <button className="relative z-10 bg-blue-600 text-white font-bold px-8 py-3 rounded-lg transition-transform duration-300 transform hover:-translate-y-2">
              Get started
            </button>
            {/* Glowing effect wrapped around the button */}
            <div className="absolute inset-0 rounded-lg blur-lg animate-glow bg-blue-500 opacity-75"></div>
          </div>
        </div>

        {/* Right Image with Transparency */}
        <div className="relative mt-10 lg:mt-0 flex-shrink-0">
          <div className="animate-float">
            <img 
              src={heroImage} 
              alt="Hero illustration" 
              className="w-96 lg:w-[500px] object-contain mix-blend-multiply opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
