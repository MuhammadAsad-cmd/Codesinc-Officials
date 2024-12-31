import Image from "next/image";
import Link from "next/link";
import React from "react";

const HowWedoIt = ({ borderColor, textColor, items }) => {
  return (
    <div className="bg-offWhite py-[70px]">
      <div className="container px-4 text-center">
        <h4
          className={`${borderColor} font-montserrat inline-block items-center justify-center border-b-[3px] pb-3 text-center text-[30px] font-semibold uppercase text-Gray md:text-[40px]`}
        >
          how we do it
        </h4>
        <div className="mx-auto mt-[50px]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {items.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col items-center duration-300 ease-in-out"
              >
                <div>
                  <Image
                    width={79}
                    height={77}
                    unoptimized
                    src={item.icon}
                    alt={item.title}
                  />
                </div>
                <h3 className="mb-2.5 mt-[30px] text-center text-xl font-semibold uppercase group-hover:border-white">
                  {item.title}
                </h3>
                <p className="font-montserrat mb-2.5 text-[13px] font-normal leading-[21px] text-Gray">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <Link href="#contact">
            <button
              className={`${borderColor} ${textColor} mx-auto mt-10 flex items-center justify-center rounded-full border-2 px-[60px] py-2.5 text-[15px] capitalize`}
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowWedoIt;
