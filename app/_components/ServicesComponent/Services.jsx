import Image from "next/image";
import React from "react";

const Services = ({
  title,
  des1,
  des2,
  items,
  hoverBgColor,
  borderBottom = "border-skyBlue2",
}) => {
  return (
    <>
      <div className="mt-[50px] bg-offWhite py-[70px]">
        <div className="container px-4 text-center">
          <h2
            className={`inline-block items-center justify-center border-b-[3px] pb-3 text-center font-montserrat text-[40px] font-semibold uppercase text-Gray ${borderBottom} `}
          >
            {title}
          </h2>
          <p className="mb-2.5 mt-4 font-montserrat text-[15px] font-normal leading-[21px] text-Gray">
            {des1}
            <br /> {des2}
          </p>

          <div className="mx-auto mt-[50px] w-[83.33%]">
            <div className="mt-8 grid grid-cols-3 gap-8">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`group flex flex-col items-center p-5 duration-300 ease-in-out ${hoverBgColor} hover:text-white`}
                >
                  <div>
                    <Image
                      width={100}
                      height={100}
                      unoptimized
                      src={item.imgSrc}
                      alt={item.altText}
                    />
                  </div>
                  <h3 className="mb-3 mt-[30px] min-h-[47px] border-b border-black pb-[15px] text-center text-sm font-semibold uppercase group-hover:border-white">
                    {item.title}
                  </h3>
                  <p className="mb-2.5 font-montserrat text-[13px] font-normal leading-[21px] text-[#797979] group-hover:text-white">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
