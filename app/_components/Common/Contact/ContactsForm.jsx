"use client";
import { countries } from "@/app/Data/Countries";
import React, { useState } from "react";

const ContactsForm = ({
  bgColor = "bg-gray-800", // Default background color
  textColor = "text-white", // Default text color
  buttonColor = "bg-blue-500",
  buttonHoverColor = "hover:bg-blue-700",
  buttonText = "Get Started",
  placeholders = {
    name: "Your Name *",
    email: "Your Email *",
    projectType: "Select Project Type",
    phone: "Your Phone *",
    message: "Your Message *",
  },
}) => {
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
    <div className={`${bgColor} w-full p-[25px]`}>
      <p
        className={`text-center font-montserrat text-[22px] font-semibold uppercase leading-6 ${textColor}`}
      >
        Get Free Quote Now
      </p>
      <p
        className={`mx-auto mt-[5px] w-full pb-[13px] text-center font-montserrat text-[15px] font-normal capitalize leading-5 tracking-[1px] ${textColor}`}
      >
        Tell us about your Project
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder={placeholders.name}
            value={formData.name}
            onChange={handleChange}
            className={`${bgColor} h-[42px] w-full border-b border-white pt-5 font-montserrat text-[15px] font-normal ${textColor} outline-none placeholder:${textColor}`}
            required
          />
        </div>
        <div className="mb-4 grid grid-cols-2 gap-5">
          <input
            type="email"
            name="email"
            placeholder={placeholders.email}
            value={formData.email}
            onChange={handleChange}
            className={`${bgColor} h-[42px] w-full border-b border-white pt-5 font-montserrat text-[15px] font-normal ${textColor} outline-none placeholder:${textColor}`}
            required
          />
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className={`${bgColor} h-[42px] w-full border-b border-white pt-5 font-montserrat text-[15px] font-normal ${textColor} outline-none placeholder:${textColor}`}
            required
          >
            <option value="" disabled>
              {placeholders.projectType}
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
            className={`${bgColor} h-[42px] w-full border-b border-white pt-5 font-montserrat text-[15px] font-normal ${textColor} outline-none placeholder:${textColor}`}
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
            placeholder={placeholders.phone}
            value={formData.phone}
            onChange={handleChange}
            className={`${bgColor} h-[42px] w-full border-b border-white pt-5 font-montserrat text-[15px] font-normal ${textColor} outline-none placeholder:${textColor}`}
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            placeholder={placeholders.message}
            value={formData.message}
            onChange={handleChange}
            className={`${bgColor} h-[120px] w-full border-b border-white pt-5 font-montserrat text-[15px] font-normal ${textColor} outline-none placeholder:${textColor}`}
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className={`mt-[30px] flex h-[41px] w-full items-center justify-center ${buttonColor} px-[30px] py-1.5 font-montserrat text-lg font-semibold uppercase text-white duration-300 ease-in-out ${buttonHoverColor}`}
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default ContactsForm;
