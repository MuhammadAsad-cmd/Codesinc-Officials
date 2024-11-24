import AllProjects from "@/app/_components/AllProjects/AllProjects";
import Breadcrumbs from "@/app/_components/BreadCrumbs/Breadcrumbs";
import Clients from "@/app/_components/Clients/Clients";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import ProjectContact from "@/app/_components/Common/Contact/ProjectContact";
import EmergencySupport from "@/app/_components/EmergencySupport/EmergencySupport";
import ContentSection from "@/app/_components/SectionComponents/ContentSection";
import Maintenance from "@/app/_components/ServicesComponent/Maintenence";
import Outsource from "@/app/_components/ServicesComponent/Outsource";
import Services from "@/app/_components/ServicesComponent/Services";
import Image from "next/image";
import React from "react";

const page = () => {
  const servicesData = [
    {
      imgSrc: "/images/cms/zend1-service.png",
      altText: "Zend Web Development services",
      title: "Zend Web Development services",
      description:
        "We Provide fully customized Zend development services for our clients to fulfill their business goals.",
    },
    {
      imgSrc: "/images/cms/software.png",
      altText: "Zend Enterprise Web Applications",
      title: "Zend Enterprise Web Applications",
      description:
        "We provide extensive Zend development services with highly scalable solution for Enterprise level business.",
    },
    {
      imgSrc: "/images/cms/internet.png",
      altText: "Rich Internet Applications (RIA)",
      title: "Rich Internet Applications (RIA)",
      description:
        "RIA can deliver desktop class application features inside a web browser. Thanks to our Zend experts, we have developed and deployed numerous Zend based RIAs.",
    },
    {
      imgSrc: "/images/cms/migrate.png",
      altText: "Zend Website Upgradation and Migration",
      title: "Zend Website Upgradation and Migration",
      description:
        "We can seamlessly upgrade your Zend application to the latest version, and even can migrate it from different framework without the loss of any functionality.",
    },
    {
      imgSrc: "/images/cms/support.png",
      altText: "Zend Maintenance & Support",
      title: "Zend Maintenance & Support",
      description:
        "We do bugs fixes, update security patches, and maintain releases that impact PHP applications. We provide 24/7 professional support and fix all issues instantly.",
    },
    {
      imgSrc: "/images/cms/edit.png",
      altText: "Custom Zend Development",
      title: "Custom Zend Development",
      description:
        "Our Zend development service open the door to high end, secure and low price solution to build smart CMS, e-commerce and custom applications as per our clients' requirment.",
    },
  ];

  const maintenanceData = {
    title: "Zend Maintenance & Support",
    subtitle:
      "We are rich in Zend Framework Development technology resource on multiple fronts � professionalism, knowledge, skill, experience, management, testing, delivery, maintenance and support.",
    features: [
      {
        imgSrc: "/images/cms/zend1-backup.png",
        title: "Website Backup",
        description:
          "Our Zend engineers will help you in restoring backup of your Zend Application and your system settings, thus ensuring both configuration consistency and quick configuration optimization of your working environment.",
      },
      {
        imgSrc: "/images/cms/zend1-security.png",
        title: "Security Monitoring",
        description:
          "Our Zend engineers have expertise to use Zend Framework cryptographic and secure coding tools and provides 24/7 security monitoring to your Zend website or application.",
      },
      {
        imgSrc: "/images/cms/zend1-speed.png",
        title: "Professional Help",
        description:
          "We are a friendly team of professional and skilled Zend Development experts who provide appropriate solutions right away.",
      },
    ],
    buttonText: "Get Started",
  };
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
                  width={297}
                  height={158}
                  unoptimized
                  src="/images/cms/zend1-icon.png"
                  alt="drupal"
                />
                <h1 className="mb-2.5 mt-5 font-montserrat text-[46px] font-bold uppercase leading-[50px] text-white">
                  Adept Zend Framework Development Services
                </h1>
                <p className="mt-[25px] text-base font-medium leading-7 text-white">
                  Zend, a smart & reliable PHP framework to create customizable
                  web applications. We have vast years of experience in working
                  with Zend and Zend Application development.
                </p>
                <div className="mt-[30px]">
                  <a
                    href="#second-sec"
                    className="text-OliveGreen font-montserrat text-xl font-extrabold leading-7 hover:underline"
                  >
                    view detail &gt;
                  </a>
                </div>
              </div>
              <div className="w-[33.33%]">
                <ProjectContact
                  bgColor="bg-OliveGreen"
                  borderColor="border-[#468a35]"
                  borderBottom="border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Breadcrumbs
        title="Zend Development"
        breadcrumbPath="/zend-development"
      />
      <EmergencySupport
        HoverBtn="hover:bg-white"
        hoverColor="hover:text-lightblue"
        BgColor="bg-OliveGreen"
      />

      <ContentSection
        title="Zend DEVELOPMENT"
        description="Zend Framework has upgraded day by day and with these changes Zend has become the most favorite PHP Framework in web development world. Many big brands are using Zend for their products and CMS. Our Zend developer experts are dedicated to offer only high-quality services with custom solutions aligned to your business requisites and objectives. Zend PHP framework have bunch of amazing features and in-built technologies that have enabled the developers to create all sorts of applications. We have successfully assisted a number of companies in developing their web applications using Zend PHP framework."
        Imgsrc="/images/cms/zend1-big.png"
        altsrc="dot1"
        borderColor="border-OliveGreen"
        textColor="text-OliveGreen"
      />
      <Maintenance
        title={maintenanceData.title}
        subtitle={maintenanceData.subtitle}
        features={maintenanceData.features}
        buttonText={maintenanceData.buttonText}
        borderBottom="border-OliveGreen"
        textColor="text-OliveGreen"
      />
      <Outsource
        title="Outsource Zend Developers for longer project"
        des1="Outsource our highly skilled Zend Framework Specialists for cost effective and produce developing high quality Zend Framework applications."
        Imgsrc="/images/cms/dot1-outsource.jpg"
        Imgalt="Software Development"
        borderColor="border-OliveGreen"
        textColor="text-OliveGreen"
      />

      <Services
        title="Zend Development Services"
        des1="Deploying Zend development services as a technical approach to building innovative PHP based applications requires the right blend of"
        des2="professional experience and expertise that our PHP Zend developers are blessed with."
        items={servicesData}
        hoverBgColor="hover:bg-OliveGreen"
        borderBottom="border-OliveGreen"
      />

      <AllProjects />
      <Clients />
      <ContactForm />
    </>
  );
};

export default page;
