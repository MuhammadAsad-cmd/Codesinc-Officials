import AllProjects from "@/app/_components/AllProjects/AllProjects";
import Clients from "@/app/_components/Clients/Clients";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import DruptalPage from "@/app/_components/DruptalPage/DruptalPage";
import React from "react";

const page = () => {
  return (
    <>
      <DruptalPage />
      <AllProjects />
      <Clients />
      <ContactForm />
    </>
  );
};

export default page;
