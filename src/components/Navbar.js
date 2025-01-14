import React from "react";

const Navbar = () => (
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#about">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">
              Contact
            </a>
          </li>
          <li class="nav-item">
            <button class="resume-btn">
              <a class="nav-link" href="resume.pdf" target="_blank">
                Open Resume
              </a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
