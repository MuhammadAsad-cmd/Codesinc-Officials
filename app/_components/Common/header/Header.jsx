"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ServicesDropdown from "../../Dropdowns/ServicesDropdown";
import { MdMenu, MdOutlineMenu } from "react-icons/md";
import MenuSidebar from "../../Sidebars/MenuSidebar";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuSidebarOpen, setIsMenuSidebarOpen] = useState(false);

  const toggleMenuSidebar = (state) => {
    setIsMenuSidebarOpen(state);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`left-0 right-0 z-[100] lg:fixed ${
          isScrolled ? "top-0 mx-auto w-full" : "lg:top-7"
        } transition-all duration-500`}
      >
        <div
          className={`mx-auto bg-customGray px-3 ${
            isScrolled
              ? "h-[88px]"
              : "h-[68px] w-full max-w-[1140px] lg:rounded-lg"
          }`}
        >
          <div
            className={` ${
              isScrolled
                ? "mx-auto flex h-full w-full max-w-[1140px] items-center justify-between gap-16"
                : "flex h-full items-center gap-16 max-lg:justify-between"
            }`}
          >
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
              <ul className="flex items-center gap-6 font-montserrat text-white">
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
                <li>
                  <Link href="/contact-us">
                    <p className="group relative inline-block text-base font-normal uppercase leading-5 tracking-[1px] hover:text-white">
                      Contact
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/careers">
                    <p className="group relative inline-block text-base font-normal uppercase leading-5 tracking-[1px] hover:text-white">
                      Careers
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/all-projects">
                    <p className="group relative inline-block text-base font-normal uppercase leading-5 tracking-[1px] hover:text-white">
                      Portfolio
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
            <div
              onClick={() => toggleMenuSidebar(true)}
              className="hidden size-12 cursor-pointer items-center justify-center text-4xl text-white max-lg:flex"
            >
              <MdOutlineMenu />
            </div>
            <div className="absolute right-7 top-8 ml-auto hidden xl:block">
              <button
                onClick={() => handleScroll("contact")}
                className={`flex h-[38px] items-center justify-center rounded bg-lightblue px-5 py-2 text-base font-semibold uppercase leading-5 text-white transition-transform duration-300 ${
                  isScrolled ? "translate-y-0" : "-translate-y-4"
                }`}
              >
                Get a Free Quote
              </button>
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
