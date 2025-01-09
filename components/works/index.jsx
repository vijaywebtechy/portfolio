import React, { useRef, useState } from "react";
import styles from "./works.module.scss";
import {
  ChevronLeft,
  ChevronRight,
  CircleChevronLeft,
  CircleChevronRight,
  Link,
  Slash,
} from "lucide-react";
import Image from "next/image";

// Images
import ideeoWeb from "@/public/images/works/ideeo-web.png";
import azureanWeb from "@/public/images/works/azurean-web.png";
import processweaverWeb from "@/public/images/works/processweaver-web.png";
import linarcWeb from "@/public/images/works/linarc-web.png";
import skillpayWeb from "@/public/images/works/skillpay-web.png";
import epistemoWeb from "@/public/images/works/epistemo-web.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/swiper-bundle.css";

const projectData = [
  {
    imageUrl: ideeoWeb,
    imageAlt: "Project Screenshot",
    projectName: "IDEEO",
    technologies: ["HTML", "CSS3", "JavaScript", "Bootstrap"],
    description:
      "Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    projectLink: "https://example.com",
  },
  {
    imageUrl: azureanWeb,
    imageAlt: "Project Screenshot",
    projectName: "Azurean",
    technologies: ["HTML", "CSS3", "JavaScript", "Bootstrap"],
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit...",
    projectLink: "https://example.com",
  },
  {
    imageUrl: processweaverWeb,
    imageAlt: "Project Screenshot",
    projectName: "Processweaver",
    technologies: ["HTML", "CSS3", "JavaScript", "Bootstrap"],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    projectLink: "https://example.com",
  },
  {
    imageUrl: linarcWeb,
    imageAlt: "Project Screenshot",
    projectName: "Linarc",
    technologies: ["HTML", "CSS3", "JavaScript", "Bootstrap"],
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit...",
    projectLink: "https://example.com",
  },
  {
    imageUrl: skillpayWeb,
    imageAlt: "Project Screenshot",
    projectName: "Skillpay",
    technologies: ["HTML", "CSS3", "JavaScript", "Bootstrap"],
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit...",
    projectLink: "https://example.com",
  },
  {
    imageUrl: epistemoWeb,
    imageAlt: "Project Screenshot",
    projectName: "Epistemo",
    technologies: ["HTML", "CSS3", "JavaScript", "Bootstrap"],
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit...",
    projectLink: "https://example.com",
  },
];

const Works = () => {
  const swiperRef = useRef(null);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const handleSwiperEvents = (swiper) => {
    setIsPrevDisabled(swiper.isBeginning);
    setIsNextDisabled(swiper.isEnd);
  };

  return (
    <section id="portfolio" className={`py-20 bg-white ${styles.works}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="font-montserrat text-2xl font-semibold text-violet-600 mb-5 flex items-center -ml-[6px]">
          <ChevronLeft
            strokeWidth={1.75}
            size={30}
            className="text-[#FF6347]"
          />{" "}
          Portfolio
          <Slash strokeWidth={1.75} className="text-[#FF6347]" />
          <ChevronRight
            strokeWidth={1.75}
            size={30}
            className="text-[#FF6347]"
          />
        </h3>
        <h2 className="font-inter text-6xl font-extrabold leading-tight tracking-tighter text-[#1b273b]">
          Checkout my work.
        </h2>
      </div>

      {/* -------------------- Swiper Slider -------------------- */}
      <div className="w-full max-w-6xl mx-auto mt-10 px-4">
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            handleSwiperEvents(swiper); // Initialize button state on mount
          }}
          onSlideChange={(swiper) => handleSwiperEvents(swiper)}
          slidesPerView={1.5}
          breakpoints={{
            640: {
              slidesPerView: 1, // Show 1 slide on mobile screens (width < 640px)
            },
            768: {
              slidesPerView: 2.5, // Show 2 slides on tablets (width >= 640px and < 1024px)
            },
            1024: {
              slidesPerView: 2.5, // Show 2 slides on web (width >= 1024px)
            },
          }}
          loop={false}
          spaceBetween={24}
          className="portfolioSwiper h-[542px]"
        >
          {projectData.map((project, index) => (
            <SwiperSlide
              key={index}
              className="h-full flex items-stretch justify-center"
            >
              <WorksCard {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Navigation */}
        <div className="custom-navigation space-x-2 mt-6 flex justify-end items-center">
          <button
            className={`bg-transparent text-gray-600 rounded-full transition-all duration-300 group
  hover:shadow-[0_4px_20px_0_rgba(138,43,226,0.5),_0_4px_20px_0_rgba(255,99,71,0.5)] ${
    isPrevDisabled ? "opacity-40 cursor-not-allowed" : "hover:text-violet-600"
  }`}
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isPrevDisabled}
          >
            <CircleChevronLeft strokeWidth={1} size={46} />
          </button>
          <button
            className={`bg-transparent text-gray-600 rounded-full transition-all duration-300 group
  hover:shadow-[0_4px_20px_0_rgba(138,43,226,0.5),_0_4px_20px_0_rgba(255,99,71,0.5)] ${
    isNextDisabled ? "opacity-40 cursor-not-allowed" : "hover:text-violet-600"
  }`}
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isNextDisabled}
          >
            <CircleChevronRight strokeWidth={1} size={46} />
          </button>
        </div>
      </div>
      {/* -------------------- ./Swiper Slider -------------------- */}
    </section>
  );
};

export default Works;

const WorksCard = ({
  imageUrl,
  imageAlt,
  projectName,
  technologies = [],
  description,
  projectLink,
}) => {
  return (
    <div
      className="flex flex-col h-full w-full p-4 border-2 border-gray-200 rounded-lg"
      style={{ minHeight: "300px" }}
    >
      <div className="h-64 w-full border border-gray-200 rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1 mt-4 flex flex-col">
        <h4 className="font-montserrat text-2xl font-bold leading-relaxed text-black mb-2">
          {projectName}
        </h4>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="py-1 px-4 border border-gray-200 text-sm font-normal text-gray-800 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="font-montserrat text-base leading-relaxed text-gray-600 line-clamp-4">
          {description}
        </p>
      </div>
      <div className="mt-auto flex justify-end">
        {projectLink && (
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
          >
            <Link size={20} />
          </a>
        )}
      </div>
    </div>
  );
};
