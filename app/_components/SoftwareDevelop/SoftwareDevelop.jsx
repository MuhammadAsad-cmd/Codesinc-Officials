"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Breadcrumbs from "../BreadCrumbs/Breadcrumbs";
import ProjectContact from "../Common/Contact/ProjectContact";
import EmergencySupport from "../EmergencySupport/EmergencySupport";
import AOS from "aos";
import "aos/dist/aos.css";

const SoftwareDevelop = () => {
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
        className="h-full min-h-screen w-full bg-cover bg-center bg-no-repeat py-14 md:py-[100px]"
        style={{ backgroundImage: "url('/images/cms/soft-bg.jpg')" }}
      >
        <div className="container mx-auto flex h-full flex-col items-center justify-center overflow-hidden px-4 text-center lg:flex-row lg:text-left">
          {/* Left Section */}
          <div className="md:w-1/2 xl:w-2/3" data-aos="fade-right">
            <h1 className="font-montserrat mb-2.5 mt-5 text-4xl font-bold uppercase text-white md:text-[46px] md:leading-[50px]">
              A Software Development Company
            </h1>
            <p className="mb-6 text-white md:text-lg">
              Our dedicated team of expert software developers gives you the
              best custom software development services worldwide. As a software
              development firm, we believe in developing mission-critical,
              scalable, and highly available software applications.
            </p>
            <a
              href="#second-sec"
              className="inline-block text-lg font-bold text-[#07befa] hover:underline"
            >
              View Detail &gt;
            </a>
          </div>

          {/* Right Section */}
          <div className="mt-8 md:w-1/2 lg:mt-0 xl:w-1/3" data-aos="fade-left">
            <ProjectContact
              bgColor="bg-[#07befa]"
              borderColor="border-[#3686a7]"
              borderBottom="border-white"
            />
          </div>
        </div>
      </div>

      <Breadcrumbs
        title="Web Design & Development"
        breadcrumbPath="/web-design"
      />

      <EmergencySupport BgColor="bg-skyBlue2" />
      <div className="bg-white py-[70px] text-center">
        <div className="container px-4">
          <div>
            <h2 className="font-montserrat inline-block border-b-[3px] border-skyBlue2 pb-3 text-3xl font-semibold uppercase text-Gray lg:text-[40px]">
              SOFTWARE DEVELOPMENT
            </h2>
            <div className="overflow-hiddenflex mt-20 flex-col items-center justify-center max-md:space-y-6 md:flex-row md:items-start">
              <div className="shrink-0 px-4 md:w-1/2" data-aos="fade-right">
                <Image
                  width={555}
                  height={264}
                  unoptimized
                  src="/images/cms/software-big.png"
                  alt="Software Development"
                />
              </div>
              <div className="px-4 md:w-1/2" data-aos="fade-left">
                <p className="font-montserrat text-left text-[15px] font-normal leading-[26px] text-Gray">
                  We have offered custom software development services to
                  industries ranging from healthcare, finance, manufacturing and
                  technology sector. So, we have plethora of experience to Wow
                  your audience with our experience and collaboration of our
                  skilled teams.
                </p>
              </div>
            </div>
            <button className="mx-auto mt-10 flex items-center justify-center rounded-full border-2 border-skyBlue2 px-[60px] py-2.5 text-[15px] capitalize text-skyBlue2">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="bg-skyBlue2 py-[60px] text-white">
        <div className="container px-4 text-center">
          <h2 className="font-montserrat inline-block items-center justify-center border-b-[3px] border-white pb-3 text-center text-3xl font-semibold uppercase text-white md:text-[40px]">
            Services
          </h2>
          <div className="mt-[70px] flex flex-col justify-center gap-4 md:flex-row lg:gap-8">
            <div className="flex flex-col items-center md:w-1/3">
              <Image
                width={80}
                height={80}
                unoptimized
                src="/images/service/cloud.png"
                alt="Cloud"
              />
              <h3 className="font-montserrat mb-2.5 mt-[30px] text-xl font-semibold uppercase leading-[22px]">
                Nearshore Software Development
              </h3>
              <p className="font-montserrat w-[90%] text-[13px] font-normal leading-[22px] text-white">
                Don’t think too much, outsource our software application
                developer to enhance the efficiency and quality of your software
                projects. We do a thorough screening and verification of the
                business background on offshore, nearshore and onshore service
                providers. So are you ready to outsource your software with the
                best software development company.
              </p>
            </div>
            <div className="flex flex-col items-center md:w-1/3">
              <Image
                width={80}
                height={80}
                unoptimized
                src="/images/service/globe.png"
                alt="Cloud"
              />
              <h3 className="font-montserrat mb-2.5 mt-[30px] text-xl font-semibold uppercase leading-[22px]">
                Custom Software Solutions
              </h3>
              <p className="font-montserrat w-[90%] text-[13px] font-normal leading-[22px] text-white">
                No matter whether you are a startup or an fully established
                business, our software development firm is here to guide you in
                every stage of software development life cycle either it is
                conceptualization, consulting or development and support. Our
                custom software development services will fulfill all your
                desired needs you are looking for.
              </p>
            </div>
            <div className="flex flex-col items-center md:w-1/3">
              <Image
                width={80}
                height={80}
                unoptimized
                src="/images/service/puzzle.png"
                alt="Cloud"
              />
              <h3 className="font-montserrat mb-2.5 mt-[30px] text-xl font-semibold uppercase leading-[22px]">
                Managed Services & DevOps
              </h3>
              <p className="font-montserrat w-[90%] text-[13px] font-normal leading-[22px] text-white">
                Giving you enterprise level support for your mission-critical
                environments following DevOps approach and ITIL process. By
                outsourcing our software development services, you can easily
                focus on your business and let us worry the rest.
              </p>
            </div>
          </div>
          <button className="mx-auto mt-10 flex h-[45px] items-center justify-center rounded-full border-2 border-white px-[60px] py-2.5 text-[15px] capitalize text-white">
            Get Started
          </button>
        </div>
      </div>
      <div className="mt-[50px] pb-5 pt-[30px]">
        <div className="text-center">
          <h2 className="font-montserrat mb-20 inline-block items-center justify-center border-b-[3px] border-skyBlue2 pb-3 text-center text-3xl font-semibold uppercase text-black md:text-[40px]">
            How We Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-[#52d2fc] p-[30px] text-white md:min-h-[410px]">
            <span className="font-montserrat text-[70px] font-semibold leading-[70px]">
              1.
            </span>
            <h3 className="mb-5 mt-[15px] text-[23px] font-medium uppercase leading-[26px] text-white">
              Agile Software Development
            </h3>
            <p className="font-montserrat mb-[50px] text-base font-medium leading-6">
              Our agile software development solution will give quick and
              continuous delivery of worthy softwares.We follow scrum
              methodology to achieve best results and manage all the project
              stakeholders in sync.
            </p>
          </div>
          <div className="bg-[#39cbfb] p-[30px] text-white md:min-h-[410px]">
            <span className="font-montserrat text-[70px] font-semibold leading-[70px]">
              2.
            </span>
            <h3 className="mb-5 mt-[15px] text-[23px] font-medium uppercase leading-[26px] text-white">
              Regular Calls & Meetings
            </h3>
            <p className="font-montserrat mb-[50px] text-base font-medium leading-6">
              We give our clients real time communication, quick reaction time
              and easy accessibility to anywhere, everywhere. Our team of
              experts software developers are just one call away to give you
              technical support, fix bugs and guides you.
            </p>
          </div>
          <div className="bg-[#20c5fb] p-[30px] text-white md:min-h-[410px]">
            <span className="font-montserrat text-[70px] font-semibold leading-[70px]">
              3.
            </span>
            <h3 className="mb-5 mt-[15px] text-[23px] font-medium uppercase leading-[26px] text-white">
              Best Development Practice
            </h3>
            <p className="font-montserrat mb-[50px] text-base font-medium leading-6">
              Working with us, the best software application development company
              you can completely rely on with the stable demo environment,
              virtuoso QA and testing, always accessible with safe and secured
              code and quick deploying.
            </p>
          </div>
          <div className="bg-[#07befa] p-[30px] text-white md:min-h-[410px]">
            <span className="font-montserrat text-[70px] font-semibold leading-[70px]">
              4.
            </span>
            <h3 className="mb-5 mt-[15px] text-[23px] font-medium uppercase leading-[26px] text-white">
              High Personal Involvement
            </h3>
            <p className="font-montserrat mb-[50px] text-base font-medium leading-6">
              Our motto is “Clients is the family.” We are the best software
              development firm because we love to serve our clients and take our
              clients success, achievements as of our own. We truly believe in
              personal interaction with the client to create a trust bridge.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SoftwareDevelop;
