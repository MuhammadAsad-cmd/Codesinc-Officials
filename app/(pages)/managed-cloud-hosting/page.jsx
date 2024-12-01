import AllProjects from "@/app/_components/AllProjects/AllProjects";
import Clients from "@/app/_components/Clients/Clients";
import CloudHosting from "@/app/_components/CloudHosting/CloudHosting";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import Testimonials from "@/app/_components/Testimonials/Testimonials";
import React from "react";

const page = () => {
  return (
    <>
      <CloudHosting />
      <AllProjects />
      <Testimonials />
      <Clients />
      <ContactForm />
    </>
  );
};

export default page;
