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
  const servicesData = [
    {
      imgSrc: "/images/cms/wordpress1-service.png",
      altText: "Multisite Development",
      title: "Multisite Development",
      description:
        "Wordpress features multi site websites development that allows your multiple virtual sites to share a single Wordpress installation.",
    },
    {
      imgSrc: "/images/cms/edit.png",
      altText: "Significant Customization",
      title: "Significant Customization",
      description:
        "With Wordpress Development you can achieve the look and feel of your Wordpress site as unique and individual as you are.",
    },
    {
      imgSrc: "/images/cms/theme.png",
      altText: "Custom Theme Design",
      title: "Custom Theme Design",
      description:
        "You can personalize your website and take it to the next level with the Wordpress Custom Theme and Mobile Theme Design.",
    },
    {
      imgSrc: "/images/cms/extension.png",
      altText: "Custom Plugins/Widgets development",
      title: "Custom Plugins/Widgets development",
      description:
        "Wordpress Widgets and Plugins Development can help diverting your visitors to the important parts of your website.",
    },
    {
      imgSrc: "/images/cms/psd.png",
      altText: "PSD to Wordpress Development",
      title: "PSD to Wordpress Development",
      description:
        "Meet your extensive PSD to Custom Wordpress Web Development needs with the unbeatable Wordpress Quality Services.",
    },
    {
      imgSrc: "/images/cms/chart.png",
      altText: "Flexible Engagement Model",
      title: "Flexible Engagement Model",
      description:
        "Wordpress flexible Model provides you consistent and long term services to achieve all round satisfactions.",
    },
  ];
  const maintenanceData = {
    title: "Wordpress Maintenance & Support",
    subtitle:
      "Here’s how our Wordpress Maintenance and Support team helps you run your business smoothly with automated backup, support, and complete security monitoring.",
    features: [
      {
        imgSrc: "/images/cms/wordpress1-backup.png",
        title: "Website Backup",
        description:
          "Our Wordpress Development Services provides full website backup for your databases and file systems. We save your data in the cloud, so no more nightmares of losing the data.",
      },
      {
        imgSrc: "/images/cms/wordpress1-security.png",
        title: "Security Monitoring",
        description:
          "Our Wordpress Developers put up security holes and use the best malware monitoring tools on your Wordpress website to ensure the website is fully secured.",
      },
      {
        imgSrc: "/images/cms/wordpress1-speed.png",
        title: "Professional Help",
        description:
          "Our Wordpress Experts assists you with all kinds of Wordpress website guidance, advice, and answers for your queries you may need.",
      },
    ],
    buttonText: "Get Started",
  };

  const CustomProjectContact = (
    <ProjectContact
      bgColor="bg-vividaqua"
      borderColor="border-[#1a7f8c]"
      borderBottom="border-white"
    />
  );
  return (
    <>
      <ReusableHero
        backgroundImage="/images/logos/drupal-main.png"
        iconImage="/images/cms/wordpress1-icon.png"
        title="Get Wordpress Development Services"
        description="  Create Powerful & Lead generation Wordpress Websites from our
                  expert Wordpress Web Developers."
        buttonText="View Detail"
        buttonLink="#second-sec"
        textColor="text-white"
        buttonColor="text-vividaqua"
        iconWidth={140}
        iconHeight={140}
        rightSection={CustomProjectContact}
      />
      <Breadcrumbs
        title="Wordpress Development"
        breadcrumbPath="/woocommerce-development"
      />
      <EmergencySupport
        HoverBtn="hover:bg-white"
        hoverColor="hover:text-lightblue"
        BgColor="bg-vividaqua"
      />

      <ContentSection
        title="WordPress Development"
        description="Creating websites on Wordpress platform would be easy to use, browser-based, no FTP software requirement, 100% customizable, built-in blogs, extended plugins functionality and can provide multiple users. Hire the services of our expert Wordpress developers to power your website or blog. Wordpress development has become the best CMS out there and more than 75 million sites are using Wordpress Development Platform from casual blogging to a complete professional looking websites."
        Imgsrc="/images/cms/wordpress1-big.png"
        altsrc="wordpress1"
        borderColor="border-vividaqua"
        textColor="text-vividaqua"
      />
      <Maintenance
        title={maintenanceData.title}
        subtitle={maintenanceData.subtitle}
        features={maintenanceData.features}
        buttonText={maintenanceData.buttonText}
        borderBottom="border-vividaqua"
        textColor="text-vividaqua"
      />
      <Outsource
        title="Outsource Wordpress Developers for longer project"
        des1=" We work in two different plans, Project-based & Dedicated
              Developer. Whether you need the occasional help or a full
              Wordpress Website Development, we bring it all to one place: here"
        Imgsrc="/images/cms/wordpress1-outsource.jpg"
        Imgalt="Software Development"
        borderColor="border-vividaqua"
        textColor="text-vividaqua"
      />

      <Services
        title=" Custom Wordpress Development Services"
        des1=" Our expert Wordpress Development Team ensures to serve your website
            a perfect landscape"
        des2="for continued business growth."
        items={servicesData}
        hoverBgColor="hover:bg-[#00b1ff]"
      />

      <AllProjects />
      <Testimonials />
      <Clients />
      <ContactForm />
    </>
  );
};

export default page;
