import React from "react";
import jobs from "../data/jobs.json";

const Experience = () => {
  return (
    <>
      <a name="experience" />
      <div className="font-thin font-sans w-full text-center bg-gray-100 py-16">
        <div className="lg:mx-64 md:mx-24 sm:mx-8">
          <h1 className="text-4xl mb-8">EXPERIENCE</h1>
          <p className="tracking-wide leading-loose mb-6">
            With 8 years of experience in front-end development, I specialize in
            building intuitive, responsive, and visually engaging user
            interfaces. My passion lies in crafting seamless digital experiences
            that not only meet business objectives but also delight users. Here
            are a few technologies I've been working with lately:{" "}
            <strong>
              ReactJS, React Native, Redux, Javascript, TypeScript, HTML5, CSS3,
              CSS Tailwind, Java
            </strong>
            .
          </p>
          <h1 className="tracking-wide leading-loose text-xl font-semibold">
            Where I've worked:
          </h1>
          <section className="bg-gray-100 text-left">
            <div className="container mx-auto px-6">
              <div>
                {jobs.map((job, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded shadow-lg my-4"
                  >
                    <h3 className="text-2xl font-semibold">{job.title}</h3>
                    <p className="text-gray-600">{job.company}</p>
                    <p className="text-gray-500 italic">{job.timeFrame}</p>
                    <ul className="list-disc list-inside mt-4 space-y-2">
                      {job.duties.map((duty, i) => (
                        <li key={i}>{duty}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Experience;
