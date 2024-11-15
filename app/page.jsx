import React from "react";
import HeroSection from "./_components/HeroSection/HeroSection";
import ContactForm from "./_components/Common/Contact/ContactForm";
import SupportOptions from "./_components/SupportOptions/SupportOptions";
import OurServices from "./_components/OurServices/OurServices";
import AllProjects from "./_components/AllProjects/AllProjects";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurServices />
      <SupportOptions />
      <AllProjects />
      <ContactForm />
    </>
  );
}
