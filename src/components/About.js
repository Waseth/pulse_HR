import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <h2>About PulseHR</h2>
        <p className="about-content">
          PulseHR is a powerful company, employee and attendance management app designed to
          streamline and simplify the way businesses.
          Our app empowers your workforce by providing a seamless
          and intuitive interface for easy check-ins and check-outs.
        </p>
        <p className="about-content">
          With Pulse_HR, you can{" "}
          <span className="highlight">gain complete visibility</span> into your
          employees' activities, enabling you to identify and address
          productivity and compliance issues promptly. Our app automatically
          captures accurate attendance data, eliminating manual errors and
          saving valuable time.
        </p>
        <p className="about-content">
          Pulse_HR offers a range of features to enhance your attendance
          management process. Whether you have a small team or a large
          organization, Pulse_HR scales to meet your needs.
        </p>
        <p className="about-content-3">
          Our mission is to empower businesses with the tools and insights they
          need to optimize their workforce management and drive success. With
          Pulse_HR, you can focus on what matters most—growing your business and
          fostering a productive and engaged workforce.
        </p>
      </div>
    </section>
  );
};

export default About;