import React from "react";
import styles from "./resume.module.scss";
import Image from "next/image";
import vijaypic from "@/public/images/mine/mine2.jpg";

const TitleHeading = ({ titleHeading }) => {
  return (
    <h2 className="title-heading font-inter text-3xl leading-relaxed font-extrabold border-b pb-3 text-[#1b273b] dark:text-gray-100 mb-6">
      {titleHeading}
    </h2>
  );
};

const Resume = () => {
  return (
    <section className="bg-white dark:bg-slate-950">
      <div className="w-full max-w-6xl mx-auto py-8 px-4">
        <div className="w-full flex md:flex-row flex-col md:gap-x-4">
          <div className="w-full md:w-8/12">
            <TitleHeading titleHeading="Summery" />
            <p className="font-montserrat text-base font-normal leading-relaxed mb-12 text-gray-800 dark:text-gray-200">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, dicta numquam cum impedit alias fugiat sequi officia
              aliquid. Dolor, id quidem saepe voluptatibus deserunt fuga autem
              ipsa porro cupiditate sunt numquam cum impedit alias fugiat sequi
              officia aliquid. Dolor, id quidem saepe voluptatibus deserunt fuga
              autem ipsa porro cupiditate sunt numquam cum impedit alias fugiat
              sequi officia aliquid. Dolor, id quidem saepe voluptatibus
              deserunt fuga autem ipsa porro cupiditate sunt.
            </p>

            {/* ----- EXPERIENCE ----- */}
            <div className="mb-6">
              <TitleHeading titleHeading="Experience" />
              <h3 className="font-montserrat text-xl font-semibold leading-tight text-violet-600">
                Software Engineer - <span>Present</span>
              </h3>
              <div className="flex flex-wrap items-center gap-3 my-1">
                <p className="font-montserrat text-base font-medium leading-relaxed text-gray-800 dark:text-gray-200">
                  ABC Technlogies
                </p>
                <span className="font-montserrat text-base font-medium leading-relaxed text-gray-400 dark:text-gray-400 italic">
                  Hyderabad, India
                </span>
              </div>
              <ul className="list-disc pl-5 space-y-2 my-4 text-gray-800 dark:text-gray-200">
                <li>
                  <p className="font-montserrat text-base leading-relaxed">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Velit labore asperiores praesentium porro, architecto
                    accusantium, quae delectus dolorum mollitia
                  </p>
                </li>
                <li>
                  <p className="font-montserrat text-base leading-relaxed">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Velit labore asperiores praesentium porro, architecto
                    accusantium, quae delectus dolorum mollitia
                  </p>
                </li>
                <li>
                  <p className="font-montserrat text-base leading-relaxed">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Velit labore asperiores praesentium porro, architecto
                    accusantium, quae delectus dolorum mollitia
                  </p>
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="font-montserrat text-xl font-semibold leading-tight text-violet-600">
                Software Engineer - <span>( 2023-2025 )</span>
              </h3>
              <div className="flex flex-wrap items-center gap-3 my-1">
                <p className="font-montserrat text-base font-medium leading-relaxed text-gray-600">
                  ABC Technlogies
                </p>
                <span className="font-montserrat text-base font-medium leading-relaxed text-gray-400 italic">
                  Hyderabad, India
                </span>
              </div>
              <ul className="list-disc pl-5 space-y-2 my-4 text-gray-800 dark:text-gray-200">
                <li>
                  <p className="font-montserrat text-base leading-relaxed">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Velit labore asperiores praesentium porro, architecto
                    accusantium, quae delectus dolorum mollitia
                  </p>
                </li>
                <li>
                  <p className="font-montserrat text-base leading-relaxed">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Velit labore asperiores praesentium porro, architecto
                    accusantium, quae delectus dolorum mollitia
                  </p>
                </li>
                <li>
                  <p className="font-montserrat text-base leading-relaxed">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Velit labore asperiores praesentium porro, architecto
                    accusantium, quae delectus dolorum mollitia
                  </p>
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="font-montserrat text-xl font-semibold leading-tight text-violet-600">
                Software Engineer - <span>( 2023-2025 )</span>
              </h3>
              <div className="flex flex-wrap items-center gap-3 my-1">
                <p className="font-montserrat text-base font-medium leading-relaxed text-gray-800">
                  ABC Technlogies
                </p>
                <span className="font-montserrat text-base font-medium leading-relaxed text-gray-400 italic">
                  Hyderabad, India
                </span>
              </div>
              <ul className="list-disc pl-5 space-y-2 my-4 text-gray-800 dark:text-gray-200">
                <li>
                  <p className="font-montserrat text-base leading-relaxed">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Velit labore asperiores praesentium porro, architecto
                    accusantium, quae delectus dolorum mollitia
                  </p>
                </li>
                <li>
                  <p className="font-montserrat text-base leading-relaxed">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Velit labore asperiores praesentium porro, architecto
                    accusantium, quae delectus dolorum mollitia
                  </p>
                </li>
                <li>
                  <p className="font-montserrat text-base leading-relaxed">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Velit labore asperiores praesentium porro, architecto
                    accusantium, quae delectus dolorum mollitia
                  </p>
                </li>
              </ul>
            </div>
            {/* ----- ./EXPERIENCE END----- */}

            {/* ----- EDUCATION ----- */}
            <div className="mb-6">
              <TitleHeading titleHeading="Education" />
              <div className="mb-5">
                <h3 className="font-montserrat text-xl font-semibold leading-tight text-violet-600">
                  Bachelor of Technology - <span> 2013-2017 </span>
                </h3>
                <div className="flex flex-wrap items-center gap-3 my-1">
                  <p className="font-montserrat text-base font-medium leading-relaxed text-gray-600">
                    ABC Insitute of Technlogies
                  </p>
                  <span className="font-montserrat text-base font-medium leading-relaxed text-gray-400 italic">
                    Hyderabad, Telangana, India
                  </span>
                </div>
              </div>
              <div className="mb-5">
                <h3 className="font-montserrat text-xl font-semibold leading-tight text-violet-600">
                  Intermediate - <span> 2011-2013 </span>
                </h3>
                <div className="flex flex-wrap items-center gap-3 my-1">
                  <p className="font-montserrat text-base font-medium leading-relaxed text-gray-600">
                    ABC Insitute of Technlogies
                  </p>
                  <span className="font-montserrat text-base font-medium leading-relaxed text-gray-400 italic">
                    Warangal, Telangana, India
                  </span>
                </div>
              </div>
              <div className="mb-5">
                <h3 className="font-montserrat text-xl font-semibold leading-tight text-violet-600">
                  SSC - <span> 2010-2011 </span>
                </h3>
                <div className="flex flex-wrap items-center gap-3 my-1">
                  <p className="font-montserrat text-base font-medium leading-relaxed text-gray-600">
                    ABC Insitute of Technlogies
                  </p>
                  <span className="font-montserrat text-base font-medium leading-relaxed text-gray-400 italic">
                    Warangal, Telangana, India
                  </span>
                </div>
              </div>
            </div>
            {/* ----- ./EDUCATION END ----- */}

            {/* ----- CAPABILITIES ----- */}
            <div className="mb-6">
              <TitleHeading titleHeading="Capabilities" />
              <div className="mb-5">
                <h3 className="font-montserrat text-xl font-semibold leading-tight text-violet-600">
                  Programming Languages
                </h3>
                <div className="flex flex-wrap items-center gap-3 my-1">
                  <p className="font-montserrat text-base font-medium leading-relaxed text-gray-600">
                    HTML5, CSS3, Sass, JavaScript
                  </p>
                </div>
              </div>
              <div className="mb-5">
                <h3 className="font-montserrat text-xl font-semibold leading-tight text-violet-600">
                  Libraries & Frameworks
                </h3>
                <div className="flex flex-wrap items-center gap-3 my-1">
                  <p className="font-montserrat text-base font-medium leading-relaxed text-gray-600">
                    TailwindCSS, Bootstrap, React.js, Next.js, Angular, Framer,
                    Anime.js, AOS
                  </p>
                </div>
              </div>
              <div className="mb-5">
                <h3 className="font-montserrat text-xl font-semibold leading-tight text-violet-600">
                  Service Providers
                </h3>
                <div className="flex flex-wrap items-center gap-3 my-1">
                  <p className="font-montserrat text-base font-medium leading-relaxed text-gray-600">
                    Github, Vercel, Netlify, Godaddy, NameCheap
                  </p>
                </div>
              </div>
              <div className="mb-5">
                <h3 className="font-montserrat text-xl font-semibold leading-tight text-violet-600">
                  Content Platforms
                </h3>
                <div className="flex flex-wrap items-center gap-3 my-1">
                  <p className="font-montserrat text-base font-medium leading-relaxed text-gray-600">
                    Wordpress, Thinkific, Storyblok
                  </p>
                </div>
              </div>
              <div className="mb-5">
                <h3 className="font-montserrat text-xl font-semibold leading-tight text-violet-600">
                  Tools for Design & Coding
                </h3>
                <div className="flex flex-wrap items-center gap-3 my-1">
                  <p className="font-montserrat text-base font-medium leading-relaxed text-gray-600">
                    Figma, Adobe XD, Photoshop, Sketch, Zeplin, Git, Yarn, NPM,
                    Illustrator, Ftp, MS Word, Office
                  </p>
                </div>
              </div>
              <div className="mb-5">
                <h3 className="font-montserrat text-xl font-semibold leading-tight text-violet-600">
                  Operating System
                </h3>
                <div className="flex flex-wrap items-center gap-3 my-1">
                  <p className="font-montserrat text-base font-medium leading-relaxed text-gray-600">
                    Windows, MacOS, Ubuntu
                  </p>
                </div>
              </div>
            </div>
            {/* ----- ./CAPABILITIES END ----- */}
          </div>
          <div className="w-full md:w-4/12 p-4 drop-shadow-2xl decoration-purple-800">
            <div className="w-full h-1/6 object-cover overflow-hidden flex items-center justify-center border-2 border-gray-400">
              <Image src={vijaypic} alt="vijay" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
