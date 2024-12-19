import AllProjects from "@/app/_components/AllProjects/AllProjects";
import HomePageProjects from "@/app/_components/AllProjects/HomePageProjects";
import Breadcrumbs from "@/app/_components/BreadCrumbs/Breadcrumbs";
import Clients from "@/app/_components/Clients/Clients";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import ProjectContact from "@/app/_components/Common/Contact/ProjectContact";
import EmergencySupport from "@/app/_components/EmergencySupport/EmergencySupport";
import ReusableHero from "@/app/_components/ReusableHero/ReusableHero";
import ContentSection from "@/app/_components/SectionComponents/ContentSection";
import Maintenance from "@/app/_components/ServicesComponent/Maintenence";
import Outsource from "@/app/_components/ServicesComponent/Outsource";
import Services from "@/app/_components/ServicesComponent/Services";
import Testimonials from "@/app/_components/Testimonials/Testimonials";
import React from "react";

const page = () => {
  const servicesData = [
    {
      imgSrc: "/images/cms/ang1-service.png",
      altText: "Interactive Location Apps",
      title: "Interactive Location Apps",
      description:
        "Develop Geo-tracking apps with AngularJS and mark particular position on the map, fill in the address and saves the location in the database.",
    },
    {
      imgSrc: "/images/cms/services-2.png",
      altText: "Social Networking Platforms",
      title: "Social Networking Platforms",
      description:
        "Build your real social network applications or websites from Angular JS with innovative features to build online communities and knowledge networks.",
    },
    {
      imgSrc: "/images/cms/services-6.png",
      altText: "Hybrid App Development",
      title: "Hybrid App Development",
      description:
        "Create Cross-platform mobile apps AngularJS and Ionic. AngularJS, the first UI framework designed solely for building awesome Hybrid Mobile apps.",
    },
    {
      imgSrc: "/images/cms/services-4.png",
      altText: "Ecommerce",
      title: "Ecommerce",
      description:
        "Create lightweight, flexible, adaptive, and secure and a single page shopping cart web application with useful features only with AngularJS.",
    },
    {
      imgSrc: "/images/cms/services-5.png",
      altText: "Data Analysis Tool",
      title: "Data Analysis Tool",
      description:
        "Effective tool to do quick effort and cost estimation on application development and helps predict the minimum project duration.",
    },
    {
      imgSrc: "/images/cms/services-3.png",
      altText: "Media Streaming Apps",
      title: "Media Streaming Apps",
      description:
        "Build futuristic media applications like videos, music for mobile and desktop platforms powered only by AngularJS.",
    },
  ];

  const maintenanceData = {
    title: "AngularJS Maintenance & Support",
    subtitle:
      "Our AngularJS Maintenance & Support team delivers the developed software / applications with warranty term, further support and maintenance is also provided under the SLA (Service Level Agreement).",
    features: [
      {
        imgSrc: "/images/cms/ang1-backup.png",
        title: "Website Backup",
        description:
          "Our AngularJS Development Services use standard and automate backup methods to protect your software and helps restoring it anywhere, anytime.",
      },
      {
        imgSrc: "/images/cms/ang1-security.png",
        title: "Security Monitoring",
        description:
          "Our AngularJS development experts goal is to ensure that your Angular JS web application is fully secure & has complete 24/7 security monitoring.",
      },
      {
        imgSrc: "/images/cms/ang1-speed.png",
        title: "Professional Help",
        description:
          "Our AngularJS developers gives real time support to your JS web application and also provides an active consultancy to help you out.",
      },
    ],
    buttonText: "Get Started",
  };
  const CustomProjectContact = (
    <ProjectContact
      bgColor="bg-deepRed"
      borderColor="border-[#a9423d]"
      borderBottom="border-white"
    />
  );
  return (
    <>
      <ReusableHero
        backgroundImage="/images/logos/drupal-main.png"
        iconImage="/images/cms/ang1-icon.png"
        title="Angular JS Application Development Services"
        description=" Hire our AngularJS developers to get the best AngularJS
                  development services and turn your apps or websites fast,
                  scalable and appealing. We build only what you actually need."
        buttonText="View Detail"
        buttonLink="#second-sec"
        textColor="text-white"
        buttonColor="text-deepRed"
        iconWidth={157}
        iconHeight={165}
        rightSection={CustomProjectContact}
      />

      <Breadcrumbs
        title="Angular js Development"
        breadcrumbPath="/zend-development"
      />
      <EmergencySupport
        HoverBtn="hover:bg-white"
        hoverColor="hover:text-lightblue"
        BgColor="bg-deepRed"
      />

      <ContentSection
        title="DRUPAL DEVELOPMENT"
        description="Angular JS, an open source JavaScript framework, has become a synonym for developing web application that are responsive and dynamic in behavior. Our AngularJS development services realizes the business requirements of our clients and caters them with highly optimized web application which is adaptable, secure and stable. AngularJS codes are elegant and can easily work on multiple devices. AngularJS web development is REST friendliness, rich in HTML components, supports Google and has weightless mobile-ready codes and easy to integrate."
        Imgsrc="/images/cms/ang1-outsource.png"
        altsrc="dot1"
        borderColor="border-deepRed"
        textColor="text-deepRed"
      />
      <Maintenance
        title={maintenanceData.title}
        subtitle={maintenanceData.subtitle}
        features={maintenanceData.features}
        buttonText={maintenanceData.buttonText}
        borderBottom="border-deepRed"
        textColor="text-deepRed"
      />
      <Outsource
        title="Outsource AngularJS Developers for Longer Projects"
        des1="Hire our dedicated AngularJS experts for occasional help or for full time AngularJS web & application developments."
        Imgsrc="/images/cms/ang1-outsource.jpg"
        Imgalt="Software Development"
        borderColor="border-deepRed"
        textColor="text-deepRed"
      />

      <Services
        title="AngularJS Development Services"
        des1="Our AngularJS developers utilize the latest tools and cutting edge technologies to provide the best AngularJS Development Services."
        des2=""
        items={servicesData}
        hoverBgColor="hover:bg-deepRed"
        borderBottom="border-deepRed"
      />

      <HomePageProjects />
      <Testimonials />
      <Clients />

      <ContactForm />
    </>
  );
};

export default page;
