import AllProjects from "@/app/_components/AllProjects/AllProjects";
import SoftwareDevelop from "@/app/_components/SoftwareDevelop/SoftwareDevelop";
import StacksWeUse from "@/app/_components/StacksWeUse/StacksWeUse";
import React from "react";

const page = () => {
  return (
    <>
      <SoftwareDevelop />
      <StacksWeUse />
      <AllProjects />
    </>
  );
};

export default page;
