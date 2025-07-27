import React, { useState } from 'react';
import { FaUserGraduate, FaBook, FaUniversity, FaLightbulb } from 'react-icons/fa';

const StudentForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4 py-12">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-xl w-full max-w-2xl">
        {!submitted ? (
          <>
            <h1 className="text-4xl font-extrabold text-center text-purple-700 dark:text-purple-300 mb-8">
              Join the Talent Network
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <FaUserGraduate className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                  required
                />
              </div>
              <div className="relative">
                <FaBook className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Course"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                  required
                />
              </div>
              <div className="relative">
                <FaUniversity className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="University"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                  required
                />
              </div>
              <div className="relative">
                <FaLightbulb className="absolute top-3 left-3 text-gray-400" />
                <textarea
                  placeholder="Skills / Interests"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                  rows="4"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md transition"
              >
                Register Now
              </button>
            </form>
          </>
        ) : (
          <div className="text-center text-green-600 dark:text-green-400">
            <h2 className="text-3xl font-bold mb-2">You're In! 🎉</h2>
            <p className="text-lg">Thanks for registering with HireNFly. We'll be in touch soon!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentForm;
