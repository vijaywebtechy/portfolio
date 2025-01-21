import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
// Import Swiper styles
import "swiper/swiper-bundle.css";
import Image from "next/image";
import mine1 from "@/public/images/mine/mine1.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="about-section w-full py-20 bg-white dark:bg-slate-950"
    >
      <div className="w-full max-w-6xl mx-auto p-4 flex flex-col md:flex-row">
        <div className="w-full md:w-6/12">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide className="border border-gray-200 bg-white">
              <div className="flex flex-col justify-between p-2 w-full h-full bg-white dark:bg-slate-200 shadow-2xl">
                <div className="border border-gray-200 w-full h-full rounded-xl relative overflow-hidden grayscale">
                  <Image
                    src={mine1}
                    alt="image"
                    className="absolute w-full h-full object-cover"
                  />
                </div>
                <p className="font-montserrat text-sm font-medium leading-normal text-gray-800 pt-2 text-center">
                  Glassic
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="border border-gray-200 bg-white">
              <div className="flex flex-col justify-between p-2 w-full h-full bg-white dark:bg-slate-200">
                <div className="border border-gray-200 w-full h-full rounded-xl relative overflow-hidden">
                  <Image
                    src={mine1}
                    alt="image"
                    className="absolute w-full h-full object-cover"
                  />
                </div>
                <p className="font-montserrat text-sm font-medium leading-normal text-gray-800 pt-2 text-center">
                  Glassic
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-full md:w-6/12">
          <div className="font-montserrat text-lg leading-relaxed text-gray-800 dark:text-gray-200 font-normal">
            <p className="mb-3">
              Hey 👋 there! I'm Vijaya Bhaskar, your friendly neighborhood
              <span className="text-black font-semibold dark:text-violet-600">
                {" "}
                Web Developer!{" "}
              </span>
              from Hyderabad with over 6 years of experience! Think of me as the
              person who turns "<i>Hmm, that button could look better</i>" into
              "<i>Wow, this is amazing!</i>".
            </p>
            <p className="mb-3">
              I'm a wizard with{" "}
              <span className="text-black font-semibold dark:text-violet-600">
                HTML, CSS, Bootstrap, TailwindCSS
              </span>{" "}
              and{" "}
              <span className="text-black font-semibold dark:text-violet-600">
                JavaScript
              </span>
              , conjuring up designs that don't just look good but feel great to
              use. Whether it's crafting slick animations, responsive layouts,
              or bringing wild ideas to life with frameworks like{" "}
              <span className="text-black font-semibold dark:text-violet-600">
                ReactJS
              </span>{" "}
              and{" "}
              <span className="text-black font-semibold dark:text-violet-600">
                Next.js
              </span>
              , I'm all about making the web a cooler place to hang out.
            </p>
            <p>
              When I'm not coding, I'm probably on a heroic quest to untangle my
              headphone wires (spoiler: it's a never-ending battle).so it's
              easier to find me on LinkedIn.😁
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
