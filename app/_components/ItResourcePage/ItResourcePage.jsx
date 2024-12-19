"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import ContactsForm from "../Common/Contact/ContactsForm";
import Breadcrumbs from "../BreadCrumbs/Breadcrumbs";
import ServicesGrid from "../ServicesGrid/ServicesGrid";
import AOS from "aos";
import "aos/dist/aos.css";

const ItResourcePage = () => {
  const servicesData = [
    {
      image: "/images/cms/i1.png",
      alt: "Remote Management & Monitoring",
      title: "Remote Management & Monitoring",
      description:
        "The remote management and monitoring helps the managed IT service providers to remotely monitor the client endpoints, networks and computers.",
    },
    {
      image: "/images/cms/i2.png",
      alt: "Infrastructure Management",
      title: "Infrastructure Management",
      description:
        "Our Infrastructure management services includes the optimizing of data center resources, customized workspace services, application and technical support.",
    },
    {
      image: "/images/cms/i3.png",
      alt: "Outsourced NOC Solutions",
      title: "Outsourced NOC Solutions",
      description:
        "Are you looking for outsourced NOC solutions which doesn't break the bank? Well, being an IT service provider, we serve our clients globally as well with our 24*7 outsourced NOC services.",
    },
    {
      image: "/images/cms/i4.png",
      alt: "PWell Structured Management Reports",
      title: "PWell Structured Management Reports",
      description:
        "We provide you a structured Management reporting system, essential for monitoring the mission of any organization and to make it successful.",
    },
    {
      image: "/images/cms/i5.png",
      alt: "Seamless Infrastructure Streaming",
      title: "Seamless Infrastructure Streaming",
      description:
        "Since seamless infrastructure streaming has become a basic requirement, so we design and optimize the networks to provide an excellent quality of services.",
    },
    {
      image: "/images/cms/i6.png",
      alt: "Information Security Management",
      title: "Information Security Management",
      description:
        "Our Managed IT services gives you the best security services to minimize the risk and ensures the continuity by proactively limiting the impact of a security breach",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <div
        className="h-full min-h-screen w-full bg-cover bg-center bg-no-repeat py-14 lg:py-[170px]"
        style={{ backgroundImage: "url('/images/cms/it-bg.jpg')" }}
      >
        <div className="container mx-auto flex h-full flex-col items-center justify-center space-y-8 px-4 text-center lg:flex-row lg:text-left">
          {/* Left Section */}
          <div className="md:w-3/4 lg:w-[58.33%]" data-aos="fade-right">
            <h1 className="font-montserrat mb-2.5 mt-5 text-2xl font-extrabold uppercase text-white md:text-[31px] md:leading-[35px]">
              Effective IT Support & Management Services
            </h1>
            <p className="mb-6 text-white md:text-lg">
              We are the best information technology management service
              provider.
            </p>
            <a
              href="#second-sec"
              className="inline-block text-lg font-bold text-rosePink hover:underline"
            >
              View Detail &gt;
            </a>
          </div>

          {/* Right Section */}
          <div className="md:w-3/4 md:px-4 lg:w-[41.6%]" data-aos="fade-left">
            <ContactsForm
              bgColor="ContactBg"
              textColor="text-white"
              buttonColor="bg-rosePink"
              buttonText="Get Started"
              placeholders={{
                name: "Enter Your Name *",
                email: "Enter Your Email *",
                projectType: "Choose a Project Type",
                phone: "Enter Your Phone *",
                message: "Describe Your Project *",
              }}
            />
          </div>
        </div>
      </div>
      <Breadcrumbs
        title="IT Resource Management"
        breadcrumbPath="/business-intelligence"
      />
      <div className="h-[120px] w-full bg-[url('/images/cms/meetup-bar-it.jpg')] bg-cover bg-[34%]"></div>
      <div className="container px-4">
        <div className="my-20 flex flex-col md:flex-row">
          <div className="md:w-[58.33%] lg:px-4" data-aos="fade-right">
            <div className="w- mt-6 flex items-center justify-center">
              <Image
                width={560}
                height={405}
                unoptimized
                src="/images/cms/It-big1.jpg"
                alt="Cloud"
              />
            </div>
          </div>
          <div className="md:w-[41.66%] lg:px-4" data-aos="fade-left">
            <h2 className="mb-5 mt-10 text-left text-2xl font-semibold uppercase text-Gray md:text-[30px]">
              What we do
            </h2>
            <p className="font-montserrat text-left text-[15px] font-normal leading-7 text-Gray">
              Codesinc Resource Service Management provides tracking, analysis
              and optimization of corporate and enterprise human resources to
              minimize resource utilization, cut down waste and boost up
              critical tasks, projects and processes by smart resource
              allotment.
            </p>
            <div className="flex md:items-center md:justify-center">
              <button className="mt-10 flex h-[45px] items-center justify-center bg-rosePink px-[60px] py-2.5 capitalize text-white">
                get started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f2f5f9] py-[50px] text-center text-Gray">
        <div className="container px-4">
          <h3 className="mb-2.5 mt-5 text-center text-2xl font-bold uppercase text-[#333333] md:text-[30px] md:leading-9">
            We take an agile and collective approach to leverage growth
          </h3>
          <p className="font-montserrat text-[15px] font-normal leading-7 text-Gray">
            We create lifetime memorable experiences between your brand and the
            customers, to grow your business virtually with our IT Support &
            Management services.
          </p>
          <div className="grid grid-cols-1 gap-6 py-[50px] md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-center">
              <Image
                width={96}
                height={96}
                unoptimized
                src="/images/cms/it1.png"
                alt="Cloud"
              />
              <h4 className="font-montserrat my-2.5 text-lg font-bold text-Gray">
                Cloud Services
              </h4>
              <p className="mb-2.5 text-[15px] font-normal leading-[22px]">
                Flexible enough to develop and deliver applications,
                information, and critical resources to your locations in a safe,
                secure manner with our managed IT and cloud services.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                width={96}
                height={96}
                unoptimized
                src="/images/cms/it2.png"
                alt="Cloud"
              />
              <h4 className="font-montserrat my-2.5 text-lg font-bold text-Gray">
                Disaster Recovery
              </h4>
              <p className="mb-2.5 text-[15px] font-normal leading-[22px]">
                Our IT services will help you consider the possibilities and
                prepare you for the unexpected. We will guide you in
                implementing an evolving, sensible and cost-effective continuity
                plan.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                width={96}
                height={96}
                unoptimized
                src="/images/cms/it3.png"
                alt="Cloud"
              />
              <h4 className="font-montserrat my-2.5 text-lg font-bold text-Gray">
                Security Services
              </h4>
              <p className="mb-2.5 text-[15px] font-normal leading-[22px]">
                Our IT managed services includes design, implementation, and
                managing a complete security plan that safeguards your networks,
                servers, databases, and applications.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                width={96}
                height={96}
                unoptimized
                src="/images/cms/it4.png"
                alt="Cloud"
              />
              <h4 className="font-montserrat my-2.5 text-lg font-bold text-Gray">
                Network & Server Management
              </h4>
              <p className="mb-2.5 text-[15px] font-normal leading-[22px]">
                Minimum network performance can be the biggest threat to your
                business productivity. Secure your business with our Network &
                IT management services
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4">
        <div className="my-28 flex flex-col md:flex-row">
          <div className="md:w-[58.33%] lg:px-4" data-aos="zoom-in">
            <div className="mt-6 flex w-full items-center justify-center">
              <Image
                width={500}
                height={375}
                unoptimized
                src="/images/cms/It-big2.jpg"
                alt="Cloud"
              />
            </div>
          </div>
          <div className="md:w-[41.66%] lg:px-4" data-aos="fade-up">
            <h2 className="mb-5 mt-10 text-left text-2xl font-semibold uppercase text-Gray md:text-[30px]">
              Resource Planning
            </h2>
            <p className="font-montserrat text-left text-[15px] font-normal leading-7 text-Gray">
              Our resource project management plan will help you identify the
              resources required to complete your project done. Our IT
              management services helps businesses to strengthen their
              strategy-development processes, plan better decisions, and then
              implement them. We guides you with solutions for specific issues
              or design a whole new approach to strategic management and
              planning.
            </p>
          </div>
        </div>
        <div className="my-28 flex flex-col md:flex-row">
          <div className="md:w-[41.66%] lg:px-4" data-aos="fade-right">
            <h2 className="mb-5 mt-10 text-left text-2xl font-semibold uppercase text-Gray md:text-[30px] md:leading-9">
              Resource Management
            </h2>
            <p className="font-montserrat text-left text-[15px] font-normal leading-7 text-Gray">
              Resource management is the efficient and effective implementation
              and allocation of a business resources when and where they are
              needed. Our IT services utilizes professional services automation
              software tools to make resource management tasks more quick and
              effective. We have expert IT support & management team with right
              skills and experiences to fulfil the job on the right time to
              leverage the business.
            </p>
          </div>
          <div className="md:w-[58.33%] lg:px-4" data-aos="fade-left">
            <div className="mt-6 flex w-full items-center justify-center">
              <Image
                width={500}
                height={375}
                unoptimized
                src="/images/cms/It-big3.jpg"
                alt="Cloud"
              />
            </div>
          </div>
        </div>
      </div>

      <ServicesGrid
        backgroundColor="bg-[#fbfbfb]"
        title="This is how we will accelerate your growth"
        data={servicesData}
        textColor="text-[#333333]"
      />
    </>
  );
};

export default ItResourcePage;
