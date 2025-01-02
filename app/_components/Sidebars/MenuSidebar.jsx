"use client";
import { services } from "@/app/Data/Services";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const MenuSidebar = ({ isOpen, toggleMenuSidebar }) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // Adjust the breakpoint as needed
        toggleMenuSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [toggleMenuSidebar]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling when sidebar is open
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling when sidebar is closed
    }
    return () => {
      document.body.style.overflow = "auto"; // Reset scrolling when component unmounts
    };
  }, [isOpen]);

  const handleOverlayClick = (e) => {
    if (e.target.id === "overlay") {
      handleCloseSidebar();
    }
  };

  const handleCloseSidebar = () => {
    toggleMenuSidebar(false);
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {/* Overlay */}
        <div
          id="overlay"
          className="fixed inset-0 bg-black bg-opacity-40"
          onClick={handleOverlayClick}
        >
          {/* Sidebar Content */}
          <div
            className={`absolute left-0 top-0 z-50 h-screen w-[300px] transform overflow-auto bg-customGray shadow-lg transition-transform duration-500 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* Content */}
            <div className="px-3 text-black">
              <div className="my-[20px] mb-[20px] flex items-center justify-between px-2">
                <Link
                  href="/"
                  className="flex flex-shrink-0 cursor-pointer items-center gap-2"
                >
                  <Image
                    width={60}
                    height={60}
                    unoptimized
                    priority
                    src="/images/logo.png"
                    alt="mainlogo"
                    className="object-contain"
                  />
                  <p className="text-4xl text-white">Codesinc</p>
                </Link>
              </div>
              <ul className="font-montserrat flex flex-col gap-5 pb-5 text-white">
                <li>
                  <Link href="/">
                    <p className="group relative inline-block text-base font-normal leading-5 tracking-[1px] hover:text-white">
                      Home
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/about-us">
                    <p className="group relative inline-block text-base font-normal leading-5 tracking-[1px] hover:text-white">
                      About
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </p>
                  </Link>
                </li>
                {services.map((service, index) => (
                  <li key={index}>
                    <Link href={service.link}>
                      <p className="group relative inline-block text-base font-normal leading-5 tracking-[1px] hover:text-white">
                        {service.title}
                        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                      </p>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/testimonials">
                    <p className="group relative inline-block text-base font-normal leading-5 tracking-[1px] hover:text-white">
                      Testimonials
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/all-projects">
                    <p className="group relative inline-block text-base font-normal leading-5 tracking-[1px] hover:text-white">
                      Portfolio
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us">
                    <p className="group relative inline-block text-base font-normal leading-5 tracking-[1px] hover:text-white">
                      Contact
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </p>
                  </Link>
                </li>
                <li>
                  <a href="tel:+923126806286.">
                    <p className="group relative inline-block text-base font-normal leading-5 tracking-[1px] hover:text-white">
                      Call: +92 312 6806286.
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuSidebar;
