// src/components/FullScreenCarousel.jsx
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function FullScreenCarousel() {
  return (
    <div className="w-screen h-screen">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        interval={4000}
        transitionTime={800}
      >
        <div>
          <img
            src="/carousel/img1.jpg"
            alt="Job Fair"
            className="w-full h-screen object-cover"
          />
          <p className="legend text-lg">HireNFly Job Fairs Across India</p>
        </div>
        <div>
          <img
            src="/carousel/img2.jpg"
            alt="Workshop"
            className="w-full h-screen object-cover"
          />
          <p className="legend text-lg">Skill Development Workshops</p>
        </div>
        <div>
          <img
            src="/carousel/img3.jpg"
            alt="Students Placed"
            className="w-full h-screen object-cover"
          />
          <p className="legend text-lg">Thousands of Students Placed</p>
        </div>
      </Carousel>
    </div>
  );
}

export default FullScreenCarousel;
