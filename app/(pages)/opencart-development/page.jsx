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

const page = () => {
  const items = [
    {
      icon: "/images/creation-1.png",
      title: "analysis",
      description:
        "Our OpenCart developers analyzes the project requirements and offers the best solution for your needs. The project terms and timelines are based on the expert consultation provided by our OpenCart developer.",
    },
    {
      icon: "/images/creation-2.png",
      title: "creation",
      description:
        "Designing, development and consulting, we do it all here. We give OpenCart solutions with highest quality standards. We create rich user experience, search engine and mobile friendly through optimize CMS.",
    },
    {
      icon: "/images/creation-3.png",
      title: "support",
      description:
        "Our OpenCart experts helps you to get comfortable with the system and provides full time support and maintenance to ensure that your online business is effectively meeting with its objectives.",
    },
  ];

  const CustomProjectContact = (
    <ProjectContact
      bgColor="bg-[#34c8f0]"
      borderColor="border-[#2e6c85]"
      borderBottom="border-white"
    />
  );
  return (
    <>
      <ReusableHero
        backgroundImage="/images/logos/drupal-main.png"
        iconImage="/images/logos/opencart-icon.png"
        title="OpenCart Development the best ecommerce platform."
        description=" Opencart, PHP based online store management system to create engaging e-commerce solutions and optimize the online stores."
        buttonText="View Detail"
        buttonLink="#second-sec"
        textColor="text-white"
        buttonColor="text-PlumPurple"
        iconWidth={191}
        iconHeight={135}
        rightSection={CustomProjectContact}
      />
      <Breadcrumbs
        title="Opencart Development"
        breadcrumbPath="/opencart-development"
      />
      <EmergencySupport
        HoverBtn="hover:bg-white"
        hoverColor="hover:text-lightblue"
        BgColor="bg-[#242c37]"
      />

      <ContentSection
        title="OPENCART DEVELOPMENT"
        description="Opencart, an open source and a free powerful store management system with the biggest ecommerce selection of themes and modules to expand the online store's functionality. Opencart, a fairly light platform is easy to upgrade and has a large and diverse community of developers to help setting up, maintaining and supporting your online store. Opencart posses world's most renowned payment gateways and shipping methods for the ecommerce store. Opencart comes with unlimited features that are necessary for any ecommerce stores functioning"
        Imgsrc="/images/opencart-big.png"
        altsrc="opencart"
        borderColor="border-[#1f9fc6]"
        textColor="text-[#1f9fc6]"
      />
      <WhySection
        borderColor="border-[#3695bd]"
        textColor="text-[#3695bd]"
        title="Why Choose Opencart Ecommerce Platform"
        description="Opencart, the best ecommerce solution for online store owners because it is easy to install and setup for process. Opencart ecommerce development supports a large number of languages, unlimited addition of products and categories. Opencart website development has multistore management features to operate your several stores from one admin area. The module based shopping cart of Opencart works on 11 modules extending the functionality of your online business."
        ImgSrc="/images/service-opencart.png"
        altSrc="service-opencart"
      />
      <ServicesList
        title="Opencart Services:"
        des1="The OpenCart services include website creation and customization, custom theme design, custom programming and ecommerce conversion optimization along with OpenCart shipping and payment module development."
        des2="Opencart development allows installing numerous Opencart extensions and Opencart modules to help boost up the performance of the online store. Opencart custom module development gives the opportunity to add your own custom functionality(module) in the existing Opencart package."
        des3="Mobikul, an Opencart mobile app can converts your Opencart store to a mobile application, making it easy for the online users to easily visit your online store on the go. Opencart mobile app helps using all the features of your e-store through the mobile application."
        head1="Opencart Module Development:"
        head2="Opencart Mobile App Development:"
        borderColor="border-[#626b74]"
        textColor="text-[#23bcec]"
        BgColor="bg-[#242c37]"
        ColorHead="text-[#23bcec]"
      />
      <HowWedoIt
        borderColor="border-[#2e9bb9]"
        textColor="text-[#2e9bb9]"
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
