import React from "react";
import Breadcrumbs from "../BreadCrumbs/Breadcrumbs";
import Image from "next/image";
import ProjectContact from "../Common/Contact/ProjectContact";
import EmergencySupport from "../EmergencySupport/EmergencySupport";
import ContentSection from "../SectionComponents/ContentSection";
import WhySection from "../SectionComponents/WhySection";
import ServicesList from "../SectionComponents/ServicesList";
import HowWedoIt from "../SectionComponents/HowWedoIt";
import ReusableHero from "../ReusableHero/ReusableHero";

const DruptalPage = () => {
  const items = [
    {
      icon: "/images/creation-1.png",
      title: "analysis",
      description:
        "Our Drupal developers analyzes the project requirements and offers the best solution for your needs. The project terms and timelines are based on the expert consultation provided by our Drupal developer.",
    },
    {
      icon: "/images/creation-2.png",
      title: "creation",
      description:
        "Designing, development and consulting, we do it all here. We give Drupal solutions with highest quality standards. We create rich user experience, search engine and mobile friendly through optimize CMS.",
    },
    {
      icon: "/images/creation-3.png",
      title: "support",
      description:
        "Our Drupal experts helps you to get comfortable with the system and provides full time support and maintenance to ensure that your online business is effectively meeting with its objectives.",
    },
  ];
  const CustomProjectContact = (
    <ProjectContact
      bgColor="bg-[#0077c0]"
      borderColor="border-[#31607e]"
      borderBottom="border-white"
    />
  );
  return (
    <>
      <ReusableHero
        backgroundImage="/images/logos/drupal-main.png"
        iconImage="/images/logos/drupal-icon.png"
        title="Business Process Outsourcing Solutions"
        description="  Offering cost-effective, flexible and scalable BPO services to clients, and helping ensure competitive advantage through the power of Business Process Outsourcing Solutions"
        buttonText="View Detail"
        buttonLink="#second-sec"
        textColor="text-white"
        buttonColor="text-goldenYellow"
        iconWidth={135}
        iconHeight={135}
        rightSection={CustomProjectContact}
      />

      <Breadcrumbs title="Drupal Development" breadcrumbPath="/web-design" />
      <EmergencySupport BgColor="bg-darkBlue" />

      <ContentSection
        title=" DRUPAL DEVELOPMENT"
        description=" Among the leading CMS, Drupal is one of the popular and sturdy
                  platform in the web development industry. It is flexible,
                  highly scalable and supports large amount of data flawlessly.
                  Technology and businesses transforms into powerful digital
                  solutions with Drupal web development services. Drupal helps
                  in building the versatile and structured content that today’s
                  dynamic web experience demands.As a Drupal web development
                  agency, we provide “out-of-the-box” development services for
                  the disruptive technology without disruption to your business."
        Imgsrc="/images/drupal-big.png"
        altsrc="drupal"
        borderColor="border-darkBlue"
        textColor="text-darkBlue"
      />
      <WhySection
        borderColor="border-darkBlue"
        textColor="text-darkBlue"
        title=" Why Choose Drupal Commerce."
        description="Drupal Commerce is the world’s favorite platform to develop
                unique eStores. This feature of Drupal comes with multi language
                function and responsive built-in designed themes. Drupal’s third
                party integration tools making it a great hub for your ecommerce
                businesses. Create your web, mobile and custom ecommerce
                solutions with Drupal commerce. Drupal ecommerce development
                services comes up with the advance range of features for your
                online store. The development with Drupal commerce is the best
                solution for your eCommerce stores."
        ImgSrc="/images/service-drupal.png"
        altSrc="service-drupal"
      />
      <ServicesList
        title="  Drupal Services:"
        des1="Our expert Drupal developers executes the client's idea to design,
              develop and deploy a custom Drupal website. We offer highly
              advanced and flexible Drupal web and module development services
              to meet your business goals."
        des2=" Drupal module development meets the need of almost every website
              with the availability of thousands of Drupal add-on modules.
              Module development with Drupal will helps you administer your
              website, supports events, builds community and easily manage media
              files."
        des3=" Our Drupal website developers works out comprehensive plans and
              frameworks using diverse technologies which suits perfectly for
              the development needs of a mobile website. We use Drupal standard
              framework which is highly scalable and easily upgradable for
              Drupal applications."
        head1=" Drupal Module Development:"
        head2=" Website Development Services:"
        head3="ll"
        borderColor="border-darkBlue"
        textColor="text-white"
        BgColor="bg-darkBlue"
        ColorHead="text-goldenYellow"
      />
      <HowWedoIt
        items={items}
        textColor="text-darkBlue"
        borderColor="border-darkBlue"
      />
    </>
  );
};

export default DruptalPage;
