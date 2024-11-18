import React from "react";
import Breadcrumbs from "../BreadCrumbs/Breadcrumbs";
import Image from "next/image";
import Link from "next/link";
import { application, ServicesItems } from "@/app/Data/Services";
import FileIcon from "@/public/icons/FileIcon";
import { PiNotePencilBold } from "react-icons/pi";
import { FaPaintBrush, FaRegLifeRing, FaSearch } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";

const WebDesign = () => {
  return (
    <>
      <div className="relative w-full">
        <video
          width={320}
          height={755}
          className="h-[650px] w-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/video/For_Wes.mp4" type="video/mp4" />
          <track
            src="/video/For_Wes.webm"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay with Opacity */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute top-[25%] w-full">
          <div className="container">
            <h1 className="mx-auto mb-2.5 mt-5 max-w-[730px] text-center font-montserrat text-[48px] font-bold uppercase leading-[52px] text-white">
              We Create Exceptionally Creative{" "}
              <span className="text-lightblue"> Web Designs </span>
            </h1>
            <p className="mx-auto w-4/5 text-center font-montserrat text-[13px] font-normal text-white">
              Codesinc knows your high standards and loves to meet them
              ingeniously. We being a pioneer web development company respect
              your time and ideas and deliver most alluring web designs.
            </p>

            <div className="mt-10 flex h-full w-full items-center justify-center gap-5">
              <button className="flex h-14 items-center justify-center rounded-full bg-lightblue px-[60px] text-lg uppercase tracking-wider text-white duration-300 ease-in-out hover:bg-white hover:text-lightblue">
                Read more
              </button>
              <button className="flex h-14 items-center justify-center rounded-full border-2 border-white bg-transparent px-[60px] text-lg uppercase tracking-wider text-white duration-300 ease-in-out hover:bg-white hover:text-lightblue">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <Breadcrumbs
        title="Web Design & Development"
        breadcrumbPath="/web-design"
      />
      <div className="container">
        <div className="mt-10 w-full">
          <h2 className="text-center font-montserrat text-[40px] font-bold uppercase leading-[44px] text-Gray">
            choose your desired service
          </h2>
          <p className="my-2.5 text-center text-[30px] font-normal uppercase tracking-[3px] text-Gray">
            And Let us worry about the rest!
          </p>

          <div className="my-[70px] grid grid-cols-1 gap-8 md:grid-cols-3">
            {ServicesItems.map((service, index) => (
              <div
                key={index}
                className="flex min-h-[602px] flex-col items-center justify-between rounded-md bg-[#fcfcfc] p-6 shadow-md"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-4">
                    <div className="size-[89px]">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={89}
                        height={89}
                        unoptimized
                        className="h-full w-full"
                      />
                    </div>
                  </div>
                  {service.title && (
                    <h3 className="mt-5 font-montserrat text-[28px] font-semibold uppercase text-Gray">
                      {service.title}
                    </h3>
                  )}
                  {service.description && (
                    <p className="mb-4 text-[15px] font-normal uppercase leading-[26px] tracking-[3px]">
                      {service.description}
                    </p>
                  )}
                  <div className="grid grid-cols-3 gap-7">
                    {service.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="group flex flex-col items-center justify-center"
                      >
                        <div className="mb-2 size-20 flex-shrink-0 cursor-pointer">
                          <Image
                            width={80}
                            height={80}
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full grayscale filter transition duration-300 hover:grayscale-0"
                          />
                        </div>
                        <Link
                          href={item.link}
                          className="flex items-center justify-center rounded-full border border-gray-400 px-2 py-0.5 text-xs text-gray-500 transition duration-300 ease-in-out group-hover:border-brightOrange group-hover:text-brightOrange"
                        >
                          Read More
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="mt-4 rounded-full border border-brightOrange px-10 py-1.5 font-montserrat text-[13px] font-semibold uppercase text-brightOrange transition duration-300">
                  Get Free Quote
                </button>
              </div>
            ))}
            {application.map((service, index) => (
              <div
                key={index}
                className="flex min-h-[602px] flex-col items-center justify-between rounded-md bg-[#fcfcfc] p-6 shadow-md"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-4">
                    <div className="size-[89px]">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={89}
                        height={89}
                        unoptimized
                        className="h-full w-full"
                      />
                    </div>
                  </div>
                  {service.title && (
                    <h3 className="mt-5 font-montserrat text-[28px] font-semibold uppercase text-Gray">
                      {service.title}
                    </h3>
                  )}
                  {service.description && (
                    <p className="mb-4 text-[15px] font-normal uppercase leading-[26px] tracking-[3px]">
                      {service.description}
                    </p>
                  )}
                  <div className="grid w-full grid-cols-2 gap-10">
                    {service.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="mb-2 h-[76px] w-[121px] flex-shrink-0 cursor-pointer"
                      >
                        <Image
                          width={121}
                          height={76}
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <button className="mt-4 rounded-full border border-brightOrange px-10 py-1.5 font-montserrat text-[13px] font-semibold uppercase text-brightOrange transition duration-300">
                  Get Free Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-emeraldGreen py-[100px] text-white">
        <div className="container flex gap-7">
          <div className="w-[58.33%]">
            <div>
              <Image
                width={685}
                height={495}
                unoptimized
                src="/images/portfolio/gif-work.gif"
                alt="Codesinc GIF"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="mt-20 w-[41.66%]">
            <h3 className="mb-5 font-montserrat text-[30px] font-semibold uppercase leading-10">
              Ecommerce Websites Based On Globally Recognized Standards
            </h3>
            <p className="font-montserrat text-base font-normal leading-7">
              E-commerce requires a technically sophisticated mindset that never
              settles for less than perfect and we are a web development company
              that understands your business needs. We at Codesinc deliver you a
              customized e-commerce website with cutting-edge functionality and
              slick user experience. We offer stellar web development services.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-skyBlue py-[100px] text-white">
        <div className="container flex items-center gap-10">
          <div className="w-[41.66%] px-4">
            <div>
              <Image
                width={685}
                height={495}
                unoptimized
                src="/images/portfolio/Ipad-gif.gif"
                alt="Codesinc GIF"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="mt-20 w-[58.33%] border-b border-[#00afdf] px-4 pb-[60px]">
            <h3 className="mb-5 font-montserrat text-[30px] font-semibold uppercase leading-10">
              We Mold Web Designs According To Your Brand
            </h3>
            <p className="font-montserrat text-base font-normal leading-7">
              Dreams rarely come to reality, but with Codesinc it is not the
              case. Your imaginations are our foremost goals and we put highly
              innovative minds in molding your creative demands on screen with
              amazing custom website development. We love creating a globally
              competitive and high standard Brand that speaks your spirit and
              your style.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-redAccent py-[100px] text-white">
        <div className="container flex items-center gap-10">
          <div className="w-[41.66%]">
            <div className="mx-20">
              <Image
                width={285}
                height={573}
                unoptimized
                src="/images/portfolio/mobile.gif"
                alt="Codesinc GIF"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="mt-20 w-[58.33%]">
            <h3 className="mb-5 font-montserrat text-[30px] font-semibold uppercase leading-10">
              We Deliver Mobile Sophisticated Web Development Services
            </h3>
            <p className="font-montserrat text-base font-normal leading-7">
              Codesinc intends to reveal the surprises of how a mobile-friendly
              web experience feels like. It requires extinct skills at first
              place and then a great mix of premium resources. Being your
              one-stop web development agency we produce highly responsive
              designs that both the users and you yourself love to interact
              with.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#f3f3f3] py-[100px] text-center">
        <div className="container">
          <h3 className="text-center font-montserrat text-[40px] font-semibold uppercase text-Gray">
            How We Do It
          </h3>
          <ul className="my-[50px] grid grid-cols-4 items-center justify-center">
            <li>
              <div className="short-box-choose flex h-[211px] max-w-[182px] flex-col items-center justify-center rounded-lg">
                <div className="text-3xl text-[#b6b6b6]">
                  <FileIcon />
                </div>
                <h4 className="mt-5 w-[70%] text-[13px] font-semibold uppercase leading-[21px] text-[#222] text-current">
                  Define Requirement
                </h4>
              </div>
            </li>
            <li>
              <div className="short-box-choose flex h-[211px] max-w-[182px] flex-col items-center justify-center rounded-lg">
                <div className="text-5xl text-[#b6b6b6]">
                  {/* <FileIcon /> */}
                  <PiNotePencilBold />
                </div>
                <h4 className="mt-5 w-[70%] text-[13px] font-semibold uppercase leading-[21px] text-[#222] text-current">
                  Architect Solution
                </h4>
              </div>
            </li>
            <li>
              <div className="short-box-choose flex h-[211px] max-w-[182px] flex-col items-center justify-center rounded-lg">
                <div className="text-3xl text-[#b6b6b6]">
                  <FaPaintBrush />
                </div>
                <h4 className="mt-5 w-[70%] text-[13px] font-semibold uppercase leading-[21px] text-[#222] text-current">
                  Design Interface
                </h4>
              </div>
            </li>
            <li>
              <div className="short-box-choose flex h-[211px] max-w-[182px] flex-col items-center justify-center rounded-lg">
                <div className="text-3xl text-[#b6b6b6]">
                  <FaGears />
                </div>
                <h4 className="mt-5 w-[70%] text-[13px] font-semibold uppercase leading-[21px] text-[#222] text-current">
                  Develop Functionality
                </h4>
              </div>
            </li>
            <li className="flex-shrink-0">
              <div className="short-box-choose flex h-[211px] max-w-[182px] flex-col items-center justify-center rounded-lg">
                <div className="text-3xl text-[#b6b6b6]">
                  <FaSearch />
                </div>
                <h4 className="mt-5 w-[70%] text-[13px] font-semibold uppercase leading-[21px] text-[#222] text-current">
                  Testing
                </h4>
              </div>
            </li>
            <li className="flex-shrink-0">
              <div className="short-box-choose flex h-[211px] max-w-[182px] flex-col items-center justify-center rounded-lg">
                <div className="text-4xl text-[#b6b6b6]">
                  <IoIosSend />
                </div>
                <h4 className="mt-5 w-[70%] text-[13px] font-semibold uppercase leading-[21px] text-[#222] text-current">
                  Deliver
                </h4>
              </div>
            </li>
            <li className="flex-shrink-0">
              <div className="short-box-choose flex h-[211px] max-w-[182px] flex-col items-center justify-center rounded-lg">
                <div className="text-4xl text-[#b6b6b6]">
                  <FaRegLifeRing />
                </div>
                <h4 className="mt-5 w-[70%] text-[13px] font-semibold uppercase leading-[21px] text-[#222] text-current">
                  Support
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default WebDesign;
