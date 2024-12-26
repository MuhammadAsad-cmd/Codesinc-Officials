import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectGrid = ({ projects, activeFilter }) => {
  // Filter projects based on the active filter
  const filteredProjects =
    activeFilter === "web"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {filteredProjects.map((project, index) => (
        <div
          key={project.id}
          className="group relative flex h-[250px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gray-100 shadow-md transition-all duration-300 md:w-[280px]"
          data-aos="fade-up"
          data-aos-delay={`${index * 100}`}
          data-aos-duration="500"
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
  );
};

export default React.memo(ProjectGrid);
