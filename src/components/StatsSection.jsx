// src/components/StatsSection.jsx
import React from "react";
import CountUp from "react-countup";

const stats = [
  { label: "Candidates Placed", value: 1200 },
  { label: "Companies Onboarded", value: 300 },
  { label: "Workshops Conducted", value: 150 },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-blue-50 dark:bg-blue-900 p-6 rounded-xl shadow hover:scale-105 transition"
            >
              <h3 className="text-5xl font-bold text-blue-600 dark:text-blue-300 mb-2">
                <CountUp end={stat.value} duration={2} />
              </h3>
              <p className="text-gray-700 dark:text-gray-200 text-lg font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
