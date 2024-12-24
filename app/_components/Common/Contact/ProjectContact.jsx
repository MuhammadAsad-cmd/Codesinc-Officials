"use client";
import { countries } from "@/app/Data/Countries";
import useFormLogic from "@/app/Hooks/FormLogic";
import React from "react";

const ProjectContact = ({ bgColor, borderColor, borderBottom }) => {
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
      <div
        className={`mt-[50px] w-full border-[10px] ${borderColor} ${bgColor} p-[25px]`}
      >
        <p className="font-montserrat text-center text-[22px] font-semibold uppercase leading-[22px] text-white">
          Get Free Quote Now
        </p>
        <p className="font-montserrat mx-auto mt-[5px] w-full border-b border-white pb-[13px] text-center text-sm font-normal capitalize leading-5 tracking-[1px] text-white">
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
              className={`h-[42px] w-full border-b ${borderBottom} ${bgColor} font-montserrat pt-5 text-[15px] font-medium text-white outline-none placeholder:text-white`}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={formData.email}
              onChange={handleChange}
              className={`h-[42px] w-full border-b ${borderBottom} ${bgColor} font-montserrat pt-5 text-[15px] font-medium text-white outline-none placeholder:text-white`}
              required
            />

            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className={`h-[42px] w-full border-b ${borderBottom} ${bgColor} font-montserrat pt-5 text-[15px] font-medium text-white outline-none placeholder:text-white`}
              required
            >
              <option value="" disabled>
                Select Project Type
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

            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={`h-[42px] w-full border-b ${borderBottom} ${bgColor} font-montserrat pt-5 text-[15px] font-medium text-white outline-none placeholder:text-white`}
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
              className={`h-[42px] w-full border-b ${borderBottom} ${bgColor} font-montserrat pt-5 text-[15px] font-medium text-white outline-none placeholder:text-white`}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message *"
              value={formData.message}
              onChange={handleChange}
              className={`${bgColor} font-montserrat h-[120px] w-full pt-5 text-[15px] font-medium text-white outline-none placeholder:text-white`}
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="font-montserrat mx-auto mt-[30px] flex h-9 items-center justify-center rounded-full border-2 border-white bg-transparent px-[30px] py-1.5 text-lg font-semibold uppercase text-white duration-300 ease-in-out hover:bg-white hover:text-lightblue"
          >
            GET STARTED
          </button>
        </form>
      </div>
    </>
  );
};

export default ProjectContact;
