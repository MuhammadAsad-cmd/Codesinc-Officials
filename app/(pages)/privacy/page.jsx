import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import PrivacyPolicy from "@/app/_components/PrivacyPolicy/PrivacyPolicy";
import React from "react";

const page = () => {
  return (
    <>
      <PrivacyPolicy />
      <ContactForm />
    </>
  );
};

export default page;
