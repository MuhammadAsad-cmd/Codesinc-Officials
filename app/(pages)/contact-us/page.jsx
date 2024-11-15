import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import Link from "next/link";
import React from "react";
import { FaHouseChimney } from "react-icons/fa6";

const page = () => {
  return (
    <>
      <ContactForm />
      <div className="flex h-[55px] items-center justify-center bg-[#e1dfdf]">
        <div className="container mx-auto flex h-full w-full max-w-[1140px] items-center">
          <div className="flex h-10 items-center justify-center rounded border border-customGray">
            <Link
              href="/"
              className="flex h-full cursor-pointer items-center justify-center bg-customGray pl-2.5 pr-1.5 text-lg text-[#f1f1f1]"
            >
              <FaHouseChimney />
            </Link>
            <div className="h-full border border-y-[17px] border-l-[10px] border-customGray border-y-transparent border-r-transparent"></div>
            <p className="px-2 text-[13px] uppercase text-[#3e3e3e]">
              contact us
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
