"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import ContactsForm from "../Common/Contact/ContactsForm";
import Breadcrumbs from "../BreadCrumbs/Breadcrumbs";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

const AzurePage = () => {
  const items = [
    {
      id: "devsecops",
      icon: "/images/cms/icon-1.png",
      label: "DevSecOps & Cloud Security",
    },
    {
      id: "devops",
      icon: "/images/cms/icon-2.png",
      label: "DevOps Automation (CI/CD)",
    },
    {
      id: "config",
      icon: "/images/cms/icon-3.png",
      label: "Configuration Management",
    },
    {
      id: "monitoring",
      icon: "/images/cms/icon-4.png",
      label: "Continuous Monitoring",
    },
    {
      id: "reports",
      icon: "/images/cms/icon-5.png",
      label: "Reports and Analytics",
    },
    {
      id: "cloud",
      icon: "/images/cms/icon-6.png",
      label: "Cloud Platform Build and Migration",
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
      <Head>
        <meta name="description" content="Explore our DevOps and Cloud Services that offer scalable solutions and agile practices to enhance efficiency, security, and reliability in your business." />
        <meta name="keywords" content="DevSecOps, Cloud Security, DevOps Automation, CI/CD, Configuration Management, Continuous Monitoring, Cloud Platform Migration, Reports and Analytics" />
        <meta name="author" content="ARPAtech" />
        <meta property="og:title" content="DevOps & Cloud Services for Seamless Operations" />
        <meta property="og:description" content="Transform your business with scalable cloud solutions and agile DevOps practices. Boost efficiency, ensure reliability, and accelerate your development pipeline with our expertise." />
        <meta property="og:image" content="/images/cms/technological-blue.jpg" />
        <meta property="og:url" content="https://www.yourwebsite.com/azurepage" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DevOps & Cloud Services for Seamless Operations" />
        <meta name="twitter:description" content="Transform your business with scalable cloud solutions and agile DevOps practices. Boost efficiency, ensure reliability, and accelerate your development pipeline with our expertise." />
        <meta name="twitter:image" content="/images/cms/technological-blue.jpg" />
        <meta name="twitter:url" content="https://www.yourwebsite.com/azurepage" />
        <link rel="canonical" href="https://www.yourwebsite.com/azurepage" />
      </Head>
      <div
        className="h-full min-h-screen w-full bg-cover bg-center bg-no-repeat py-12 md:py-[150px]"
        style={{
          backgroundImage: "url('/images/cms/technological-blue.jpg')",
        }}
      >
        <div className="container mx-auto flex h-full flex-col items-center justify-center space-y-8 overflow-hidden px-4 text-center lg:flex-row lg:text-left">
          {/* Left Section */}
          <div
            className="mt-[50px] px-4 pb-20 pt-5 md:w-1/2 lg:pb-[200px] lg:pt-[70px] xl:w-[58.33%]"
            data-aos="fade-right"
          >
            <h1 className="font-montserrat mb-2.5 mt-5 text-4xl font-extrabold uppercase leading-10 text-white">
              DevOps & Cloud Services for Seamless Operations
            </h1>
            <p className="mt-[25px] text-base font-medium leading-7 text-white">
              Transform your business with scalable cloud solutions and agile
              DevOps practices. Boost efficiency, ensure reliability, and
              accelerate your development pipeline with our expertise.
            </p>
            <div className="mt-[30px]">
              <a
                href="#second-sec"
                className="font-montserrat text-xl font-extrabold leading-7 text-[#bcce32] hover:underline"
              >
                view detail &gt;
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="px-4 md:w-1/2 xl:w-[41.6%]" data-aos="fade-left">
            <ContactsForm
              bgColor="ContactBg"
              textColor="text-white"
              buttonColor="bg-[#bcce32]"
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

      <Breadcrumbs title="Cloud Services" breadcrumbPath="/cloudservices" />
      <div className="container mt-[50px] text-center">
        <h2 className="font-montserrat my-[50px] text-[45px] font-bold leading-[50px] text-black">
          Getting Started
        </h2>
        <div className="grid grid-cols-3">
          {items.map(({ id, icon, label }) => (
            <Link key={id} href={`#${id}`} scroll={true}>
              <div className="flex cursor-pointer flex-col items-center justify-center">
                <div className="h-[70px] w-[77px]">
                  <Image
                    height={70}
                    width={70}
                    unoptimized
                    src={icon}
                    alt={label}
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="font-montserrat mb-2.5 pb-[50px] pt-[18px] text-base font-semibold text-black">
                  {label}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div id="devsecops" className="overflow-hidden bg-[#f6f6f6] py-[50px]">
        <div className="container flex flex-col px-4 md:flex-row">
          <div className="md:w-1/2" data-aos="zoom-in">
            <h3 className="mb-2 mt-[50px] text-3xl font-bold uppercase text-[#4b4a4b] md:text-4xl">
              DevSecOps & Cloud Security
            </h3>
            <p className="mb-2.5 text-[15px] font-normal leading-[30px]">
              Security is a key concern for any organization moving to the
              cloud, who needs confidence that its platforms and data are
              secure. ARPAtech helps its clients build, deploy, and operate
              cloud platform using modern DevOps approaches.
            </p>
          </div>
          <div className="mx-auto md:w-1/2" data-aos="fade-up">
            <Image
              width={400}
              height={340}
              unoptimized
              src="/images/cms/security.png"
              alt="security"
            />
          </div>
        </div>
      </div>

      <div
        id="devops"
        className="container flex flex-col overflow-hidden px-4 py-[50px] md:flex-row"
      >
        <div className="md:w-1/2" data-aos="fade-right">
          <h3 className="mb-2 mt-[50px] text-3xl font-bold uppercase text-[#4b4a4b] md:text-4xl">
            DevOps Automation (CI/CD)
          </h3>
          <p className="mb-2.5 text-[15px] font-normal leading-[30px]">
            Developing a strategy for where and how to apply DevOps tools,
            practices, and approaches to accelerate technology delivery at scale
            is key to the cloud environment. The goal of automation is to
            establish a consistent and automated way to build, package, and test
            applications.
          </p>
        </div>
        <div className="mx-auto w-1/2" data-aos="fade-left">
          <Image
            width={400}
            height={340}
            unoptimized
            src="/images/cms/devopss.png"
            alt="security"
          />
        </div>
      </div>
      <div className="bg-none bg-cover pb-8 pt-5 text-white md:bg-[url('/images/cms/call-bg.png')]">
        <div className="container hidden items-center justify-between px-4 md:flex">
          <div>
            <h3 className="mb-2.5 mt-5 text-[40px] font-semibold leading-[44px]">
              Let Us Help You Grow
            </h3>
            <p className="text-[15px] font-normal">
              Ready to launch your business to the stratosphere
            </p>
          </div>
          <div>
            <button className="flex items-center justify-center rounded bg-[#bccf31] px-[27px] py-2.5 text-sm font-normal text-white">
              Start Your free Trial
            </button>
          </div>
        </div>
      </div>
      <div
        id="config"
        className="container flex flex-col overflow-hidden px-4 py-[50px] md:flex-row"
      >
        <div className="md:w-1/2" data-aos="fade-right">
          <h3 className="mb-2 mt-[50px] text-3xl font-bold uppercase text-[#4b4a4b] md:text-4xl">
            Cloud Platform Build & Migration
          </h3>
          <p className="mb-2.5 text-[15px] font-normal leading-[30px]">
            Once we have evaluated our client’s environment, workloads,
            applications, and related discrepancies, while meticulously planning
            their cloud migration approach, we will make that effort work. When
            we deploy an MSP offering, we actually help you get out of the
            planning and testing phases and enter a world of practicality. On
            the face of it, everything looks OK, but the ultimate determinant of
            our success or failure is how successfully we migrate a production
            application’s zero downtime with live users. This is the stage in
            the cloud setting where data will be migrated and applications will
            be neutralized, re-platformed and strengthened.
          </p>
        </div>
        <div className="mx-auto md:w-1/2" data-aos="fade-left">
          <Image
            width={400}
            height={340}
            unoptimized
            src="/images/cms/cloud.png"
            alt="security"
          />
        </div>
      </div>
      <div id="monitoring" className="overflow-hidden bg-[#f6f6f6] py-[50px]">
        <div className="container flex flex-col px-4 md:flex-row">
          <div className="md:w-1/2" data-aos="fade-right">
            <h3 className="mb-2 mt-[50px] text-3xl font-bold uppercase text-[#4b4a4b] md:text-4xl">
              Continuous Monitoring
            </h3>
            <p className="mb-2.5 text-[15px] font-normal leading-[30px]">
              It is the process and technology required to incorporate
              monitoring across each phase of your DevOps and IT operations
              lifecycles. It helps to continuously ensure the health,
              performance, and reliability of your application and
              infrastructure as it moves from development to production.
            </p>
          </div>
          <div className="mx-auto md:w-1/2" data-aos="fade-left">
            <Image
              width={400}
              height={340}
              unoptimized
              src="/images/cms/serv-4.png"
              alt="security"
            />
          </div>
        </div>
      </div>
      <div
        id="reports"
        className="container flex flex-col overflow-hidden px-4 py-[50px] md:flex-row"
      >
        <div className="md:w-1/2" data-aos="fade-right">
          <h3 className="mb-2 mt-[50px] text-3xl font-bold uppercase text-[#4b4a4b] md:text-4xl">
            Reports and Analytics
          </h3>
          <p className="mb-2.5 text-[15px] font-normal leading-[30px]">
            Reporting and analytics are vital because they equip the
            organization to make key decisions that increase its value more
            effectively. We assist you in setting up tools that allow real-time
            access to essential data as well as the rapid generation of
            multidimensional reports from diverse data sources.
          </p>
        </div>
        <div className="mx-auto md:w-1/2" data-aos="fade-left">
          <Image
            width={400}
            height={340}
            unoptimized
            src="/images/cms/serv-5.png"
            alt="security"
          />
        </div>
      </div>
      <div id="cloud" className="overflow-hidden bg-[#f6f6f6] py-[50px]">
        <div className="container flex flex-col px-4 md:flex-row">
          <div className="md:w-1/2" data-aos="zoom-in">
            <h3 className="mb-2 mt-[50px] text-3xl font-bold uppercase text-[#4b4a4b] md:text-4xl">
              Configuration Management
            </h3>
            <p className="mb-2.5 text-[15px] font-normal leading-[30px]">
              Configuration management is essential key to standardizing
              resource configurations and to enforcing their stages across the
              infrastructure.
            </p>
          </div>
          <div className="mx-auto md:w-1/2" data-aos="fade-up">
            <Image
              width={400}
              height={340}
              unoptimized
              src="/images/cms/serv-3.png"
              alt="security"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AzurePage;
