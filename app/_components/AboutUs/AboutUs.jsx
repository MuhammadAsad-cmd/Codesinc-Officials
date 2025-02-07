import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHouseChimney } from "react-icons/fa6";
import Breadcrumbs from "../BreadCrumbs/Breadcrumbs";
import Head from "next/head";

const AboutUs = () => {
  return (
    <>
      
        {/* SEO Meta Tags */}
        <Head>
          <title>About Us | CodesInc - Our Journey and Vision</title>
          <meta
            name="description"
            content="Discover CodesInc's journey since 2019. Learn about our milestones, global footprint, and the brilliant team behind our success."
          />
          <meta
            name="keywords"
            content="About CodesInc, IT Services, Software Development, Global Business Solutions, Startups, Creative Design"
          />
          <meta name="author" content="CodesInc" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:title" content="About Us | CodesInc - Our Journey and Vision" />
          <meta
            property="og:description"
            content="Explore CodesInc's journey of innovation, growth, and global collaboration since 2019. Meet the team driving our success."
          />
          <meta property="og:image" content="/images/about-us-banner.jpg" />
          <meta property="og:url" content="https://yourwebsite.com/about-us" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <div className="relative w-full">
          <Image
            width={1200}
            height={813}
            unoptimized
            src="/images/about-us-banner.jpg"
            alt="About Us Banner"
            className="h-[661px] w-full object-cover"
          />
          <div className="absolute top-[20%] w-full">
            <div className="container">
              <div className="mx-auto">
                <Image
                  width={250}
                  height={199}
                  unoptimized
                  src="/images/logo.png"
                  alt="Codesinc Logo"
                  priority
                  className="mx-auto h-[200px] w-[250px]"
                />
              </div>
              <h1 className="mb-2.5 mt-5 text-center font-montserrat text-[48px] font-bold uppercase leading-[52px] text-white duration-500 ease-in-out hover:tracking-[7px]">
                The Codesinc Story
              </h1>
            </div>
          </div>
        </div>

        <Breadcrumbs title="about us" breadcrumbPath="/about-us" />

        <section className="container px-4">
          <div className="py-[50px]">
            <h2 className="mb-2.5 mt-5 font-montserrat text-4xl font-bold uppercase leading-[66px] tracking-tighter md:text-5xl">
              About Us
            </h2>
            <br />
            <h3 className="mb-2.5 mt-5 text-2xl font-medium uppercase tracking-tighter">
              Journey since 2019
            </h3>
            <br />
            <p className="mb-2.5 text-[17px] font-normal leading-[30px] text-gray878">
              {" "}
              We started in 2019 as a classic information technology service
              provider with the aim of delivering business solutions to customers
              worldwide. Today, we are stretched across four continents with
              offices and customers in US, UK, UAE and Pakistan.{" "}
            </p>

            <p className="mb-2.5 text-[17px] font-normal leading-[30px] text-gray878">
              {" "}
              With a strong workforce of more than 50 employees, the company has
              achieved remarkable milestones. Our gamut of services include
              software buildup, website development, mobile development, ecommerce
              store development, call center and customer support and startups
              assistance has made us an established and reputed brand name among
              local and foreign clients.
            </p>

            <h3 className="mb-2.5 mt-5 text-2xl font-medium uppercase tracking-tight">
              Investing in Startups
            </h3>
            <br />
            <p className="mb-2.5 text-[17px] font-normal leading-[30px] text-gray878">
              Startups are the breeding ground for groundbreaking ideas. By
              investing in startups, you&apos;re becoming a part of an innovation
              hub where creativity and agility thrive. These dynamic environments
              foster solutions that have the potential to disrupt industries and
              create new markets.
            </p>

            <h3 className="mb-2.5 mt-5 text-2xl font-medium uppercase tracking-tight">
              Celebrating 5 Years of Success!
            </h3>
            <br />
            <p className="mb-2.5 text-[17px] font-normal leading-[30px] text-gray878">
              At CodesInc, we are thrilled to mark a significant milestone—five
              years of innovation, growth, and success. As we reflect on our
              journey, we are immensely proud to have served dozens of clients
              across the globe, reaching corners of the world such as the USA, UK,
              UAE, Nigeria, Uganda, Pakistan, India, and Bangladesh.
            </p>

            <p className="mb-2.5 text-[17px] font-normal leading-[30px] text-gray878">
              United States (USA): From the tech hubs of Silicon Valley to the
              bustling streets of New York, CodesInc has left its mark,
              contributing to the ever-evolving landscape of American innovation.
            </p>

            <p className="mb-2.5 text-[17px] font-normal leading-[30px] text-gray878">
              Client-Centric Approach: Our success is intricately linked to the
              success of our clients. We approach every project with a commitment
              to understanding unique needs and delivering solutions that exceed
              expectations.
            </p>

            <p className="mb-2.5 text-[17px] font-normal leading-[30px] text-gray878">
              Global Collaboration: Our journey is a testament to the power of
              global collaboration. By working with clients across continents, we
              have cultivated a diverse and enriching experience that fuels our
              creativity and ingenuity.
            </p>
          </div>
        </section>
        <div className="h-full w-full bg-[url('/images/parallaxxx.jpg')] bg-cover bg-center">
          <div className="flex h-full flex-col items-center justify-center">
            <div className="container px-4 py-20">
              <h1 className="text-center text-4xl font-bold uppercase tracking-tighter text-white md:text-5xl">
                Brains Behind Codesinc
              </h1>
              <div className="mt-[60px] grid w-full grid-cols-1 gap-4 md:grid-cols-3 lg:gap-8">
                <div className="bg-white px-10 py-5">
                  <h2 className="text-center font-Helvetica text-[22px] font-medium uppercase text-lightblue">
                    Engr. Muhammad Fayyaz
                  </h2>
                  <h3 className="text-center text-xl leading-[22px] text-[#777777]">
                    CEO of Codesinc
                  </h3>
                  <p className="mt-5 text-justify text-[15px] font-normal leading-[21px] text-gray878">
                    Engr. Muhammad Fayyaz&apos;s leadership, CodesInc has expanded
                    its footprint across the globe, establishing a strong presence
                    in the USA, UK, UAE, Nigeria, Uganda, Pakistan, India, and
                    Bangladesh. His global perspective has been crucial in shaping
                    CodesInc as a dynamic and internationally recognized software
                    company.
                  </p>
                </div>
                <div className="bg-white px-10 py-5">
                  <h2 className="text-center font-Helvetica text-[22px] font-medium uppercase text-lightblue">
                    Tanveer Hussain
                  </h2>
                  <h3 className="text-center text-xl leading-[22px] text-[#777777]">
                    Creative Director
                  </h3>
                  <p className="mt-5 text-justify text-[15px] font-normal leading-[21px] text-gray878">
                    Tanveer&apos;s journey is a testament to his passion for
                    design and his commitment to crafting visually stunning and
                    user-centric experiences. As the Creative Director, he sets
                    the artistic direction for CodesInc, infusing every project
                    with a touch of innovation and aesthetic brilliance.
                  </p>
                </div>
                <div className="bg-white px-10 py-5">
                  <h2 className="text-center font-Helvetica text-[22px] font-medium uppercase text-lightblue">
                    Engr. Muhammad Shahbaz
                  </h2>
                  <h3 className="text-center text-xl leading-[22px] text-[#777777]">
                    Project Manager
                  </h3>
                  <p className="mt-5 text-justify text-[15px] font-normal leading-[21px] text-gray878">
                    Cheers to five years of success at CodesInc! We want to
                    express our gratitude to Engr. Muhammad Shahbaz for his
                    fantastic leadership, smart strategies, and strong commitment
                    to steering our digital progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      );
};

      export default AboutUs;
