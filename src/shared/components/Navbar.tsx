import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavData } from "../interfaces";
import { CONSTAINT } from "../services/CONSTAINT.service";

const navData: Array<NavData> = [
  { id: 1, name: "Home", url: CONSTAINT.navigateToHome }, { id: 2, name: "About", url: CONSTAINT.navigateToAbout }, { id: 3, name: "Skills", url: CONSTAINT.navigateToSkills },
  { id: 4, name: "Education", url: CONSTAINT.navigateToEducation }, { id: 5, name: "Work", url: CONSTAINT.navigateToWork }, { id: 6, name: "Experience", url: CONSTAINT.navigateToExperience },
  { id: 7, name: "Contact", url: CONSTAINT.navigateToContact },
];

const NavLinks = ({data, toggleClass}: {data: NavData; toggleClass: any}) => <li><NavLink to={data.url} onClick={toggleClass}>{data.name}</NavLink></li>;

export const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => setActive(!isActive);

  return (
    <header>
      <NavLink to="/" className="logo"><i className="fab fa-node-js"></i> Kamlesh Mundel</NavLink>
      <div id="menu" onClick={toggleClass} className={`fas fa-${isActive ? "times" : "bars"}`}></div>
      <nav className={`navbar ${isActive ? "nav-toggle" : ""}`}>
        <ul>
          { navData.map((data, i) => <NavLinks toggleClass={toggleClass} data={data} key={i}/> ) }
        </ul>
      </nav>
    </header>
  );
};
