import { WaveSVG } from "../background/WaveSVG";
import { PERSON } from "../profile.data";
import { ExpsList } from "../shared/interfaces";

const ExpList = ({data, i}: {data: ExpsList, i: number}) => {
  return (
    <div className={`container ${ (i%2) ? 'left' : 'right'}`}>
      <div className="content">
        <div className="tag">
          <h2>{data.company_name}</h2>
        </div>
        <div className="desc">
          <h3>{data.role}</h3>
          <p>{data.join_from} - {data.till}</p>
        </div>
      </div>
    </div>
  )
}

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <WaveSVG />
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
        { PERSON.experience.map((data: ExpsList, i: number) => <ExpList data={data} i={i} key={i}/> ) }
      </div>
      <div className="morebtn">
        <a href="/#experience" className="btn">
          <i className="fas fa-arrow-left"></i>
          <span> Back to Home</span>
        </a>
      </div>
    </section>
  );
};
