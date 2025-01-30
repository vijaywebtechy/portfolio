import React from "react";
import styles from "./heroSection.module.scss";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  MousePointerClick,
  Slash,
} from "lucide-react";
import Image from "next/image";
import HeroRightBlock from "./herorightblock";

const HeroSection = ({ onContactSheet }) => {
  return (
    <div
      className={`header-section relative ${styles.heroSection} flex items-center dark:bg-slate-950 bg-hero-light-img dark:bg-hero-dark-img`}
    >
      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-9">
          <span className="font-montserrat text-2xl font-semibold text-violet-600 mb-6 flex items-center -ml-[6px]">
            <ChevronLeft
              strokeWidth={1.75}
              size={30}
              className="text-[#FF6347]"
            />{" "}
            Hi 👋, Welcome to my site.
            <Slash strokeWidth={1.75} className="text-[#FF6347]" />
            <ChevronRight
              strokeWidth={1.75}
              size={30}
              className="text-[#FF6347]"
            />
          </span>
          <h1 className="font-inter text-5xl md:text-6xl font-black leading-tight mb-8 tracking-tighter text-[#1b273b] dark:text-gray-200">
            I'm <span className="myname">Vijaya Bhaskar,</span> a
            <br />
            Creative Web Developer.
          </h1>
          <p className="font-montserrat text-lg leading-relaxed text-gray-800 dark:text-gray-200 font-normal">
            I design and develop modern, responsive websites tailored to your
            needs. My focus is on creating visually appealing and user-friendly
            experiences that work seamlessly across devices. Let's build
            something exceptional together.
          </p>
          <div className="flex items-center gap-5 mt-16 flex-wrap">
            <button
              onClick={onContactSheet}
              className={`flex items-center justify-center gap-x-3 font-montserrat py-2.5 px-4 border-2 border-violet-800 text-lg leading-normal 
              rounded-md font-medium text-violet-600 
              group transition-all duration-300 
              shadow-[0_4px_20px_rgba(138,43,226,0.5),_0_4px_20px_rgba(255,99,71,0.5)]`}
            >
              Let's work{" "}
              <MousePointerClick
                className="text-[#FF6347]"
                strokeWidth={1.75}
                size={30}
              />
            </button>
            <Link
              href="/resume"
              className="h-[54px] min-w-40 flex items-center justify-center font-montserrat py-2.5 px-5 text-lg border-2 border-gray-400 leading-normal rounded-md font-medium text-gray-600 dark:text-gray-200 transition-all duration-300"
            >
              Resume
            </Link>
          </div>
        </div>
        <div className={`md:col-span-3`}>
          <HeroRightBlock />
          {/* <div className="w-full h-full flex flex-wrap gap-4 justify-evenly items-center">
            <Image className="animate-bounce dark:im" src={unchat} alt="chat" />
            <Image className="animate-bounce" src={uncoffee} alt="coffee" />
            <Image className="animate-bounce" src={unheart} alt="heart" />
            <Image
              className="animate-bounce"
              src={unicecream}
              alt="ice cream"
            />
            <Image className="animate-bounce" src={uncode} alt="code" />
            <Image className="animate-bounce" src={unstar} alt="star" />
            <Image
              className="animate-bounce"
              src={unstickynote}
              alt="sticky notes"
            />
            <Image className="animate-bounce" src={unlove} alt="love" />
            <Image className="animate-bounce" src={unarrow} alt="arrow" />
            <Image
              className="animate-bounce"
              src={unsmiley}
              alt="coding image"
            />
            <Image src={uncoding} alt="coding image" />
            <Image
              className="animate-bounce"
              src={ununerline}
              alt="coding image"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
