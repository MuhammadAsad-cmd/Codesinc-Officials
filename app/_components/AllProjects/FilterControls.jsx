import React from "react";
import { technologies } from "@/app/Data/Projects";

const FilterControls = ({ activeFilter, setActiveFilter }) => {
  return (
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
  );
};

export default React.memo(FilterControls);
