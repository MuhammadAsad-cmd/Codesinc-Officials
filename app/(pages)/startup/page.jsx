import AllProjects from "@/app/_components/AllProjects/AllProjects";
import Clients from "@/app/_components/Clients/Clients";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import StartUpPage from "@/app/_components/StartUpPage/StartUpPage";
import React from "react";

const page = () => {
  return (
    <>
      <StartUpPage />
      <AllProjects />
      <Clients />
      <ContactForm />
    </>
  );
};

export default page;
