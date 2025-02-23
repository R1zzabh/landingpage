import React, { useState, useEffect, useRef } from 'react';

const StatsCard = ({ value, label }) => {
  const [count, setCount] = useState(0);
  const [formattedValue, setFormattedValue] = useState(value);
  const cardRef = useRef(null); // Reference to track visibility

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let start = 0;
            const end = parseFloat(value.replace(/[^\d.]/g, ""));
            if (isNaN(end)) return;

            const duration = 1500; // Animation duration in ms
            const stepTime = Math.abs(Math.floor(duration / end));

            const timer = setInterval(() => {
              start += 1;
              if (start >= end) {
                clearInterval(timer);
                start = end;
              }

              if (value.includes("K")) {
                setFormattedValue(`${start}K`);
              } else if (value.includes("%")) {
                setFormattedValue(`${start}%`);
              } else {
                setFormattedValue(start.toLocaleString());
              }
            }, stepTime);
          }
        });
      },
      { threshold: 0.5 } // Triggers when at least 50% of the card is visible
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, [value]); // Re-run when value changes

  return (
    <div
      ref={cardRef}
      className="text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="text-4xl font-bold mb-2">{formattedValue}</div>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default StatsCard;
