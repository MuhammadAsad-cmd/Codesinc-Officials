import HomePageProjects from "@/app/_components/AllProjects/HomePageProjects";
import BusinessIntelligence from "@/app/_components/BusinessIntelligence/BusinessIntelligence";
import Clients from "@/app/_components/Clients/Clients";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import Testimonials from "@/app/_components/Testimonials/Testimonials";
import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <>
    <Head>
      <title>Business Intelligence Solutions | Comprehensive Projects & Testimonials</title>
      <meta
        name="description"
        content="Explore advanced business intelligence solutions, innovative projects, client testimonials, and connect with us through our contact form. Unlock insights and transform your business."
      />
      <meta
        name="keywords"
        content="Business Intelligence, Innovative Projects, Client Testimonials, Advanced Solutions, Data Insights, Transform Business, Contact Form"
      />
      <meta name="author" content="Your Company Name" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Business Intelligence Solutions | Comprehensive Projects & Testimonials"
      />
      <meta
        property="og:description"
        content="Explore advanced business intelligence solutions, innovative projects, client testimonials, and connect with us through our contact form. Unlock insights and transform your business."
      />
      <meta property="og:image" content="/path-to-your-image.jpg" />
      <meta
        property="og:url"
        content="https://yourwebsite.com/business-intelligence"
      />
      <meta property="og:site_name" content="Your Company Name" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:title"
        content="Business Intelligence Solutions | Comprehensive Projects & Testimonials"
      />
      <meta
        property="twitter:description"
        content="Explore advanced business intelligence solutions, innovative projects, client testimonials, and connect with us through our contact form. Unlock insights and transform your business."
      />
      <meta property="twitter:image" content="/path-to-your-image.jpg" />
    </Head>
      <BusinessIntelligence />
      <HomePageProjects />
      <Testimonials />
      <Clients />
      <ContactForm />
    </>
  );
};

export default page;
