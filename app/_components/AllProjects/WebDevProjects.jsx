"use client";
import { Webprojects } from "@/app/Data/Projects";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Head from "next/head"; // Import Head for meta tags
import AOS from "aos";
import "aos/dist/aos.css";
import { GoArrowRight } from "react-icons/go";

const WebDevProjects = () => {
  const [hoverEnabled, setHoverEnabled] = useState({});
  const imageRefs = useRef({});

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  const checkHoverCondition = (id) => {
    const img = imageRefs.current[id];
    if (img?.naturalHeight > 250) {
      setHoverEnabled((prev) => ({ ...prev, [id]: true }));
    } else {
      setHoverEnabled((prev) => ({ ...prev, [id]: false }));
    }
  };

  return (
    <>
      <Head>
        <title>Web Development Projects | Portfolio</title>
        <meta
          name="description"
          content="Explore our web development projects showcasing cutting-edge websites, responsive designs, and interactive user experiences."
        />
        <meta
          name="keywords"
          content="Web Development, Web Projects, Responsive Websites, Interactive Designs, Web Portfolio"
        />
        <meta name="author" content="Your Name" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Web Development Projects | Portfolio" />
        <meta
          property="og:description"
          content="Check out our portfolio of web development projects, featuring modern, responsive, and functional websites."
        />
        <meta property="og:image" content="/path-to-thumbnail.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/web-projects" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <section id="portfolio" className="container mx-auto px-4 py-10 md:px-8">
        <div className="flex w-full flex-col gap-3 max-lg:gap-y-6 max-md:mt-5 lg:flex-row">
          <h2 className="text-3xl uppercase text-[#464646] max-lg:text-center md:text-[38px] md:leading-10">
            Web Development Projects
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Webprojects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              className="group relative flex h-[250px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gray-100 shadow-md transition-all duration-300"
            >
              <div className="image-container relative h-full w-full overflow-hidden">
                <Link href={project.link} target="_blank">
                  <div
                    className={`your_frame ${hoverEnabled[project.id] ? "hover-enabled" : ""}`}
                  >
                    <Image
                      width={280}
                      height={280}
                      unoptimized
                      priority={index < 4}
                      src={project.image}
                      alt={project.title}
                      className="h-auto w-full rounded-lg object-cover"
                      onLoad={() => checkHoverCondition(project.id)}
                      ref={(el) => (imageRefs.current[project.id] = el)}
                    />
                  </div>
                </Link>
                <Link
                  href={project.link}
                  target="_blank"
                  className="absolute bottom-4 right-4 flex size-10 items-center justify-center rounded-full bg-skyBlue opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  <GoArrowRight className="text-3xl text-white transition-transform duration-300 hover:rotate-[-45deg] group-hover:scale-110" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WebDevProjects;
