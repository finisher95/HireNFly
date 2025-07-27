import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const serviceData = [
  {
    title: "Resume Building",
    desc: "We help students and professionals build ATS-friendly resumes tailored to their goals.",
    icon: "📝",
    details: "Learn how to structure your resume for modern hiring systems. Our resume consultants work closely with you to make sure your resume is optimized for the roles you're targeting.",
  },
  {
    title: "Career Counseling",
    desc: "Expert guidance from HR professionals to align your skills with career opportunities.",
    icon: "🎓",
    details: "Through one-on-one sessions and career assessments, we help you make informed decisions about your future. We also offer mentorship from industry experts.",
  },
  {
    title: "Placement Assistance",
    desc: "Get connected with top companies and real-time job updates through our platform.",
    icon: "💼",
    details: "Our dedicated placement team ensures you never miss a job opportunity. From interview scheduling to follow-ups, we handle it all.",
  },
];

const Services = () => {
  const [selected, setSelected] = useState(null);

  const toggleService = (index) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <div className="py-16 px-4 md:px-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
        Our Services
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {serviceData.map((service, index) => (
          <div
            key={index}
            onClick={() => toggleService(index)}
            className="cursor-pointer bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{service.desc}</p>

            <AnimatePresence>
              {selected === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="mt-4 text-sm text-gray-700 dark:text-gray-200 border-t pt-4">
                    {service.details}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
