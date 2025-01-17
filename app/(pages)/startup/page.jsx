import HomePageProjects from "@/app/_components/AllProjects/HomePageProjects";
import Clients from "@/app/_components/Clients/Clients";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import StartUpPage from "@/app/_components/StartUpPage/StartUpPage";
import Testimonials from "@/app/_components/Testimonials/Testimonials";
import React from "react";
import Head from "next/head";

const page = () => {
  return (
    <>
     <Head>
      <title>Startup Page Services | YourCompanyName</title>
      <meta
        name="description"
        content="Discover our Startup page services. We provide customized solutions and support for new businesses to help them grow and succeed in today's market."
      />
      <meta
        name="keywords"
        content="Startup Services, Business Solutions, Custom Solutions, New Business, Startup Growth, Startup Support"
      />
      <meta name="author" content="YourCompanyName" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Startup Page Services | YourCompanyName"
      />
      <meta
        property="og:description"
        content="Discover our Startup page services. We provide customized solutions and support for new businesses to help them grow and succeed in today's market."
      />
      <meta
        property="og:image"
        content="/images/logos/startup-page.png" // Replace with your relevant image
      />
      <meta property="og:url" content="https://yourwebsite.com/startup-page" />
      <meta property="og:site_name" content="YourCompanyName" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:title"
        content="Startup Page Services | YourCompanyName"
      />
      <meta
        property="twitter:description"
        content="Discover our Startup page services. We provide customized solutions and support for new businesses to help them grow and succeed in today's market."
      />
      <meta
        property="twitter:image"
        content="/images/logos/startup-page.png" // Replace with your relevant image
      />
    </Head>
      <StartUpPage />
      <HomePageProjects />
      <Testimonials />
      <Clients />
      <ContactForm />
    </>
  );
};

export default page;
