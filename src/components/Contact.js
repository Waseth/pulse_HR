import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <p className="contact-header-content">

          If you encounter any technical issues or have any complaints
          concerning Pulse_HR, please don't hesitate to contact us. We're here to
          help!
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>
              Riverside Drive
              <br />
              Nairobi, 00073
              <br />
              Kenya
            </p>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <p>Email: info@pulsehr.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;