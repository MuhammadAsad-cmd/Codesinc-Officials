import Head from "next/head";
import Link from "next/link";
import React from "react";
import { FaHouseChimney } from "react-icons/fa6";

const Breadcrumbs = ({ title, breadcrumbPath }) => {
  return (
    <>
      <Head>
        <meta name="description" content="Navigate through our website with ease. Explore various sections and enhance your understanding of DevOps and Cloud services." />
        <meta name="keywords" content="Breadcrumbs, Navigation, DevOps, Cloud Services, Web Navigation, User Experience" />
        <meta name="author" content="ARPAtech" />
        <meta property="og:title" content="Breadcrumbs Navigation" />
        <meta property="og:description" content="Navigate through our website with ease. Explore various sections and enhance your understanding of DevOps and Cloud services." />
        <meta property="og:image" content="/images/cms/technological-blue.jpg" />
        <meta property="og:url" content="https://www.yourwebsite.com/azurepage" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Breadcrumbs Navigation" />
        <meta name="twitter:description" content="Navigate through our website with ease. Explore various sections and enhance your understanding of DevOps and Cloud services." />
        <meta name="twitter:image" content="/images/cms/technological-blue.jpg" />
        <meta name="twitter:url" content="https://www.yourwebsite.com/azurepage" />
        <link rel="canonical" href="https://www.yourwebsite.com/azurepage" />

      </Head>
      <div
        id="second-sec"
        className="font-montserrat flex h-[55px] items-center justify-center bg-[#e1dfdf]"
      >
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

    </>
  );
};

export default Breadcrumbs;
