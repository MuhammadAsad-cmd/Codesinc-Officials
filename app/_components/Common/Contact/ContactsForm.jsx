"use client";
import { countries } from "@/app/Data/Countries";
import useFormLogic from "@/app/Hooks/FormLogic";
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
    <div className={`${bgColor} w-full p-[25px]`}>
      <p
        className={`font-montserrat text-center text-[22px] font-semibold uppercase leading-6 ${textColor}`}
      >
        Get Free Quote Now
      </p>
      <p
        className={`font-montserrat mx-auto mt-[5px] w-full pb-[13px] text-center text-[15px] font-normal capitalize leading-5 tracking-[1px] ${textColor}`}
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
            className={`${bgColor} font-montserrat h-[42px] w-full border-b border-white pt-5 text-[15px] font-normal ${textColor} outline-none placeholder:${textColor}`}
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
            className={`${bgColor} font-montserrat h-[42px] w-full border-b border-white pt-5 text-[15px] font-normal ${textColor} outline-none placeholder:${textColor}`}
            required
          />
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className={`${bgColor} font-montserrat h-[42px] w-full border-b border-white pt-5 text-[15px] font-normal ${textColor} outline-none placeholder:${textColor}`}
            required
          >
            <option value="" disabled>
              {placeholders.projectType}
            </option>
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
            <option value="Outsourcing">Business Process Outsourcing</option>
            <option value="Digital">Digital Marketing</option>
          </select>
        </div>
        <div className="mb-4 grid grid-cols-2 gap-5">
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={`${bgColor} font-montserrat h-[42px] w-full border-b border-white pt-5 text-[15px] font-normal ${textColor} outline-none placeholder:${textColor}`}
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
            className={`${bgColor} font-montserrat h-[42px] w-full border-b border-white pt-5 text-[15px] font-normal ${textColor} outline-none placeholder:${textColor}`}
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            placeholder={placeholders.message}
            value={formData.message}
            onChange={handleChange}
            className={`${bgColor} font-montserrat h-[120px] w-full border-b border-white pt-5 text-[15px] font-normal ${textColor} outline-none placeholder:${textColor}`}
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className={`mt-[30px] flex h-[41px] w-full items-center justify-center ${buttonColor} font-montserrat px-[30px] py-1.5 text-lg font-semibold uppercase text-white duration-300 ease-in-out ${buttonHoverColor}`}
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default ContactsForm;
