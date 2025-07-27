import React from "react";
import Hero from "../components/Hero";
import ParallaxSection from "../components/ParallaxSection";
import StatsSection from "../components/StatsSection";
import FullScreenCarousel from "../components/FullScreenCarousel";

function Home() {
  return (
    <div>
      <Hero />

      <FullScreenCarousel />

      {/* Features */}
      <section className="py-16 bg-white dark:bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose HireNFly?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Smart Matching",
              desc: "We use intelligent algorithms to match the right candidates to the right jobs.",
            },
            {
              title: "Verified Talent",
              desc: "Every resume is pre-screened and validated before it reaches employers.",
            },
            {
              title: "Faster Hiring",
              desc: "Our platform reduces your time-to-hire with smart filtering.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ParallaxSection />

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-10">
          What People Say
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              text: `"HireNFly helped me land my dream job within 2 weeks!"`,
              name: "Priya S.",
              role: "Frontend Developer",
            },
            {
              text: `"As a recruiter, I found the perfect candidate faster than ever."`,
              name: "Ravi K.",
              role: "HR Manager",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow"
            >
              <p className="text-lg italic">{t.text}</p>
              <p className="mt-2 font-semibold text-right">
                – {t.name}, {t.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      <StatsSection />

      {/* Call-to-Action */}
      <section className="py-20 bg-blue-600 text-white text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Find Your Dream Team?
          </h2>
          <p className="mb-6">
            Join thousands of companies hiring smarter with HireNFly.
          </p>
          <a
            href="/submit-cv"
            className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100"
          >
            Submit Your CV
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
