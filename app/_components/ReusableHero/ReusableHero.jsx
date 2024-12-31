"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";

const ReusableHero = ({
  backgroundImage,
  iconImage,
  title,
  description,
  buttonText,
  buttonLink,
  textColor = "text-white",
  buttonColor = "text-goldenYellow",
  containerBgColor = "",
  iconWidth = 135,
  iconHeight = 153,
  rightSection = null,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div
      className={`h-full min-h-screen w-full bg-cover bg-center bg-no-repeat py-12 md:py-[100px] ${containerBgColor}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto flex h-full flex-col items-center justify-center space-y-8 px-4 text-center lg:flex-row lg:text-left">
        {/* Left Section */}
        <div data-aos="fade-right" className="xl:w-[58.33%]">
          <div className="max-lg:flex max-lg:items-center max-lg:justify-center">
            <Image
              width={iconWidth}
              height={iconHeight}
              unoptimized
              src={iconImage}
              alt="Icon"
            />
          </div>
          <h1
            className={`font-montserrat mb-2.5 mt-5 text-[30px] font-extrabold uppercase leading-10 md:text-4xl ${textColor}`}
          >
            {title}
          </h1>
          <p
            className={`mt-[25px] text-base font-medium leading-7 ${textColor}`}
          >
            {description}
          </p>
          <div className="mt-[30px]">
            <a
              href={buttonLink}
              className={`font-montserrat text-xl font-extrabold leading-7 ${buttonColor} hover:underline`}
            >
              {buttonText} &gt;
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div data-aos="fade-left" className="md:w-1/2 lg:w-[33.33%]">
          {rightSection}
        </div>
      </div>
    </div>
  );
};

export default ReusableHero;
