import AllProjects from "@/app/_components/AllProjects/AllProjects";
import Clients from "@/app/_components/Clients/Clients";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import EcommercePage from "@/app/_components/EcommercePage/EcommercePage";
import React from "react";

const page = () => {
  return (
    <>
      <EcommercePage />
      <AllProjects />
      <Clients />
      <ContactForm />
    </>
  );
};

export default page;
