import Breadcrumbs from "@/app/_components/BreadCrumbs/Breadcrumbs";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <>
    <Head>
      <title>Contact Us | Get in Touch with Our Team</title>
      <meta
        name="description"
        content="Contact us for any inquiries, support, or information. Our team is ready to assist you with any questions or concerns you may have."
      />
      <meta
        name="keywords"
        content="Contact Us, Get in Touch, Support, Inquiries, Customer Service, Contact Information"
      />
      <meta name="author" content="Your Company Name" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Contact Us | Get in Touch with Our Team"
      />
      <meta
        property="og:description"
        content="Contact us for any inquiries, support, or information. Our team is ready to assist you with any questions or concerns you may have."
      />
      <meta property="og:image" content="/images/contact-us/contact-us-banner.png" />
      <meta property="og:url" content="https://yourwebsite.com/contact-us" />
      <meta property="og:site_name" content="Your Company Name" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:title"
        content="Contact Us | Get in Touch with Our Team"
      />
      <meta
        property="twitter:description"
        content="Contact us for any inquiries, support, or information. Our team is ready to assist you with any questions or concerns you may have."
      />
      <meta property="twitter:image" content="/images/contact-us/contact-us-banner.png" />
    </Head>
      <ContactForm />

      <Breadcrumbs title="contact us" breadcrumbPath="/contact-us" />
    </>
  );
};

export default page;
