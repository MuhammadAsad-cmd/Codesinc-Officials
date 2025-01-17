import EcomProjects from "@/app/_components/AllProjects/EcomProjects";
import Clients from "@/app/_components/Clients/Clients";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import EcommercePage from "@/app/_components/EcommercePage/EcommercePage";
import Testimonials from "@/app/_components/Testimonials/Testimonials";
import React from "react";
import Head from "next/head";

const page = () => {
  return (
    <>
    <Head>
      <title>Ecommerce Solutions | Elevate Your Online Business</title>
      <meta
        name="description"
        content="Discover top-notch ecommerce solutions with EcommercePage. Boost your online sales, enhance user experience, and grow your digital presence with our expert ecommerce services."
      />
      <meta
        name="keywords"
        content="Ecommerce, Online Business, Ecommerce Solutions, Digital Marketing, Web Development, Ecommerce Development, Online Sales, User Experience"
      />
      <meta name="author" content="Your Company Name" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Ecommerce Solutions | Elevate Your Online Business"
      />
      <meta
        property="og:description"
        content="Discover top-notch ecommerce solutions with EcommercePage. Boost your online sales, enhance user experience, and grow your digital presence with our expert ecommerce services."
      />
      <meta
        property="og:image"
        content="/images/cms/ecommerce-banner.jpg"
      />
      <meta property="og:url" content="https://yourwebsite.com/ecommerce" />
      <meta property="og:site_name" content="Your Company Name" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:title"
        content="Ecommerce Solutions | Elevate Your Online Business"
      />
      <meta
        property="twitter:description"
        content="Discover top-notch ecommerce solutions with EcommercePage. Boost your online sales, enhance user experience, and grow your digital presence with our expert ecommerce services."
      />
      <meta
        property="twitter:image"
        content="/images/cms/ecommerce-banner.jpg"
      />
    </Head>
      <EcommercePage />
      <EcomProjects />
      <Testimonials />
      <Clients />
      <ContactForm />
    </>
  );
};

export default page;
