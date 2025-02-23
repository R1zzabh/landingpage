import React from 'react';

const StatsCard = ({ value, label }) => {
  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
      <div className="text-4xl font-bold mb-2">{value}</div>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default StatsCard;
