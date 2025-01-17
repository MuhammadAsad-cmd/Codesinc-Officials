import HomePageProjects from "@/app/_components/AllProjects/HomePageProjects";
import AzurePage from "@/app/_components/AzurePage/AzurePage";
import Clients from "@/app/_components/Clients/Clients";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import Testimonials from "@/app/_components/Testimonials/Testimonials";
import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <>
    <Head>
      <title>Azure Cloud Services | Projects, Testimonials & Client Support</title>
      <meta
        name="description"
        content="Explore Azure cloud services with cutting-edge projects, client testimonials, and dedicated support. Discover innovative solutions for cloud infrastructure and management."
      />
      <meta
        name="keywords"
        content="Azure Cloud Services, Azure Projects, Cloud Solutions, Azure Testimonials, Cloud Infrastructure, Azure Support, Cloud Computing"
      />
      <meta name="author" content="Your Company Name" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Azure Cloud Services | Projects, Testimonials & Client Support"
      />
      <meta
        property="og:description"
        content="Explore Azure cloud services with cutting-edge projects, client testimonials, and dedicated support. Discover innovative solutions for cloud infrastructure and management."
      />
      <meta property="og:image" content="/images/azure/azure-main.png" />
      <meta
        property="og:url"
        content="https://yourwebsite.com/azure-cloud-services"
      />
      <meta property="og:site_name" content="Your Company Name" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:title"
        content="Azure Cloud Services | Projects, Testimonials & Client Support"
      />
      <meta
        property="twitter:description"
        content="Explore Azure cloud services with cutting-edge projects, client testimonials, and dedicated support. Discover innovative solutions for cloud infrastructure and management."
      />
      <meta property="twitter:image" content="/images/azure/azure-main.png" />
    </Head>
      <AzurePage />
      <HomePageProjects />
      <Testimonials />
      <Clients />
      <ContactForm />
    </>
  );
};

export default page;
