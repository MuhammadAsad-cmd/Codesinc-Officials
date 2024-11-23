"use client";
import Image from "next/image";
import React, { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

const Offices = () => {
  const [hovered, setHovered] = useState(null); // Track hovered ping

  const tooltips = [
    {
      id: "first",
      heading: "US",
      position: "left-1/4 top-1/3",
      text: "US - 1 Merchants Plz, Bangor, ME, United States, Maine.",
    },
    {
      id: "second",
      heading: "PAKISTAN",
      position: "bottom-10 right-10",
      text: "Office Number 1 Huzaifa Town, Islamia university RYK campus Road",
    },
    {
      id: "third",
      heading: "Australia",
      position: "right-1/4 top-1/3",
      text: "167 – 169 Street South Melbourne 3205",
    },
  ];

  return (
    <>
      <div className="container py-[50px]">
        <div className="flex w-full items-center gap-2">
          <div className="w-[41.67%]">
            <div className="relative">
              <Image
                width={400}
                height={400}
                unoptimized
                src="/images/map.png"
                alt="map"
                className="h-full w-full object-cover"
              />

              {tooltips.map(({ id, position, text, heading }) => (
                <div
                  key={id}
                  className={`absolute ${position} translate-y-1/2`}
                  onMouseEnter={() => setHovered(id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Ping Marker */}
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
                  </span>

                  {/* Tooltip with Arrow */}
                  {hovered === id && (
                    <div className="absolute -left-24 bottom-[90%] mb-3 w-[276px]">
                      <div className="TooltipShadow w-full max-w-[276px] rounded-[5px] border border-[#ddd] p-[1px] text-sm">
                        <div className="rounded-t-[5px] border-b border-[#ebebeb] bg-[#f7f7f7] px-[14px] py-2 text-sm">
                          {heading}
                        </div>
                        <div className="relative rounded-md bg-white px-[14px] py-[9px] text-sm font-normal shadow-md">
                          {text}
                        </div>
                      </div>
                      {/* Arrow */}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="w-[58.33%] pb-[60px] pt-[70px]">
            <div>
              <h5 className="my-2.5 text-[53px] font-medium uppercase leading-[58px] tracking-tighter text-Gray">
                our global offices
              </h5>
              <h4 className="mb-[15px] mt-2.5 text-2xl font-normal uppercase text-lightblue">
                Asia
              </h4>
              <h2 className="text-[21px] font-light uppercase leading-[23px] text-Gray">
                pakistan
              </h2>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-1/3">
                  <h3 className="pb-1 text-[17px] font-medium uppercase leading-6 text-Gray">
                    Rahim Yar Khan
                  </h3>
                  <p className="break-words text-base font-normal leading-[22px] tracking-wide text-Gray">
                    Office Number 1 Huzaifa Town, Islamia university RYK campus
                    Road.
                  </p>
                  <h3 className="pb-1 pt-6 text-[17px] font-medium uppercase leading-6 text-Gray">
                    Phone
                  </h3>
                  <p className="break-words text-base font-normal leading-[22px] tracking-wide text-Gray">
                    +92 (301) 3887598
                  </p>
                </div>
                <div className="w-1/3">
                  <h3 className="pb-1 text-[17px] font-medium uppercase leading-6 text-Gray">
                    LAHORE
                  </h3>
                  <p className="break-words text-base font-normal leading-[22px] tracking-wide text-Gray">
                    Office No. 1, First Floor CSD Bedian Road, Near R A Bazar
                    cantt Lahore.
                  </p>
                  <h3 className="pb-1 pt-6 text-[17px] font-medium uppercase leading-6 text-Gray">
                    Phone
                  </h3>
                  <p className="break-words text-base font-normal leading-[22px] tracking-wide text-Gray">
                    +92 (331) 0099811
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-1/3">
                  <h4 className="mb-[15px] mt-2.5 text-2xl font-normal uppercase text-lightblue">
                    Australia
                  </h4>
                  <h2 className="text-[17px] font-normal uppercase text-Gray">
                    Australia
                  </h2>
                  <p className="break-words text-base font-normal leading-[22px] tracking-wide text-Gray">
                    167 – 169 Street South Melbourne 3205.
                  </p>
                  <h3 className="pb-1 pt-6 text-[17px] font-medium uppercase leading-6 text-Gray">
                    Phone
                  </h3>
                  <p className="break-words text-base font-normal leading-[22px] tracking-wide text-Gray">
                    +61 (386) 460100
                  </p>
                </div>

                <div className="w-1/3">
                  <h4 className="mb-[15px] mt-2.5 text-2xl font-normal uppercase text-lightblue">
                    america
                  </h4>
                  <h2 className="text-[17px] font-normal uppercase text-Gray">
                    USA
                  </h2>
                  <p className="break-words text-base font-normal leading-[22px] tracking-wide text-Gray">
                    1 Merchants Plz, Bangor, ME, United States, Maine.
                  </p>
                  <h3 className="pb-1 pt-6 text-[17px] font-medium uppercase leading-6 text-Gray">
                    Phone
                  </h3>
                  <p className="break-words text-base font-normal leading-[22px] tracking-wide text-Gray">
                    +1 (207) 947-9333
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offices;
