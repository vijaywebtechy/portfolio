import React, { useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CircleChevronLeft,
  CircleChevronRight,
  Slash,
} from "lucide-react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/swiper-bundle.css";

const testimonialData = [
  {
    clName: "CLANEME",
    clRole: "Developer",
    description:
      "Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    clName: "CLANEME2",
    clRole: "Developer",
    description:
      "Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    clName: "CLANEME3",
    clRole: "Developer",
    description:
      "Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    clName: "CLANEME4",
    clRole: "Developer",
    description:
      "Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
];

const Testimonials = () => {
  const swiperRef = useRef(null);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const handleSwiperEvents = (swiper) => {
    setIsPrevDisabled(swiper.isBeginning);
    setIsNextDisabled(swiper.isEnd);
  };
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex md:flex-row md:gap-x-4 flex-col">
          <div className="w-full md:w-5/12 flex flex-col justify-between">
            <div>
              <h3 className="font-montserrat text-2xl font-semibold  text-violet-600 mb-5 flex items-center -ml-[6px]">
                <ChevronLeft
                  strokeWidth={1.75}
                  size={30}
                  className="text-[#FF6347]"
                />{" "}
                Testimonials
                <Slash strokeWidth={1.75} className="text-[#FF6347]" />
                <ChevronRight
                  strokeWidth={1.75}
                  size={30}
                  className="text-[#FF6347]"
                />
              </h3>
              <h2 className="font-inter text-6xl font-extrabold leading-tight tracking-tighter text-[#1b273b] dark:text-gray-200">
                Words of Praise
              </h2>
              <p className="font-montserrat text-xl text-gray-600 dark:text-gray-200 mt-4 mb-8 leading-relaxed">
                Explore the stories behind the successful projects I've had the
                privilege to work on.
              </p>
            </div>
            {/* Custom Navigation In WEB */}
            <div className="space-x-2 justify-start items-center hidden md:flex">
              <button
                className={`bg-transparent text-gray-600 dark:text-gray-200 rounded-full transition-all duration-300 group
  hover:shadow-[0_4px_20px_0_rgba(138,43,226,0.5),_0_4px_20px_0_rgba(255,99,71,0.5)]  ${
    isPrevDisabled ? "opacity-40 cursor-not-allowed" : "hover:text-violet-600"
  }`}
                onClick={() => swiperRef.current?.slidePrev()}
                disabled={isPrevDisabled}
              >
                <CircleChevronLeft strokeWidth={1} size={50} />
              </button>
              <button
                className={`bg-transparent text-gray-600 dark:text-gray-200 rounded-full transition-all duration-300 group
  hover:shadow-[0_4px_20px_0_rgba(138,43,226,0.5),_0_4px_20px_0_rgba(255,99,71,0.5)]  ${
    isNextDisabled ? "opacity-40 cursor-not-allowed" : "hover:text-violet-600"
  }`}
                onClick={() => swiperRef.current?.slideNext()}
                disabled={isNextDisabled}
              >
                <CircleChevronRight strokeWidth={1} size={50} />
              </button>
            </div>
          </div>
          <div className="w-full md:w-7/12">
            <Swiper
              slidesPerView={1.5}
              modules={[Navigation]}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                handleSwiperEvents(swiper); // Initialize button state on mount
              }}
              onSlideChange={(swiper) => handleSwiperEvents(swiper)}
              breakpoints={{
                640: {
                  slidesPerView: 1.5, // Show 1 slide on mobile screens (width < 640px)
                },
                768: {
                  slidesPerView: 1.5, // Show 2 slides on tablets (width >= 640px and < 1024px)
                },
                1024: {
                  slidesPerView: 1.5, // Show 2 slides on web (width >= 1024px)
                },
              }}
              loop={false}
              spaceBetween={24}
              className="testimonialSwiper"
            >
              {testimonialData.map((testimonial, index) => (
                <SwiperSlide
                  key={index}
                  className="h-full flex items-stretch justify-center"
                >
                  <TestimonialCard {...testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom Navigation */}
            <div className="space-x-2 justify-start items-center flex md:hidden mt-10">
              <button
                className={`bg-transparent text-violet-600 ${
                  isPrevDisabled
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:text-gray-600"
                }`}
                onClick={() => swiperRef.current?.slidePrev()}
                disabled={isPrevDisabled}
              >
                <CircleChevronLeft strokeWidth={1} size={50} />
              </button>
              <button
                className={`bg-transparent text-violet-600 ${
                  isNextDisabled
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:text-gray-600"
                }`}
                onClick={() => swiperRef.current?.slideNext()}
                disabled={isNextDisabled}
              >
                <CircleChevronRight strokeWidth={1} size={50} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

const TestimonialCard = ({ clName, clRole, description }) => {
  return (
    <div className="shadow-md border border-gray-200 py-6 px-6 h-full rounded-md flex items-end">
      <div>
        <p className="font-montserrat text-balance text-base leading-relaxed font-normal text-gray-600 dark:text-gray-200">
          {description}
        </p>
        <h5 className="mt-5 font-montserrat text-lg font-bold text-gray-600 dark:text-gray-200 leading-normal">
          {clName}
        </h5>
        <span className="font-montserrat text-sm font-medium text-gray-600 dark:text-gray-200 leading-normal italic">
          -{clRole}
        </span>
      </div>
    </div>
  );
};
