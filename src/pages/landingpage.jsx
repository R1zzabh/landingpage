import React, { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const LandingPage = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const stats = [
    { value: '900K', label: 'Visitors on our site every month' },
    { value: '98%', label: 'Satisfaction rate from our awesome customers' },
    { value: '68%', label: 'Average increase in the conversion rate of our clients this month' }
  ];

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

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Baza</h1>
          <div className="flex items-center gap-6">
            {['Marketing', 'Digital', 'Business Consulting', 'Events', 'Law', 'Sell Online', 'Blog', 'Contact Us'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                {item}
              </a>
            ))}
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Buy Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="max-w-xl">
            <span className="text-blue-600 font-medium">FLY ON TOP</span>
            <h2 className="text-5xl font-bold mt-4 mb-6">
              Get on top of the web industry with Baza<span className="text-blue-600">.</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Our web development agency will help you create an incredible website in no time and take your business to the next level. From layout to SEO. Perfection in everything.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105">
              Get started
            </button>
          </div>
          <div className="relative">
            <div className="animate-float">
              <img src="/api/placeholder/500/500" alt="Hero illustration" className="w-96" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href="#" className="text-blue-600 flex items-center group">
                Learn more 
                <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-20">
            <div className="max-w-xl">
              <span className="text-blue-600 font-medium">WHO WE ARE</span>
              <h2 className="text-4xl font-bold mt-4 mb-6">About our agency</h2>
              <p className="text-gray-600">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
              </p>
              <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105">
                Get started
              </button>
            </div>
            <div className="animate-float-slow">
              <img src="/api/placeholder/400/400" alt="About illustration" className="w-96" />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.value} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;