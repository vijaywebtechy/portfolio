import React, { useState } from "react";
import About from "@/components/about";
import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import HeroSection from "@/components/heroSection";
import Testimonials from "@/components/testimonials";
import WhyChooseMe from "@/components/whychooseme";
import Works from "@/components/works";
import MyServices from "@/components/myservices";

const Home = ({ onContactSheet }) => {
  return (
    <>
      <HeroSection onContactSheet={onContactSheet} />
      <About />
      <WhyChooseMe />
      <Works />
      <MyServices />
      <CTA onContactSheet={onContactSheet} />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Home;
