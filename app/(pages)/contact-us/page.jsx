import Breadcrumbs from "@/app/_components/BreadCrumbs/Breadcrumbs";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import React from "react";

const page = () => {
  return (
    <>
      <ContactForm />

      <Breadcrumbs title="contact us" breadcrumbPath="/contact-us" />
    </>
  );
};

export default page;
