import React from "react";
import Image from "next/image";
import gmailIcon from "@/public/images/icons/gmail-icon.svg";
import linkedIcon from "@/public/images/icons/linkedin-icon.svg";

export const BottomSheetContact = ({ isContactOpen, onClose, title }) => {
  return (
    <>
      {/* Overlay */}
      {isContactOpen && (
        <div
          className="fixed inset-0 bg-black/50 transition-opacity z-40"
          onClick={onClose}
        />
      )}

      {/* Bottom Sheet */}
      <div
        className={` w-full max-w-[400px] fixed bottom-4 right-5 bg-white rounded-t-3xl shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isContactOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Handle/Drag Indicator */}
        <div className="flex justify-center pt-4 pb-2">
          <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
        </div>

        {/* Content */}
        <div className="px-4 pb-8 max-h-[80vh] overflow-y-auto">
          <div className="flex justify-between items-start mb-4">
            <h2 className="font-inter text-5xl leading-tight tracking-tighter font-black pt-8 pb-3">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Sample Content */}
          <div className="space-y-4">
            <p className="font-montserrat text-base text-gray-800 font-medium">
              Got a question or an idea to share? let's connect and make things
              happen.
            </p>
            <div className="py-4 flex flex-col gap-y-6 font-montserrat text-base text-gray-800 leading-normal font-medium">
              <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-4">
                <Image width={32} src={gmailIcon} alt="Gmail" />
                <p className="text-gray-600">vijaywebtechy@gmail.com</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-4">
                <Image width={32} src={linkedIcon} alt="LinkedIn" />
                <p className="text-gray-600">LinkedIn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
