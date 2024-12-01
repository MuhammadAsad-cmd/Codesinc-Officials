import AllProjects from "@/app/_components/AllProjects/AllProjects";
import BusinessProcessPage from "@/app/_components/BusinessProcessPage/BusinessProcessPage";
import Clients from "@/app/_components/Clients/Clients";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import Testimonials from "@/app/_components/Testimonials/Testimonials";
import React from "react";

const page = () => {
  return (
    <>
      <BusinessProcessPage />
      <AllProjects />
      <Testimonials />
      <Clients />
      <ContactForm />
    </>
  );
};

export default page;
