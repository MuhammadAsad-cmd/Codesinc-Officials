import Image from "next/image";
import React from "react";

const ServicesList = ({
  title,
  des1,
  des2,
  des3,
  head1,
  head2,
  textColor,
  BgColor,
  ColorHead,
  borderColor,
}) => {
  return (
    <>
      <div className={`${BgColor} textColor py-20 text-white`}>
        <div className="container flex flex-col px-4 md:flex-row">
          <div className="md:w-[41.66%] lg:px-4">
            <h3
              className={`mb-2.5 inline-block ${ColorHead} border-b-2 ${borderColor} border-white pb-[15px] font-montserrat text-2xl font-bold uppercase md:text-[30px]`}
            >
              {title}
            </h3>
            <p className="mb-[30px] mt-5 font-montserrat text-[13px] font-normal leading-[22px]">
              {des1}
            </p>
            <h3
              className={`mb-2.5 mt-5 font-montserrat text-lg font-semibold uppercase leading-5 ${ColorHead}`}
            >
              {head1}
            </h3>
            <p className="mb-[30px] mt-5 font-montserrat text-[13px] font-normal leading-[22px]">
              {des2}
            </p>
            <h3
              className={`mb-2.5 mt-5 font-montserrat text-lg font-semibold uppercase leading-5 ${ColorHead}`}
            >
              {head2}
            </h3>
            <p className="mb-[30px] mt-5 font-montserrat text-[13px] font-normal leading-[22px]">
              {des3}
            </p>
          </div>
          <div className="md:w-[58.33%]">
            <div className="mt-6">
              <Image
                width={580}
                height={336}
                unoptimized
                src="/images/team/ecom1.gif"
                alt="Cloud"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesList;
