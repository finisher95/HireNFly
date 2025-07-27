import React from "react";
import {
  Linkedin,
  Twitter,
  Instagram,
  Youtube
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Newsletter Signup */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            Subscribe to our newsletter
          </h2>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-md text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Company</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/student-form" className="hover:underline">Student Form</a></li>
            <li><a href="/submit-cv" className="hover:underline">Submit CV</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Guides</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-600" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="#" className="hover:text-blue-400" aria-label="Twitter">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-pink-500" aria-label="Instagram">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-red-600" aria-label="YouTube">
              <Youtube size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} HireNFly. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
