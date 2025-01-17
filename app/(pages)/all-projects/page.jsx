import Head from "next/head";
import AllProjects from "@/app/_components/AllProjects/AllProjects";
import Clients from "@/app/_components/Clients/Clients";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import HeroSection from "@/app/_components/HeroSection/HeroSection";
import SupportOptions from "@/app/_components/SupportOptions/SupportOptions";
import Testimonials from "@/app/_components/Testimonials/Testimonials";
import React from "react";

const page = () => {
  return (
    <>
      <Head>
        {/* General Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
        <meta 
          name="description" 
          content="Explore our services including support options, completed projects, testimonials, and client collaborations. Get in touch with us through our contact form for more details." 
        />
        <meta 
          name="keywords" 
          content="Hero Section, Support Options, All Projects, Testimonials, Clients, Contact Form, Business Services, Collaboration" 
        />
        <meta name="author" content="Your Company Name" />
        <title>Our Services | Your Company</title>

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Our Services | Your Company" />
        <meta 
          property="og:description" 
          content="Explore our services including support options, completed projects, testimonials, and client collaborations. Get in touch with us through our contact form for more details." 
        />
        <meta property="og:image" content="/images/hero-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/services" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services | Your Company" />
        <meta 
          name="twitter:description" 
          content="Explore our services including support options, completed projects, testimonials, and client collaborations. Get in touch with us through our contact form for more details." 
        />
        <meta name="twitter:image" content="/images/hero-image.jpg" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
      </Head>

      <HeroSection />
      <SupportOptions />
      <AllProjects />
      <Testimonials />
      <Clients />
      <ContactForm />
    </>
  );
};

export default page;
