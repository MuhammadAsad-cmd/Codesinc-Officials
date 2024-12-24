import React from "react";
import HeroSection from "./_components/HeroSection/HeroSection";
import ContactForm from "./_components/Common/Contact/ContactForm";
import SupportOptions from "./_components/SupportOptions/SupportOptions";
import OurServices from "./_components/OurServices/OurServices";
import TechnologySection from "./_components/Technologies/Technologies";
import Testimonials from "./_components/Testimonials/Testimonials";
import HomePageProjects from "./_components/AllProjects/HomePageProjects";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurServices />
      <SupportOptions />
      <HomePageProjects />
      <TechnologySection />
      <Testimonials />
      <ContactForm />
    </>
  );
}
