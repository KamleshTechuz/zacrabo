import React from "react";
import { Link } from "react-router-dom";
import portfolioImg from "../assets/images/projects/portfolio1.PNG"

export const Work = () => {
    return (
        <section className="work" id="work">

  <h2 className="heading"><i className="fas fa-laptop-code"></i> Projects <span>Made</span></h2>

  <div className="box-container">

    <div className="box tilt">
      <img draggable="false" src={portfolioImg} alt="" />
      <div className="content">
        <div className="tag">
        <h3>Portfolio Website</h3>
        </div>
        <div className="desc">
          <p>Personal portfolio website. Don't need much info about it, just scroll down. You're here only!</p>
          <div className="btns">
            <a href="#" className="btn" target="_blank"><i className="fas fa-eye"></i> View</a>
            <a href="https://github.com/jigar-sable/Portfolio-Website" className="btn" target="_blank">Code <i className="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>

</div>

<div className="viewall">
  <Link to="/projects" className="btn"><span>View All</span>
    <i className="fas fa-arrow-right"></i>
</Link>
</div>

</section>
    )
}