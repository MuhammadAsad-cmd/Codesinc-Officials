"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-[100] ${
          isScrolled ? "top-0 mx-auto w-full" : "top-7"
        } transition-all duration-500`}
      >
        <div
          className={`mx-auto bg-customGray px-3 ${
            isScrolled
              ? "h-[88px] rounded-none"
              : "h-[68px] w-full max-w-[1140px] rounded-lg"
          }`}
        >
          <div className="mx-auto h-full w-full max-w-[1140px] rounded-lg">
            <div className="flex h-full items-center justify-between gap-[30px]">
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
              <nav>
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
                  <li>
                    <Link href="/services">
                      <p className="group relative inline-block text-base font-normal uppercase leading-5 tracking-[1px] hover:text-white">
                        Services
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
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
