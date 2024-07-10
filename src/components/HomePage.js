import React from "react";
import "./HomePage.css";


const HomePage = () => {
  return (
    <main>
      <section id="home-page">
        <div className="content-wrapper">
          <div className="text-wrapper">
            <h1 id="cta">Company management that empowers your workforce</h1>
            <p className="cta-text-2">
              Keep Your Teams Productive and Improve Bottom Line
            </p>
            <p className="cta-text-3">
              Gain full visibility into your workforce's activities, enabling
              you to identify and confidently resolve productivity and
              compliance issues promptly.
            </p>
          </div>
          <div className="image-wrapper">

          </div>
        </div>
      </section>

      <section id="how-it-works">
        <h2>How It Works</h2>
        <div className="card-container">
          <div className="card">
            <h3>Check In</h3>
            <p>
              To begin your workday, simply click the check-in button located on
              the top right corner of your screen. Use your unique credentials
              assigned during registration to log in.
            </p>
            <p className="how-it-works-text-2">
              Checking in is quick and easy, and it helps us maintain accurate
              records of your attendance.
            </p>
          </div>
          <div className="card">
            <h3>Fill in the Form</h3>
            <p>
              Please fill out the mandatory details to complete your check-in
              process.
            </p>
            <p className="how-it-works-text-2">
              PulseHR accurately and automatically captures your check-in time,
              ensuring precise attendance records and helping you maintain
              compliance with company policies.The platform also provides you a feedback form in which you can submit to your company
              for improvements.Please note that the feedback form will only appear when you log out from the dashboard.

            </p>
          </div>
          <div className="card">
            <h3>Proceed to Dashboard</h3>
            <p>
              Congratulations! You have successfully completed the check-in
              process, and your attendance has been recorded.
            </p>
            <p className="how-it-works-text-2">
              You can now proceed to your personalized dashboard, where you can
              access and view your attendance history.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;