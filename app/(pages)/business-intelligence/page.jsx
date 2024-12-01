import AllProjects from "@/app/_components/AllProjects/AllProjects";
import BusinessIntelligence from "@/app/_components/BusinessIntelligence/BusinessIntelligence";
import Clients from "@/app/_components/Clients/Clients";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import Testimonials from "@/app/_components/Testimonials/Testimonials";
import React from "react";

const page = () => {
  return (
    <>
      <BusinessIntelligence />
      <AllProjects />
      <Testimonials />
      <Clients />
      <ContactForm />
    </>
  );
};

export default page;
