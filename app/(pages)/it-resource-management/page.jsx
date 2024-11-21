import AllProjects from "@/app/_components/AllProjects/AllProjects";
import Clients from "@/app/_components/Clients/Clients";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import ItResourcePage from "@/app/_components/ItResourcePage/ItResourcePage";
import React from "react";

const page = () => {
  return (
    <>
      <ItResourcePage />
      <AllProjects />
      <Clients />
      <ContactForm />
    </>
  );
};

export default page;
