import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
// components
import { Footer } from "../shared/components/Footer";
// images
import contactImg from '../assets/images/contact1.png';
// variables
import { CONSTAINT } from "../shared/services/CONSTAINT.service";
import { ENV } from "../environment/enviromentt";

export const Contact = () => {
  const form = useRef();
  const navigate = useNavigate()

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(ENV.SERVICE_ID, ENV.TEMPLATE_ID, form.current, ENV.PUBLIC_KEY)
      .then(() => {
          navigate(CONSTAINT.navigateToHome)
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <div>

        <section className="contact" id="contact">
  
  <h2 className="heading"><i className="fas fa-headset"></i> Get in <span>Touch</span></h2>

  <div className="container">
    <div className="content">
      <div className="image-box">
        <img draggable="false" src={contactImg} alt="" />
      </div>
    <form id="contact-form" ref={form} onSubmit={sendEmail}>
      
      <div className="form-group">
        <div className="field">
          <input type="text" name="name" placeholder="Name" required />
          <i className='fas fa-user'></i>
        </div>
        <div className="field">
          <input type="text" name="email" placeholder="Email" required />
          <i className='fas fa-envelope'></i>
        </div>
        <div className="field">
          <input type="text" name="number" placeholder="Phone" />
          <i className='fas fa-phone-alt'></i>
        </div>
        <div className="message">
        <textarea placeholder="Message" name="message" required></textarea>
        <i className="fas fa-comment-dots"></i>
        </div>
        </div>
      <div className="button-area">
        <button type="submit">
          Submit <i className="fa fa-paper-plane"></i></button>
      </div>
    </form>
  </div>
  </div>
</section>
<Footer/>
        </div>
    )
}