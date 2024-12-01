import AllProjects from "@/app/_components/AllProjects/AllProjects";
import AzurePage from "@/app/_components/AzurePage/AzurePage";
import Clients from "@/app/_components/Clients/Clients";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import Testimonials from "@/app/_components/Testimonials/Testimonials";
import React from "react";

const page = () => {
  return (
    <>
      <AzurePage />
      <AllProjects />
      <Testimonials />
      <Clients />
      <ContactForm />
    </>
  );
};

export default page;
