import React from "react";
import { Link } from "react-router-dom";
import { PERSON } from "../../profile.data";
import { CONSTAINT } from "../services/CONSTAINT.service";

export const Footer = () => {

    const socialData = [
        { icon: "fab fa-linkedin", url: `${PERSON.social_url.linkedIn}` },
        { icon: "fab fa-github", url: `${PERSON.social_url.gitHub}` },
        { icon: "fas fa-envelope", url: `mailto:${PERSON.email}` },
        // { icon: "fab fa-twitter", class: "twitter", label: "Twitter", url: "" },
        // { icon: "fab fa-telegram-plane", class: "telegram", label: "Telegram", url: ""},
        { icon: "fab fa-instagram", url: `${PERSON.social_url.insta}` },
        { icon: "fab fa-facebook", url: `${PERSON.social_url.facebook}` },
      ];
    return (
        <section className="footer">

  <div className="box-container">

      <div className="box">
          <h3>Kamlesh's Portfolio</h3>
          <p>Thank you for visiting my personal portfolio website. Connect with me over socials. <br/> <br/> Keep Rising 🚀. Connect with me over live chat!</p>
      </div>

      <div className="box">
          <h3>quick links</h3>
          <Link to={CONSTAINT.navigateToHome}><i className="fas fa-chevron-circle-right"></i> home</Link>
          <Link to={CONSTAINT.navigateToAbout}><i className="fas fa-chevron-circle-right"></i> about</Link>
          <Link to={CONSTAINT.navigateToSkills}><i className="fas fa-chevron-circle-right"></i> skills</Link>
          <Link to={CONSTAINT.navigateToEducation}><i className="fas fa-chevron-circle-right"></i> education</Link>
          <Link to={CONSTAINT.navigateToWork}><i className="fas fa-chevron-circle-right"></i> work</Link>
          <Link to={CONSTAINT.navigateToExperience}><i className="fas fa-chevron-circle-right"></i> experience</Link>
      </div>

      <div className="box">
          <h3>contact info</h3>
          <p> <i className="fas fa-phone"></i>+91 779-099-7718</p>
          <p> <i className="fas fa-envelope"></i>kamlesh@techuz.com</p>
          <p> <i className="fas fa-map-marked-alt"></i>Gujarat, India-380060</p>
          <div className="share">

            {
                socialData.map((data) => {
                    return <a href={data.url} className={data.icon} target="_blank" key={data.icon}></a>
                })
            }

          </div>
      </div>
  </div>

  {/* <h1 className="credit">Designed with <i className="fa fa-heart pulse"></i> by <a href="https://www.linkedin.com/in/jigar-sable"> jigar sable</a></h1> */}

</section>
    )
}