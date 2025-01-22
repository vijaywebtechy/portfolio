import { CircleX } from "lucide-react";
import React from "react";

const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <>
      <div
        className={`w-full h-full fixed bottom-0 border border-gray-400 bg-slate-50 dark:bg-slate-950 menu-sec-container mx-auto flex flex-col items-center justify-evenly transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex-auto justify-center space-y-10 font-montserrat text-lg text-gray-600 dark:text-white font-normal tracking-normal leading-normal flex flex-col">
          <button className="py-2.5 px-8 lock border border-gray-400 rounded">
            Home
          </button>
          <button className="py-2.5 px-8 lock border border-gray-400 rounded">
            About
          </button>
          <button className="py-2.5 px-8 lock border border-gray-400 rounded">
            Portfolio
          </button>
          <button className="py-2.5 px-8 lock border border-gray-400 rounded">
            Resume
          </button>
        </div>
        <button className="flex-1" onClick={() => setIsMobileMenuOpen(false)}>
          <CircleX size={52} strokeWidth={1} className="text-violet-400" />
        </button>
      </div>
    </>
  );
};

export default MobileMenu;
