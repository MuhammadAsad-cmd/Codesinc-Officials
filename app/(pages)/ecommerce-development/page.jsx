import EcomProjects from "@/app/_components/AllProjects/EcomProjects";
import Clients from "@/app/_components/Clients/Clients";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import EcommercePage from "@/app/_components/EcommercePage/EcommercePage";
import Testimonials from "@/app/_components/Testimonials/Testimonials";
import React from "react";

const page = () => {
  return (
    <>
      <EcommercePage />
      <EcomProjects />
      <Testimonials />
      <Clients />
      <ContactForm />
    </>
  );
};

export default page;
