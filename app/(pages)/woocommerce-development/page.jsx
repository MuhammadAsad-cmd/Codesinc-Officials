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
              <div className="mt-[50px] w-[66.6%] border-white pb-[200px]">
                <Image
                  width={450}
                  height={90}
                  unoptimized
                  src="/images/logos/woocommerce-icon.png"
                  alt="drupal"
                />
                <h1 className="mb-2.5 mt-5 font-montserrat text-[46px] font-bold uppercase leading-[50px] text-white">
                  Best Woocommerce Development Agency
                </h1>
                <p className="mt-[25px] text-base font-medium leading-7 text-white">
                  Our WooCommerce developers have an experience of over 13 years
                  in development of amazing WooCommerce stores.
                </p>
                <div className="mt-[30px]">
                  <a
                    href="#second-sec"
                    className="text-PlumPurple font-montserrat text-xl font-extrabold leading-7 hover:underline"
                  >
                    view detail &gt;
                  </a>
                </div>
              </div>
              <div className="w-[33.33%]">
                <ProjectContact
                  bgColor="bg-PlumPurple"
                  borderColor="border-[#70526a]"
                  borderBottom="border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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
      <Clients />
      <ContactForm />
    </>
  );
};

export default page;
