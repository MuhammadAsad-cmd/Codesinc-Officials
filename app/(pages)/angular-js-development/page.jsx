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
                  width={157}
                  height={165}
                  unoptimized
                  src="/images/cms/ang1-icon.png"
                  alt="drupal"
                />
                <h1 className="mb-2.5 mt-5 font-montserrat text-[46px] font-bold uppercase leading-[50px] text-white">
                  Angular JS Application Development Services
                </h1>
                <p className="mt-[25px] text-base font-medium leading-7 text-white">
                  Hire our AngularJS developers to get the best AngularJS
                  development services and turn your apps or websites fast,
                  scalable and appealing. We build only what you actually need.
                </p>
                <div className="mt-[30px]">
                  <a
                    href="#second-sec"
                    className="text-deepRed font-montserrat text-xl font-extrabold leading-7 hover:underline"
                  >
                    view detail &gt;
                  </a>
                </div>
              </div>
              <div className="w-[33.33%]">
                <ProjectContact
                  bgColor="bg-deepRed"
                  borderColor="border-[#a9423d]"
                  borderBottom="border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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

      <AllProjects />
      <Clients />
      <ContactForm />
    </>
  );
};

export default page;
