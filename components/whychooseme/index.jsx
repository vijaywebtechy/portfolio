import React from "react";
import Image from "next/image";
import htmlIcon from "@/public/images/icons/html-icon.svg";
import cssIcon from "@/public/images/icons/css-icon.svg";
import jsIcon from "@/public/images/icons/js-icon.svg";
import reactIcon from "@/public/images/icons/react-icon.svg";
import nextIcon from "@/public/images/icons/next-icon.svg";
import bootstrapIcon from "@/public/images/icons/bootstrap-icon.svg";
import tailwindIcon from "@/public/images/icons/tailwind-icon.svg";
import xdIcon from "@/public/images/icons/xd-icon.svg";
import figmaIcon from "@/public/images/icons/figma-icon.svg";
import wordpressIcon from "@/public/images/icons/wordpress-icon.svg";
import materialIcon from "@/public/images/icons/material-ui-icon.png";
import githubIcon from "@/public/images/icons/github-icon.svg";
import sketchIcon from "@/public/images/icons/sketch-icon.svg";
import zeplinIcon from "@/public/images/icons/zeplin-icon.svg";
import { ChevronLeft, ChevronRight, Slash } from "lucide-react";

const skills = [
  { name: "HTML", progress: "100%", icon: htmlIcon },
  { name: "CSS", progress: "90%", icon: cssIcon },
  { name: "JS", progress: "60%", icon: jsIcon },
  { name: "ReactJS", progress: "60%", icon: reactIcon },
  { name: "Next.js", progress: "60%", icon: nextIcon },
  { name: "Bootstrap", progress: "90%", icon: bootstrapIcon },
  { name: "Tailwind", progress: "90%", icon: tailwindIcon },
  { name: "Material UI", progress: "80%", icon: materialIcon },
  { name: "WordPress", progress: "50%", icon: wordpressIcon },
  { name: "GitHub", progress: "60%", icon: githubIcon },
  { name: "XD", icon: xdIcon },
  { name: "Figma", icon: figmaIcon },
  { name: "Sketch", icon: sketchIcon },
  { name: "Zeplin", icon: zeplinIcon },
];

const WhyChooseMe = () => {
  return (
    <section className="w-full py-20 bg-white whychooseme">
      <div className="w-full max-w-6xl mx-auto p-4">
        <div className="w-full flex flex-col md:flex-row gap-x-4">
          <div className="w-full md:w-6/12">
            <h3 className="font-montserrat text-2xl font-semibold text-violet-600 mb-5 flex items-center -ml-[6px]">
              <ChevronLeft
                strokeWidth={1.75}
                size={30}
                className="text-[#FF6347]"
              />{" "}
              Why choose me
              <Slash strokeWidth={1.75} className="text-[#FF6347]" />
              <ChevronRight
                strokeWidth={1.75}
                size={30}
                className="text-[#FF6347]"
              />
            </h3>
            <h2 className="font-inter text-6xl font-extrabold leading-tight tracking-tighter text-[#1b273b]">
              My Extensive <br />
              List of Skills
            </h2>
            <p className="font-montserrat text-xl text-gray-600 mt-4 mb-10 leading-relaxed md:pr-4">
              "From sleek UI designs to seamless web experiences, I bring a
              diverse set of skills to every project, ensuring everything looks
              great and works flawlessly."
            </p>
          </div>
          <div className="w-full md:w-6/12 flex items-center">
            <div className="flex flex-wrap gap-5">
              {skills.map((skill, index) => (
                <div className="text-center" key={index}>
                  <div className="w-20 h-20 flex items-center justify-center">
                    <Image
                      className="shakeRotate"
                      width={75}
                      height={75}
                      src={skill.icon}
                      alt={skill.name}
                    />
                  </div>
                  <span className="font-montserrat text-sm font-medium text-gray-800 leading-normal">
                    <span className="font-semibold">{skill.name}</span> <br />
                    {skill?.progress}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
