import React from 'react';

const Portfolio = () => (
  <section id="portfolio" className="portfolio">
    <div className="container">
      <h2>Portfolio</h2>
      <div className="grid">
        <div className="project">
          <img src="project1.jpg" alt="Project 1" />
          <h3>Project Title 1</h3>
          <p>Brief description of the project.</p>
        </div>
        <div className="project">
          <img src="project2.jpg" alt="Project 2" />
          <h3>Project Title 2</h3>
          <p>Brief description of the project.</p>
        </div>
        <div className="project">
          <img src="project3.jpg" alt="Project 3" />
          <h3>Project Title 3</h3>
          <p>Brief description of the project.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
