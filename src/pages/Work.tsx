import { Link } from "react-router-dom";
import { PERSON } from "../profile.data";
import { Project } from "../shared/interfaces";

const WorkList = ({pro}: {pro: Project}) => {
  return (
    <div className="box-container" key={pro.name}>
      <div className="box tilt">
      <picture>
        <source media="(min-width:768px)" srcSet={pro.image} />
        <img draggable="false" src={pro.res_img} alt="" />
      </picture>
        <div className="content">
          <div className="tag"><h3>{pro.name}</h3></div>
          <div className="desc">
            <p>{pro.desc}</p>
            <div className="btns">
              {pro.links.view && <Link to={pro.links.view} className="btn" target="_blank" rel="noreferrer"><i className="fas fa-eye"></i> View</Link>}
              {pro.links.code && <a href={pro.links.code} className="btn" target="_blank" rel="noreferrer">Code <i className="fas fa-code"></i></a>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Work = () => {
  return (
    <section className="work" id="work">
      <h2 className="heading"><i className="fas fa-laptop-code"></i> Projects <span>Made</span></h2>
      { PERSON.projects.slice(0, 3).map((pro: Project, i: number) => <WorkList pro={pro} key={i}/> ) }
      <div className="viewall">
        <Link to="/projects" className="btn"><span>View All</span>
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </section>
  );
};