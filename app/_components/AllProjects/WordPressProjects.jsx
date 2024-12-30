"use client";
import { WordpressProjects } from "@/app/Data/Projects";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WordPressProjects = () => {
  const [hoverEnabled, setHoverEnabled] = useState({});

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  const checkHoverCondition = (id, imageRef) => {
    console.log("ImageRef:", imageRef);
    if (imageRef?.naturalHeight > 250) {
      setHoverEnabled((prev) => ({ ...prev, [id]: true }));
    } else {
      setHoverEnabled((prev) => ({ ...prev, [id]: false }));
    }
  };

  return (
    <>
      <section id="portfolio" className="container mx-auto px-4 py-10 md:px-8">
        <div className="flex w-full flex-col gap-3 max-lg:gap-y-6 max-md:mt-5 lg:flex-row">
          <h2 className="text-3xl uppercase text-[#464646] max-lg:text-center md:text-[38px] md:leading-10">
            Web Development Projects
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {WordpressProjects.map((project, index) => (
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
      </section>
    </>
  );
};

export default WordPressProjects;
