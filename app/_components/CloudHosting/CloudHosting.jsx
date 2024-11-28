"use client";
import React, { useState } from "react";
import Image from "next/image";
import { countries } from "@/app/Data/Countries";
import Breadcrumbs from "../BreadCrumbs/Breadcrumbs";

const CloudHosting = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    country: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Handle form submission
  };
  return (
    <>
      <div
        className="h-full min-h-screen w-full bg-cover bg-center bg-no-repeat py-14 md:py-[150px]"
        style={{ backgroundImage: "url('/images/cms/cloud-bg.jpg')" }}
      >
        <div className="container mx-auto flex h-full flex-col items-center justify-center space-y-12 px-4 text-center lg:flex-row lg:text-left">
          {/* Left Section */}
          <div className="md:w-1/2 xl:w-2/3">
            <h1 className="mb-2.5 mt-5 font-montserrat text-2xl font-extrabold uppercase text-white md:text-[31px] md:leading-[35px]">
              Get Secure Managed Cloud Hosting Services
            </h1>
            <p className="mb-6 text-white md:text-lg">
              With our Cloud Management services, experience the power and
              flexibility of cloud without any hassle or doing it yourself.
            </p>
            <a
              href="#second-sec"
              className="inline-block text-lg font-bold text-[#07befa] hover:underline"
            >
              View Detail &gt;
            </a>
          </div>

          {/* Right Section */}
          <div className="px-4 md:w-1/2 xl:w-[41.6%]">
            <div className="ContactBg w-full p-[25px]">
              <p className="text-center font-montserrat text-[22px] font-semibold uppercase leading-6 text-white">
                Get Free Quote Now
              </p>
              <p className="mx-auto mt-[5px] w-full pb-[13px] text-center font-montserrat text-[15px] font-normal capitalize leading-5 tracking-[1px] text-white">
                Tell us about your Project
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name*"
                    value={formData.name}
                    onChange={handleChange}
                    className="ContactBg h-[42px] w-full border-b border-white pt-5 font-montserrat text-[15px] font-normal text-white outline-none placeholder:text-white"
                    required
                  />
                </div>
                <div className="mb-4 grid grid-cols-2 gap-5">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    className="ContactBg h-[42px] w-full border-b border-white pt-5 font-montserrat text-[15px] font-normal text-white outline-none placeholder:text-white"
                    required
                  />

                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="ContactBg h-[42px] w-full border-b border-white pt-5 font-montserrat text-[15px] font-normal text-white outline-none placeholder:text-white"
                    required
                  >
                    <option value="" disabled>
                      Select Project Type
                    </option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                  </select>
                </div>
                <div className="mb-4 grid grid-cols-2 gap-5">
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="ContactBg h-[42px] w-full border-b border-white pt-5 font-montserrat text-[15px] font-normal text-white outline-none placeholder:text-white"
                    required
                  >
                    <option value="" disabled>
                      Select Country
                    </option>
                    {countries.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone *"
                    value={formData.phone}
                    onChange={handleChange}
                    className="ContactBg h-[42px] w-full border-b border-white pt-5 font-montserrat text-[15px] font-normal text-white outline-none placeholder:text-white"
                    required
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    name="message"
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleChange}
                    className="ContactBg h-[120px] w-full border-b border-white pt-5 font-montserrat text-[15px] font-normal text-white outline-none placeholder:text-white"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-[30px] flex h-[41px] w-full items-center justify-center bg-[#591661] px-[30px] py-1.5 font-montserrat text-lg font-semibold uppercase text-white duration-300 ease-in-out hover:bg-white hover:text-lightblue"
                >
                  Request a Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Breadcrumbs title="Managed Cloud Hosting" breadcrumbPath="/web-design" />
      <div className="container my-20 flex flex-col px-4 md:flex-row">
        <div className="md:w-[58.33%] lg:px-4">
          <div className="mt-6">
            <Image
              width={580}
              height={336}
              unoptimized
              src="/images/cms/cloud-1st.png"
              alt="Cloud"
              className="h-full w-full"
            />
          </div>
        </div>
        <div className="md:w-[41.66%] lg:px-4">
          <h2 className="mb-5 mt-10 text-left text-2xl font-semibold text-Gray lg:text-[30px]">
            Managed Cloud Hosting
          </h2>
          <p className="text-left font-montserrat text-[15px] font-normal leading-7 text-Gray">
            Our Cloud Management Services empowers our customers to build a
            custom solution that fulfils their unique requirements in a secure,
            flexible and highly available environment. Make your selection from
            public or private clouds, dedicated servers, colocation or a hybrid
            mix of offerings, each of our cloud hosting services is managed and
            protected.Our fully managed cloud servers include skilled
            administrators and complete support for every aspect of your server
            management.
          </p>
          <div className="flex items-center justify-center">
            <button className="mt-10 flex h-[45px] items-center justify-center bg-[#4dbac8] px-[60px] py-2.5 capitalize text-white">
              get started
            </button>
          </div>
        </div>
      </div>
      <div className="py-[50px]">
        <div className="container px-4">
          <h2 className="mb-5 mt-10 text-center text-2xl font-bold uppercase text-[#333333] md:text-[30px]">
            TECHNOLOGY <span className="font-medium"> STACK </span>
          </h2>
          <p className="text-center text-sm font-bold leading-6 text-[#333333]">
            Being an It driven and ecommerce development company, Codesinc
            utilizes all top technologies and tactics to provide breakthrough
            solutions. The different eCommerce software and technologies, our
            experts utilize includes:
          </p>
          <div className="mt-[30px] grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <div className="group relative flex h-[263px] w-full flex-col items-center justify-center overflow-hidden rounded-[10px] bg-[#171616] text-white hover:bg-none">
              <div className="absolute z-50 flex flex-col items-center justify-center px-5 pt-5">
                <div className="h-[86px] w-[201px] p-[18px]">
                  <Image
                    width={201}
                    height={86}
                    unoptimized
                    src="/images/cms/digitalocean.png"
                    alt="PHP"
                    className="h-full w-full"
                  />
                </div>
                <p className="min-h-[100px] text-center text-[13px] font-normal leading-[22px]">
                  DigitalOcean, Inc., offers cloud services that help deploy and
                  scale apps that run concurrently on several computers.
                </p>
                <div className="mt-2 flex w-full cursor-pointer items-end justify-end opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100">
                  <div className="relative animate-run p-[18px]">
                    <Image
                      width={47}
                      height={56}
                      unoptimized
                      src="/images/arrow-new.png"
                      alt="arrow"
                      className="h-full w-full"
                    />
                  </div>
                </div>
              </div>
              {/* Gradient Overlay */}
              <div className="techitem absolute inset-0 w-0 opacity-0 transition-[width,opacity] duration-700 ease-in-out group-hover:w-full group-hover:opacity-100"></div>
            </div>
            <div className="group relative flex h-[263px] w-full flex-col items-center justify-center overflow-hidden rounded-[10px] bg-[#171616] text-white hover:bg-none">
              <div className="absolute z-50 flex flex-col items-center justify-center px-5 pt-5">
                <div className="h-[86px] w-[201px] p-[18px]">
                  <Image
                    width={201}
                    height={86}
                    unoptimized
                    src="/images/cms/vultr.png"
                    alt="PHP"
                    className="h-full w-full"
                  />
                </div>
                <p className="min-h-[100px] text-center text-[13px] font-normal leading-[22px]">
                  Led by experts of the managed hosting business, VULTR has
                  years of experience in multifaceted hosting environments and
                  is committed to simplifying the cloud.
                </p>
                <div className="mt-2 flex w-full cursor-pointer items-end justify-end opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100">
                  <div className="relative animate-run p-[18px]">
                    <Image
                      width={47}
                      height={56}
                      unoptimized
                      src="/images/arrow-new.png"
                      alt="arrow"
                      className="h-full w-full"
                    />
                  </div>
                </div>
              </div>
              {/* Gradient Overlay */}
              <div className="techitem absolute inset-0 w-0 opacity-0 transition-[width,opacity] duration-700 ease-in-out group-hover:w-full group-hover:opacity-100"></div>
            </div>
            <div className="group relative flex h-[263px] w-full flex-col items-center justify-center overflow-hidden rounded-[10px] bg-[#171616] text-white hover:bg-none">
              <div className="absolute z-50 flex flex-col items-center justify-center px-5 pt-5">
                <div className="h-[86px] w-[201px] p-[18px]">
                  <Image
                    width={201}
                    height={86}
                    unoptimized
                    src="/images/cms/varnish.png"
                    alt="PHP"
                    className="h-full w-full"
                  />
                </div>
                <p className="min-h-[100px] text-center text-[13px] font-normal leading-[22px]">
                  A web application accelerator, Varnish Cache can be installed
                  in front of any server that speaks HTTP and arrange it to
                  cache the contents.
                </p>
                <div className="mt-2 flex w-full cursor-pointer items-end justify-end opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100">
                  <div className="relative animate-run p-[18px]">
                    <Image
                      width={47}
                      height={56}
                      unoptimized
                      src="/images/arrow-new.png"
                      alt="arrow"
                      className="h-full w-full"
                    />
                  </div>
                </div>
              </div>
              {/* Gradient Overlay */}
              <div className="techitem absolute inset-0 w-0 opacity-0 transition-[width,opacity] duration-700 ease-in-out group-hover:w-full group-hover:opacity-100"></div>
            </div>
            <div className="group relative flex h-[263px] w-full flex-col items-center justify-center overflow-hidden rounded-[10px] bg-[#171616] text-white hover:bg-none">
              <div className="absolute z-50 flex flex-col items-center justify-center px-5 pt-5">
                <div className="h-[86px] w-[201px] p-[18px]">
                  <Image
                    width={201}
                    height={86}
                    unoptimized
                    src="/images/cms/redis.png"
                    alt="PHP"
                    className="h-full w-full"
                  />
                </div>
                <p className="min-h-[100px] text-center text-[13px] font-normal leading-[22px]">
                  Arguably the world’s most treasured database, redis delivers
                  unrivaled performance, scalability, novelty, and financial
                  value throughout cloud, on-premises, and hybrid deployments.
                </p>
                <div className="mt-2 flex w-full cursor-pointer items-end justify-end opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100">
                  <div className="relative animate-run p-[18px]">
                    <Image
                      width={47}
                      height={56}
                      unoptimized
                      src="/images/arrow-new.png"
                      alt="arrow"
                      className="h-full w-full"
                    />
                  </div>
                </div>
              </div>
              {/* Gradient Overlay */}
              <div className="techitem absolute inset-0 w-0 opacity-0 transition-[width,opacity] duration-700 ease-in-out group-hover:w-full group-hover:opacity-100"></div>
            </div>
            <div className="group relative flex h-[263px] w-full flex-col items-center justify-center overflow-hidden rounded-[10px] bg-[#171616] text-white hover:bg-none">
              <div className="absolute z-50 flex flex-col items-center justify-center px-5 pt-5">
                <div className="h-[86px] w-[201px] p-[18px]">
                  <Image
                    width={201}
                    height={86}
                    unoptimized
                    src="/images/cms/opcache.png"
                    alt="PHP"
                    className="h-full w-full"
                  />
                </div>
                <p className="min-h-[100px] text-center text-[13px] font-normal leading-[22px]">
                  OPcache is a caching engine which, once enabled, radically
                  enhances PHP performance by storing precompiled script
                  bytecode in shared memory.
                </p>
                <div className="mt-2 flex w-full cursor-pointer items-end justify-end opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100">
                  <div className="relative animate-run p-[18px]">
                    <Image
                      width={47}
                      height={56}
                      unoptimized
                      src="/images/arrow-new.png"
                      alt="arrow"
                      className="h-full w-full"
                    />
                  </div>
                </div>
              </div>
              {/* Gradient Overlay */}
              <div className="techitem absolute inset-0 w-0 opacity-0 transition-[width,opacity] duration-700 ease-in-out group-hover:w-full group-hover:opacity-100"></div>
            </div>

            <div className="group relative flex h-[263px] w-full flex-col items-center justify-center overflow-hidden rounded-[10px] bg-[#171616] text-white hover:bg-none">
              <div className="absolute z-50 flex flex-col items-center justify-center px-5 pt-5">
                <div className="h-[86px] w-[201px] p-[18px]">
                  <Image
                    width={201}
                    height={86}
                    unoptimized
                    src="/images/cms/memcached.png"
                    alt="PHP"
                    className="h-full w-full"
                  />
                </div>
                <p className="min-h-[100px] text-center text-[13px] font-normal leading-[22px]">
                  A user-friendly, high-performance data store, Memcached offers
                  a developed, scalable, open-source solution for delivering
                  sub-millisecond response times, making it a leading choice for
                  driving real-time applications.
                </p>
                <div className="mt-2 flex w-full cursor-pointer items-end justify-end opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100">
                  <div className="relative animate-run p-[18px]">
                    <Image
                      width={47}
                      height={56}
                      unoptimized
                      src="/images/arrow-new.png"
                      alt="arrow"
                      className="h-full w-full"
                    />
                  </div>
                </div>
              </div>
              {/* Gradient Overlay */}
              <div className="techitem absolute inset-0 w-0 opacity-0 transition-[width,opacity] duration-700 ease-in-out group-hover:w-full group-hover:opacity-100"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 py-[50px]">
        <div>
          <h2 className="mb-5 mt-10 text-center text-2xl font-bold uppercase text-[#333333] md:text-[30px]">
            SOLUTION <span className="font-medium"> EXPERTISE </span>
          </h2>

          <div className="mt-[30px] grid grid-cols-1 md:grid-cols-3">
            <div className="border-b border-[#f3f3f3] py-5 text-center md:border-r lg:px-5">
              <div className="flex items-center justify-center">
                <Image
                  width={56}
                  height={56}
                  unoptimized
                  src="/images/cms/c1.png"
                  alt="Responsive E-Commerce Site"
                />
              </div>
              <h4 className="mb-5 mt-2.5 font-montserrat text-[15px] font-bold leading-4">
                Server Management
              </h4>
              <p className="mt-2 min-h-[160px] px-2 text-center text-[15px] font-normal leading-[21px] text-Gray">
                Our Managed servers offers the availability and security which
                allows organizations to create a fully managed solution for
                their different business requirements.
              </p>
            </div>
            <div className="border-b border-[#f3f3f3] py-5 text-center md:border-r lg:px-5">
              <div className="flex items-center justify-center">
                <Image
                  width={56}
                  height={56}
                  unoptimized
                  src="/images/cms/c2.png"
                  alt="Best User Experience"
                />
              </div>
              <h4 className="mb-5 mt-2.5 font-montserrat text-[15px] font-bold leading-4">
                App Optimization
              </h4>
              <p className="mt-2 min-h-[160px] px-2 text-center text-[15px] font-normal leading-[21px] text-Gray">
                No more waiting for long loading time. Our application
                management will help you optimize your App, so that it loads
                real time fast.
              </p>
            </div>
            <div className="border-b border-[#f3f3f3] py-5 text-center md:border-r lg:px-5">
              <div className="flex items-center justify-center">
                <Image
                  width={56}
                  height={56}
                  unoptimized
                  src="/images/cms/c3.png"
                  alt="Data Acquisitions &amp; Migration"
                />
              </div>
              <h4 className="mb-5 mt-2.5 font-montserrat text-[15px] font-bold leading-4">
                Data Backup
              </h4>
              <p className="mt-2 min-h-[160px] px-2 text-center text-[15px] font-normal leading-[21px] text-Gray">
                Never lose your data again. Our Cloud Storage enables you to
                easily store and secure your mass volumes of data in the cloud.
              </p>
            </div>
            <div className="border-[#f3f3f3] py-5 text-center max-md:border-b md:border-r lg:px-5">
              <div className="flex items-center justify-center">
                <Image
                  width={56}
                  height={56}
                  unoptimized
                  src="/images/cms/c4.png"
                  alt="Plugin Development"
                />
              </div>
              <h4 className="mb-5 mt-2.5 font-montserrat text-[15px] font-bold leading-4">
                Auto Healing
              </h4>
              <p className="mt-2 min-h-[160px] px-2 text-center text-[15px] font-normal leading-[21px] text-Gray">
                Auto troubleshooting provides for effective solutions. With
                continuous support and complete system supply, your Ecommerce
                site and application now avails 24X7 care.
              </p>
            </div>
            <div className="border-[#f3f3f3] py-5 text-center max-md:border-b md:border-r lg:px-5">
              <div className="flex items-center justify-center">
                <Image
                  width={56}
                  height={56}
                  unoptimized
                  src="/images/cms/c5.png"
                  alt="App Development"
                />
              </div>
              <h4 className="mb-5 mt-2.5 font-montserrat text-[15px] font-bold leading-4">
                24x7 Monitoring
              </h4>
              <p className="mt-2 min-h-[160px] px-2 text-center text-[15px] font-normal leading-[21px] text-Gray">
                With a round the clock monitoring of your servers and
                applications; Irregular intervals of alerts are dispatched in
                case of increased traffic and server consumption.
              </p>
            </div>
            <div className="border-[#f3f3f3] py-5 text-center md:border-r lg:px-5">
              <div className="flex items-center justify-center">
                <Image
                  width={56}
                  height={56}
                  unoptimized
                  src="/images/cms/c6.png"
                  alt="E-Commerce Maintenance"
                />
              </div>
              <h4 className="mb-5 mt-2.5 font-montserrat text-[15px] font-bold leading-4">
                E-Commerce Maintenance
              </h4>
              <p className="mt-2 min-h-[160px] px-2 text-center text-[15px] font-normal leading-[21px] text-Gray">
                We provide futuristic maintenance to your website and ensure the
                website remains unchanged or unaffected. We offer no-down-time
                maintenance service all the time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudHosting;
