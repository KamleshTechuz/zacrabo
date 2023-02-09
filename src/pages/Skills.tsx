import { PERSON } from "../profile.data";

const SkillList = ({skill}: {skill: {icon: string; name: string; certi: string;}}) => {

  const viewCerti = (url: string) => url ? window.open(url, '_blank') : false;

  return (
    <div className="bar" onClick={() => viewCerti(skill.certi)} style={{cursor: 'pointer'}}>
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
          {PERSON.skills.map((data) => <SkillList skill={data} key={data.name}/>)}
        </div>
      </div>
    </section>
  );
};
