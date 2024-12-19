"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Breadcrumbs from "../BreadCrumbs/Breadcrumbs";
import ContactsForm from "../Common/Contact/ContactsForm";
import ServicesGrid from "../ServicesGrid/ServicesGrid";
import AOS from "aos";
import "aos/dist/aos.css";

const BusinessProcessPage = () => {
  const servicesData = [
    {
      image: "/images/cms/bo1.png",
      alt: "Responsive E-Commerce Site",
      title: "Recruitment Process Outsourcing",
      description:
        "Our BPO services provide flexible and scalable recruitment solutions which can include anything from sourcing and selection to onboarding individuals. We process tasks faster, more efficiently and at cost-effective rate than you could ever do in-house.",
    },
    {
      image: "/images/cms/bo2.png",
      alt: "Best User Experience",
      title: "IT Support",
      description:
        "From application development to network and server support, we aim to continuously deliver value in achieving the business goals of our clients. Helpdesk models are designed in order to meet the needs of individual customers for successful outsourcing outcome.",
    },
    {
      image: "/images/cms/bo3.png",
      alt: "Data Acquisitions & Migration",
      title: "Data Procurement & Migration",
      description:
        "Losing data can be painful for any website owner, as it takes years to build product & user databases. We understand this concern and guarantee a safe migration without the risk of any data loss, so your new website works without any lags caused due to data migration.",
    },
    {
      image: "/images/cms/bo4.png",
      alt: "Plugin Development",
      title: "Data Processing",
      description:
        "With increasing costs towards employees' salaries, overheads and infrastructural load, outsourcing your data processing needs to our BPO services is the only solution you are looking for.",
    },
    {
      image: "/images/cms/bo5.png",
      alt: "App Development",
      title: "Web Development",
      description:
        "Whether you want a fancy, appealing, new landing page for your startup business or hundreds of inner pages for your existing website, we have got you covered.",
    },
    {
      image: "/images/cms/bo6.png",
      alt: "E-Commerce Maintenance",
      title: "Market Research & Survey",
      description:
        "We ensure that the research solutions provided to you are customized enough to meet clients' business objectives by critically analyzing the information input.",
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
        className="h-full min-h-screen w-full bg-cover bg-center bg-no-repeat py-12 md:py-[170px]"
        style={{ backgroundImage: "url('/images/cms/bg-bo.jpg')" }}
      >
        <div className="container mx-auto flex h-full flex-col items-center justify-center space-y-8 px-4 text-center lg:flex-row lg:text-left">
          {/* Left Section */}
          <div
            data-aos="fade-right"
            className="mt-[50px] px-4 pb-20 pt-5 md:w-1/2 lg:pb-[200px] lg:pt-[70px] xl:w-[58.33%]"
          >
            <h1 className="font-montserrat mb-2.5 mt-5 text-4xl font-extrabold uppercase leading-10 text-white">
              Business Process Outsourcing Solutions
            </h1>
            <p className="mt-[25px] text-base font-medium leading-7 text-white">
              Offering cost-effective, flexible and scalable BPO services to
              clients, and helping ensure competitive advantage through the
              power of Business Process Outsourcing Solutions
            </p>
            <div className="mt-[30px]">
              <a
                href="#second-sec"
                className="font-montserrat text-xl font-extrabold leading-7 text-goldenYellow hover:underline"
              >
                view detail &gt;
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div data-aos="fade-left" className="px-4 md:w-1/2 xl:w-[41.6%]">
            <ContactsForm
              bgColor="ContactBg"
              textColor="text-white"
              buttonColor="bg-goldenYellow"
              buttonText="Request a Quote"
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
        title="Business Process Outsourcing"
        breadcrumbPath="/web-design"
      />
      <div className="h-[120px] w-full bg-[url('/images/cms/meetup-bar-bo.jpg')] bg-cover bg-[34%]"></div>
      <div className="container px-4">
        <div className="my-20 flex flex-col md:flex-row">
          <div className="md:w-[58.33%] lg:px-4" data-aos="fade-right">
            <div className="mt-6 flex w-full items-center justify-center">
              <Image
                width={465}
                height={304}
                unoptimized
                src="/images/cms/big-bo.jpg"
                alt="Cloud"
              />
            </div>
          </div>
          <div className="md:w-[41.66%] lg:px-4" data-aos="fade-left">
            <h2 className="mb-5 mt-10 text-left text-2xl font-semibold uppercase text-Gray md:text-[30px]">
              Achieve Cost Efficiency
            </h2>
            <p className="font-montserrat text-left text-[15px] font-normal leading-7 text-Gray">
              Driven by the desire to minimize costs, get access to professional
              talent, blend processes, control risk and focus more on core
              competencies, businesses have turned to BPO services as a mean of
              gaining enhanced competitiveness.
            </p>
            <div className="md:flex md:items-center md:justify-center">
              <button className="mt-10 flex h-[45px] items-center justify-center bg-goldenYellow px-[60px] py-2.5 capitalize text-white">
                get started
              </button>
            </div>
          </div>
        </div>
        <div className="my-28 flex flex-col md:flex-row">
          <div className="md:w-[41.66%] lg:px-4" data-aos="zoom-in">
            <h2 className="mb-5 mt-10 text-left text-2xl font-semibold uppercase text-Gray md:text-[30px]">
              BPO For Startups
            </h2>
            <p className="font-montserrat text-left text-[15px] font-normal leading-7 text-Gray">
              Startup would love to work with and only with the experts, but
              unfortunately they come with big prices.Our BPO startup
              outsourcing services team can handle your accounting, reporting
              and budget management solutions during the early phase. With this
              early BPO services, you can give complete focus on your main
              competencies during the crucial start-up period.
            </p>
            <div className="flex items-center justify-center">
              <button className="mt-10 flex h-[45px] items-center justify-center bg-goldenYellow px-[60px] py-2.5 capitalize text-white">
                get started
              </button>
            </div>
          </div>
          <div className="md:w-[58.33%] lg:px-4" data-aos="fade-up">
            <div className="mt-6 flex w-full items-center justify-center">
              <Image
                width={465}
                height={304}
                unoptimized
                src="/images/cms/big2-bo.jpg"
                alt="Cloud"
                className="h-[334px] w-[500px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#e0e0e0] py-[50px] text-center">
        <div className="container px-4">
          <h2 className="mb-2.5 mt-5 text-center text-2xl font-bold uppercase md:text-[30px]">
            Call Center Services
          </h2>
          <p className="font-montserrat text-[15px] font-medium leading-7 text-[#333333]">
            Missing a call means one potential customer lost! Our BPO services
            with its professionally efficient contact representative personnel
            will never let you disappointed. We offers customized inbound and
            outbound customer care services to get more business opportunities,
            profit and growth while retaining total customer satisfaction
            because your success means a lot to us.
          </p>
          <div className="mt-[50px] flex flex-col items-center gap-y-6 md:flex-row">
            <div className="w-full md:w-1/2" data-aos="fade-right">
              <div className="flex flex-col items-center rounded-2xl bg-Gray p-5 text-goldenYellow md:mx-[60px]">
                <Image
                  width={100}
                  height={100}
                  unoptimized
                  src="/images/cms/inbound.png"
                  alt="Inbound Call Center"
                />
                <h4 className="font-montserrat mt-2.5 text-base font-medium capitalize">
                  Inbound
                </h4>
                <div className="text-[15px] font-normal leading-7">
                  <p>Sales &amp; Order Processing</p>
                  <p>Technology Product Support</p>
                  <p>Technical &amp; Help Desk</p>
                  <p>Customer Services</p>
                  <p>IVR Services</p>
                  <p>Website &quot;Call me Back&quot;</p>
                  <p>Live Chat Support </p>
                  <p>Email Management </p>
                  <p>SMS Marketing &amp; Management</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2" data-aos="fade-left">
              <div className="flex flex-col items-center rounded-2xl bg-Gray p-5 text-goldenYellow md:mx-[60px]">
                <Image
                  width={100}
                  height={100}
                  unoptimized
                  src="/images/cms/outbound.png"
                  alt="Inbound Call Center"
                />
                <h4 className="font-montserrat mt-2.5 text-base font-medium capitalize">
                  Outbound
                </h4>
                <div className="text-[15px] font-normal leading-7">
                  <p>Telemarketing</p>
                  <p>Telesales</p>
                  <p>Appointment Setting</p>
                  <p>B2B Services</p>
                  <p>Lead Generation</p>
                  <p>Data Verification Services</p>
                  <p>Credit Management </p>
                  <p>Appointment Setting</p>
                  <p>Tele-Research Tele Surveying</p>
                </div>
              </div>
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

export default BusinessProcessPage;
