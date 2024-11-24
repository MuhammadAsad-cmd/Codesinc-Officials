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
      imgSrc: "/images/cms/php1-service.png",
      altText: "Affordability",
      title: "Affordability",
      description:
        "We are recognized for turning in the top class php development services in reasonable pricing. We help our clients by decreasing their in-house development fee and handing over first-class high-quality give up-product.",
    },
    {
      imgSrc: "/images/cms/panel.png",
      altText: "24/7 customer support",
      title: "24/7 customer support",
      description:
        "We offer 24/7 technical support to the customers for all sort of internet improvement services with our divergent programming and php web application development services.",
    },
    {
      imgSrc: "/images/cms/social.png",
      altText: "Trouble unfastened communication",
      title: "Trouble unfastened communication",
      description:
        "Professionals are available for consistent communique through telephone, e-mail, chat and Skype in conjunction with day by day/weekly reporting. Please get in touch with us on codes-inc.com or call at +1 (800) 214-3513",
    },
  ];

  const maintenanceData = {
    title: "CRM and CMS development",
    subtitle:
      "Plug-ins and element development to beautify your modern-day net utility without converting the original shape of the utility.net portal improvement for exclusive fields consisting of, journey, finance, proportion & shares, community, style, affiliates network, enjoyment, hotel and restaurants and so forth.",
    features: [
      {
        imgSrc: "/images/cms/php1-backup.png",
        title: "Website Backup",
        description:
          "Our PHP web application development services includes automatic backup of your PHP website files and databases, saves them to the cloud and helps storing.",
      },
      {
        imgSrc: "/images/cms/support22.png",
        title: "Php maintenance and support",
        description:
          "Our PHP support & maintenance team manages all your stress and keeps focus on maintaining & securing the code to keep your PHP website up & running.",
      },
      {
        imgSrc: "/images/cms/php1-security.png",
        title: "Security Monitoring",
        description:
          "Our experts of PHP development company uses the best security services to safeguard your website and ensures everything stays running.",
      },
      {
        imgSrc: "/images/cms/php1-speed.png",
        title: "Professional Help",
        description:
          "Our PHP developers offers 24/7 live support for the website guidance, suggestions and answers for your queries you may need.",
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
                  width={228}
                  height={118}
                  unoptimized
                  src="/images/cms/php1-icon.png"
                  alt="drupal"
                />
                <h1 className="mb-2.5 mt-5 font-montserrat text-[46px] font-bold uppercase leading-[50px] text-white">
                  php web development services
                </h1>
                <p className="mt-[25px] text-base font-medium leading-7 text-white">
                  Codesinc creates web applications, portal and ecommerce
                  solutions. Develop a high standard PHP application with us.
                </p>
                <div className="mt-[30px]">
                  <a
                    href="#second-sec"
                    className="text-SlateBlue font-montserrat text-xl font-extrabold leading-7 hover:underline"
                  >
                    view detail &gt;
                  </a>
                </div>
              </div>
              <div className="w-[33.33%]">
                <ProjectContact
                  bgColor="bg-SlateBlue"
                  borderColor="border-[#4b5286]"
                  borderBottom="border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Breadcrumbs title="PHP Development" breadcrumbPath="/php-development" />
      <EmergencySupport
        HoverBtn="hover:bg-white"
        hoverColor="hover:text-lightblue"
        BgColor="bg-SlateBlue"
      />

      <ContentSection
        title="PHP DEVELOPMENT"
        description="We offer php web development services in United States (US) primarily based on personal home page development. Our group of gifted programmers listen attentively to your queries and execute organization-wide software development. Our aim is to make sure you get the best return for your investment.

Php is utilized in 75% of the web sites and for good reason. Some of largest web sites at the internet use php for website and web application development, which includes top giants like Yahoo, Wikipedia, and Facebook"
        Imgsrc="/images/cms/php1-big.png"
        altsrc="dot1"
        borderColor="border-SlateBlue"
        textColor="text-SlateBlue"
      />
      <Maintenance
        title={maintenanceData.title}
        subtitle={maintenanceData.subtitle}
        features={maintenanceData.features}
        buttonText={maintenanceData.buttonText}
        borderBottom="border-SlateBlue"
        textColor="text-SlateBlue"
      />
      <Outsource
        title="Outsource PhP Developers for Longer Projects"
        des1="Hire our dedicated AngularJS experts for occasional help or for full time AngularJS web & application developments."
        Imgsrc="/images/cms/php1-outsource.jpg"
        Imgalt="Software Development"
        borderColor="border-SlateBlue"
        textColor="text-SlateBlue"
      />

      <Services
        title="We've worked in Agile surroundings and Waterfall method."
        des1="Please let us know how we should upload cost on your initiatives and be an associate to your custom Hypertext Preprocessor improvement? Hire a PHP Developer from Codesinc!"
        des2="If you are looking to hire talented and highly skilled PHP developers for your projects, then Codesinc can help you. We engage a team of experts with great command over a number of development languages. They can tackle even the toughest of projects with ease and a high degree of professionalism."
        items={servicesData}
        hoverBgColor="hover:bg-SlateBlue"
        borderBottom="border-SlateBlue"
      />

      <AllProjects />
      <Clients />
      <ContactForm />
    </>
  );
};

export default page;
