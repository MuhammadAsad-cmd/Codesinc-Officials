import AllProjects from "@/app/_components/AllProjects/AllProjects";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import WebDesign from "@/app/_components/WebDesign/WebDesign";
import React from "react";

const page = () => {
  return (
    <>
      <WebDesign />
      <AllProjects />
      <ContactForm />
    </>
  );
};

export default page;
