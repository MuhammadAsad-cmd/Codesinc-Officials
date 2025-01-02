import AllProjects from "@/app/_components/AllProjects/AllProjects";
import Clients from "@/app/_components/Clients/Clients";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import HeroSection from "@/app/_components/HeroSection/HeroSection";
import SupportOptions from "@/app/_components/SupportOptions/SupportOptions";
import Testimonials from "@/app/_components/Testimonials/Testimonials";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSection />
      <SupportOptions />
      <div className="mt-20">
        <Testimonials />
      </div>
      <AllProjects />
      <div className="mt-10">
        <Clients />
      </div>
      <ContactForm />
    </>
  );
};

export default page;
