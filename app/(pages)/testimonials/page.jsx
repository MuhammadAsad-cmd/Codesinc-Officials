import AllProjects from "@/app/_components/AllProjects/AllProjects";
import Clients from "@/app/_components/Clients/Clients";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import HeroSection from "@/app/_components/HeroSection/HeroSection";
import SupportOptions from "@/app/_components/SupportOptions/SupportOptions";
import Testimonials from "@/app/_components/Testimonials/Testimonials";
import React from "react";
import Head from "next/head";

const page = () => {
  return (
    <>
    <Head>
      <title>Home | YourCompanyName</title>
      <meta
        name="description"
        content="Welcome to YourCompanyName! Explore our services, projects, and client testimonials. Contact us to get started on your next project."
      />
      <meta
        name="keywords"
        content="home page, company services, client testimonials, all projects, contact form"
      />
      <meta name="author" content="YourCompanyName" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Home | YourCompanyName" />
      <meta
        property="og:description"
        content="Welcome to YourCompanyName! Explore our services, projects, and client testimonials. Contact us to get started on your next project."
      />
      <meta
        property="og:image"
        content="/images/logos/company-logo.png" // Replace with your relevant image
      />
      <meta property="og:url" content="https://yourwebsite.com" />
      <meta property="og:site_name" content="YourCompanyName" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="Home | YourCompanyName" />
      <meta
        property="twitter:description"
        content="Welcome to YourCompanyName! Explore our services, projects, and client testimonials. Contact us to get started on your next project."
      />
      <meta
        property="twitter:image"
        content="/images/logos/company-logo.png" // Replace with your relevant image
      />
    </Head>
      <HeroSection />
      <SupportOptions />
      <div className="mt-20">
        <Testimonials />
      </div>
      <AllProjects />
      <div className="mt-10">
        <Clients />
      </div>
      <ContactForm />
    </>
  );
};

export default page;
