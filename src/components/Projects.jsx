import Link from "next/link";
import React from "react";
import Image from "next/legacy/image";
import ProjectItem from "./ProjectItem";
import thecleanplate from "../../public/thecleanplate.png";
import henrycountry from "../../public/henrycountry.png";
function Projects() {
  return (
    <div className=" w-full py-16 ">
      <div className=" max-w-[1240] mx-auto px-2 py-16 ">
        <p className=" uppercase tracking-widest text-4xl">Projects</p>
        <div className=" grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="The Clean Plate"
            bgImg={thecleanplate}
            projectUrl="/TheCleanPlate"
          />
          <ProjectItem
            title="Henry Countries"
            bgImg={henrycountry}
            projectUrl="/HenryCountries"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
