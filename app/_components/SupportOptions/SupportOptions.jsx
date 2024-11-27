import Image from "next/image";
import Link from "next/link";
import React from "react";

const SupportOptions = () => {
  return (
    <>
      <div className="hidden bg-lightblue lg:block">
        <div className="container px-4 py-[50px]">
          <div className="flex items-center justify-between">
            <div className="py-5">
              <p className="max-w-[350px] text-xl font-semibold">
                Discuss with our Experts &amp; Choose the{" "}
                <span className="font-bold uppercase">
                  best solution for your business
                </span>
              </p>
            </div>
            <div className="border-r border-Gray px-7">
              {" "}
              <Link
                target="_blank"
                href="tel:+923013887598"
                className="flex flex-col items-center gap-2 xl:flex-row"
              >
                <Image
                  width={32}
                  height={55}
                  unoptimized
                  src="/images/tel-1-1.png"
                  alt="Call Us"
                />
                <p className="text-xl font-extrabold text-Gray">
                  +92 (301) 388-7598
                </p>
              </Link>{" "}
            </div>
            <div className="border-r border-Gray px-10 py-2.5">
              {" "}
              <Link
                target="_blank"
                href="https://tawk.to/Codesinc"
                className="flex flex-col items-center gap-2 xl:flex-row"
              >
                <Image
                  width={60}
                  height={52}
                  unoptimized
                  src="/images/tel-2.png"
                  alt="chat"
                />{" "}
                <p className="text-xl font-extrabold text-Gray"> Live Chat </p>
              </Link>{" "}
            </div>
            <div className="px-10 py-[17px]">
              {" "}
              <Link
                href="#"
                className="flex flex-col items-center gap-2 xl:flex-row"
              >
                <Image
                  width={49}
                  height={34}
                  unoptimized
                  src="/images/tel-3.png"
                  alt="email"
                />{" "}
                <p className="text-xl font-extrabold text-Gray"> Email Us </p>
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportOptions;
