import HomePageProjects from "@/app/_components/AllProjects/HomePageProjects";
import Breadcrumbs from "@/app/_components/BreadCrumbs/Breadcrumbs";
import Clients from "@/app/_components/Clients/Clients";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import ProjectContact from "@/app/_components/Common/Contact/ProjectContact";
import EmergencySupport from "@/app/_components/EmergencySupport/EmergencySupport";
import ReusableHero from "@/app/_components/ReusableHero/ReusableHero";
import ContentSection from "@/app/_components/SectionComponents/ContentSection";
import HowWedoIt from "@/app/_components/SectionComponents/HowWedoIt";
import ServicesList from "@/app/_components/SectionComponents/ServicesList";
import WhySection from "@/app/_components/SectionComponents/WhySection";
import Testimonials from "@/app/_components/Testimonials/Testimonials";
import Image from "next/image";
import React from "react";
import Head from "next/head";

const page = () => {
  const items = [
    {
      icon: "/images/creation-1.png",
      title: "analysis",
      description:
        "Our Prestashop developers analyzes the project requirements and offers the best solution for your needs. The project terms and timelines are based on the expert consultation provided by our Prestashop developer.",
    },
    {
      icon: "/images/creation-2.png",
      title: "creation",
      description:
        "Designing, development and consulting, we do it all here. We give Prestashop solutions with highest quality standards. We create rich user experience, search engine and mobile friendly through optimize CMS.",
    },
    {
      icon: "/images/creation-3.png",
      title: "support",
      description:
        "Our Prestashop experts helps you to get comfortable with the system and provides full time support and maintenance to ensure that your online business is effectively meeting with its objectives.",
    },
  ];

  const CustomProjectContact = (
    <ProjectContact
      bgColor="bg-black"
      borderColor="border-[#2b2b29]"
      borderBottom="border-white"
    />
  );
  return (
    <>
    <Head>
      <title>Prestashop Development & E-commerce Solutions | Custom Shopping Cart Development</title>
      <meta
        name="description"
        content="Develop a user-friendly shopping cart with our Prestashop development services. Our Prestashop developers will help you enhance sales and performance for your business with custom solutions."
      />
      <meta
        name="keywords"
        content="Prestashop Development, E-commerce Development, Custom Prestashop Solutions, Prestashop Shopping Cart, Prestashop Customization, Prestashop Theme Development, Hire Prestashop Developers"
      />
      <meta name="author" content="YourCompanyName" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Prestashop Development & E-commerce Solutions | Custom Shopping Cart Development"
      />
      <meta
        property="og:description"
        content="Develop a user-friendly shopping cart with our Prestashop development services. Our Prestashop developers will help you enhance sales and performance for your business with custom solutions."
      />
      <meta
        property="og:image"
        content="/images/logos/prestoshop-icon.png"
      />
      <meta property="og:url" content="https://yourwebsite.com/prestashop-development" />
      <meta property="og:site_name" content="YourCompanyName" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:title"
        content="Prestashop Development & E-commerce Solutions | Custom Shopping Cart Development"
      />
      <meta
        property="twitter:description"
        content="Develop a user-friendly shopping cart with our Prestashop development services. Our Prestashop developers will help you enhance sales and performance for your business with custom solutions."
      />
      <meta
        property="twitter:image"
        content="/images/logos/prestoshop-icon.png"
      />
    </Head>
      <ReusableHero
        backgroundImage="/images/logos/drupal-main.png"
        iconImage="/images/logos/prestoshop-icon.png"
        title=" Prestashop Development And E-commerce Solution."
        description=" Develop the user friendly shopping cart with our Prestashop
                  development services. Our Prestashop developers will help you
                  improve sales and performance for your business."
        buttonText="View Detail"
        buttonLink="#second-sec"
        textColor="text-white"
        buttonColor="text-LeafGreen"
        iconWidth={115}
        iconHeight={172}
        rightSection={CustomProjectContact}
      />
      <Breadcrumbs
        title="Prestashop Development"
        breadcrumbPath="/opencart-development"
      />
      <EmergencySupport
        HoverBtn="hover:bg-white"
        hoverColor="hover:text-lightblue"
        BgColor="bg-LeafGreen"
      />

      <ContentSection
        title="Prestashop development"
        description="Prestashop open source shopping cart system fulfils your requirements for the desired PrestaShop ecommerce development. Prestashop development services includes lightweight, quick and effective e-commerce site allowing you to simply update and install anything you desires. With a variety of themes and compatible interface, PrestaShop custom development provides B2B solution for any company."
        Imgsrc="/images/presto-big.png"
        altsrc="presto"
        borderColor="border-LeafGreen"
        textColor="text-LeafGreen"
      />
      <WhySection
        borderColor="border-[#3695bd]"
        textColor="text-LeafGreen"
        title="Why Choose PrestaShop"
        description="PrestaShop is free, secure and open source ecommerce platform packed with over 275+ features for your online business. Prestashop theme and module development allows you to completely change the look and feel of your online store. Prestashop is SEO optimized and comes with a number of payment providers. Prestashop supports SSL certificates securing your online store. Prestashop is designed to cater your specific needs. PrestaShop development services includes third party API integration, updation and maintenance, custom module development, data migration, responsive design and much more."
        ImgSrc="/images/service-presta.png"
        altSrc="service-opencart"
      />
      <ServicesList
        title="Prestashop Services:"
        des1="The OpenCart services include website creation and customization, custom theme design, custom programming and ecommerce conversion optimization along with OpenCart shipping and payment module development."
        des2="Opencart development allows installing numerous Opencart extensions and Opencart modules to help boost up the performance of the online store. Opencart custom module development gives the opportunity to add your own custom functionality(module) in the existing Opencart package."
        des3="Mobikul, an Opencart mobile app can converts your Opencart store to a mobile application, making it easy for the online users to easily visit your online store on the go. Opencart mobile app helps using all the features of your e-store through the mobile application."
        head1="Opencart Module Development:"
        head2="Opencart Mobile App Development:"
        borderColor="border-white"
        textColor="text-white"
        BgColor="bg-LeafGreen"
        ColorHead="text-white"
      />
      <HowWedoIt
        borderColor="border-LeafGreen"
        textColor="text-LeafGreen"
        items={items}
      />
      <HomePageProjects />
      <Testimonials />
      <Clients />
      <ContactForm />
    </>
  );
};

export default page;
