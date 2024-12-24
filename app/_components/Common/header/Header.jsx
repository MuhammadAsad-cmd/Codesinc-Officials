"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ServicesDropdown from "../../Dropdowns/ServicesDropdown";
import { MdMenu, MdOutlineMenu } from "react-icons/md";
import MenuSidebar from "../../Sidebars/MenuSidebar";

const Header = () => {
  const [isMenuSidebarOpen, setIsMenuSidebarOpen] = useState(false);

  const toggleMenuSidebar = (state) => {
    setIsMenuSidebarOpen(state);
  };

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="left-0 right-0 top-0 z-[100] mx-auto w-full lg:fixed">
        <div className="mx-auto h-[88px] bg-customGray px-3">
          <div className="mx-auto flex h-full w-full max-w-[1140px] items-center justify-between">
            <Link href="/">
              <Image
                width={60}
                height={60}
                unoptimized
                src="/images/logo.png"
                alt="Logo"
                className="h-[47px] w-[60px]"
              />
            </Link>
            <nav className="hidden lg:block">
              <ul className="font-montserrat flex items-center gap-6 text-white">
                <li>
                  <Link href="/">
                    <p className="group relative inline-block text-base font-normal uppercase leading-5 tracking-[1px] hover:text-white">
                      Home
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/about-us">
                    <p className="group relative inline-block text-base font-normal uppercase leading-5 tracking-[1px] hover:text-white">
                      About
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </p>
                  </Link>
                </li>
                <ServicesDropdown />

                {/* <li>
                  <Link href="/careers">
                    <p className="group relative inline-block text-base font-normal uppercase leading-5 tracking-[1px] hover:text-white">
                      Careers
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </p>
                  </Link>
                </li> */}
                <li>
                  <Link href="/all-projects">
                    <p className="group relative inline-block text-base font-normal uppercase leading-5 tracking-[1px] hover:text-white">
                      Portfolio
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us">
                    <p className="group relative inline-block text-base font-normal uppercase leading-5 tracking-[1px] hover:text-white">
                      Contact
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </p>
                  </Link>
                </li>
                <li>
                  <a href="tel:+923013887598">
                    <p className="group relative inline-block text-base font-normal uppercase leading-5 tracking-[1px] hover:text-white">
                      Call: +92 (301) 388-7598
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </p>
                  </a>
                </li>
              </ul>
            </nav>
            <button
              onClick={() => handleScroll("contact")}
              className="hidden h-[38px] items-center justify-center rounded bg-lightblue px-4 py-2 text-base font-semibold uppercase leading-5 text-white transition-transform duration-300 lg:flex"
            >
              Get a Free Quote
            </button>
            <div
              onClick={() => toggleMenuSidebar(true)}
              className="hidden size-12 cursor-pointer items-center justify-center text-4xl text-white max-lg:flex"
            >
              <MdOutlineMenu />
            </div>
          </div>
        </div>
      </header>

      <MenuSidebar
        isOpen={isMenuSidebarOpen}
        toggleMenuSidebar={toggleMenuSidebar}
      />
    </>
  );
};

export default Header;
