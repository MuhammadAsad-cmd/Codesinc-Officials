import AllProjects from "@/app/_components/AllProjects/AllProjects";
import Breadcrumbs from "@/app/_components/BreadCrumbs/Breadcrumbs";
import Clients from "@/app/_components/Clients/Clients";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import ProjectContact from "@/app/_components/Common/Contact/ProjectContact";
import EmergencySupport from "@/app/_components/EmergencySupport/EmergencySupport";
import ContentSection from "@/app/_components/SectionComponents/ContentSection";
import Maintenance from "@/app/_components/ServicesComponent/Maintenence";
import Maintenence from "@/app/_components/ServicesComponent/Maintenence";
import Outsource from "@/app/_components/ServicesComponent/Outsource";
import Services from "@/app/_components/ServicesComponent/Services";
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
      imgSrc: "/images/cms/cake1-service.png",
      altText: "Custom Web Development",
      title: "Custom Web Development",
      description:
        "Wordpress features multi site websites development that allows your multiple virtual sites to share a single Wordpress installation.",
    },
    {
      imgSrc: "/images/cms/integration.png",
      altText: "Significant Customization",
      title: "Significant Customization",
      description:
        "With Wordpress Development you can achieve the look and feel of your Wordpress site as unique and individual as you are.",
    },
    {
      imgSrc: "/images/cms/extension.png",
      altText: "Custom Theme Design",
      title: "Custom Theme Design",
      description:
        "You can personalize your website and take it to the next level with the Wordpress Custom Theme and Mobile Theme Design.",
    },
    {
      imgSrc: "/images/cms/cms.png",
      altText: "Custom Plugins/Widgets development",
      title: "Custom Plugins/Widgets development",
      description:
        "Wordpress Widgets and Plugins Development can help diverting your visitors to the important parts of your website.",
    },
    {
      imgSrc: "/images/cms/cart.png",
      altText: "PSD to Wordpress Development",
      title: "PSD to Wordpress Development",
      description:
        "Meet your extensive PSD to Custom Wordpress Web Development needs with the unbeatable Wordpress Quality Services.",
    },
    {
      imgSrc: "/images/cms/software.png",
      altText: "Flexible Engagement Model",
      title: "Flexible Engagement Model",
      description:
        "Wordpress flexible Model provides you consistent and long term services to achieve all round satisfactions.",
    },
  ];

  const maintenanceData = {
    title: "CakePHP Maintenance & Support",
    subtitle:
      "Develop and Maintain Big Applications in Extensible Architecture Using CakePHP with our Maintenance & Support Team.",
    features: [
      {
        imgSrc: "/images/cms/cake1-backup.png",
        title: "Website Backup",
        description:
          "Our CakePHP development services includes the full fledged backup & restoration system to ensure your CakePHP web application is fully secure from deletion or hacking attempts.",
      },
      {
        imgSrc: "/images/cms/cake1-security.png",
        title: "Security Monitoring",
        description:
          "CakePHP has built-in authorization and security. Along with this feature of CakePHP , our CakePHP web service provides full secure monitoring to your CakePHP application or web.",
      },
      {
        imgSrc: "/images/cms/cake1-speed.png",
        title: "Professional Help",
        description:
          "Our CakePHP development company�s communication channel are open 24/7 to connect you with the right team to reduce the complexity and enhance your productivity.",
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
                  width={165}
                  height={130}
                  unoptimized
                  src="/images/cms/cake1-icon.png"
                  alt="drupal"
                />
                <h1 className="mb-2.5 mt-5 font-montserrat text-[46px] font-bold uppercase leading-[50px] text-white">
                  CakePHP Development Services
                </h1>
                <p className="mt-[25px] text-base font-medium leading-7 text-white">
                  We offer highly customized & feature rich CakePHP web
                  development to empower your business and take it to the next
                  level.
                </p>
                <div className="mt-[30px]">
                  <a
                    href="#second-sec"
                    className="text-DarkRed font-montserrat text-xl font-extrabold leading-7 hover:underline"
                  >
                    view detail &gt;
                  </a>
                </div>
              </div>
              <div className="w-[33.33%]">
                <ProjectContact
                  bgColor="bg-DarkRed"
                  borderColor="border-[#af2026]"
                  borderBottom="border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Breadcrumbs
        title="Cakephp Development"
        breadcrumbPath="/woocommerce-development"
      />
      <EmergencySupport
        HoverBtn="hover:bg-white"
        hoverColor="hover:text-lightblue"
        BgColor="bg-[#ce3e45]"
      />

      <ContentSection
        title="CakePHP DEVELOPMENT"
        description="CakePHP is the mature PHP framework for small to large scale website development projects. It offers plethora of features like caching, validation, authentication, database abstraction and much more. CakePHP certainly is one of the most scalable, robust and decorated framework with amazing performance and exceptional community support. Our diligent CakePHP developers create smooth CakePHP web interfaces that bring you assured business outputs. CakePHP is easy to use, flexible, powerful and a well-accepted framework."
        Imgsrc="/images/cms/cake1-big.png"
        altsrc="cake1"
        borderColor="border-DarkRed"
        textColor="text-DarkRed"
      />
      <Maintenance
        title={maintenanceData.title}
        subtitle={maintenanceData.subtitle}
        features={maintenanceData.features}
        buttonText={maintenanceData.buttonText}
        borderBottom="border-DarkRed"
        textColor="text-DarkRed"
      />
      <Outsource
        title="Outsource CakePHP Developers for Longer Projects"
        des1="Our dedicated CakePHP programmers and developers are available on part-time and fulltime basis to develop or maintain innovative CakePHP applications in different niches."
        Imgsrc="/images/cms/cake1-outsource.jpg"
        Imgalt="Software Development"
        borderColor="border-DarkRed"
        textColor="text-DarkRed"
      />

      <Services
        title="CakePHP Development Services"
        des1="Enabling you achieve your business goals with sophisticated and high-End CakePHP development services"
        des2="that are innovative and feature rich."
        items={servicesData}
        hoverBgColor="hover:bg-DarkRed"
      />

      <AllProjects />
      <Clients />
      <ContactForm />
    </>
  );
};

export default page;
