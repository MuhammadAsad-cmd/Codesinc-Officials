import { services } from "@/app/Data/Services";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurServices = () => {
  return (
    <>
      <div id="services" className="bg-offWhite py-[50px]">
        <div className="container mb-12 px-4 md:px-8">
          <div className="mb-[60px]">
            <h2 className="mb-2.5 mt-5 text-center text-4xl font-[550] uppercase md:text-[45px] md:leading-[49px]">
              What we do
            </h2>
            <p className="text-center text-lg font-normal leading-7">
              We have a refined process after we have taken up a project. We
              offer the platform from where the projects take shape through
              stages of planning, testing and execution. In this aspect we
              follow an agile methodology and run the project through a loop of
              feedback and constant improvement. Our specialized services also
              have:{" "}
            </p>
          </div>

          <div className="grid h-full grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative h-[290px] overflow-hidden border border-lightblue bg-white p-6 hover:bg-none lg:px-[38px] lg:py-10"
              >
                <div className="absolute inset-x-5 inset-y-10 z-50 flex flex-col items-center text-center md:inset-x-[38px]">
                  <div className="mb-4">
                    <service.icon className="text-[44px] font-black text-lightblue duration-300 ease-in-out group-hover:text-white" />
                  </div>
                  <Link href={service.link}>
                    <h2 className="my-2.5 text-2xl font-bold capitalize duration-300 ease-in-out group-hover:text-white">
                      {service.title}
                    </h2>
                  </Link>
                  <p className="my-2 w-full max-w-[272px] text-center text-base font-normal text-darkGray duration-300 ease-in-out group-hover:text-white">
                    {service.description}
                  </p>
                </div>
                <div className="absolute inset-0 z-30 w-0 opacity-0 transition-all duration-300 ease-in-out group-hover:w-full group-hover:opacity-100">
                  <Image
                    width={350}
                    height={280}
                    unoptimized
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -right-5 -top-5 z-50 size-0 rotate-45 bg-lightblue opacity-0 duration-300 ease-in-out group-hover:size-10 group-hover:opacity-100"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
