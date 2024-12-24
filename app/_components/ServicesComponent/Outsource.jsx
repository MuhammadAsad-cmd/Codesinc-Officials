import Image from "next/image";
import React from "react";

const Outsource = ({ title, des1, Imgsrc, Imgalt, borderColor, textColor }) => {
  return (
    <>
      <div className="container px-4 py-[50px]">
        <div className="flex flex-col justify-center gap-y-6 md:flex-row">
          <div className="md:w-[41.66%] lg:px-4">
            <h2 className="mb-2.5 mt-5 font-montserrat text-2xl font-semibold uppercase leading-[33px] text-black md:text-[30px]">
              {title}
            </h2>
            <p className="text-left font-montserrat text-[15px] font-normal leading-[26px] text-Gray">
              {des1}
            </p>
            <button
              className={`mt-10 flex items-center justify-center rounded-full border-2 ${borderColor} px-[60px] py-2.5 text-[15px] capitalize ${textColor}`}
            >
              Get Started
            </button>
          </div>
          <div className="md:w-[58.33%] lg:px-4">
            <div className="mx-auto lg:w-[90%]">
              <Image
                width={555}
                height={264}
                unoptimized
                src={Imgsrc}
                alt={Imgalt}
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Outsource;
