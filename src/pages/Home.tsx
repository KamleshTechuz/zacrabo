import { Link } from "react-router-dom";
import heroImg from "../assets/images/hero1.JPEG";
import { PERSON } from "../profile.data";
import { SocialData } from "../shared/interfaces";
import { CONSTAINT } from "../shared/services/CONSTAINT.service";

const socialData: Array<SocialData> = [
  { icon: "fab fa-linkedin", class: "linkedin", label: "LinkedIn", url: `${PERSON.social_url.linkedIn}` },
  { icon: "fab fa-github", class: "github", label: "GitHub", url: `${PERSON.social_url.gitHub}` },
  { icon: "fas fa-envelope", class: "", label: "", url: `mailto:${PERSON.email}` },
  // { icon: "fab fa-twitter", class: "twitter", label: "Twitter", url: "" },
  // { icon: "fab fa-telegram-plane", class: "telegram", label: "Telegram", url: ""},
  { icon: "fab fa-instagram", class: "instagram", label: "Instagram", url: `${PERSON.social_url.insta}` },
  { icon: "fab fa-facebook", class: "dev", label: "Dev", url: `${PERSON.social_url.facebook}` },
];

const SocialList = ({data}:{data: SocialData}) => {
  return (
    <li>
      <a className={data.class} aria-label={data.label} href={data.url} target="_blank">
        <i className={data.icon}></i>
      </a>
    </li>
  );
};

export const Home = () => {
  return (
    <section className="home" id="home">
      <div id="particles-js"></div>
      <div className="content">
        <h2>Hi There,<br /> I'm {PERSON.first_name} <span>{PERSON.last_name}</span></h2>
        <p>i am into <span className="typing-text">Web Development</span></p>
        <Link to={CONSTAINT.navigateToAbout} className="btn">
          <span>About Me</span>
          <i className="fas fa-arrow-circle-right"></i>
        </Link>
        <div className="socials">
          <ul className="social-icons">{ socialData.map((data, i) => <SocialList data={data} key={i}/> ) }</ul>
        </div>
      </div>
      <div className="image">
        <img draggable="false" className="tilt" src={heroImg} alt="" />
      </div>
    </section>
  );
};
