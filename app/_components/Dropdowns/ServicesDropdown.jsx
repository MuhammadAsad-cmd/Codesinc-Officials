import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const services = [
    {
      title: "Web Design & Development",
      icon: "/images/1.png",
      link: "/web-design-development",
    },
    {
      title: "Mobile App Development",
      icon: "/images/3.png",
      link: "/mobile-application-development",
    },
    {
      title: "Software Development",
      icon: "/images/4.png",
      link: "/software-development",
    },
    {
      title: "Startup",
      icon: "/images/9.png",
      link: "/startup",
      extra: "360 Degree Solution",
    },
    {
      title: "Artificial Intelligence",
      icon: "/images/4.png",
      link: "artificial-intelligence",
    },

    {
      title: "Ecommerce Development",
      icon: "/images/5.png",
      link: "/ecommerce-development",
      extra: "360 Degree Solution",
    },
    {
      title: "Managed Cloud Hosting",
      icon: "/images/6.png",
      link: "/managed-cloud-hosting",
    },
    {
      title: "DevOps",
      icon: "/images/11.png",
      link: "/digital-marketing",
    },
    {
      title: "IT Resource Allocation & Management",
      icon: "/images/8.png",
      link: "/it-resource-management",
    },
    {
      title: "Business Intelligence",
      icon: "/images/7.png",
      link: "/business-intelligence",
    },
    {
      title: "Business Process Outsourcing",
      icon: "/images/10.png",
      link: "/business-process-outsourcing",
    },
    {
      title: "Digital Marketing",
      icon: "/images/11.png",
      link: "digital-marketing",
    },
  ];

  return (
    <li
      className="relative"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <p className="group relative inline-block cursor-pointer text-base font-normal uppercase leading-5 tracking-[1px] hover:text-white">
        Services
        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
      </p>

      {isDropdownOpen && (
        <>
          <div className="absolute right-0 top-[100%]">
            <Image
              width={72}
              height={35}
              unoptimized
              src="/images/dd-arrow.png"
              alt="arrow"
            />
          </div>
          <div className="absolute left-20 top-10 z-50 h-[570px] w-[790px] -translate-x-1/2 transform rounded-lg bg-white shadow-lg">
            <div className="grid h-full grid-cols-4 gap-7 p-6">
              {services.map((service, index) => (
                <Link href={service.link} key={index} passHref>
                  <div className="flex cursor-pointer flex-col items-center text-center text-[#797979] hover:text-lightblue">
                    <div
                      className="h-[72px] w-[119px] transform bg-no-repeat transition-transform hover:brightness-90"
                      style={{
                        backgroundImage: `url(${service.icon})`,
                        width: "119px",
                        height: "72px",
                      }}
                    ></div>
                    <p className="mt-2 font-montserrat text-[13px] font-normal leading-[18px]">
                      {service.title}
                    </p>
                    {service.extra && (
                      <span className="mt-1 text-xs text-blue-500">
                        {service.extra}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </li>
  );
};

export default Dropdown;
