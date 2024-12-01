import AllProjects from "@/app/_components/AllProjects/AllProjects";
import Clients from "@/app/_components/Clients/Clients";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import SoftwareDevelop from "@/app/_components/SoftwareDevelop/SoftwareDevelop";
import StacksWeUse from "@/app/_components/StacksWeUse/StacksWeUse";
import Testimonials from "@/app/_components/Testimonials/Testimonials";
import React from "react";

const page = () => {
  return (
    <>
      <SoftwareDevelop />
      <StacksWeUse />
      <AllProjects />
      <Testimonials />
      <Clients />
      <ContactForm />
    </>
  );
};

export default page;
