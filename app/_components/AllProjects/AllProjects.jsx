"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaImage, FaLink } from "react-icons/fa6";

// Array of technologies
const technologies = [
  { name: "All", filter: "all" },
  { name: "Web Development", filter: ".web" },
  { name: "E-Commerce Development", filter: ".ecommerce" },
  { name: "App Development", filter: ".app" },
  { name: "WordPress", filter: ".wordpress" },
  { name: "Shopify", filter: ".shopify" },
  { name: "Webflow", filter: ".webflow" },
];

// Array of projects
const projects = [
  {
    id: 1,
    category: "web",
    image: "/images/portfolio-app-2.png",
    title: "Web Project 1",
  },
  {
    id: 2,
    category: "ecommerce",
    image: "/images/portfolio-shopify-1.png",
    title: "E-Commerce Project 1",
  },
  {
    id: 3,
    category: "app",
    image: "/images/portfolio-app-2.png",
    title: "App Project 1",
  },
  {
    id: 4,
    category: "wordpress",
    image: "/images/portfolio-wordpress-2.png",
    title: "WordPress Project 1",
  },
  {
    id: 5,
    category: "shopify",
    image: "/images/portfolio-shopify-1.png",
    title: "Shopify Project 1",
  },
  {
    id: 6,
    category: "webflow",
    image: "/images/portfolio-app-2.png",
    title: "Webflow Project 1",
  },
  {
    id: 7,
    category: "web",
    image: "/images/portfolio-app-2.png",
    title: "Web Project 2",
  },
  {
    id: 8,
    category: "app",
    image: "/images/portfolio-app-2.png",
    title: "App Project 2",
  },
];

const AllProjects = () => {
  const containerRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    if (typeof window !== "undefined" && containerRef.current) {
      // Dynamically import mixitup for client-side use only
      const mixitup = require("mixitup");
      mixitup(containerRef.current, {
        selectors: {
          target: ".mix",
        },
        animation: {
          duration: 300,
        },
      });
    }
  }, []);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <>
      <section className="container w-full px-4 py-[50px] md:mb-10 md:px-8">
        {/* Filter Controls */}
        <div className="flex w-full flex-col gap-3 max-lg:gap-y-6 max-md:mt-5 lg:flex-row">
          <div className="lg:w-1/2">
            <h2 className="text-3xl uppercase text-[#464646] max-lg:text-center md:text-[38px] md:leading-10">
              Award Winning Projects
            </h2>
          </div>
          <div className="flex flex-wrap justify-center max-lg:gap-4 lg:w-1/2 lg:gap-3">
            {technologies.map((tech, index) => (
              <button
                key={index}
                className={`text-sm font-semibold uppercase leading-4 lg:leading-[19px] ${
                  activeFilter === tech.filter
                    ? "text-lightblue"
                    : "text-gray-700"
                } hover:text-lightblue`}
                data-filter={tech.filter}
                onClick={() => handleFilterClick(tech.filter)}
              >
                {tech.name}
              </button>
            ))}
          </div>
        </div>

        <div
          className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4"
          ref={containerRef}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className={`mix ${project.category} group relative flex h-full w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gray-100 shadow-md`}
            >
              {/* Image */}
              <Image
                width={283}
                height={255}
                unoptimized
                src={project.image}
                alt={project.title}
                className="h-full w-full rounded-lg object-cover transition-all duration-300 group-hover:scale-125 group-hover:opacity-50"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {/* Link Icon */}
                <Link
                  href={`/projects/${project.id}`}
                  className="mx-2 flex h-14 w-14 items-center justify-center rounded-full border-2 border-white text-4xl font-medium text-lightblue shadow-md transition-transform duration-300 hover:scale-110"
                  title="View Project Details"
                >
                  <FaLink />
                </Link>

                {/* Image Icon */}
                <a
                  href={project.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 flex h-14 w-14 items-center justify-center rounded-full border-2 border-white text-3xl font-medium text-lightblue shadow-md transition-transform duration-300 hover:scale-110"
                  title="View Image"
                >
                  <FaImage />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Link
            href="/all-projects"
            className="mt-6 flex h-[34px] w-[115px] items-center justify-center rounded bg-[#03a4f2] px-3 py-1.5 text-sm font-bold uppercase leading-5 text-white duration-300 ease-in-out hover:bg-goldenYellow"
          >
            Show more
          </Link>
        </div>
      </section>
    </>
  );
};

export default AllProjects;
