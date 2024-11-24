"use client";
import Image from "next/image";
import React, { useState } from "react";
import Breadcrumbs from "../BreadCrumbs/Breadcrumbs";
import ProjectContact from "../Common/Contact/ProjectContact";
import EmergencySupport from "../EmergencySupport/EmergencySupport";

const SoftwareDevelop = () => {
  return (
    <>
      <div className="relative w-full">
        <Image
          width={320}
          height={755}
          src="/images/cms/soft-bg.jpg"
          alt="Software Development"
          className="h-full w-full object-cover"
        />

        {/* Overlay with Opacity */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute top-[100px] w-full pb-[30px]">
          <div className="container">
            <div className="flex items-center">
              <div className="w-[66.66%] px-4 pt-[70px]">
                <h1 className="mb-2.5 mt-5 font-montserrat text-[46px] font-bold uppercase leading-[50px] text-white">
                  A Software Development Company
                </h1>
                <p className="mt-[25px] font-montserrat text-base font-medium leading-7 text-white">
                  Our dedicated team of experts software developer gives you the
                  best custom software development services worldwide. As a
                  software development firm, we believe in developing mission
                  critical, scalable and highly available software applications.
                </p>

                <div className="mt-[30px]">
                  <a
                    href="#second-sec"
                    className="font-montserrat text-lg font-bold leading-6 text-[#07befa] hover:underline"
                  >
                    view detail &gt;
                  </a>
                </div>
              </div>
              <div className="w-1/3 px-4">
                <ProjectContact />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Breadcrumbs
        title="Web Design & Development"
        breadcrumbPath="/web-design"
      />

      <EmergencySupport BgColor="bg-skyBlue2" />
      <div className="bg-white py-[70px] text-center">
        <div className="container">
          <div>
            <h2 className="inline-block border-b-[3px] border-skyBlue2 pb-3 font-montserrat text-[40px] font-semibold uppercase text-Gray">
              SOFTWARE DEVELOPMENT
            </h2>
            <div className="mt-20 flex justify-center">
              <div className="w-1/2 px-4">
                <Image
                  width={555}
                  height={264}
                  unoptimized
                  src="/images/cms/software-big.png"
                  alt="Software Development"
                />
              </div>
              <div className="w-1/2 px-4">
                <p className="text-left font-montserrat text-[15px] font-normal leading-[26px] text-Gray">
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
        <div className="container text-center">
          <h2 className="inline-block items-center justify-center border-b-[3px] border-white pb-3 text-center font-montserrat text-[40px] font-semibold uppercase text-white">
            Services
          </h2>
          <div className="mt-[70px] flex items-center justify-center gap-8">
            <div className="flex w-1/3 flex-col items-center px-4">
              <Image
                width={80}
                height={80}
                unoptimized
                src="/images/service/cloud.png"
                alt="Cloud"
              />
              <h3 className="mb-2.5 mt-[30px] font-montserrat text-xl font-semibold uppercase leading-[22px]">
                Nearshore Software Development
              </h3>
              <p className="w-[90%] font-montserrat text-[13px] font-normal leading-[22px] text-white">
                Don’t think too much, outsource our software application
                developer to enhance the efficiency and quality of your software
                projects. We do a thorough screening and verification of the
                business background on offshore, nearshore and onshore service
                providers. So are you ready to outsource your software with the
                best software development company.
              </p>
            </div>
            <div className="flex w-1/3 flex-col items-center px-4">
              <Image
                width={80}
                height={80}
                unoptimized
                src="/images/service/globe.png"
                alt="Cloud"
              />
              <h3 className="mb-2.5 mt-[30px] font-montserrat text-xl font-semibold uppercase leading-[22px]">
                Custom Software Solutions
              </h3>
              <p className="w-[90%] font-montserrat text-[13px] font-normal leading-[22px] text-white">
                No matter whether you are a startup or an fully established
                business, our software development firm is here to guide you in
                every stage of software development life cycle either it is
                conceptualization, consulting or development and support. Our
                custom software development services will fulfill all your
                desired needs you are looking for.
              </p>
            </div>
            <div className="flex w-1/3 flex-col items-center px-4">
              <Image
                width={80}
                height={80}
                unoptimized
                src="/images/service/puzzle.png"
                alt="Cloud"
              />
              <h3 className="mb-2.5 mt-[30px] font-montserrat text-xl font-semibold uppercase leading-[22px]">
                Managed Services & DevOps
              </h3>
              <p className="w-[90%] font-montserrat text-[13px] font-normal leading-[22px] text-white">
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
          <h2 className="mb-20 inline-block items-center justify-center border-b-[3px] border-skyBlue2 pb-3 text-center font-montserrat text-[40px] font-semibold uppercase text-black">
            How We Work
          </h2>
        </div>

        <div className="grid grid-cols-4">
          <div className="min-h-[410px] bg-[#52d2fc] p-[30px] text-white">
            <span className="font-montserrat text-[70px] font-semibold leading-[70px]">
              1.
            </span>
            <h3 className="mb-5 mt-[15px] text-[23px] font-medium uppercase leading-[26px] text-white">
              Agile Software Development
            </h3>
            <p className="mb-[50px] font-montserrat text-base font-medium leading-6">
              Our agile software development solution will give quick and
              continuous delivery of worthy softwares.We follow scrum
              methodology to achieve best results and manage all the project
              stakeholders in sync.
            </p>
          </div>
          <div className="min-h-[410px] bg-[#39cbfb] p-[30px] text-white">
            <span className="font-montserrat text-[70px] font-semibold leading-[70px]">
              2.
            </span>
            <h3 className="mb-5 mt-[15px] text-[23px] font-medium uppercase leading-[26px] text-white">
              Regular Calls & Meetings
            </h3>
            <p className="mb-[50px] font-montserrat text-base font-medium leading-6">
              We give our clients real time communication, quick reaction time
              and easy accessibility to anywhere, everywhere. Our team of
              experts software developers are just one call away to give you
              technical support, fix bugs and guides you.
            </p>
          </div>
          <div className="min-h-[410px] bg-[#20c5fb] p-[30px] text-white">
            <span className="font-montserrat text-[70px] font-semibold leading-[70px]">
              3.
            </span>
            <h3 className="mb-5 mt-[15px] text-[23px] font-medium uppercase leading-[26px] text-white">
              Best Development Practice
            </h3>
            <p className="mb-[50px] font-montserrat text-base font-medium leading-6">
              Working with us, the best software application development company
              you can completely rely on with the stable demo environment,
              virtuoso QA and testing, always accessible with safe and secured
              code and quick deploying.
            </p>
          </div>
          <div className="min-h-[410px] bg-[#07befa] p-[30px] text-white">
            <span className="font-montserrat text-[70px] font-semibold leading-[70px]">
              4.
            </span>
            <h3 className="mb-5 mt-[15px] text-[23px] font-medium uppercase leading-[26px] text-white">
              High Personal Involvement
            </h3>
            <p className="mb-[50px] font-montserrat text-base font-medium leading-6">
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
