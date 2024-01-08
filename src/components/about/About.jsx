import React from "react";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import './about.css'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
      <div className="about__me">
        <img src={ME} alt="About " />
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>5+ years Working</small>
          </article>

          <article className="about__card">
            <FiUsers className="about__icon" />
            <h5>Clients</h5>
            <small>100+ Local</small>
          </article>

          <article className="about__card">
            <VscFolderLibrary className="about__icon" />
            <h5>Projects</h5>
            <small>10+ Completed</small>
          </article>
        </div>

        <p>With over five years of seasoned expertise in E-Business, I have honed my skills in Strategic Planning, Business Development, Commercial Operations, Supply Chain Management, Logistics, Business Communication, Data Analysis, Customer Experience, Creative Writing, and Team Management. My proficiency extends to utilizing Microsoft and G-Suite tools, with a solid command of Excel.

My professional ethos revolves around active engagement with passionate and professional individuals.
          </p>

          <p>I am always eager to delve into discussions about their work and objectives, aiming to provide valuable assistance in achieving their goals.

Adopting an optimistic approach, I confront every situation with unwavering positivity, regardless of its inherent challenges. I am driven by a commitment to transform the seemingly impossible into reality, executing tasks with precision and unwavering dedication. My belief in making the impossible possible fuels my dedication to surpassing expectations and achieving exceptional outcomes.</p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
      </div>
    </section>
  );
};

export default About;
