import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">

        <div className="experience__frontend">
          {/* <h2>Frontend Development</h2> */}
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />

              <div>
                <h4>Zaynax Group</h4>
                <small className="text-light">Senior Executive - Business Development</small>
              </div>

            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div><h4>ShopUp</h4>
                <small className="text-light">Senior Team Lead, Vendor Management, CEX </small>
                </div>

            </article>
            {/* <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div><h4>ShopUp</h4>
                <small className="text-light">Senior Team Lead, Vendor Management, CEX </small>
                </div>
            </article> */}
            {/* <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />

              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Basic</small>
              </div>

            </article> */}
            {/* <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>javaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>React JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Firebase</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article> */}
          </div>
        </div>

        {/* backend */}

        {/* <div className="experience__backend">
          <h2>Backend Development</h2>
          <div className="experience__content">
            <article className="experience__details">
            <BsPatchCheckFill  className="experience_details_icon"/>
              <div>
              <h4>Node JS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill  className="experience_details_icon"/>
              <div>
              <h4>MongoDB</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill  className="experience_details_icon"/>
              <div>
              <h4>MySQL</h4>
              <small className="text-light">Basic</small>
              </div>
            </article>
           
           
            
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Experience;
