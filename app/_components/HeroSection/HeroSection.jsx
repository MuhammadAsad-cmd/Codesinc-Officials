"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const HeroSection = () => {
  return (
    <>
      <div className="relative w-full">
        <video
          width={320}
          height={755}
          className="h-[755px] w-full"
          autoPlay
          loop
          muted
        >
          <source src="/video/DS_WWD_Masthead.mp4" type="video/mp4" />
          <track
            src="/video/Mock-up.webm"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-[18%] w-full">
          <div className="container mx-auto w-full max-w-[1140px]">
            <div className="mx-auto">
              <Image
                width={250}
                height={199}
                unoptimized
                src="/images/logo.png"
                alt="Codesinc Logo"
                priority
                className="mx-auto h-[200px] w-[250px]"
              />
            </div>
            <h1 className="mx-auto mb-2.5 mt-5 max-w-[500px] text-center font-montserrat text-[48px] font-bold uppercase leading-[52px] text-white">
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
                freeMode
                speed={1000}
              >
                <SwiperSlide>
                  <div className="flex flex-col items-center justify-center text-center text-white">
                    <h3 className="text-xl text-lightblue">We Are Codesinc</h3>
                    <p className="mx-auto w-4/5 text-center text-base font-medium leading-[22px] text-white">
                      We have a team of IT consultants with presence at the key
                      technology innovation hubs around the world. We empower
                      you to modify and analyze data and turn it profitable by
                      simplifying business goals.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="flex flex-col items-center justify-center text-center text-white">
                    <h3 className="text-xl text-lightblue">
                      We Are Problem Solvers
                    </h3>
                    <p className="mx-auto w-4/5 text-center text-base font-medium leading-[22px] text-white">
                      We have a team of IT consultants with presence at the key
                      technology innovation hubs around the world. We empower
                      you to modify and analyze data and turn it profitable by
                      simplifying business goals.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="flex flex-col items-center justify-center text-center text-white">
                    <h3 className="text-xl text-lightblue">We Are Pioneers</h3>
                    <p className="mx-auto w-4/5 text-center text-base font-medium leading-[22px] text-white">
                      Codesinc – the finest technology hub kept innovating as
                      more people joined the global village and came closer with
                      connectivity. We are adding our bit to the world advanced
                      research in technologies as we embark on the future to
                      continue to create better experiences.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="flex flex-col items-center justify-center text-center text-white">
                    <h3 className="text-xl text-lightblue">
                      We Are Innovators
                    </h3>
                    <p className="mx-auto w-4/5 text-center text-base font-medium leading-[22px] text-white">
                      Codesinc offers complete solutions in software development
                      from services ranging from custom application development
                      to web design and development. Our presence as a leading
                      IT service provider for all advanced technology-based
                      projects.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="flex flex-col items-center justify-center text-center text-white">
                    <h3 className="text-xl text-lightblue">We Are Creators</h3>
                    <p className="mx-auto w-4/5 text-center text-base font-medium leading-[22px] text-white">
                      Codesinc offers complete solutions in software development
                      from services ranging from custom application development
                      to web design and development. Our presence as a leading
                      IT service provider for all advanced technology-based
                      projects.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="flex flex-col items-center justify-center text-center text-white">
                    <h3 className="text-xl text-lightblue">
                      More Than 5 Years of IT Experience
                    </h3>
                    <p className="mx-auto w-4/5 text-center text-base font-medium leading-[22px] text-white">
                      Codesinc offers complete solutions in software development
                      from services ranging from custom application development
                      to web design and development. Our presence as a leading
                      IT service provider for all advanced technology-based
                      projects.
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="mt-9 flex h-full w-full items-center justify-center gap-5">
              <button className="flex h-14 items-center justify-center rounded-full bg-lightblue px-[60px] text-lg uppercase tracking-wider text-white duration-300 ease-in-out hover:bg-white hover:text-lightblue">
                View Services
              </button>
              <button className="flex h-14 items-center justify-center rounded-full border-2 border-white bg-transparent px-[60px] text-lg uppercase tracking-wider text-white duration-300 ease-in-out hover:bg-white hover:text-lightblue">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
