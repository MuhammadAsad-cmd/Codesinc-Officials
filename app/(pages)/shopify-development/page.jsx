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
        "Our Shopify developers analyzes the project requirements and offers the best solution for your needs. The project terms and timelines are based on the expert consultation provided by our Shopify developer.",
    },
    {
      icon: "/images/creation-2.png",
      title: "creation",
      description:
        "Designing, development and consulting, we do it all here. We give Shopify solutions with highest quality standards. We create rich user experience, search engine and mobile friendly through optimize CMS.",
    },
    {
      icon: "/images/creation-3.png",
      title: "support",
      description:
        "Our Shopify experts helps you to get comfortable with the system and provides full time support and maintenance to ensure that your online business is effectively meeting with its objectives.",
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
                  width={185}
                  height={185}
                  unoptimized
                  src="/images/cms/shopify-bag.png"
                  alt="drupal"
                />
                <h1 className="mb-2.5 mt-5 font-montserrat text-[46px] font-bold uppercase leading-[50px] text-white">
                  Shopify Website Development Services
                </h1>
                <p className="mt-[25px] text-base font-medium leading-7 text-white">
                  Develop Responsive, Custom Shopify Ecommerce with Effective
                  User Interface by our Shopify Experts. We give profitable,
                  stunning and a impactful ecommerce platform.
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
                  bgColor="bg-LeafGreen"
                  borderColor="border-[#498836]"
                  borderBottom="border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Breadcrumbs
        title="Shopify Development"
        breadcrumbPath="/shopify-development"
      />
      <EmergencySupport
        HoverBtn="hover:bg-white"
        hoverColor="hover:text-lightblue"
        BgColor="bg-LeafGreen"
      />

      <ContentSection
        title="Shopify Development"
        description="Shopify development is one of the best ecommerce platform ideal for small to mid-sized businesses offering them user friendly systems like product inventory, order management and payment gateways. Our Shopify expert developers have this ability to develop sensational and responsive Shopify ecommerce website giving our clients the guaranteed satisfaction.Our Shopify developers gives professionally coded and designed Shopify Website with all your desired functionalities. Shopify is a robust and powerful ecommerce platform which will set your online store in one go."
        Imgsrc="/images/cms/shopify-big.png"
        altsrc="shopify"
        borderColor="border-LeafGreen"
        textColor="text-LeafGreen"
      />
      <WhySection
        borderColor="border-[#3695bd]"
        textColor="text-LeafGreen"
        title="Why Choose Shopify"
        description="Shopify is an excellent platform in ecommerce development. Shopify development services includes professional templates & custom Shopify themes to give your online store the look you desire and can customize the way you want. It has this great feature of built-in website optimizer to help showcase your store on the top in search engines, making it the first choice for online business owners. Through this, your customers can be able to browse and shop from your Shopify online store. This will enhance the popularity of your store and also will help you to know all the necessary information of your store like products, orders, sales statistics and customer data even from your phones."
        ImgSrc="/images/cms/service-shopify.png"
        altSrc="service-shopify"
      />
      <ServicesList
        title="Shopify Services"
        des1="Shopify is a versatile platform with its hundreds of themes and powerful features. Our Shopify skilled and professional developers gives you premium design and development services and complete support to take your online business to the next level."
        des2="Our Shopify theme development follows standard to develop Shopify themes which works on all browsers and on mobile devices. We give Shopify customizations services and retain the original theme while customizing it."
        des3="Our Shopify Development services includes of data migration in raw format to shopify format. Our Shopify experts makes the entire transformation and migration process smooth and hassle free."
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
