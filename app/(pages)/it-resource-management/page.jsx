import HomePageProjects from "@/app/_components/AllProjects/HomePageProjects";
import Clients from "@/app/_components/Clients/Clients";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import ItResourcePage from "@/app/_components/ItResourcePage/ItResourcePage";
import Testimonials from "@/app/_components/Testimonials/Testimonials";
import React from "react";
import Head from "next/head";

const page = () => {
  return (
    <>
    <Head>
      <title>IT Resource Solutions | Empower Your Business with Expertise</title>
      <meta
        name="description"
        content="Explore IT resource solutions to enhance your business with skilled professionals, technical expertise, and innovative IT strategies. Empower your digital growth with our IT services."
      />
      <meta
        name="keywords"
        content="IT Resource, IT Solutions, Business Growth, IT Services, IT Strategy, Professional IT Resources, Digital Transformation"
      />
      <meta name="author" content="Your Company Name" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="IT Resource Solutions | Empower Your Business with Expertise"
      />
      <meta
        property="og:description"
        content="Explore IT resource solutions to enhance your business with skilled professionals, technical expertise, and innovative IT strategies. Empower your digital growth with our IT services."
      />
      <meta
        property="og:image"
        content="/images/cms/it-resource-banner.jpg"
      />
      <meta property="og:url" content="https://yourwebsite.com/it-resource" />
      <meta property="og:site_name" content="Your Company Name" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:title"
        content="IT Resource Solutions | Empower Your Business with Expertise"
      />
      <meta
        property="twitter:description"
        content="Explore IT resource solutions to enhance your business with skilled professionals, technical expertise, and innovative IT strategies. Empower your digital growth with our IT services."
      />
      <meta
        property="twitter:image"
        content="/images/cms/it-resource-banner.jpg"
      />
    </Head>
      <ItResourcePage />
      <HomePageProjects />
      <Testimonials />
      <Clients />
      <ContactForm />
    </>
  );
};

export default page;
