import {
  ChevronLeft,
  ChevronRight,
  CodeXml,
  MonitorSmartphone,
  Palette,
  Slash,
} from "lucide-react";
import React from "react";

const MyServices = () => {
  return (
    <section className="w-full bg-white dark:bg-slate-950 services-section">
      <div className="w-full max-w-6xl mx-auto py-20 px-4 flex flex-col md:flex-row items-center gap-x-5">
        <div className="w-full md:w-5/12">
          <h3 className="font-montserrat text-2xl font-semibold text-violet-600 mb-5 flex items-center -ml-[6px]">
            <ChevronLeft
              strokeWidth={1.75}
              size={30}
              className="text-[#FF6347]"
            />{" "}
            Services
            <Slash strokeWidth={1.75} className="text-[#FF6347]" />
            <ChevronRight
              strokeWidth={1.75}
              size={30}
              className="text-[#FF6347]"
            />
          </h3>
          <h2 className="font-inter text-5xl md:text-6xl font-extrabold leading-tight tracking-tighter text-[#1b273b] dark:text-gray-200">
            What I do best.
          </h2>
          <p className="font-montserrat text-lg md:text-xl text-gray-600 dark:text-gray-200 mt-4 mb-10 leading-relaxed">
            I design and develop responsive, user-friendly websites with a focus on performance and great user experience.
          </p>
        </div>
        <div className="w-full md:w-7/12 flex flex-col md:flex-row items-center gap-x-4">
          <div className="w-full md:w-6/12">
            <div className="w-full min-h-[250px] border-2 border-gray-200 dark:border-gray-600 p-5 rounded-lg shadow-sm bg-white/50 dark:bg-slate-950 my-4">
              <CodeXml
                size={48}
                strokeWidth={1}
                className="mb-4 text-[#FF6347]"
              />
              <h3 className="font-montserrat text-lg font-semibold leading-tight text-[#1b273b] dark:text-violet-600 mb-2">
                Frontend Development
              </h3>
              <p className="font-montserrat text-balance text-base leading-relaxed font-normal text-gray-600 dark:text-gray-200">
                Creating responsive and performant web applications using modern
                frameworks and best practices.
              </p>
            </div>
          </div>
          <div className="w-full md:w-6/12 space-y-4">
            <div className="w-full min-h-[250px] border-2 border-gray-200 dark:border-gray-600 p-5 rounded-lg shadow-sm bg-white/50 dark:bg-slate-950">
              <Palette
                size={48}
                strokeWidth={1}
                className="mb-4 text-[#FF6347]"
              />
              <h3 className="font-montserrat text-lg font-semibold leading-tight text-[#1b273b] dark:text-violet-600 mb-2">
                UI/UX Design
              </h3>
              <p className="font-montserrat text-balance text-base leading-relaxed font-normal text-gray-600 dark:text-gray-200">
                Designing intuitive interfaces that provide exceptional user
                experiences.
              </p>
            </div>
            <div className="w-full min-h-[250px] border-2 border-gray-200 dark:border-gray-600 p-5 rounded-lg shadow-sm bg-white/50 dark:bg-slate-950">
              <MonitorSmartphone
                size={48}
                strokeWidth={1}
                className="mb-4 text-[#FF6347]"
              />
              <h3 className="font-montserrat text-lg font-semibold leading-tight text-[#1b273b] dark:text-violet-600 mb-2">
                Mobile-First Design
              </h3>
              <p className="font-montserrat text-balance text-base leading-relaxed font-normal text-gray-600 dark:text-gray-200">
                Building websites that look and work perfectly across all
                devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyServices;
