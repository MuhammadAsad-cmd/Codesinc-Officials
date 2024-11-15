import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const services = [
    {
      title: "Web Design & Development",
      icon: "/icons/web-design.svg",
      link: "/services/web-development",
    },
    {
      title: "Mobile App Development",
      icon: "/icons/mobile-app.svg",
      link: "/services/mobile-development",
    },
    {
      title: "Software Development",
      icon: "/icons/software-development.svg",
      link: "/services/software-development",
    },
    {
      title: "Startup",
      icon: "/icons/startup.svg",
      link: "/services/startup",
      extra: "360 Degree Solution",
    },
    {
      title: "Digital Marketing",
      icon: "/icons/digital-marketing.svg",
      link: "/services/digital-marketing",
    },
    {
      title: "Laravel Development",
      icon: "/icons/laravel.svg",
      link: "/services/laravel-development",
    },
    {
      title: "Ecommerce Development",
      icon: "/icons/ecommerce.svg",
      link: "/services/ecommerce-development",
      extra: "360 Degree Solution",
    },
    {
      title: "Managed Cloud Hosting",
      icon: "/icons/cloud-hosting.svg",
      link: "/services/cloud-hosting",
    },
    {
      title: "IT Resource Allocation & Management",
      icon: "/icons/it-resource.svg",
      link: "/services/it-resource",
    },
    {
      title: "Business Intelligence",
      icon: "/icons/business-intelligence.svg",
      link: "/services/business-intelligence",
    },
    {
      title: "Business Process Outsourcing",
      icon: "/icons/bpo.svg",
      link: "/services/bpo",
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
        <div className="absolute left-1/2 top-[100%] z-50 mt-2 w-[790px] -translate-x-1/2 transform rounded bg-white p-6 shadow-lg">
          <div className="grid grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link href={service.link} key={index} passHref>
                <div className="flex cursor-pointer flex-col items-center text-center text-gray-700 hover:text-blue-500">
                  {/* <Image
                    src={service.icon}
                    alt={service.title}
                    width={50}
                    height={50}
                  /> */}
                  <p className="mt-2 font-semibold">{service.title}</p>
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
      )}
    </li>
  );
};

export default Dropdown;
