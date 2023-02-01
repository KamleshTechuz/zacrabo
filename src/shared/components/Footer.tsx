import { Link } from "react-router-dom";
import { PERSON } from "../../profile.data";
import { QckLink, SocialData } from "../interfaces";
import { CONSTAINT } from "../services/CONSTAINT.service";

const socialData: Array<SocialData> = [
    { icon: "fab fa-linkedin", class: "linkedin", label: "LinkedIn", url: `${PERSON.social_url.linkedIn}` },
    { icon: "fab fa-github", class: "github", label: "GitHub", url: `${PERSON.social_url.gitHub}` },
    { icon: "fas fa-envelope", class: "", label: "", url: `mailto:${PERSON.email}` },
    // { icon: "fab fa-twitter", class: "twitter", label: "Twitter", url: "" },
    // { icon: "fab fa-telegram-plane", class: "telegram", label: "Telegram", url: ""},
    { icon: "fab fa-instagram", class: "instagram", label: "Instagram", url: `${PERSON.social_url.insta}` },
    { icon: "fab fa-facebook", class: "dev", label: "Dev", url: `${PERSON.social_url.facebook}` },
  ];

const quickLinks: Array<QckLink> = [
    {to: CONSTAINT.navigateToHome, name: 'Home'}, {to: CONSTAINT.navigateToAbout, name: 'About'}, {to: CONSTAINT.navigateToSkills, name: 'Skills'},
    {to: CONSTAINT.navigateToEducation, name: 'Education'}, {to: CONSTAINT.navigateToWork, name: 'Work'}, {to: CONSTAINT.navigateToExperience, name: 'Experience'},
];

const QuickLink = ({data}: {data: QckLink}) => <Link to={data.to}><i className="fas fa-chevron-circle-right"></i> {data.name}</Link>;
const SocialLinks = ({data}: {data: SocialData}) => <a href={data.url} className={data.icon} aria-label={data.label} target="_blank" rel="noreferrer"></a>;

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
            <h1 className="credit">Wanna make you own? <a href={`mailto:${PERSON.email}`}> Contact Developer</a></h1>
        </section>
    );
};