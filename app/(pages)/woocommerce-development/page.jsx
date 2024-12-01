import AllProjects from "@/app/_components/AllProjects/AllProjects";
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
import React from "react";

const page = () => {
  const items = [
    {
      icon: "/images/creation-1.png",
      title: "analysis",
      description:
        "Our WooCommerce developers analyzes the project requirements and offers the best solution for your needs. The project terms and timelines are based on the expert consultation provided by our WooCommerce developer.",
    },
    {
      icon: "/images/creation-2.png",
      title: "creation",
      description:
        "Designing, development and consulting, we do it all here. We give WooCommerce solutions with highest quality standards. We create rich user experience, search engine and mobile friendly through optimize CMS.",
    },
    {
      icon: "/images/creation-3.png",
      title: "support",
      description:
        "Our WooCommerce experts helps you to get comfortable with the system and provides full time support and maintenance to ensure that your online business is effectively meeting with its objectives.",
    },
  ];
  const CustomProjectContact = (
    <ProjectContact
      bgColor="bg-PlumPurple"
      borderColor="border-[#70526a]"
      borderBottom="border-white"
    />
  );
  return (
    <>
      <ReusableHero
        backgroundImage="/images/logos/drupal-main.png"
        iconImage="/images/logos/woocommerce-icon.png"
        title="Best Woocommerce Development Agency"
        description=" Our WooCommerce developers have an experience of over 13 years in development of amazing WooCommerce stores."
        buttonText="View Detail"
        buttonLink="#second-sec"
        textColor="text-white"
        buttonColor="text-PlumPurple"
        iconWidth={450}
        iconHeight={90}
        rightSection={CustomProjectContact}
      />
      <Breadcrumbs
        title="woocommerce Development"
        breadcrumbPath="/woocommerce-development"
      />
      <EmergencySupport
        HoverBtn="hover:bg-white"
        hoverColor="hover:text-lightblue"
        BgColor="bg-PlumPurple"
      />

      <ContentSection
        title="WOOCommerce DEVELOPMENT"
        description="WooCommerce, a free functional plugin for Wordpress, operates over 37% of online stores. You can create basic ecommerce store that sells a variety of products through WooCommerce website development. Woocommerce development services include affiliate transactions, physical and digital goods. WooCommerce plugin development supports multilingual plugins, also supports discount features plugin, tax control features plugin and warehouse control features plugin WooCommerce has a wide range of wordpress themes to build out the store front."
        Imgsrc="/images/woocommerce-big.png"
        altsrc="woocommerce"
        borderColor="border-PlumPurple"
        textColor="text-PlumPurple"
      />
      <WhySection
        borderColor="border-PlumPurple"
        textColor="text-PlumPurple"
        title="Why Choose WooCommerce."
        description="WooCommerce website development will helps you to quickly and easily sell your products online. Through WooCommerce custom development, you can manage inventory and shipping of any e-commerce store, take secure payments and can sort taxes automatically. WooCommerce is by far the best designed and most popular ecommerce plugin for Wordpress. WooCommerce website development has all features to support your online store. WooCommerce development services can help you build the e-store you want and have it look the way you want."
        ImgSrc="/images/service-woo.png"
        altSrc="service-woo"
      />
      <ServicesList
        title="WooCommerce Services:"
        des1="WooCommerce website design and development services enables you to run quickly your online shop without any hassle.WooCommerce expert developers gives the best user friendly online shopping experience"
        des2="WooCommerce custom development includes WordPress store customization, product addition, data import, plugin development and customization, storefront theme customization, customized Wordpress shopping cart and WooCommerce versions upgrade."
        des3="WooCommerce design and development services includes WooCommerce theme development, customization and modification, responsive templates creation, PSD to WooCommerce and logo / banner creation."
        head1="WooCommerce Custom Development:"
        head2="WooCommerce Design & Development Services:"
        borderColor="border-white"
        textColor="text-white"
        BgColor="bg-PlumPurple"
        ColorHead="text-white"
      />
      <HowWedoIt
        borderColor="border-PlumPurple"
        textColor="text-PlumPurple"
        items={items}
      />
      <AllProjects />
      <Testimonials />
      <Clients />
      <ContactForm />
    </>
  );
};

export default page;
