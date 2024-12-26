import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project, index }) => {
  return (
    <div
      className="relative flex h-60 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gray-100 shadow-md"
      data-aos="fade-up"
      data-aos-delay={`${index * 100}`}
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
  );
};

export default React.memo(ProjectCard);
