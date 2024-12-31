import React from "react";
import Image from "next/image";
import Link from "next/link";

const Maintenance = ({
  title,
  subtitle,
  features,
  buttonText,
  borderBottom,
  textColor,
}) => {
  return (
    <div className="bg-offWhite py-[60px]">
      <div className="container px-4 text-center">
        <h2
          className={`inline-block items-center justify-center border-b-[3px] ${borderBottom} font-montserrat pb-3 text-[30px] font-semibold uppercase text-Gray md:text-[40px]`}
        >
          {title}
        </h2>
        <p className="font-montserrat mb-2.5 mt-4 text-[15px] font-normal leading-[21px] text-Gray">
          {subtitle}
        </p>
        <div className="mt-[70px] flex flex-col justify-center gap-4 md:flex-row lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="mb-6 flex w-full flex-col items-center px-4 sm:w-1/2 lg:w-1/4"
            >
              <Image
                width={180}
                height={180}
                unoptimized
                src={feature.imgSrc}
                alt={feature.title}
              />
              <h3 className="font-montserrat mb-2.5 mt-[30px] text-xl font-semibold uppercase leading-[22px]">
                {feature.title}
              </h3>
              <p className="font-montserrat w-[90%] text-[13px] font-normal leading-[22px] text-Gray">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <Link href="#contact" className="flex items-center justify-center">
          <button
            className={` ${borderBottom} ${textColor} mt-10 flex h-[45px] items-center justify-center rounded-full border-2 px-[60px] py-2.5 text-[15px] font-bold capitalize leading-5`}
          >
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Maintenance;
