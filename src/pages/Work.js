import React from "react";
import { Link } from "react-router-dom";
import { PERSON } from "../profile.data";

export const Work = () => {
    return (
        <section className="work" id="work">

  <h2 className="heading"><i className="fas fa-laptop-code"></i> Projects <span>Made</span></h2>

{
  PERSON.projects.slice(0, 2).map((pro) => {
    return (
    <div className="box-container" key={pro.name}>
      <div className="box tilt">
        <img draggable="false" src={pro.image} alt="" />
        <div className="content">
          <div className="tag">
          <h3>{pro.name}</h3>
          </div>
          <div className="desc">
            <p>{pro.desc}</p>
            <div className="btns">
              <a href={pro.links.view} className="btn" target="_blank"><i className="fas fa-eye"></i> View</a>
              <a href={pro.links.code} className="btn" target="_blank">Code <i className="fas fa-code"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  })
}


<div className="viewall">
  <Link to="/projects" className="btn"><span>View All</span>
    <i className="fas fa-arrow-right"></i>
</Link>
</div>

</section>
    )
}