import React from "react";
import { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import { Award, LaptopMinimalCheck, Layers } from "lucide-react";

const QuoteScroll = () => {
  const slides = [
    {
      text: "Designed with precision, developed with passion.",
      icon: <Award size={24} className="dark:text-[#ff6347]" />,
    },
    {
      text: "From wireframes to wonders—building experiences that matter.",
      icon: <LaptopMinimalCheck size={24} className="dark:text-[#ff6347]" />,
    },
    {
      text: "User-first design, every step of the way.",
      icon: <Layers size={24} className="dark:text-[#ff6347]" />,
    },
  ];

  return (
    <section className="quote-scroll-section h-24 md:h-20 flex items-center justify-center bg-transparent px-4">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop={true}
        direction="vertical"
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        className="h-full w-full flex items-center"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="h-full flex items-center">
            <div className="text-center text-base md:text-lg font-montserrat font-medium text-gray-800 dark:text-violet-600 italic h-full flex items-center justify-center">
              {slide.text} <span className="ml-2">{slide?.icon}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default QuoteScroll;
