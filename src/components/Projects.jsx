import React, { useState } from "react";
import ProjectDetailsCard from "./ProjectDetailsCard";
import projects from "../data/projects.json";

const Projects = () => {
  const [viewMore, setViewMore] = useState(
    window.innerWidth < 1200 ? true : false
  );
  const mainProjects = projects.slice(0, 2);
  const moreProjects = projects.slice(2);

  const handleViewButtonClick = () => {
    if (viewMore) {
      const projectView = document.getElementById("projects");
      projectView.scrollIntoView({ behavior: "smooth" });
    }
    setViewMore(!viewMore);
  };
  return (
    <>
      <a name="projects" id="projects" />
      <div className="tracking-wide font-thin font-sans w-full text-center py-16">
        <div className="lg:mx-48 md:mx-24 sm:mx-8">
          <h1 className="text-4xl mb-8">PERSONAL PROJECTS</h1>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 z-50 mb-8">
            {mainProjects.map((project, index) => (
              <ProjectDetailsCard key={index} project={project} />
            ))}
          </div>
          <div className="sm: overflow-hidden">
            <div
              className={`grid lg:grid-cols-2 md:grid-cols-1 gap-8 duration-500 -z-50 ${
                viewMore ? "mt-0" : "-mt-[40rem]"
              } `}
            >
              {moreProjects.map((project, index) => (
                <ProjectDetailsCard key={index} project={project} />
              ))}
            </div>
          </div>
          <button
            className="hidden lg:inline-block mt-8"
            onClick={handleViewButtonClick}
          >
            <h1 className="text-xl font-semibold hover:scale-110 duration-300">
              {`${viewMore ? "See Less" : "See More"}`}
            </h1>
          </button>
        </div>
      </div>
    </>
  );
};

export default Projects;
