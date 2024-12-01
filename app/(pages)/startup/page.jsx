import AllProjects from "@/app/_components/AllProjects/AllProjects";
import Clients from "@/app/_components/Clients/Clients";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import StartUpPage from "@/app/_components/StartUpPage/StartUpPage";
import Testimonials from "@/app/_components/Testimonials/Testimonials";
import React from "react";

const page = () => {
  return (
    <>
      <StartUpPage />
      <AllProjects />
      <Testimonials />
      <Clients />
      <ContactForm />
    </>
  );
};

export default page;
