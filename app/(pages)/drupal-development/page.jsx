import HomePageProjects from "@/app/_components/AllProjects/HomePageProjects";
import Clients from "@/app/_components/Clients/Clients";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import DruptalPage from "@/app/_components/DruptalPage/DruptalPage";
import Testimonials from "@/app/_components/Testimonials/Testimonials";
import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <>
    <Head>
      <title>Druptal Page | Elevate Your Digital Transformation</title>
      <meta
        name="description"
        content="Explore Druptal Page's innovative services to elevate your brand and digital presence. Discover how we help businesses transform with cutting-edge digital solutions."
      />
      <meta
        name="keywords"
        content="Digital Transformation, Druptal Page, Web Development, Digital Solutions, Online Marketing, Business Growth"
      />
      <meta name="author" content="Your Company Name" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Druptal Page | Elevate Your Digital Transformation"
      />
      <meta
        property="og:description"
        content="Explore Druptal Page's innovative services to elevate your brand and digital presence. Discover how we help businesses transform with cutting-edge digital solutions."
      />
      <meta
        property="og:image"
        content="/images/cms/druptal-banner.jpg"
      />
      <meta property="og:url" content="https://yourwebsite.com/druptal" />
      <meta property="og:site_name" content="Your Company Name" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:title"
        content="Druptal Page | Elevate Your Digital Transformation"
      />
      <meta
        property="twitter:description"
        content="Explore Druptal Page's innovative services to elevate your brand and digital presence. Discover how we help businesses transform with cutting-edge digital solutions."
      />
      <meta
        property="twitter:image"
        content="/images/cms/druptal-banner.jpg"
      />
    </Head>
      <DruptalPage />
      <HomePageProjects />
      <Testimonials />
      <Clients />
      <ContactForm />
    </>
  );
};

export default page;
