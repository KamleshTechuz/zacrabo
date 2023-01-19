import React from "react";
import collegeImg from '../assets/images/educat/college1.png';
import schoolImg from '../assets/images/educat/school1.jpeg';
import { PERSON } from "../profile.data";

export const Education = () => {
  return (
    <section className="education" id="education">
      <h1 className="heading">
        <i className="fas fa-graduation-cap"></i> My <span>Education</span>
      </h1>

      <p className="qoute">
        Education is not the learning of facts, but the training of the mind to
        think.
      </p>

      <div className="box-container">
        <div className="box">
          <div className="image">
            <img style={{minWidth: '100px'}}
              draggable="false"
              src={collegeImg}
              alt=""
            />
          </div>
          <div className="content">
            <h3>{PERSON.education.college.degree} in {PERSON.education.college.field}</h3>
            <p>{PERSON.education.college.name}</p>
            <h4>{PERSON.education.college.year} | {PERSON.education.college.status}</h4>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img
              draggable="false"
              src={schoolImg}
              alt=""
            />
          </div>
          <div className="content">
            <h3>{PERSON.education.school.degree} | {PERSON.education.school.field}</h3>
            <p>{PERSON.education.school.name} | RBSE</p>
            <h4>{PERSON.education.school.year} | {PERSON.education.school.status}</h4>
          </div>
        </div>
      </div>
    </section>
  );
};
