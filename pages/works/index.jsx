import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Link, Slash } from "lucide-react";
import Image from "next/image";

// Images
import ideeoWeb from "@/public/images/works/ideeo-web.png";
import azureanWeb from "@/public/images/works/azurean-web.png";
import processweaverWeb from "@/public/images/works/processweaver-web.png";
import linarcWeb from "@/public/images/works/linarc-web.png";
import skillpayWeb from "@/public/images/works/skillpay-web.png";
import epistemoWeb from "@/public/images/works/epistemo-web.png";
import vijayPortfolio from "@/public/images/works/vijay-portfolio.png";
import cloud23Web from "@/public/images/works/cloud23-web.png";
import loyolaWeb from "@/public/images/works/loyola-academy-web.png";

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
  {
    imageUrl: vijayPortfolio,
    imageAlt: "Project Screenshot",
    projectName: "VIUI Portfolio",
    technologies: ["HTML", "CSS3", "JavaScript", "Tailwind", "Next.js"],
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit...",
    projectLink: "https://example.com",
  },
  {
    imageUrl: cloud23Web,
    imageAlt: "Project Screenshot",
    projectName: "Cloud23",
    technologies: ["HTML", "CSS3", "JavaScript", "Tailwind", "Next.js"],
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit...",
    projectLink: "https://example.com",
  },
  {
    imageUrl: loyolaWeb,
    imageAlt: "Project Screenshot",
    projectName: "Loyola Academy",
    technologies: ["HTML", "CSS3", "JavaScript", "Wordpress"],
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit...",
    projectLink: "https://example.com",
  },
];

const Works = () => {
  return (
    <section
      id="portfolio"
      className={`works-section pt-12 pb-10 bg-white dark:bg-slate-950`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="font-montserrat text-2xl font-semibold text-violet-600 mb-5 flex items-center -ml-[6px]">
          <ChevronLeft
            strokeWidth={1.75}
            size={30}
            className="text-[#FF6347]"
          />{" "}
          Works
          <Slash strokeWidth={1.75} className="text-[#FF6347]" />
          <ChevronRight
            strokeWidth={1.75}
            size={30}
            className="text-[#FF6347]"
          />
        </h3>
        <h2 className="font-inter text-5xl md:text-6xl font-extrabold leading-tight tracking-tighter text-[#1b273b] dark:text-gray-100">
          Checkout my work.
        </h2>
      </div>

      {/* -------------------- Swiper Slider -------------------- */}
      <div className="w-full max-w-6xl mx-auto mt-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectData.map((project) => {
          return <WorksCard {...project} />;
        })}
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
      className="flex flex-col h-full w-full p-4 border-2 border-gray-200 dark:border-gray-600 rounded-lg mb-12 transition duration-300 hover:-translate-y-2 
      hover:text-violet-600 dark:hover:text-violet-600 hover:border-violet-800 dark:hover:border-violet-800 
        hover:shadow-[0_4px_20px_rgba(138,43,226,0.5),_0_4px_20px_rgba(255,99,71,0.5)]
      "
      style={{ minHeight: "300px" }}
    >
      <div className="h-auto w-full border border-gray-200 rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1 mt-4 mb-2 flex flex-col">
        <h4 className="font-montserrat text-2xl font-bold leading-relaxed text-black dark:text-gray-200 mb-2">
          {projectName}
        </h4>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="py-1 px-4 border border-gray-200 dark:border-gray-600 text-sm font-normal text-gray-800 dark:text-gray-100 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="font-montserrat text-base leading-relaxed text-gray-600 dark:text-gray-100 line-clamp-4">
          {description}
        </p>
      </div>
      <div className="mt-auto flex justify-end">
        {projectLink && (
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/30 dark:bg-slate-200 transition-colors"
          >
            <Link size={20} />
          </a>
        )}
      </div>
    </div>
  );
};
