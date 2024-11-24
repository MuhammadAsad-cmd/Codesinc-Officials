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
                  width={115}
                  height={172}
                  unoptimized
                  src="/images/logos/prestoshop-icon.png"
                  alt="drupal"
                />
                <h1 className="mb-2.5 mt-5 font-montserrat text-[46px] font-bold uppercase leading-[50px] text-white">
                  Prestashop Development And E-commerce Solution.
                </h1>
                <p className="mt-[25px] text-base font-medium leading-7 text-white">
                  Develop the user friendly shopping cart with our Prestashop
                  development services. Our Prestashop developers will help you
                  improve sales and performance for your business.
                </p>
                <div className="mt-[30px]">
                  <a
                    href="#second-sec"
                    className="text-LeafGreen font-montserrat text-xl font-extrabold leading-7 hover:underline"
                  >
                    view detail &gt;
                  </a>
                </div>
              </div>
              <div className="w-[33.33%]">
                <ProjectContact
                  bgColor="bg-black"
                  borderColor="border-[#2b2b29]"
                  borderBottom="border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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
      <AllProjects />
      <Clients />
      <ContactForm />
    </>
  );
};

export default page;
