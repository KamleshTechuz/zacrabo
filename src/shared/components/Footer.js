import React from "react";
import { PERSON } from "../../profile.data";

export const Footer = () => {

    const socialData = [
        { icon: "fab fa-linkedin", class: "linkedin", label: "LinkedIn", url: `${PERSON.social_url.linkedIn}` },
        { icon: "fab fa-github", class: "github", label: "GitHub", url: `${PERSON.social_url.gitHub}` },
        { icon: "fas fa-envelope", class: "", label: "", url: `mailto:${PERSON.email}` },
        // { icon: "fab fa-twitter", class: "twitter", label: "Twitter", url: "" },
        // { icon: "fab fa-telegram-plane", class: "telegram", label: "Telegram", url: ""},
        { icon: "fab fa-instagram", class: "instagram", label: "Instagram", url: `${PERSON.social_url.insta}` },
        { icon: "fab fa-facebook", class: "dev", label: "Dev", url: `${PERSON.social_url.facebook}` },
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
          <a href="#home"><i className="fas fa-chevron-circle-right"></i> home</a>
          <a href="#about"><i className="fas fa-chevron-circle-right"></i> about</a>
          <a href="#skills"><i className="fas fa-chevron-circle-right"></i> skills</a>
          <a href="#education"><i className="fas fa-chevron-circle-right"></i> education</a>
          <a href="#work"><i className="fas fa-chevron-circle-right"></i> work</a>
          <a href="#experience"><i className="fas fa-chevron-circle-right"></i> experience</a>
      </div>

      <div className="box">
          <h3>contact info</h3>
          <p> <i className="fas fa-phone"></i>+91 779-099-7718</p>
          <p> <i className="fas fa-envelope"></i>kamlesh@techuz.com</p>
          <p> <i className="fas fa-map-marked-alt"></i>Gujarat, India-380060</p>
          <div className="share">
        {
            socialData.map((data) => {
                return <a href={data.url} className={data.icon} aria-label={data.label} target="_blank"></a>
            })
        }
          </div>
      </div>
  </div>

  {/* <h1 className="credit">Designed with <i className="fa fa-heart pulse"></i> by <a href="https://www.linkedin.com/in/jigar-sable"> jigar sable</a></h1> */}

</section>
    )
}