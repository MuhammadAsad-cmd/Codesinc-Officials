"use client";
import { countries } from "@/app/Data/Countries";
import useFormLogic from "@/Hooks/FormLogic";
import Image from "next/image";
import React, { useState } from "react";

const ContactForm = () => {
  const serviceId = "service_xjw782n";
  const templateId = "template_lt3pcfh";
  const publicKey = "0o0gCGbCz8eTBNTkg";

  const onSuccess = () => {
    alert("Message sent successfully!");
  };

  const onError = () => {
    alert("Failed to send the message. Please try again.");
  };

  const { formData, handleChange, handleSubmit } = useFormLogic(
    serviceId,
    templateId,
    publicKey,
    onSuccess,
    onError,
  );

  return (
    <>
      <div id="contact" className="relative">
        <Image
          width={1300}
          height={805}
          unoptimized
          src="/images/footer-bg.png"
          alt="Contact Form Background"
          className="h-[805px] w-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="container w-full px-4 md:px-8">
            <h1 className="mb-8 text-center text-3xl font-bold uppercase text-white lg:text-5xl">
              let&apos;s start your project
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mx-auto w-full bg-white md:max-w-[555px]">
                <input
                  type="text"
                  name="name"
                  placeholder="YOUR NAME *"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-b border-[#cdcdcd] px-5 py-4 font-montserrat text-[15px] font-medium text-[#797979] outline-none"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="YOUR EMAIL *"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b border-[#cdcdcd] px-5 py-4 font-montserrat text-[15px] font-medium text-[#797979] outline-none"
                  required
                />

                <div className="relative w-full">
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full appearance-none border-b border-[#cdcdcd] bg-transparent px-5 py-4 font-montserrat text-[15px] font-medium uppercase text-[#969696] outline-none placeholder:text-[#797979]"
                    required
                  >
                    <option value="">Select Project Type</option>
                    <option value="Web">Web Design & Development</option>
                    <option value="App">Mobile App Development</option>
                    <option value="Software">Software Development</option>
                    <option value="Startup">Startup Solution</option>
                    <option value="DevOps">DevOps</option>
                    <option value="Artificial">Artificial Intelligence</option>
                    <option value="Ecommerce">Ecommerce Solution</option>
                    <option value="Managed">Managed Cloud Hosting</option>
                    <option value="IT">IT Resource Allocation</option>
                    <option value="Business">Business Intelligence</option>
                    <option value="Outsourcing">
                      Business Process Outsourcing
                    </option>
                    <option value="Digital">Digital Marketing</option>
                  </select>
                  {/* Optional dropdown arrow */}
                  <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#969696]">
                    ▼
                  </span>
                </div>
                <div className="relative w-full">
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full appearance-none border-b border-[#cdcdcd] bg-transparent px-5 py-4 font-montserrat text-[15px] font-medium uppercase text-[#969696] outline-none placeholder:text-[#797979]"
                    required
                  >
                    <option value="" className="text-[#969696]" disabled>
                      Select Country
                    </option>
                    {countries.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#969696]">
                    ▼
                  </span>
                </div>

                <input
                  type="tel"
                  name="phone"
                  placeholder="YOUR PHONE *"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-b border-[#cdcdcd] px-5 py-4 font-montserrat text-[15px] font-medium text-[#797979] outline-none"
                  required
                />

                <textarea
                  name="message"
                  placeholder="YOUR MESSAGE *"
                  value={formData.message}
                  onChange={handleChange}
                  className="h-[170px] w-full p-5 font-montserrat text-[15px] font-medium text-[#797979] outline-none"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="mx-auto mt-[30px] flex h-[49px] items-center justify-center rounded-full border-2 border-white bg-transparent px-[60px] py-2.5 font-montserrat text-lg font-semibold uppercase text-white duration-300 ease-in-out hover:bg-white hover:text-lightblue"
              >
                GET STARTED
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
