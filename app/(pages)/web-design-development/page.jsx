import AllProjects from "@/app/_components/AllProjects/AllProjects";
import Clients from "@/app/_components/Clients/Clients";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import Testimonials from "@/app/_components/Testimonials/Testimonials";
import WebDesign from "@/app/_components/WebDesign/WebDesign";
import React from "react";

const page = () => {
  return (
    <>
      <WebDesign />
      <AllProjects />
      <Testimonials />
      <Clients />
      <ContactForm />
    </>
  );
};

export default page;
