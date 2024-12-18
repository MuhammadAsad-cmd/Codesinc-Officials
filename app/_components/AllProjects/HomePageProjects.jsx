"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaImage, FaLink } from "react-icons/fa6";
import { projects } from "@/app/Data/Projects";
import AOS from "aos";
import "aos/dist/aos.css";

const technologies = [
  { name: "Web Development", filter: "web" },
  { name: "E-Commerce Development", filter: "ecommerce" },
  { name: "App Development", filter: "app" },
  { name: "WordPress", filter: "wordpress" },
  { name: "Shopify", filter: "shopify" },
  { name: "Webflow", filter: "webflow" },
];

const HomePageProjects = () => {
  const [activeFilter, setActiveFilter] = useState("web");
  const [limit] = useState(12);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filteredProjects = useMemo(() => {
    return activeFilter === "web"
      ? projects
      : projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const limitedProjects = filteredProjects.slice(0, limit);

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  return (
    <section
      id="portfolio"
      className="container w-full px-4 py-[50px] md:mb-10 md:px-8"
    >
      {/* Filter Controls */}
      <div className="flex w-full flex-col gap-3 max-lg:gap-y-6 max-md:mt-5 lg:flex-row">
        <div className="lg:w-[55%]">
          <h2 className="text-3xl uppercase text-[#464646] max-lg:text-center md:text-[38px] md:leading-10">
            Award Winning Projects
          </h2>
        </div>
        <div className="flex flex-wrap justify-center max-lg:gap-4 lg:w-[45%] lg:gap-3">
          {technologies.map((tech, index) => (
            <button
              key={index}
              className={`text-sm font-semibold uppercase leading-4 lg:leading-[19px] ${
                activeFilter === tech.filter
                  ? "text-lightblue"
                  : "text-gray-700"
              } hover:text-lightblue`}
              onClick={() => handleFilterClick(tech.filter)}
            >
              {tech.name}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div
        className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4"
        // style={{ opacity: 0, animation: "fadeIn 1s forwards" }}
      >
        {limitedProjects.map((project, index) => (
          <div
            key={project.id}
            className="group relative flex h-[250px] w-[280px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gray-100 shadow-md transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
            data-aos-duration="500"
          >
            {/* Image */}
            <div
              className="relative h-full w-full overflow-hidden"
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector("img");
                if (img) {
                  img.style.transition = "transform 5s linear";
                  img.style.transform = "translateY(-80%)";
                }
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector("img");
                if (img) {
                  img.style.transition = "transform 3s linear";
                  img.style.transform = "translateY(0)";
                }
              }}
            >
              <Image
                width={280}
                height={280}
                unoptimized
                src={project.image}
                alt={project.title}
                className="h-auto w-full rounded-lg object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="mt-10 flex items-center justify-center">
        <Link
          href="/all-projects"
          className="font-montserrat flex h-9 w-[115px] items-center justify-center rounded bg-[#03a4f2] px-3 text-sm font-semibold uppercase leading-5 text-white duration-300 ease-in-out hover:bg-goldenYellow"
        >
          Show more
        </Link>
      </div>
    </section>
  );
};

export default React.memo(HomePageProjects);
