import { PERSON } from "../profile.data";

const SkillList = ({skill}: {skill: {icon: string; name: string;}}) => {
  return (
    <div className="bar">
      <div className="info">
        <img src={skill.icon} alt=""/>
        <span>{skill.name}</span>
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        <i className="fas fa-laptop-code"></i> Skills & <span>Abilities</span>
      </h2>
      <div className="container">
        <div className="row" id="skillsContainer">
          {PERSON.skills.map((data) => <SkillList skill ={data} key={data.name}/>)}
        </div>
      </div>
    </section>
  );
};
