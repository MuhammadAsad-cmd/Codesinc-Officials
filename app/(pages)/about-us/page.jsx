import AboutUs from "@/app/_components/AboutUs/AboutUs";
import Clients from "@/app/_components/Clients/Clients";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import Testimonials from "@/app/_components/Testimonials/Testimonials";
import React from "react";

const page = () => {
  return (
    <>
      <AboutUs />
      <Clients />
      <ContactForm />
    </>
  );
};

export default page;
