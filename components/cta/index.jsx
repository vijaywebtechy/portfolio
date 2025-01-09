import React from "react";
import Link from "next/link";
import { MousePointerClick } from "lucide-react";

const CTA = ({ onContactSheet }) => {
  return (
    <section className="w-full bg-gray-100 py-20 border border-gray-200">
      <div className="w-full max-w-6xl mx-auto text-left p-4">
        <h2 className="font-inter text-6xl font-extrabold leading-tight tracking-tighter text-[#1b273b]">
          Got an Idea? <br />
          Let's Build It Together!
        </h2>
        <p className="font-montserrat text-xl text-gray-600 mt-4 mb-10 leading-relaxed">
          Your vision deserves to shine! Whether it's a bold concept or a simple
          spark, I'm here to help you turn it into something extraordinary.
          Let's connect and bring your idea to life today!
        </p>
        <div className="flex justify-start items-center">
          <button
            onClick={onContactSheet}
            href="#"
            className="flex items-center justify-center gap-x-3 font-montserrat py-2 px-4 border-2 border-gray-400 text-base leading-normal rounded-md font-medium text-gray-600
              hover:text-violet-800 hover:border-violet-800 group transition-all duration-300 group
  hover:shadow-[0_4px_20px_0_rgba(138,43,226,0.5),_0_4px_20px_0_rgba(255,99,71,0.5)]"
          >
            Let's work{" "}
            <MousePointerClick
              className="group-hover:text-[#FF6347]"
              strokeWidth={1.75}
              size={30}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
