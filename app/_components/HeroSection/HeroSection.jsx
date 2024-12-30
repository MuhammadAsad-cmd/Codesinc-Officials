"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import VideoSection from "../VideoSection/VideoSection";

const slidesData = [
  {
    title: "We Are Codesinc",
    description:
      "We have a team of IT consultants with presence at the key technology innovation hubs around the world. We empower you to modify and analyze data and turn it profitable by simplifying business goals.",
  },
  {
    title: "We Are Problem Solvers",
    description:
      "We have a team of IT consultants with presence at the key technology innovation hubs around the world. We empower you to modify and analyze data and turn it profitable by simplifying business goals.",
  },
  {
    title: "We Are Pioneers",
    description:
      "Codesinc – the finest technology hub kept innovating as more people joined the global village and came closer with connectivity. We are adding our bit to the world advanced research in technologies as we embark on the future to continue to create better experiences.",
  },
  {
    title: "We Are Innovators",
    description:
      "Codesinc offers complete solutions in software development from services ranging from custom application development to web design and development. Our presence as a leading IT service provider for all advanced technology-based projects.",
  },
  {
    title: "We Are Creators",
    description:
      "Codesinc offers complete solutions in software development from services ranging from custom application development to web design and development. Our presence as a leading IT service provider for all advanced technology-based projects.",
  },
  {
    title: "More Than 5 Years of IT Experience",
    description:
      "Codesinc offers complete solutions in software development from services ranging from custom application development to web design and development. Our presence as a leading IT service provider for all advanced technology-based projects.",
  },
];

const HeroSection = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="relative min-h-screen w-full">
        <div className="hidden md:block">
          <VideoSection
            src="/video/DS_WWD_Masthead.mp4"
            subtitles={{
              src: "/video/Mock-up.webm",
              kind: "subtitles",
              srcLang: "en",
              label: "English",
            }}
            heightClass="h-[620px] lg:h-[755px]"
          />
        </div>
        <div className="block bg-[url('/images/mobileview/mobhero1.jpg')] bg-cover bg-fixed bg-center bg-no-repeat max-md:h-[100vh]">
          <div className="absolute top-[6%] flex w-full flex-col justify-center lg:top-[18%]">
            <div className="container h-full px-4 md:px-8">
              <div className="mx-auto hidden md:block">
                <Image
                  width={250}
                  height={199}
                  unoptimized
                  src="/images/logo.png"
                  alt="Codesinc Logo"
                  priority
                  className="mx-auto md:h-[103px] md:w-[129px] lg:h-[200px] lg:w-[250px]"
                />
              </div>
              <h1 className="font-montserrat mx-auto mb-2.5 mt-5 text-center text-4xl font-bold uppercase text-white md:max-w-[500px] md:text-[40px] md:leading-[46px] lg:text-[48px] lg:leading-[52px]">
                World&apos;s Finest Technology Hub
              </h1>
              <div className="my-4 w-full">
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={50}
                  slidesPerView={1}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  speed={1000}
                  freeMode
                  className="w-full"
                >
                  {slidesData.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <div className="flex flex-col items-center justify-center text-center text-white">
                        <h3 className="text-xl text-lightblue">
                          {slide.title}
                        </h3>
                        <p className="mx-auto text-center text-base font-medium leading-[22px] text-white md:w-4/5">
                          {slide.description}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="mt-9 flex w-full flex-col items-center justify-center gap-5 md:flex-row">
                <button
                  onClick={() => handleScroll("services")}
                  className="flex h-14 items-center justify-center whitespace-nowrap rounded-full bg-lightblue px-8 text-lg uppercase tracking-wider text-white duration-300 ease-in-out hover:bg-white hover:text-lightblue md:px-[60px]"
                >
                  View Services
                </button>
                <button
                  onClick={() => handleScroll("portfolio")}
                  className="flex h-14 items-center justify-center whitespace-nowrap rounded-full border-2 border-white bg-transparent px-8 text-lg uppercase tracking-wider text-white duration-300 ease-in-out hover:bg-white hover:text-lightblue md:px-[60px]"
                >
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
