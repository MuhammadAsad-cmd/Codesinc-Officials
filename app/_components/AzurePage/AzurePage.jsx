import Image from "next/image";
import React from "react";
import ContactsForm from "../Common/Contact/ContactsForm";
import Breadcrumbs from "../BreadCrumbs/Breadcrumbs";
import Link from "next/link";

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

  return (
    <>
      <div className="absolute -left-[70px] top-0">
        <Image
          width={170}
          height={292}
          unoptimized
          src="/images/cms/left-header.png"
          alt="Left Header"
          className="h-full w-[170px]"
        />
      </div>
      {/* <div className="absolute right-0 top-0">
        <Image
          width={554}
          height={672}
          unoptimized
          src="/images/cms/right-img.png"
          alt="Right Image"
          className="h-full"
        />
      </div> */}
      {/* <div className="container px-4">
        <div className="flex items-center">
          <div className="mt-[100px] border py-20">
            <div>
              <h1 className="mb-2.5 mt-5 border pt-[50px] text-[50px] font-bold leading-[55px] text-[#4b4a4b]">
                Simplify
                <span className="text-[#bccf31]"> Cloud Migrations</span>
              </h1>
              <p>
                Arpatech will help you migrate your existing
                infrastructure/applications to Azure Cloud , so you can benefit
                from minimum downtimes and predictable outcomes.
              </p>
              <p>
                Do not know how to setup Azure? Our experts will help you set up
                Azure platform with appropriate architecture and important
                security foundations. We are here to help you explore Azure
                offerings that can benefit the nature of your applications.
              </p>
              <p>
                Arpatech experts are offering these <span>FREE</span> services
                to help your business maintain its growth in these times of
                crisis.
              </p>
              <div>
                <button>Start Your Free Trial </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="relative w-full">
        <Image
          width={1000}
          height={627}
          unoptimized
          src="/images/cms/bg-bi.jpg"
          alt="Software Development"
          className="h-[720px] w-full"
        />

        {/* Overlay with Opacity */}
        <div className="absolute top-[100px] w-full py-20 pb-[30px]">
          <div className="container">
            <div className="flex">
              <div className="mt-[50px] w-[58.33%] px-4 pb-[200px] pt-[70px]">
                <h1 className="mb-2.5 mt-5 font-montserrat text-4xl font-extrabold uppercase leading-10 text-white">
                  Business Intelligence Services
                </h1>
                <p className="mt-[25px] text-base font-medium leading-7 text-white">
                  Transform your raw data into the real knowledge with our
                  Business Intelligence Solutions. We can help turn your data
                  into actionable insights through our business intelligence
                  solutions.
                </p>
                <div className="mt-[30px]">
                  <a
                    href="#second-sec"
                    className="font-montserrat text-xl font-extrabold leading-7 text-rosePink hover:underline"
                  >
                    view detail &gt;
                  </a>
                </div>
              </div>
              <div className="w-[41.6%] px-4">
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
        </div>
      </div>
      <Breadcrumbs
        title="Cloud Services"
        breadcrumbPath="/business-intelligence"
      />
      <div className="container mt-[50px] text-center">
        <h2 className="my-[50px] font-montserrat text-[45px] font-bold leading-[50px] text-black">
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
                <p className="mb-2.5 pb-[50px] pt-[18px] font-montserrat text-base font-semibold text-black">
                  {label}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div id="devsecops" className="bg-[#f6f6f6] py-[50px]">
        <div className="container flex">
          <div className="w-1/2">
            <h3 className="mb-2 mt-[50px] text-[45px] font-bold uppercase leading-[49px] text-[#4b4a4b]">
              DevSecOps & Cloud Security
            </h3>
            <p className="mb-2.5 text-[15px] font-normal leading-[30px]">
              Security is a key concern for any organization moving to the
              cloud, who needs confidence that its platforms and data are
              secure. ARPAtech helps its clients build, deploy, and operate
              cloud platform using modern DevOps approaches.
            </p>
          </div>
          <div className="mx-auto w-1/2">
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

      <div id="devops" className="container flex py-[50px]">
        <div className="w-1/2">
          <h3 className="mb-2 mt-[50px] text-[45px] font-bold uppercase leading-[49px] text-[#4b4a4b]">
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
        <div className="mx-auto w-1/2">
          <Image
            width={400}
            height={340}
            unoptimized
            src="/images/cms/devopss.png"
            alt="security"
          />
        </div>
      </div>
      <div className="bg-[url('/images/cms/call-bg.png')] bg-cover pb-8 pt-5 text-white">
        <div className="container flex items-center justify-between px-4">
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
      <div id="config" className="container flex py-[50px]">
        <div className="w-1/2">
          <h3 className="mb-2 mt-[50px] text-[45px] font-bold uppercase leading-[49px] text-[#4b4a4b]">
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
        <div className="mx-auto w-1/2">
          <Image
            width={400}
            height={340}
            unoptimized
            src="/images/cms/cloud.png"
            alt="security"
          />
        </div>
      </div>
      <div id="monitoring" className="bg-[#f6f6f6] py-[50px]">
        <div className="container flex">
          <div className="w-1/2">
            <h3 className="mb-2 mt-[50px] text-[45px] font-bold uppercase leading-[49px] text-[#4b4a4b]">
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
          <div className="mx-auto w-1/2">
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
      <div id="reports" className="container flex py-[50px]">
        <div className="w-1/2">
          <h3 className="mb-2 mt-[50px] text-[45px] font-bold uppercase leading-[49px] text-[#4b4a4b]">
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
        <div className="mx-auto w-1/2">
          <Image
            width={400}
            height={340}
            unoptimized
            src="/images/cms/serv-5.png"
            alt="security"
          />
        </div>
      </div>
      <div id="cloud" className="bg-[#f6f6f6] py-[50px]">
        <div className="container flex">
          <div className="w-1/2">
            <h3 className="mb-2 mt-[50px] text-[45px] font-bold uppercase leading-[49px] text-[#4b4a4b]">
              Configuration Management
            </h3>
            <p className="mb-2.5 text-[15px] font-normal leading-[30px]">
              Configuration management is essential key to standardizing
              resource configurations and to enforcing their stages across the
              infrastructure.
            </p>
          </div>
          <div className="mx-auto w-1/2">
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
