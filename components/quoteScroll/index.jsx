import React from "react";
import { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import {
  Award,
  LaptopMinimalCheck,
  Layers,
  Paintbrush,
  ScanEye,
} from "lucide-react";

const QuoteScroll = () => {
  const slides = [
    {
      text: "Designed with precision, developed with passion.",
      icon: <Award size={24} />,
    },
    {
      text: "Good design is clear; great design is invisible.",
      icon: <ScanEye size={24} />,
    },
    {
      text: "From wireframes to wonders—building experiences that matter.",
      icon: <LaptopMinimalCheck size={24} />,
    },
    {
      text: "User-first design, every step of the way.",
      icon: <Layers size={24} />,
    },
    {
      text: "Pixels are my playground; code is my paintbrush.",
      icon: <Paintbrush size={24} />,
    },
  ];

  return (
    <section className="h-20 flex items-center justify-center bg-white dark:bg-black">
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
            <div className="text-center text-lg font-montserrat font-medium text-gray-800 dark:text-[#ff6347] italic h-full flex items-center justify-center">
              {slide.text} <span className="ml-2">{slide?.icon}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default QuoteScroll;
