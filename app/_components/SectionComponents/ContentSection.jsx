"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const ContentSection = ({
  title,
  description,
  Imgsrc,
  borderColor,
  textColor,
  altsrc,
  animation = "left",
}) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="overflow-hidden bg-white py-[70px] text-center">
        <div className="container px-4">
          <div>
            <h2
              data-aos="fade-up"
              className={`${borderColor} font-montserrat inline-block border-b-[3px] pb-3 text-[30px] font-semibold uppercase text-Gray md:text-[40px]`}
            >
              {title}
            </h2>
            <div className="mt-20 flex flex-col justify-center gap-y-6 md:flex-row">
              <div
                data-aos={animation === "left" ? "fade-right" : "fade-left"}
                className="md:w-1/2 lg:px-4"
              >
                <Image
                  width={555}
                  height={264}
                  unoptimized
                  src={Imgsrc}
                  alt={altsrc}
                />
              </div>
              <div
                data-aos={animation === "left" ? "fade-left" : "fade-right"}
                className="md:w-1/2 lg:px-4"
              >
                <p className="font-montserrat text-left text-[15px] font-normal leading-[26px] text-Gray">
                  {description}
                </p>
              </div>
            </div>
            <Link href="#contact">
              <button
                data-aos="fade-up"
                className={`${borderColor} ${textColor} mx-auto mt-10 flex items-center justify-center rounded-full border-2 px-[60px] py-2.5 text-[15px] capitalize`}
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentSection;
