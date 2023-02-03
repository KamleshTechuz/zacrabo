import { useState } from "react";
import { Link } from "react-router-dom";
import { PERSON } from "../profile.data";
import { Categories, Project } from "../shared/interfaces";
import { CONSTAINT } from "../shared/services/CONSTAINT.service";

const initCates: Array<Categories> = [
  { id: 0, checked: true, name: "All Projects" }, { id: 1, checked: false, name: "ReactJs" },
  { id: 3, checked: false, name: "Angular" }, { id: 2, checked: false, name: "NextJs" },
  { id: 4, checked: false, name: "NodeJs" },
];

const FilterButton = ({cat, filterProjects}: {cat: Categories; filterProjects: any}) => {
  return <button className={`btn ${cat.checked ? "is-checked" : ""}`} onClick={() => filterProjects(cat.id)}>{cat.name}</button>;
};

const ProjectList = ({project}: {project: Project}) => {
  return (
    <div className="box-container" >
      <div className="box tilt">
      <picture>
        <source media="(min-width:768px)" srcSet={project.image} />
        <img draggable="false" src={project.res_img} alt="" />
      </picture>
        <div className="content">
          <div className="tag"><h3>{project.name}</h3></div>
          <div className="desc">
            <p>{project.desc}</p>
            <div className="btns">
              {project.links.view && <Link to={project.links.view} className="btn" target="_blank" rel="noreferrer"><i className="fas fa-eye"></i>View</Link>}
              {project.links.code && <Link to={project.links.code} className="btn" target="_blank" rel="noreferrer">Code <i className="fas fa-code"></i></Link>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  const [projects, setProjects] = useState(PERSON.projects);
  const [categories, setCategories] = useState(initCates);

  const filterProjects = (category: number) => {
    setCategories((pre) => {
      return pre.map((c) => {
        c.checked = c.id === category ? true : false;
        return c;
      });
    });
    const filteredPro = PERSON.projects.filter((p) => p.category.includes(category));
    setProjects(category ? filteredPro : PERSON.projects);
  };

  return (
    <section className="work" id="work">
      <h2 className="heading"><i className="fas fa-laptop-code"></i> Projects <span>Made</span></h2>

      <div id="filters" className="button-group">
        { categories.map((cat, i) => <FilterButton cat={cat} filterProjects={filterProjects} key={i} />) }
      </div>
        {
          projects.length ? projects.map((project) => <ProjectList project={project} key={project.name}/>) :
          <h1 className="heading" style={{color: 'white'}}>No data found!</h1>
        }
      <div className="backbtn">
        <Link to={CONSTAINT.navigateToWork} className="btn"><i className="fas fa-arrow-left"></i><span>Back</span></Link>
      </div>
    </section>
  );
};
