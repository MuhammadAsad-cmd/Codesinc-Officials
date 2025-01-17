import WebDevProjects from "@/app/_components/AllProjects/WebDevProjects";
import Clients from "@/app/_components/Clients/Clients";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import Testimonials from "@/app/_components/Testimonials/Testimonials";
import WebDesign from "@/app/_components/WebDesign/WebDesign";
import React from "react";
import Head from "next/head";

const page = () => {
  return (
    <>
    <Head>
      <title>Web Development Services | YourCompanyName</title>
      <meta
        name="description"
        content="Explore our top-tier web development services at YourCompanyName. From design to development, we offer custom web solutions to help your business thrive online."
      />
      <meta
        name="keywords"
        content="web development, custom websites, web design, client testimonials, contact form"
      />
      <meta name="author" content="YourCompanyName" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Web Development Services | YourCompanyName" />
      <meta
        property="og:description"
        content="Explore our top-tier web development services at YourCompanyName. From design to development, we offer custom web solutions to help your business thrive online."
      />
      <meta
        property="og:image"
        content="/images/logos/company-logo.png" // Replace with your relevant image
      />
      <meta property="og:url" content="https://yourwebsite.com/web-development" />
      <meta property="og:site_name" content="YourCompanyName" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="Web Development Services | YourCompanyName" />
      <meta
        property="twitter:description"
        content="Explore our top-tier web development services at YourCompanyName. From design to development, we offer custom web solutions to help your business thrive online."
      />
      <meta
        property="twitter:image"
        content="/images/logos/company-logo.png" // Replace with your relevant image
      />
    </Head>
      <WebDesign />
      <WebDevProjects />
      <Testimonials />
      <Clients />
      <ContactForm />
    </>
  );
};

export default page;
