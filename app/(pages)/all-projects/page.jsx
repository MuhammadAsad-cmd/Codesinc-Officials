import AllProjects from "@/app/_components/AllProjects/AllProjects";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import HeroSection from "@/app/_components/HeroSection/HeroSection";
import SupportOptions from "@/app/_components/SupportOptions/SupportOptions";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSection />
      <SupportOptions />
      <AllProjects />
      <ContactForm />
    </>
  );
};

export default page;
