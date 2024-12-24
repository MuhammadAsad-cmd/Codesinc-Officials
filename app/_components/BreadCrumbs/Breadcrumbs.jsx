import Link from "next/link";
import React from "react";
import { FaHouseChimney } from "react-icons/fa6";

const Breadcrumbs = ({ title, breadcrumbPath }) => {
  return (
    <div className="flex h-[55px] items-center justify-center bg-[#e1dfdf] font-montserrat">
      <div className="container flex h-full w-full items-center px-4 md:px-8">
        <div className="flex h-10 items-center justify-center rounded border border-customGray">
          {/* Home Icon Link */}
          <Link
            href="/"
            className="flex h-full cursor-pointer items-center justify-center bg-customGray pl-2.5 pr-1.5 text-lg text-[#f1f1f1]"
          >
            <FaHouseChimney />
          </Link>

          {/* Chevron Icon */}
          <div className="h-full border border-y-[17px] border-l-[10px] border-customGray border-y-transparent border-r-transparent"></div>

          {/* Breadcrumb Title */}
          {breadcrumbPath ? (
            <p className="px-2 text-[13px] uppercase text-[#3e3e3e]">
              <Link href={breadcrumbPath} className="text-[#3e3e3e]">
                {title}
              </Link>
            </p>
          ) : (
            <p className="px-2 text-[13px] uppercase text-[#3e3e3e]">{title}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
