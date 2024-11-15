import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const services = [
    "Web Development",
    "Mobile App Development",
    "Software Development",
    "Managed Cloud Hosting",
    "Startups",
    "Digital Marketing",
    "Business Process Outsourcing",
    "Business Intelligence",
    "IT Management Services",
  ];

  return (
    <>
      <div className="bg-[#fafafa]">
        <div className="container mx-auto w-full max-w-[1200px] pb-7 pt-[60px]">
          <div className="mb-20 flex">
            <div className="mr-[70px] w-[25.35294%] pb-[50px]">
              <div className="mb-2.5 h-[43px] w-[233px]">
                <Image
                  width={223}
                  height={43}
                  unoptimized
                  priority
                  src="/images/codesinc-logo.png"
                  alt="Codesinc Logo"
                />
              </div>
              <p className="text-[15px] font-normal leading-6 text-[#808080]">
                We empower your Business through our ingenious technological
                solutions, and support from our remarkable teams.
              </p>
            </div>

            <div className="ml-[3.52941%] w-[25.35294%]">
              <h3 className="mb-4 text-base font-bold leading-[21px] tracking-wide text-[#555555]">
                Services
              </h3>
              <ul>
                {services.map((service, index) => (
                  <li key={index}>
                    <p className="cursor-pointer text-sm font-medium leading-[21px] text-[grey] duration-300 ease-in-out hover:text-[#b2b2b2]">
                      {service}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="ml-[3.52941%] w-[25.35294%]">
              <h3 className="mb-4 text-base font-bold leading-[21px] tracking-wide text-[#555555]">
                Company
              </h3>
              <ul>
                <li>
                  <p className="cursor-pointer text-sm font-medium leading-[21px] text-[grey] duration-300 ease-in-out hover:text-[#b2b2b2]">
                    About
                  </p>
                </li>
                <li>
                  <p className="cursor-pointer text-sm font-medium leading-[21px] text-[grey] duration-300 ease-in-out hover:text-[#b2b2b2]">
                    Careers
                  </p>
                </li>
              </ul>
            </div>
            <div className="w-[8.33%] px-4 pb-[50px]">
              <h3 className="mb-4 text-base font-bold leading-[21px] tracking-wide text-[#555555]">
                Social
              </h3>
              <ul className="space-y-[5px]">
                <li>
                  <div className="flex size-10 items-center justify-center bg-[#3b5b99] text-2xl text-white">
                    <FaFacebookF />
                  </div>
                </li>
                <li>
                  <div className="flex size-10 items-center justify-center bg-[#00acee] text-2xl text-white">
                    <FaTwitter />
                  </div>
                </li>
                <li>
                  <div className="flex size-10 items-center justify-center bg-[#507da2] text-2xl text-white">
                    <FaLinkedinIn />
                  </div>
                </li>
                <li>
                  <div className="flex size-10 items-center justify-center bg-[#43993b] text-2xl text-white">
                    <FaWhatsapp />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <hr className="mx-auto my-5 w-full max-w-[1000px] border-t border-lightblue" />
          <div>
            <p className="text-sm font-bold uppercase leading-5 tracking-[0.5px] text-[#83838f]">
              © <span>2024</span> Codesinc (ADVANCED RESEARCH PROJECTS &amp;
              TECHNOLOGY)
            </p>
            <div className="flex items-center gap-1.5">
              <p className="cursor-pointer text-sm font-medium leading-[21px] text-[grey] duration-300 ease-in-out hover:text-[#b2b2b2]">
                Terms and Conditions
              </p>{" "}
              <p className="cursor-pointer text-sm font-medium leading-[21px] text-[grey] duration-300 ease-in-out hover:text-[#b2b2b2]">
                Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
