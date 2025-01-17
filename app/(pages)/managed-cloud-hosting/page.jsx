import HomePageProjects from "@/app/_components/AllProjects/HomePageProjects";
import Clients from "@/app/_components/Clients/Clients";
import CloudHosting from "@/app/_components/CloudHosting/CloudHosting";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import Testimonials from "@/app/_components/Testimonials/Testimonials";
import React from "react";
import Head from "next/head";

const page = () => {
  return (
    <>
     <Head>
      <title>Cloud Hosting Solutions | Secure and Scalable Hosting Services</title>
      <meta
        name="description"
        content="Discover secure and scalable cloud hosting solutions that provide high performance, reliability, and flexibility for your business. Get started with our cloud services today."
      />
      <meta
        name="keywords"
        content="Cloud Hosting, Scalable Hosting, Secure Cloud, Cloud Solutions, Web Hosting, Reliable Hosting Services, Cloud Infrastructure"
      />
      <meta name="author" content="Your Company Name" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Cloud Hosting Solutions | Secure and Scalable Hosting Services"
      />
      <meta
        property="og:description"
        content="Discover secure and scalable cloud hosting solutions that provide high performance, reliability, and flexibility for your business. Get started with our cloud services today."
      />
      <meta
        property="og:image"
        content="/images/cms/cloud-hosting-banner.jpg"
      />
      <meta property="og:url" content="https://yourwebsite.com/cloud-hosting" />
      <meta property="og:site_name" content="Your Company Name" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:title"
        content="Cloud Hosting Solutions | Secure and Scalable Hosting Services"
      />
      <meta
        property="twitter:description"
        content="Discover secure and scalable cloud hosting solutions that provide high performance, reliability, and flexibility for your business. Get started with our cloud services today."
      />
      <meta
        property="twitter:image"
        content="/images/cms/cloud-hosting-banner.jpg"
      />
    </Head>
      <CloudHosting />
      <HomePageProjects />
      <Testimonials />
      <Clients />
      <ContactForm />
    </>
  );
};

export default page;
