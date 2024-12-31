"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  AppProjects,
  ECommProjects,
  FramerProjects,
  ShopifyProjects,
  technologies,
  WebflowProjects,
  Webprojects,
  WixProjects,
  WordpressProjects,
} from "@/app/Data/Projects";
import Link from "next/link";
import Image from "next/image";

const HomePageProjects = () => {
  const [activeFilter, setActiveFilter] = useState("Web Development");
  const [hoverEnabled, setHoverEnabled] = useState({});
  const limit = 12;

  const projectMap = {
    "Web Development": Webprojects,
    "E-Commerce Development": ECommProjects,
    "App Development": AppProjects,
    WordPress: WordpressProjects,
    Shopify: ShopifyProjects,
    Webflow: WebflowProjects,
    Wix: WixProjects,
    Framer: FramerProjects,
  };

  const projects = projectMap[activeFilter]?.slice(0, limit) || [];

  useEffect(() => {
    // Initialize AOS only once
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [activeFilter]);

  const checkHoverCondition = (id, imageRef) => {
    console.log("ImageRef:", imageRef);
    if (imageRef?.naturalHeight > 250) {
      setHoverEnabled((prev) => ({ ...prev, [id]: true }));
    } else {
      setHoverEnabled((prev) => ({ ...prev, [id]: false }));
    }
  };

  return (
    <section
      id="portfolio"
      className="container mx-auto mt-5 px-4 py-10 md:px-8"
    >
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
      <div
        key={activeFilter}
        className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
            className="group relative flex h-[250px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gray-100 shadow-md transition-all duration-300"
          >
            <div className="relative h-full w-full overflow-hidden">
              <Link href={project.link} target="_blank">
                <div
                  className={`your_frame ${hoverEnabled[project.id] ? "hover-enabled" : ""}`}
                >
                  <Image
                    width={280}
                    height={280}
                    priority={index < 4}
                    src={project.image}
                    alt={project.title}
                    className="h-auto w-full rounded-lg object-cover"
                    onLoadingComplete={(img) =>
                      checkHoverCondition(project.id, img)
                    }
                  />
                </div>
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

export default HomePageProjects;
