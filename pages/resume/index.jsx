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
            <TitleHeading titleHeading="Summary" />
            <p className="font-montserrat text-base font-normal leading-relaxed mb-12 text-gray-800 dark:text-gray-200">
            Experienced Web Developer with 6+ years of expertise in building responsive and scalable web applications. Skilled in React.js, Next.js, JavaScript, Tailwind CSS, Material-UI, and SCSS, with a strong focus on UI development and performance optimization. Worked on OTT platforms, educational tech, healthcare, and enterprise applications, delivering user-friendly, accessible, and high-performance web experiences. Passionate about creating intuitive interfaces, and enhancing user engagement through modern web technologies.
            </p>

            {/* ----- EXPERIENCE ----- */}
            <div className="mb-6">
              <TitleHeading titleHeading="Experience" />
              <h3 className="font-montserrat text-xl font-semibold leading-tight text-violet-600">
                Senior Software Engineer - <span>Present</span>
              </h3>
              <div className="flex flex-wrap items-center gap-3 my-1">
                <p className="font-montserrat text-base font-medium leading-relaxed text-gray-800 dark:text-gray-200">
                  Conscendo Technologies
                </p>
                <span className="font-montserrat text-base font-medium leading-relaxed text-gray-400 dark:text-gray-400 italic">
                  Hyderabad, India
                </span>
              </div>
              <ul className="list-disc pl-5 space-y-2 my-4 text-gray-800 dark:text-gray-200">
                <li>
                  <p className="font-montserrat text-base leading-relaxed">
                  developing scalable web applications using Next.js, React.js, and Tailwind, Material-UI.
                  </p>
                </li>
                <li>
                  <p className="font-montserrat text-base leading-relaxed">
                  Driving UI/UX enhancements to deliver intuitive and engaging user experiences.
                  </p>
                </li>
                <li>
                  <p className="font-montserrat text-base leading-relaxed">
                  Optimizing application performance, improving accessibility, and implementing best coding practices.
                  </p>
                </li>
                <li>
                  <p className="font-montserrat text-base leading-relaxed">
                  Collaborating with designers, backend engineers, and stakeholders to ensure seamless feature delivery.
                  </p>
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="font-montserrat text-xl font-semibold leading-tight text-violet-600">
                Senior Software Engineer
              </h3>
              <div className="flex flex-wrap items-center gap-3 my-1">
                <p className="font-montserrat text-base font-medium leading-relaxed text-gray-800 dark:text-gray-200">
                  YUPP Video Services Pvt Ltd
                </p>
                <span className="font-montserrat text-base font-medium leading-relaxed text-gray-400 italic">
                  Hyderabad, India
                </span>
              </div>
              <ul className="list-disc pl-5 space-y-2 my-4 text-gray-800 dark:text-gray-200">
                <li>
                  <p className="font-montserrat text-base leading-relaxed">
                  Developed and optimized OTT (Over-the-Top) UI platforms, ensuring seamless video streaming experiences.
                  </p>
                </li>
                <li>
                  <p className="font-montserrat text-base leading-relaxed">
                  Built responsive and interactive user interfaces using React.js and Next.js for web-based streaming applications.
                  </p>
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="font-montserrat text-xl font-semibold leading-tight text-violet-600">
                Senior Software Engineer
              </h3>
              <div className="flex flex-wrap items-center gap-3 my-1">
                <p className="font-montserrat text-base font-medium leading-relaxed text-gray-800 dark:text-gray-200">
                  Turito Pvt Ltd
                </p>
                <span className="font-montserrat text-base font-medium leading-relaxed text-gray-400 italic">
                  Hyderabad, India
                </span>
              </div>
              <ul className="list-disc pl-5 space-y-2 my-4 text-gray-800 dark:text-gray-200">
                <li>
                  <p className="font-montserrat text-base leading-relaxed">
                    Played a key role in building a robust educational platform, focusing on UI/UX improvements.
                  </p>
                </li>
                <li>
                  <p className="font-montserrat text-base leading-relaxed">
                  Developed reusable React components and implemented responsive design for a seamless mobile experience.
                  </p>
                </li>
                <li>
                  <p className="font-montserrat text-base leading-relaxed">
                  Integrated Storyblok CMS for dynamic content management and improved flexibility.
                  </p>
                </li>
                <li>
                  <p className="font-montserrat text-base leading-relaxed">
                  Collaborated with designers and product managers to create user-friendly learning interfaces.
                  </p>
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="font-montserrat text-xl font-semibold leading-tight text-violet-600">
                Software Engineer
              </h3>
              <div className="flex flex-wrap items-center gap-3 my-1">
                <p className="font-montserrat text-base font-medium leading-relaxed text-gray-800 dark:text-gray-200">
                  IDEEO Pvt Ltd
                </p>
                <span className="font-montserrat text-base font-medium leading-relaxed text-gray-400 italic">
                  Hyderabad, India
                </span>
              </div>
              <ul className="list-disc pl-5 space-y-2 my-4 text-gray-800 dark:text-gray-200">
                <li>
                  <p className="font-montserrat text-base leading-relaxed">
                    Designed and developed interactive web applications with React.js and SCSS.
                  </p>
                </li>
                <li>
                  <p className="font-montserrat text-base leading-relaxed">Implemented frontend solutions with a strong emphasis on performance and scalability.</p>
                </li>
                <li>
                  <p className="font-montserrat text-base leading-relaxed">Contributed to code reviews, debugging, and optimizing frontend workflows.</p>
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
                  <p className="font-montserrat text-base font-medium leading-relaxed text-gray-800 dark:text-gray-200">
                    MRIET
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
                  <p className="font-montserrat text-base font-medium leading-relaxed text-gray-800 dark:text-gray-200">
                    Shanthinikethan Jr College
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
                  <p className="font-montserrat text-base font-medium leading-relaxed text-gray-800 dark:text-gray-200">
                    T.W.A.H.S Govt High School
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
                  <p className="font-montserrat text-base font-medium leading-relaxed text-gray-800 dark:text-gray-200">
                    HTML5, CSS3, Sass, JavaScript
                  </p>
                </div>
              </div>
              <div className="mb-5">
                <h3 className="font-montserrat text-xl font-semibold leading-tight text-violet-600">
                  Libraries & Frameworks
                </h3>
                <div className="flex flex-wrap items-center gap-3 my-1">
                  <p className="font-montserrat text-base font-medium leading-relaxed text-gray-800 dark:text-gray-200">
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
                  <p className="font-montserrat text-base font-medium leading-relaxed text-gray-800 dark:text-gray-200">
                    Github, Vercel, Netlify, Godaddy, NameCheap
                  </p>
                </div>
              </div>
              <div className="mb-5">
                <h3 className="font-montserrat text-xl font-semibold leading-tight text-violet-600">
                  Content Platforms
                </h3>
                <div className="flex flex-wrap items-center gap-3 my-1">
                  <p className="font-montserrat text-base font-medium leading-relaxed text-gray-800 dark:text-gray-200">
                    Wordpress, Thinkific, Storyblok
                  </p>
                </div>
              </div>
              <div className="mb-5">
                <h3 className="font-montserrat text-xl font-semibold leading-tight text-violet-600">
                  Tools for Design & Coding
                </h3>
                <div className="flex flex-wrap items-center gap-3 my-1">
                  <p className="font-montserrat text-base font-medium leading-relaxed text-gray-800 dark:text-gray-200">
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
                  <p className="font-montserrat text-base font-medium leading-relaxed text-gray-800 dark:text-gray-200">
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
