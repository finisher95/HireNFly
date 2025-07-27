import React from 'react';

const AboutUs = () => {
  return (
    <div className="text-center p-10 space-y-10 bg-gray-50">
      <section>
        <h1 className="text-4xl font-bold">Our Mission</h1>
        <p className="mt-2 text-gray-700">To connect talent with opportunity through innovative recruitment solutions.</p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold">Meet the Team</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {["Alice", "Bob", "Charlie"].map((name, i) => (
            <div key={i} className="bg-white shadow-md p-4 rounded-lg w-48">
              <img src={`https://i.pravatar.cc/150?img=${i+10}`} alt={name} className="rounded-full w-24 h-24 mx-auto" />
              <h3 className="mt-2 font-semibold">{name}</h3>
              <p className="text-sm text-gray-500">Recruiter</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold">Testimonials</h2>
        <blockquote className="italic text-gray-600 mt-4 max-w-xl mx-auto">
          "HireNFly helped me land my dream job in just two weeks!" – A Happy Candidate
        </blockquote>
      </section>
    </div>
  );
};

export default AboutUs;
