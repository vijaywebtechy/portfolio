import React, { useState } from "react";
import About from "@/components/about";
import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import HeroSection from "@/components/heroSection";
import QuoteScroll from "@/components/quoteScroll";
import Testimonials from "@/components/testimonials";
import WhyChooseMe from "@/components/whychooseme";
import Works from "@/components/works";

const Home = ({ onContactSheet }) => {
  return (
    <>
      <HeroSection onContactSheet={onContactSheet} />
      <QuoteScroll />
      <About />
      <WhyChooseMe />
      <Works />
      <CTA onContactSheet={onContactSheet} />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Home;
