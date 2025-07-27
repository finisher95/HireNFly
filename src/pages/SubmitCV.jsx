import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaBriefcase, FaUpload } from 'react-icons/fa';

const SubmitCV = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 px-4 py-12">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg w-full max-w-2xl">
        {!submitted ? (
          <>
            <h1 className="text-4xl font-extrabold text-center text-green-700 dark:text-green-300 mb-8">
              Launch Your Career 🚀
            </h1>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
              Submit your CV and get discovered by top companies hiring right now.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <FaUser className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <div className="relative">
                <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <div className="relative">
                <FaBriefcase className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Job Interest"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <div className="relative">
                <FaUpload className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="file"
                  className="w-full pl-10 pr-4 py-2 border border-dashed dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-white file:cursor-pointer"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md transition"
              >
                Submit CV
              </button>
            </form>
          </>
        ) : (
          <div className="text-center text-green-600 dark:text-green-400">
            <h2 className="text-3xl font-bold mb-2">CV Submitted ✅</h2>
            <p className="text-lg">Thanks for sharing your CV! Our team will be in touch with opportunities soon.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubmitCV;
