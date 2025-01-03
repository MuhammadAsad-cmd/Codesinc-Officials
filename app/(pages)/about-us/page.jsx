import AboutUs from "@/app/_components/AboutUs/AboutUs";
import Clients from "@/app/_components/Clients/Clients";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import React from "react";

const page = () => {
  return (
    <>
      <AboutUs />
      <Clients />
      <div className="mt-20">
        <ContactForm />
      </div>
    </>
  );
};

export default page;
