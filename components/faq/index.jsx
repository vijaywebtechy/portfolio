import React, { useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  Slash,
} from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item is open by default

  const accordionData = [
    {
      title: "100% Fluid Responsive - Fits any device perfectly",
      content:
        "Your website will seamlessly adjust to fit any device perfectly, providing an optimal viewing experience for users. Whether on a smartphone, tablet, or desktop, content will be displayed beautifully and legibly, enhancing accessibility and user satisfaction",
    },
    {
      title: "Flat, Modern and Clean Design",
      content:
        "I emphasize simplicity and functionality, focusing on minimalistic elements and a user-friendly interface. This approach eliminates unnecessary distractions, allowing users to navigate effortlessly while enjoying a visually pleasing experience",
    },
    {
      title: "Clean Code",
      content:
        "My code is easy to read, understand, and maintain. It emphasizes clarity and simplicity, allowing others to work efficiently and collaboratively. I follow the best practices such as meaningful naming conventions and proper organization",
    },
    {
      title: "Fast Loading Speeds",
      content:
        "Speed is critical for user satisfaction and SEO. I optimize your website’s performance to ensure lightning-fast loading times, keeping users engaged and reducing bounce rates.",
    },
    {
      title: "Customized to Your Needs",
      content:
        "Your website will be tailored specifically to your requirements and preferences.  I'll bring your vision to life.",
    },
    {
      title: "Cross-Browser Compatibility",
      content:
        "I ensure your website works seamlessly across all major browsers, providing a consistent experience for users on Chrome, Safari, Firefox, Edge, and more. This ensures no user is left out, regardless of their preferred browser.",
    },
    {
      title: "SEO Optimized",
      content:
        "Your website will be designed with search engines in mind, incorporating best practices to boost visibility and organic traffic. From metadata I ensure your site good ranks in search results.",
    },
    {
      title: "Dedicated Support and Maintenance",
      content:
        "My commitment doesn't end at launch. I offer ongoing support and maintenance to ensure your website stays updated, secure, and running smoothly.",
    },
  ];

  const handleClick = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };
  return (
    <section className="w-full py-20 bg-white">
      <div className="w-full max-w-6xl mx-auto px-4">
        <h3 className="font-montserrat text-2xl font-semibold text-violet-600 mb-5 flex items-center -ml-[6px]">
          <ChevronLeft
            strokeWidth={1.75}
            size={30}
            className="text-[#FF6347]"
          />{" "}
          Faq's
          <Slash strokeWidth={1.75} className="text-[#FF6347]" />
          <ChevronRight
            strokeWidth={1.75}
            size={30}
            className="text-[#FF6347]"
          />
        </h3>
        <h2 className="font-inter text-6xl font-extrabold leading-tight tracking-tighter text-[#1b273b]">
          All the Answers
          <br /> You're Looking For
        </h2>
        <p className="font-montserrat text-xl text-gray-600 mt-4 mb-10 leading-relaxed">
          Dive into our FAQ to uncover answers to the questions on your mind. If
          you don't find what you're looking for, we're just a message away!
        </p>

        {/* ----- Accordian ----- */}
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={index === openIndex}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div
      className={`border shadow-sm rounded-lg mb-4 overflow-hidden ${
        isOpen ? "border-violet-800" : "border-gray-200"
      }`}
    >
      <button
        className="w-full flex items-center justify-between px-4 py-6 hover:bg-gray-50 transition-all"
        onClick={onClick}
      >
        <span
          className={`font-montserrat text-lg font-medium leading-normal ${
            isOpen ? "text-violet-800" : "text-gray-800"
          }`}
        >
          {title}
        </span>
        {isOpen ? (
          <EyeOff
            size={32}
            strokeWidth={1.75}
            className="w-6 h-6 text-[#FF6347] transform rotate-180 transition-transform duration-200"
          />
        ) : (
          <Eye
            size={32}
            strokeWidth={1.75}
            className="w-6 h-6 text-gray-400 transition-transform duration-200"
          />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 p-4 ${
          isOpen ? "max-h-96" : "max-h-0 py-0"
        }`}
      >
        <p className="font-montserrat text-base leading-normal text-gray-600">
          {content}
        </p>
      </div>
    </div>
  );
};
