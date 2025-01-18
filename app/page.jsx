import React from "react";
import Head from "next/head";
import HeroSection from "./_components/HeroSection/HeroSection";
import ContactForm from "./_components/Common/Contact/ContactForm";
import SupportOptions from "./_components/SupportOptions/SupportOptions";
import OurServices from "./_components/OurServices/OurServices";
import TechnologySection from "./_components/Technologies/Technologies";
import Testimonials from "./_components/Testimonials/Testimonials";
import HomePageProjects from "./_components/AllProjects/HomePageProjects";

export default function Home() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Home | Codesinc - Innovating Solutions in Rahim Yar Khan</title>
        <meta
          name="description"
          content="Welcome to Codesinc! Based in Rahim Yar Khan, we specialize in cutting-edge web development, intuitive UI/UX design, and innovative digital solutions tailored to your business needs."
        />
        <meta name="author" content="Codesinc" />
        <meta name="application-name" content="Codesinc Digital Solutions" />
        <meta
          name="keywords"
          content="Codesinc, Web Development, Rahim Yar Khan, React.js, Next.js, UI/UX, JavaScript, Tailwind CSS, Front-End Developer, Technology Solutions"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Codesinc - Innovating Solutions" />
        <meta
          property="og:description"
          content="Discover Codesinc, located in Rahim Yar Khan. We offer advanced web development services, modern UI/UX designs, and digital innovations tailored to your business."
        />
        <meta property="og:url" content="https://codesinc.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://codesinc.com/images/og-image.png"
        />
        <meta property="og:site_name" content="Codesinc Digital Solutions" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Codesinc | Innovating Solutions in Rahim Yar Khan"
        />
        <meta
          name="twitter:description"
          content="Explore Codesinc's cutting-edge services in web development, UI/UX design, and innovative technology solutions tailored for businesses in Rahim Yar Khan and beyond."
        />
        <meta
          name="twitter:image"
          content="https://codesinc.com/images/twitter-image.png"
        />
        <meta name="twitter:site" content="@CodesincHandle" />
        <meta name="twitter:creator" content="@CodesincHandle" />

        {/* Icons */}
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/apple-icon.png" />
      </Head>

      {/* Page Components */}
      <HeroSection />
      <OurServices />
      <SupportOptions />
      <HomePageProjects />
      <TechnologySection />
      <Testimonials />
      <ContactForm />
    </>
  );
}
