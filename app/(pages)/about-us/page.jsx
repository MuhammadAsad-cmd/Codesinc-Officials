import Head from "next/head";
import AboutUs from "@/app/_components/AboutUs/AboutUs";
import Clients from "@/app/_components/Clients/Clients";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import React from "react";

const page = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Learn more about our company, explore our clients, and get in touch with us through our contact form." />
        <meta name="keywords" content="About Us, Clients, Contact Form, Business, Company Information" />
        <meta name="author" content="Your Company Name" />
        <title>About Us | Your Company</title>

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="About Us | Your Company" />
        <meta property="og:description" content="Learn more about our company, explore our clients, and get in touch with us through our contact form." />
        <meta property="og:image" content="/images/about-us-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/about-us" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Your Company" />
        <meta name="twitter:description" content="Learn more about our company, explore our clients, and get in touch with us through our contact form." />
        <meta name="twitter:image" content="/images/about-us-image.jpg" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
      </Head>

      <AboutUs />
      <Clients />
      <div className="mt-20">
        <ContactForm />
      </div>
    </>
  );
};

export default page;
