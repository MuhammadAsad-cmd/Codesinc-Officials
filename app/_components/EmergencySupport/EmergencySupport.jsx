import Image from "next/image";
import React from "react";

const EmergencySupport = ({ BgColor, HoverBtn, hoverColor }) => {
  return (
    <>
      <div className={`${BgColor} py-[25px]`}>
        <div className="container">
          <div className="mx-auto flex w-[83%] items-center justify-center px-4">
            <div className="w-1/3 px-4">
              <div className="flex items-center justify-center">
                <Image
                  width={107}
                  height={120}
                  unoptimized
                  src="/images/logos/test.png"
                  alt="Test Logo"
                />
              </div>
            </div>
            <div className="w-[66.66%] px-4">
              <p className="mb-2.5 font-montserrat text-xl font-normal capitalize leading-7 text-white">
                <strong>Get Emergency Support.</strong> Our 24/7 Support
                Representatives will help you with your project
              </p>
              <a href="#contact">
                <button
                  type="button"
                  className={`flex ${HoverBtn} ${hoverColor} items-center justify-center rounded-full border-2 border-white px-5 py-[7px] font-montserrat text-base font-normal leading-7 text-white duration-300 ease-in-out`}
                >
                  Click Here For Support
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmergencySupport;
