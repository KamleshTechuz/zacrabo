import React from "react";
import { Link } from "react-router-dom";
import agecalcImg from "../assets/images/projects/burgerweb.PNG"

export const Projects = () => {
    return (<section className="work" id="work">

    <h2 className="heading"><i className="fas fa-laptop-code"></i> Projects <span>Made</span></h2>
    
    <div id="filters" className="button-group">
      <button className="btn is-checked" data-filter="*">All Projects</button>
      <button className="btn" data-filter=".mern">MERN Stack</button>
      <button className="btn" data-filter=".lamp">MARN Stack</button>
      <button className="btn" data-filter=".basicweb">Basic Web</button>
      <button className="btn" data-filter=".android">Android App</button>
    </div>
  
    <div className="box-container">
  
      <div className="box tilt">
        <img src={agecalcImg} alt="" />
        <div className="content">
          <div className="tag">
          <h3>Portfolio Website</h3>
          </div>
          <div className="desc">
            <p>Personal portfolio website. Don't need much info about it, just scroll down. You're here only!</p>
            <div className="btns">
              <a href="#" className="btn" target="_blank"><i className="fas fa-eye"></i> View</a>
              <a href="#" className="btn" target="_blank">Code <i className="fas fa-code"></i></a>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  
    <div className="backbtn">
      <Link to="/work" className="btn">
          <i className="fas fa-arrow-left"></i>
          <span>Back to Home</span>
    </Link>
    </div>
  
  </section>)
}