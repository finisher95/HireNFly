import React from "react";
import {
  FaLaptopCode,
  FaCogs,
  FaRocket,
  FaPlug,
  FaSearch,
  FaShieldAlt,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode className="text-4xl text-blue-600 mb-4" />,
    title: "Responsive Design",
    desc: "Optimized for all screen sizes to ensure seamless user experiences across devices.",
  },
  {
    icon: <FaCogs className="text-4xl text-blue-600 mb-4" />,
    title: "Custom Web Apps",
    desc: "Tailor-made applications that align with your unique business goals and operations.",
  },
  {
    icon: <FaRocket className="text-4xl text-blue-600 mb-4" />,
    title: "Performance Optimization",
    desc: "We fine-tune every aspect for speed, reliability, and lightning-fast load times.",
  },
  {
    icon: <FaPlug className="text-4xl text-blue-600 mb-4" />,
    title: "API Integration",
    desc: "Seamless integration with third-party services to enhance functionality.",
  },
  {
    icon: <FaSearch className="text-4xl text-blue-600 mb-4" />,
    title: "SEO-Friendly Code",
    desc: "Clean, semantic code structure built for visibility and high search engine rankings.",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-blue-600 mb-4" />,
    title: "Security & Scalability",
    desc: "Built to grow with your business while keeping data safe and secure.",
  },
];

const WebDevelopment = () => {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-600 mb-6">
        Web Development
      </h1>
      <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
        Our expert web development team creates responsive, fast, and secure websites tailored to your business needs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((item, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 text-center"
          >
            {item.icon}
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Get a Free Consultation
        </a>
      </div>
    </div>
  );
};

export default WebDevelopment;
