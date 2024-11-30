"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhySection = ({
  title,
  textColor,
  borderColor,
  description,
  ImgSrc,
  altSrc,
  animation = "left",
}) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="overflow-hidden bg-offWhite">
        <div className="container px-4 py-[50px]">
          <div className="flex flex-col justify-center gap-y-6 md:flex-row">
            <div
              data-aos={animation === "left" ? "fade-right" : "fade-left"}
              className="md:w-[48%] lg:px-4"
            >
              <h3
                className={`${textColor} mb-2.5 mt-5 font-montserrat text-lg font-semibold uppercase`}
              >
                {title}
              </h3>
              <p className="text-left font-montserrat text-[15px] font-normal leading-[26px] text-Gray">
                {description}
              </p>
            </div>
            <div
              data-aos={animation === "left" ? "fade-left" : "fade-right"}
              className="md:w-[52%] lg:px-4"
            >
              <div className="mx-auto w-[90%]">
                <Image
                  width={555}
                  height={264}
                  unoptimized
                  src={ImgSrc}
                  alt={altSrc}
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhySection;
