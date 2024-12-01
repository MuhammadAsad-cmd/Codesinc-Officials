import AllProjects from "@/app/_components/AllProjects/AllProjects";
import Breadcrumbs from "@/app/_components/BreadCrumbs/Breadcrumbs";
import Clients from "@/app/_components/Clients/Clients";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import ProjectContact from "@/app/_components/Common/Contact/ProjectContact";
import EmergencySupport from "@/app/_components/EmergencySupport/EmergencySupport";
import ReusableHero from "@/app/_components/ReusableHero/ReusableHero";
import ContentSection from "@/app/_components/SectionComponents/ContentSection";
import Maintenance from "@/app/_components/ServicesComponent/Maintenence";
import Maintenence from "@/app/_components/ServicesComponent/Maintenence";
import Outsource from "@/app/_components/ServicesComponent/Outsource";
import Services from "@/app/_components/ServicesComponent/Services";
import Testimonials from "@/app/_components/Testimonials/Testimonials";
import Image from "next/image";
import React from "react";

const page = () => {
  const servicesData = [
    {
      imgSrc: "/images/cms/dot1-service.png",
      altText: "Custom Web Development",
      title: "Custom Web Development",
      description:
        "We design, develop, and test flexible and scalable custom solutions which are tailor-made to address your precise business needs. You can avail our custom development services now.",
    },
    {
      imgSrc: "/images/cms/support.png",
      altText: "Net Consulting",
      title: "Net Consulting",
      description:
        "Using state-of-the-art technologies, time proven processes and practices, delivering great user-experience with the dot net mobile app development services across iOS, Android and Windows.",
    },
    {
      imgSrc: "/images/cms/db.png",
      altText: "Microsoft Azure Development",
      title: "Microsoft Azure Development",
      description:
        "Develop Multi-tier cloud applications which are easily deployed and scaled to help you realize cloud ambitions by leveraging Microsoft Azure and dot Net on versatile capabilities.",
    },
    {
      imgSrc: "/images/cms/mobile.png",
      altText: "Net Mobile App Development",
      title: "Net Mobile App Development",
      description:
        "Using state-of-the-art technologies, time proven processes and practices, delivering great user-experience with the dot net mobile app development.",
    },
    {
      imgSrc: "/images/cms/bug.png",
      altText: "Testing & Bug Fixing",
      title: "Testing & Bug Fixing",
      description:
        "Helping our clients to fix bugs and build solutions for their already existing dot Net applications. We aim to serve our clients in the best professional manner and with 100% satisfaction.",
    },
    {
      imgSrc: "/images/cms/migrate.png",
      altText: "Dot Net Application Migration",
      title: "Dot Net Application Migration",
      description:
        "Migration legacy and other applications to the Dot Net platform while boosting up its performance. We deliver secure, robust, and scalable solutions to our valued customers.",
    },
  ];

  const maintenanceData = {
    title: "Asp Dot Net Web Development Features",
    subtitle:
      "Codesinc makes use of the numerous features of ASP dot net web application development to develop and organize strong and scalable packages that exceed purchase expectations and provide an extended user experience to the actual customers.",
    features: [
      {
        imgSrc: "/images/cms/dot1-backup.png",
        title: "Website Backup",
        description:
          "Codesinc has developers that create backup of your Asp site on off-site locations or on the cloud and save different versions and can promptly restore all your saved data, speeding up the recovery time from accidental file deletions and hacking activities.",
      },
      {
        imgSrc: "/images/cms/dot1-security.png",
        title: "Security Monitoring",
        description:
          "Our Dot Net Development Services offers the best security services to help protect against malware, leakage and threats to your asp.net web applications. We are committed to design security solutions for our customers to meet their future challenges.",
      },
      {
        imgSrc: "/images/cms/dot1-speed.png",
        title: "Professional Help",
        description:
          "Seek experts help throughout the journey of ASP dot Net web development for guidance, advice, suggestions and get answers to your queries. Our professionals are devoted to assist our customers in all the situations to make them successful.",
      },
    ],
    buttonText: "Get Started",
  };

  const CustomProjectContact = (
    <ProjectContact
      bgColor="bg-DeepBlue"
      borderColor="border-[#426680]"
      borderBottom="border-white"
    />
  );
  return (
    <>
      <ReusableHero
        backgroundImage="/images/logos/drupal-main.png"
        iconImage="/images/cms/dot1-icon.png"
        title=" Hire Best Asp.Net Development Services"
        description="Codesinc delivers reliable Asp dot Net development services
                  which caters to the goals and needs of your business. We give
                  highly scalable and result oriented Asp.Net web development
                  services."
        buttonText="View Detail"
        buttonLink="#second-sec"
        textColor="text-white"
        buttonColor="text-DeepBlue"
        iconWidth={247}
        iconHeight={131}
        rightSection={CustomProjectContact}
      />

      <Breadcrumbs
        title="ASP.Net Development"
        breadcrumbPath="/woocommerce-development"
      />
      <EmergencySupport
        HoverBtn="hover:bg-white"
        hoverColor="hover:text-lightblue"
        BgColor="bg-[#2a5679]"
      />

      <ContentSection
        title="Asp.Net Development"
        description="Asp dot Net development has taken giant strides in the IT world. ASP that is active server pages, is built to create interesting dynamic web pages and web applications. The dot Net framework is a valuable tool for software programmers and developers to create features rich website. Asp dot net web development is the next gen platform to create enterprise level web applications. We are the leading Asp dot net development company. Our highly skilled Dot Net developers can take care of your business and help you in your business growth and deliver powerful dot Net web application as per your need and fulfilling your business requirements."
        Imgsrc="/images/cms/dot1-big.png"
        altsrc="dot1"
        borderColor="border-DeepBlue"
        textColor="text-DeepBlue"
      />
      <Maintenance
        title={maintenanceData.title}
        subtitle={maintenanceData.subtitle}
        features={maintenanceData.features}
        buttonText={maintenanceData.buttonText}
        borderBottom="border-DeepBlue"
        textColor="text-DeepBlue"
      />
      <Outsource
        title="OutSource Asp.Net Developers for Longer Projects"
        des1="We have a large talent pool of expert dot Net developers to provide you a custom dedicated team for longer period of time to work as in-house team or a separate extension to your business."
        Imgsrc="/images/cms/dot1-outsource.jpg"
        Imgalt="Software Development"
        borderColor="border-DeepBlue"
        textColor="text-DeepBlue"
      />

      <Services
        title="Asp.Net Web Development Services"
        des1="Our .Net development team has vast expertise in development and implementation of"
        des2=".net web development projects to give you a perfect .net experience."
        items={servicesData}
        hoverBgColor="hover:bg-DeepBlue"
        borderBottom="border-DeepBlue"
      />

      <AllProjects />
      <Testimonials />
      <Clients />
      <ContactForm />
    </>
  );
};

export default page;
