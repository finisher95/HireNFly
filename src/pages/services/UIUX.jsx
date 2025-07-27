import React from "react";

const UIUX = () => {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-purple-600 mb-6">
        UI/UX Design
      </h1>
      <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
        We craft delightful and intuitive digital experiences that elevate user engagement and brand perception.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          {
            title: "User Research & Wireframing",
            desc: "Dive deep into user behavior to define smooth, structured design paths.",
          },
          {
            title: "Prototyping & Mockups",
            desc: "Build dynamic visuals and iterate quickly for client validation.",
          },
          {
            title: "Design Systems & Components",
            desc: "Maintain consistency across designs with reusable UI patterns.",
          },
          {
            title: "Usability Testing",
            desc: "Test real interactions to uncover friction points and polish user flows.",
          },
          {
            title: "Mobile-First Design",
            desc: "Ensure optimal user experiences across all screen sizes, starting with mobile.",
          },
          {
            title: "Collaborative Design",
            desc: "Work closely with product teams to bridge design with business needs.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="text-purple-500 font-bold text-lg mb-2">
              {item.title}
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
        >
          Request UI/UX Services
        </a>
      </div>
    </div>
  );
};

export default UIUX;
