"use client";
import React, { useEffect, useState, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import {
  AppProjects,
  ECommProjects,
  ShopifyProjects,
  technologies,
  WebflowProjects,
  Webprojects,
  WixProjects,
  WordpressProjects,
} from "@/app/Data/Projects";
import Image from "next/image";

const AllProjects = () => {
  const [activeFilter, setActiveFilter] = useState("Web Development");

  // Create a map for quick access to projects
  const projectMap = useMemo(
    () =>
      new Map([
        ["Web Development", Webprojects],
        ["E-Commerce Development", ECommProjects],
        ["App Development", AppProjects],
        ["WordPress", WordpressProjects],
        ["Shopify", ShopifyProjects],
        ["Webflow", WebflowProjects],
        ["Wix", WixProjects],
      ]),
    [],
  );

  const projects = projectMap.get(activeFilter) || [];

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  return (
    <section id="portfolio" className="container mx-auto px-4 py-10 md:px-8">
      <div className="flex w-full flex-col gap-3 max-lg:gap-y-6 max-md:mt-5 lg:flex-row">
        <div className="lg:w-[55%]">
          <h2 className="text-3xl uppercase text-[#464646] max-lg:text-center md:text-[38px] md:leading-10">
            Award Winning Projects
          </h2>
        </div>
        <div className="flex flex-wrap justify-center max-lg:gap-4 lg:w-[45%] lg:gap-3">
          {technologies.map((tech) => (
            <button
              key={tech.name}
              className={`text-sm font-semibold uppercase leading-4 lg:leading-[19px] ${
                activeFilter === tech.name ? "text-lightblue" : "text-gray-700"
              } hover:text-lightblue`}
              onClick={() => setActiveFilter(tech.name)}
            >
              {tech.name}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project, index) => (
          <div
            key={project.id}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
            className="group relative flex h-[250px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gray-100 shadow-md transition-all duration-300"
          >
            <div className="image-container relative h-full w-full overflow-hidden">
              <Link href={project.link} target="_blank">
                <Image
                  width={280}
                  height={280}
                  priority={index < 4}
                  src={project.image}
                  alt={project.title}
                  className="h-auto w-full rounded-lg object-cover"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllProjects;
