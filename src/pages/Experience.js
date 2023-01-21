import React from "react";
import { PERSON } from "../profile.data";

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2 className="heading">
        <i className="fas fa-briefcase"></i> Experience
      </h2>
      <div className="quote">
        <span>
          every experience in your life is being orchestrated to teach you
          something you need to know to move forward.
        </span>
      </div>

      <div className="timeline">
        {PERSON.experience.map((data, i) => {
          return (
            <div className={`container ${ (i%2) ? 'left' : 'right'}`} key={i}>
              <div className="content">
                <div className="tag">
                  <h2>Self Employed</h2>
                </div>
                <div className="desc">
                  <h3>Full Stack Developer</h3>
                  <p>Oct 2021 - present</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="morebtn">
        <a href="/#experience" className="btn">
          <i className="fas fa-arrow-left"></i>
          <span>Back to Home</span>
        </a>
      </div>
    </section>
  );
};
