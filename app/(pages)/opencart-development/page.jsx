import AllProjects from "@/app/_components/AllProjects/AllProjects";
import Breadcrumbs from "@/app/_components/BreadCrumbs/Breadcrumbs";
import Clients from "@/app/_components/Clients/Clients";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import ProjectContact from "@/app/_components/Common/Contact/ProjectContact";
import EmergencySupport from "@/app/_components/EmergencySupport/EmergencySupport";
import ContentSection from "@/app/_components/SectionComponents/ContentSection";
import HowWedoIt from "@/app/_components/SectionComponents/HowWedoIt";
import ServicesList from "@/app/_components/SectionComponents/ServicesList";
import WhySection from "@/app/_components/SectionComponents/WhySection";
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
  return (
    <>
      <div className="relative w-full">
        <Image
          width={1000}
          height={627}
          unoptimized
          src="/images/logos/drupal-main.png"
          alt="Software Development"
          className="h-[880px] w-full"
        />

        {/* Overlay with Opacity */}
        <div className="absolute top-[70px] w-full py-20 pb-[30px]">
          <div className="container">
            <div className="flex">
              <div className="mt-[50px] w-[66.6%] border-white px-4 pb-[200px]">
                <Image
                  width={191}
                  height={135}
                  unoptimized
                  src="/images/logos/opencart-icon.png"
                  alt="drupal"
                />
                <h1 className="mb-2.5 mt-5 font-montserrat text-[46px] font-bold uppercase leading-[50px] text-white">
                  OpenCart Development the best ecommerce platform.
                </h1>
                <p className="mt-[25px] text-base font-medium leading-7 text-white">
                  Opencart, PHP based online store management system to create
                  engaging e-commerce solutions and optimize the online stores.
                </p>
                <div className="mt-[30px]">
                  <a
                    href="#second-sec"
                    className="font-montserrat text-xl font-extrabold leading-7 text-PlumPurple hover:underline"
                  >
                    view detail &gt;
                  </a>
                </div>
              </div>
              <div className="w-[33.33%]">
                <ProjectContact
                  bgColor="bg-[#34c8f0]"
                  borderColor="border-[#2e6c85]"
                  borderBottom="border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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
      <AllProjects />
      <Clients />
      <ContactForm />
    </>
  );
};

export default page;
