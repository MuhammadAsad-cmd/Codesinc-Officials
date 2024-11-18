"use client";
import { countries } from "@/app/Data/Countries";
import Image from "next/image";
import React, { useState } from "react";

const ContactForm = () => {
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
      <div className="relative">
        <Image
          width={1300}
          height={805}
          unoptimized
          src="/images/footer-bg.png"
          alt="Contact Form Background"
          className="h-[805px] w-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="container w-full">
            <h1 className="text-center text-[60px] font-bold uppercase tracking-tighter text-white">
              let&apos;s start your project
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mx-auto w-full max-w-[555px] bg-white">
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

                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full border-b border-[#cdcdcd] px-5 py-4 font-montserrat text-[15px] font-medium text-[#797979] outline-none"
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

                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full border-b border-[#cdcdcd] px-5 py-4 font-montserrat text-[15px] font-medium text-[#797979] outline-none"
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
