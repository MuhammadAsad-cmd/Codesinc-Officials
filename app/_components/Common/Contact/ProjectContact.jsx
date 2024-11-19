"use client";
import { countries } from "@/app/Data/Countries";
import React, { useState } from "react";

const ProjectContact = () => {
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
      <div className="mt-[50px] w-full border-[10px] border-customBorder bg-[#07befa] p-[25px]">
        <p className="text-center font-montserrat text-[22px] font-semibold uppercase leading-[22px] text-white">
          Get Free Quote Now
        </p>
        <p className="mx-auto mt-[5px] w-full border-b border-white pb-[13px] text-center font-montserrat text-sm font-normal capitalize leading-5 tracking-[1px] text-white">
          Tell us about your Project
        </p>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              value={formData.name}
              onChange={handleChange}
              className="h-[42px] w-full border-b border-oceanBlue bg-skyBlue2 pt-5 font-montserrat text-[15px] font-medium text-white outline-none placeholder:text-white"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={formData.email}
              onChange={handleChange}
              className="h-[42px] w-full border-b border-oceanBlue bg-skyBlue2 pt-5 font-montserrat text-[15px] font-medium text-white outline-none placeholder:text-white"
              required
            />

            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="h-[42px] w-full border-b border-oceanBlue bg-skyBlue2 pt-5 font-montserrat text-[15px] font-medium text-white outline-none placeholder:text-white"
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
              className="h-[42px] w-full border-b border-oceanBlue bg-skyBlue2 pt-5 font-montserrat text-[15px] font-medium text-white outline-none placeholder:text-white"
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
              className="h-[42px] w-full border-b border-oceanBlue bg-skyBlue2 pt-5 font-montserrat text-[15px] font-medium text-white outline-none placeholder:text-white"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message *"
              value={formData.message}
              onChange={handleChange}
              className="h-[120px] w-full bg-skyBlue2 pt-5 font-montserrat text-[15px] font-medium text-white outline-none placeholder:text-white"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="mx-auto mt-[30px] flex h-9 items-center justify-center rounded-full border-2 border-white bg-transparent px-[30px] py-1.5 font-montserrat text-lg font-semibold uppercase text-white duration-300 ease-in-out hover:bg-white hover:text-lightblue"
          >
            GET STARTED
          </button>
        </form>
      </div>
    </>
  );
};

export default ProjectContact;
