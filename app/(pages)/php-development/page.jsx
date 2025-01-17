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
import Image from "next/image";
import React from "react";
import Head from "next/head";

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

  const CustomProjectContact = (
    <ProjectContact
      bgColor="bg-SlateBlue"
      borderColor="border-[#4b5286]"
      borderBottom="border-white"
    />
  );
  return (
    <>
    <Head>
      <title>PHP Web Development Services | Custom Web Applications & Solutions</title>
      <meta
        name="description"
        content="Codesinc provides top-notch PHP web development services for creating custom web applications, portals, and ecommerce solutions. Hire skilled PHP developers to develop high-standard PHP applications."
      />
      <meta
        name="keywords"
        content="PHP Development, Web Application Development, PHP Development Services, Custom PHP Web Applications, Hire PHP Developers, PHP Web Solutions"
      />
      <meta name="author" content="Codesinc" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="PHP Web Development Services | Custom Web Applications & Solutions"
      />
      <meta
        property="og:description"
        content="Codesinc provides top-notch PHP web development services for creating custom web applications, portals, and ecommerce solutions. Hire skilled PHP developers to develop high-standard PHP applications."
      />
      <meta
        property="og:image"
        content="/images/cms/php1-icon.png"
      />
      <meta property="og:url" content="https://yourwebsite.com/php-development" />
      <meta property="og:site_name" content="Codesinc" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:title"
        content="PHP Web Development Services | Custom Web Applications & Solutions"
      />
      <meta
        property="twitter:description"
        content="Codesinc provides top-notch PHP web development services for creating custom web applications, portals, and ecommerce solutions. Hire skilled PHP developers to develop high-standard PHP applications."
      />
      <meta
        property="twitter:image"
        content="/images/cms/php1-icon.png"
      />
    </Head>
      <ReusableHero
        backgroundImage="/images/logos/drupal-main.png"
        iconImage="/images/cms/php1-icon.png"
        title=" php web development services"
        description=" Codesinc creates web applications, portal and ecommerce
                  solutions. Develop a high standard PHP application with us."
        buttonText="View Detail"
        buttonLink="#second-sec"
        textColor="text-white"
        buttonColor="text-SlateBlue"
        iconWidth={228}
        iconHeight={118}
        rightSection={CustomProjectContact}
      />

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

      <HomePageProjects />
      <Testimonials />
      <Clients />
      <ContactForm />
    </>
  );
};

export default page;
