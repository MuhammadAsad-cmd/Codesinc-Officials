import HomePageProjects from "@/app/_components/AllProjects/HomePageProjects";
import Clients from "@/app/_components/Clients/Clients";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import SoftwareDevelop from "@/app/_components/SoftwareDevelop/SoftwareDevelop";
import StacksWeUse from "@/app/_components/StacksWeUse/StacksWeUse";
import Testimonials from "@/app/_components/Testimonials/Testimonials";
import React from "react";
import Head from "next/head";

const page = () => {
  return (
    <>
     <Head>
      <title>Software Development Services | YourCompanyName</title>
      <meta
        name="description"
        content="Explore our software development services for custom solutions. We specialize in creating scalable, efficient, and tailored software for your business needs."
      />
      <meta
        name="keywords"
        content="Software Development, Custom Software, Web Development, Enterprise Solutions, App Development, Tailored Solutions"
      />
      <meta name="author" content="YourCompanyName" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Software Development Services | YourCompanyName"
      />
      <meta
        property="og:description"
        content="Explore our software development services for custom solutions. We specialize in creating scalable, efficient, and tailored software for your business needs."
      />
      <meta
        property="og:image"
        content="/images/logos/software-development.png" // Replace with your relevant image
      />
      <meta property="og:url" content="https://yourwebsite.com/software-development" />
      <meta property="og:site_name" content="YourCompanyName" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:title"
        content="Software Development Services | YourCompanyName"
      />
      <meta
        property="twitter:description"
        content="Explore our software development services for custom solutions. We specialize in creating scalable, efficient, and tailored software for your business needs."
      />
      <meta
        property="twitter:image"
        content="/images/logos/software-development.png" // Replace with your relevant image
      />
    </Head>
      <SoftwareDevelop />
      <StacksWeUse />
      <HomePageProjects />
      <Testimonials />
      <Clients />
      <ContactForm />
    </>
  );
};

export default page;
