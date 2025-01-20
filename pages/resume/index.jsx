import React from "react";
import styles from "./resume.module.scss";

const TitleHeading = ({ titleHeading }) => {
  return (
    <h2 className="title-heading font-inter text-3xl leading-relaxed font-extrabold border-b pb-3 text-[#1b273b] mb-6">
      {titleHeading}
    </h2>
  );
};

const Resume = () => {
  return (
    <section>
      <div className="w-full max-w-6xl mx-auto p-4 bg-white">
        <div className="w-full flex md:flex-row flex-col">
          <div className="w-8/12">
            <TitleHeading titleHeading="Summery" />
            <p className="font-montserrat text-base font-normal leading-relaxed mb-12 text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, dicta numquam cum impedit alias fugiat sequi officia
              aliquid. Dolor, id quidem saepe voluptatibus deserunt fuga autem
              ipsa porro cupiditate sunt numquam cum impedit alias fugiat sequi
              officia aliquid. Dolor, id quidem saepe voluptatibus deserunt fuga
              autem ipsa porro cupiditate sunt numquam cum impedit alias fugiat
              sequi officia aliquid. Dolor, id quidem saepe voluptatibus
              deserunt fuga autem ipsa porro cupiditate sunt.
            </p>
            <TitleHeading titleHeading="Experience" />
            <div>
              <h3 className="font-montserrat text-xl font-semibold leading-relaxed text-gray-800">
                Software Engineer - <span>Present</span>
              </h3>
              <div className="flex flex-wrap items-center gap-3 my-1">
                <p className="font-montserrat text-lg font-medium leading-relaxed text-gray-600 italic">
                  ABC Technlogies
                </p>
                <span className="font-montserrat text-base font-medium leading-relaxed text-gray-400 italic">
                  Hyderabad, India
                </span>
              </div>
              <ul className="list-disc pl-5 space-y-2 my-4">
                <li>
                  <p className="font-montserrat text-base leading-relaxed text-gray-600">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Velit labore asperiores praesentium porro, architecto
                    accusantium, quae delectus dolorum mollitia
                  </p>
                </li>
                <li>
                  <p className="font-montserrat text-base leading-relaxed text-gray-600">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Velit labore asperiores praesentium porro, architecto
                    accusantium, quae delectus dolorum mollitia
                  </p>
                </li>
                <li>
                  <p className="font-montserrat text-base leading-relaxed text-gray-600">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Velit labore asperiores praesentium porro, architecto
                    accusantium, quae delectus dolorum mollitia
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-4/12"></div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
