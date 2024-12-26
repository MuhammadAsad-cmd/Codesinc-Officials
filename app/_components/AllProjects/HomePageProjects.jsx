"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  AppProjects,
  ECommProjects,
  ShopifyProjects,
  technologies,
  WebflowProjects,
  Webprojects,
  WordpressProjects,
} from "@/app/Data/Projects";
import Link from "next/link";
import Image from "next/image";

const HomePageProjects = () => {
  const [activeFilter, setActiveFilter] = useState("Web Development");
  const limit = 12;

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  const getProjects = () => {
    if (activeFilter === "Web Development") {
      return Webprojects;
    } else if (activeFilter === "E-Commerce Development") {
      return ECommProjects;
    } else if (activeFilter === "App Development") {
      return AppProjects;
    } else if (activeFilter === "WordPress") {
      return WordpressProjects;
    } else if (activeFilter === "Shopify") {
      return ShopifyProjects;
    } else if (activeFilter === "Webflow") {
      return WebflowProjects;
    }
    return [];
  };

  const projects = getProjects().slice(0, limit);
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
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project, index) => (
          <div
            key={project.id}
            data-aos={`fade-up`}
            data-aos-delay={`${index * 100}`}
            className="group relative flex h-[250px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gray-100 shadow-md transition-all duration-300 md:w-[280px]"
          >
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
              <Link href={project.link} target="_blank">
                <Image
                  width={280}
                  height={280}
                  unoptimized
                  priority
                  src={project.image}
                  alt={project.title}
                  className="h-auto w-full rounded-lg object-cover"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex items-center justify-center">
        <Link
          href="/all-projects"
          className="flex h-10 w-32 items-center justify-center rounded bg-blue-500 px-4 text-sm font-semibold uppercase text-white hover:bg-yellow-500"
        >
          Show more
        </Link>
      </div>
    </section>
  );
};

export default React.memo(HomePageProjects);
