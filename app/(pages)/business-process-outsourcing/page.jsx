import HomePageProjects from "@/app/_components/AllProjects/HomePageProjects";
import BusinessProcessPage from "@/app/_components/BusinessProcessPage/BusinessProcessPage";
import Clients from "@/app/_components/Clients/Clients";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import Testimonials from "@/app/_components/Testimonials/Testimonials";
import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <>
    <Head>
      <title>Business Process Optimization | Projects, Testimonials & Contact</title>
      <meta
        name="description"
        content="Enhance your business processes with expert solutions. Explore innovative projects, read client testimonials, and get in touch with us to transform your business today."
      />
      <meta
        name="keywords"
        content="Business Process Optimization, Innovative Projects, Client Testimonials, Expert Solutions, Business Transformation, Contact Us"
      />
      <meta name="author" content="Your Company Name" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Business Process Optimization | Projects, Testimonials & Contact"
      />
      <meta
        property="og:description"
        content="Enhance your business processes with expert solutions. Explore innovative projects, read client testimonials, and get in touch with us to transform your business today."
      />
      <meta property="og:image" content="/path-to-your-image.jpg" />
      <meta
        property="og:url"
        content="https://yourwebsite.com/business-process-optimization"
      />
      <meta property="og:site_name" content="Your Company Name" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:title"
        content="Business Process Optimization | Projects, Testimonials & Contact"
      />
      <meta
        property="twitter:description"
        content="Enhance your business processes with expert solutions. Explore innovative projects, read client testimonials, and get in touch with us to transform your business today."
      />
      <meta property="twitter:image" content="/path-to-your-image.jpg" />
    </Head>
      <BusinessProcessPage />
      <HomePageProjects />
      <Testimonials />
      <Clients />
      <ContactForm />
    </>
  );
};

export default page;
