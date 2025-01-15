import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "GradTrackWebApp",
      description:
        "Using high level of ReactJS with Javascript to manipulate UI with dynamic data using MongoDB for organizing the employment information of graduate students.",
      githubRepo: "https://github.com/locbuigia/GradTrackWebApp",
    },
    {
      title: "GradTrack",
      description:
        "Created UI using Java Swing and created a small database using MySQL for organizing the employment information of graduate students.",
      githubRepo: "https://github.com/locbuigia/GradTrack",
    },
    {
      title: "ParkingApplication",
      description:
        "This is a collaborative team project connecting Java Swing with MySQL to create a database that kept track of an organization’s parking lot.",
      githubRepo: "https://github.com/jnbui94/ParkingApplication",
    },
    {
      title: "OutOfGas",
      description:
        "This Android application was to help drivers search nearby gas stations using GPS. This program implemented the Google Maps API to create a map view for users, and made calls to a web service to connect to a database.",
      githubRepo: "https://github.com/locbuigia/OutOfGas",
    },
  ];
  return (
    <>
      <a name="projects" />
      <div className="font-thin font-sans w-full text-center py-16">
        <div className="lg:mx-64 md:mx-24 sm:mx-8">
          <h1 className="text-4xl mb-8">PERSONAL PROJECTS</h1>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <a
                  href={project.githubRepo}
                  target="_blank"
                  className=" bg-white rounded p-2 hover:bg-gray-600 hover:text-white border-2"
                >
                  Open Repo
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
