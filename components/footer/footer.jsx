import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="w-full border-t border-gray-200 dark:border-gray-600 bg-white dark:bg-slate-950">
      <div className="w-full max-w-6xl mx-auto px-4 flex justify-between items-center py-8">
        <p className="font-montserrat text-base leading-normal text-gray-500 dark:text-gray-200 font-medium">
          © 2025 Vijay, All rights reserved.
        </p>
        <div className="font-montserrat text-xl leading-normal text-blue-500 dark:text-gray-200 font-bold">
          <Link href="https://www.linkedin.com/in/" target="_blank">
            in
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
