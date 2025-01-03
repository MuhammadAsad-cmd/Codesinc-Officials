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
      <div className="container px-4 py-[50px] md:px-8">
        <div className="flex w-full flex-col gap-5 lg:flex-row lg:items-center">
          <div className="lg:w-[41.67%]">
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
          <div className="pb-[60px] pt-[70px] lg:w-[58.33%]">
            <div>
              {/* Main heading */}
              <h1 className="my-2.5 text-3xl font-medium uppercase tracking-tighter text-Gray md:text-4xl lg:leading-[58px] xl:text-5xl">
                Our Global Offices
              </h1>

              {/* Asia Section */}
              <section>
                <h2 className="mb-[15px] mt-2.5 text-2xl font-normal uppercase text-lightblue">
                  Asia
                </h2>
                <h3 className="mb-2 pb-1 text-2xl font-medium uppercase leading-6 text-Gray">
                  Pakistan
                </h3>
                {/* Pakistan  */}
                <div className="mt-2 flex flex-col gap-4 lg:flex-row lg:items-center">
                  <div className="lg:w-1/3">
                    <h3 className="pb-1 text-[17px] font-medium uppercase leading-6 text-Gray">
                      Rahim Yar Khan
                    </h3>
                    <p className="break-words text-base font-normal leading-[22px] tracking-wide text-Gray">
                      Office Number 1 Huzaifa Town, Islamia university RYK
                      campus Road.
                    </p>
                    <h4 className="pb-1 pt-6 text-[17px] font-medium uppercase leading-6 text-Gray">
                      Phone
                    </h4>
                    <p className="break-words text-base font-normal leading-[22px] tracking-wide text-Gray">
                      +92 (301) 3887598
                    </p>
                  </div>

                  {/* Pakistan - Lahore */}
                  <div className="lg:w-1/3">
                    <h3 className="pb-1 text-[17px] font-medium uppercase leading-6 text-Gray">
                      Lahore
                    </h3>
                    <p className="break-words text-base font-normal leading-[22px] tracking-wide text-Gray">
                      Office No. 1, First Floor CSD Bedian Road, Near R A Bazar
                      cantt Lahore.
                    </p>
                    <h4 className="pb-1 pt-6 text-[17px] font-medium uppercase leading-6 text-Gray">
                      Phone
                    </h4>
                    <p className="break-words text-base font-normal leading-[22px] tracking-wide text-Gray">
                      +92 (331) 0099811
                    </p>
                  </div>
                </div>
              </section>

              <section className="mt-10">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                  {/* Europe Section */}
                  <section className="lg:w-1/3">
                    <h3 className="mb-2 pb-1 text-2xl font-medium uppercase leading-6 text-Gray">
                      Austrilia{" "}
                    </h3>
                    <div>
                      <h3 className="pb-1 text-[17px] font-medium uppercase leading-6 text-Gray">
                        Melbourne
                      </h3>
                      <p className="break-words text-base font-normal leading-[22px] tracking-wide text-Gray">
                        167 – 169 Street South Melbourne 3205.
                      </p>
                      <h4 className="pb-1 pt-6 text-[17px] font-medium uppercase leading-6 text-Gray">
                        Phone
                      </h4>
                      <p className="break-words text-base font-normal leading-[22px] tracking-wide text-Gray">
                        +61 (386) 460100
                      </p>
                    </div>
                  </section>

                  {/* America Section */}
                  <section className="lg:w-1/3">
                    <h3 className="mb-2 pb-1 text-2xl font-medium uppercase leading-6 text-Gray"></h3>
                    <div>
                      <h3 className="pb-1 text-[17px] font-medium uppercase leading-6 text-Gray">
                        USA
                      </h3>
                      <p className="break-words text-base font-normal leading-[22px] tracking-wide text-Gray">
                        1 Merchants Plz, Bangor, ME, United States, Maine.
                      </p>
                      <h4 className="pb-1 pt-6 text-[17px] font-medium uppercase leading-6 text-Gray">
                        Phone
                      </h4>
                      <p className="break-words text-base font-normal leading-[22px] tracking-wide text-Gray">
                        +1 (207) 947-9333
                      </p>
                    </div>
                  </section>
                  <section className="lg:w-1/3">
                    <h3 className="mb-2 pb-1 text-2xl font-medium uppercase leading-6 text-Gray"></h3>
                    <div>
                      <h3 className="pb-1 text-[17px] font-medium uppercase leading-6 text-Gray">
                        France
                      </h3>
                      <p className="break-words text-base font-normal leading-[22px] tracking-wide text-Gray">
                        46 Rue du Printemps, 31000 Toulouse, France
                      </p>
                      <h4 className="pb-1 pt-6 text-[17px] font-medium uppercase leading-6 text-Gray">
                        Phone
                      </h4>
                      <p className="break-words text-base font-normal leading-[22px] tracking-wide text-Gray">
                        +33621337627
                      </p>
                    </div>
                  </section>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offices;
