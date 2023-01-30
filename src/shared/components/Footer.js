import React from "react";
import { Link } from "react-router-dom";
import { PERSON } from "../../profile.data";

const socialData = [
    { icon: "fab fa-linkedin", class: "linkedin", label: "LinkedIn", url: `${PERSON.social_url.linkedIn}` },
    { icon: "fab fa-github", class: "github", label: "GitHub", url: `${PERSON.social_url.gitHub}` },
    { icon: "fas fa-envelope", class: "", label: "", url: `mailto:${PERSON.email}` },
    // { icon: "fab fa-twitter", class: "twitter", label: "Twitter", url: "" },
    // { icon: "fab fa-telegram-plane", class: "telegram", label: "Telegram", url: ""},
    { icon: "fab fa-instagram", class: "instagram", label: "Instagram", url: `${PERSON.social_url.insta}` },
    { icon: "fab fa-facebook", class: "dev", label: "Dev", url: `${PERSON.social_url.facebook}` },
  ];

const quickLinks = [
    {to: '/', name: 'Home'}, {to: '/about', name: 'About'}, {to: '/skills', name: 'Skills'},
    {to: '/education', name: 'Education'}, {to: '/work', name: 'Work'}, {to: '/experience', name: 'Experience'},
]

const QuickLink = ({data}) => <Link to={data.to}><i className="fas fa-chevron-circle-right"></i> {data.name}</Link>
const SocialLinks = ({data}) => <a href={data.url} className={data.icon} aria-label={data.label} target="_blank"></a>

export const Footer = () => {
    return (
        <section className="footer">
            <div className="box-container">
                <div className="box">
                    <h3>Kamlesh's Portfolio</h3>
                    <p>Thank you for visiting my personal portfolio website. Connect with me over socials.</p>
                </div>
                <div className="box">
                    <h3>quick links</h3>
                    { quickLinks.map((data, i) => <QuickLink data={data} key={i}/>) }
                </div>
                <div className="box">
                    <h3>contact info</h3>
                    <p> <i className="fas fa-phone"></i>{PERSON.number}</p>
                    <p> <i className="fas fa-envelope"></i>{PERSON.email}</p>
                    <p> <i className="fas fa-map-marked-alt"></i>{PERSON.current_place.city}, {PERSON.current_place.country} - {PERSON.current_place.pincode}</p>
                    <div className="share">
                        { socialData.map((data, i) => <SocialLinks data={data} key={i}/> ) }
                    </div>
                </div>
            </div>
            {/* <h1 className="credit">Designed with <i className="fa fa-heart pulse"></i> by <a href="https://www.linkedin.com/in/jigar-sable"> jigar sable</a></h1> */}
        </section>
    )
}