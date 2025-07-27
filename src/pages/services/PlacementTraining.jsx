import React from "react";
import { FaFileAlt, FaBrain, FaComments, FaUsers, FaChalkboardTeacher } from "react-icons/fa";

const trainingFeatures = [
  {
    icon: <FaFileAlt className="text-green-600 text-3xl" />,
    title: "Resume Building",
    desc: "Craft industry-ready resumes tailored to your dream job.",
  },
  {
    icon: <FaBrain className="text-green-600 text-3xl" />,
    title: "Aptitude & Reasoning",
    desc: "Sharpen your problem-solving and logical thinking skills.",
  },
  {
    icon: <FaComments className="text-green-600 text-3xl" />,
    title: "Mock Interviews",
    desc: "Practice real-world interview scenarios with expert feedback.",
  },
  {
    icon: <FaUsers className="text-green-600 text-3xl" />,
    title: "Group Discussions",
    desc: "Master communication and leadership in group tasks.",
  },
  {
    icon: <FaChalkboardTeacher className="text-green-600 text-3xl" />,
    title: "Career Mentorship",
    desc: "Get one-on-one career guidance from industry professionals.",
  },
];

const PlacementTraining = () => {
  return (
    <div className="py-20 px-6 max-w-6xl mx-auto text-center">
      <h1 className="text-4xl font-extrabold mb-4 text-green-600 animate-fade-in-up">
        Placement Training
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
        Prepare to launch your career with our expert-designed training programs tailored to enhance your employability.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {trainingFeatures.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-left flex flex-col items-start space-y-4"
          >
            <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacementTraining;
