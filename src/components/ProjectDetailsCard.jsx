import React from "react";

const ProjectDetailsCard = ({ project }) => {
  return (
    <div className="bg-gray-100 p-6 rounded shadow-lg flex flex-col justify-between items-center">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-6">{project.description}</p>
      <div className="space-x-4">
        <a
          href={project.githubRepo}
          target="_blank"
          className="bg-white rounded p-2 hover:bg-gray-600 hover:text-white border-2 w-fit"
        >
          View Source
        </a>
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded p-2 hover:bg-gray-600 hover:text-white border-2 w-fit"
          >
            View Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailsCard;
