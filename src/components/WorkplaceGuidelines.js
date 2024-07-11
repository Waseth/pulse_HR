import React from "react";
import "./WorkplaceGuidelines.css";

const WorkplaceGuidelines = () => {
  return (
    <section id="workplace-guidelines">

      <div className="guideline-container">
        <h2>Clock It Guidelines</h2>
        <div className="guideline-list">
          <div className="guideline-item">
            <h3>Punctuality and Attendance</h3>
            <ul>
              <li>
                Employees are expected to clock in using the Pulse_HR app by
                9:00 AM sharp.
              </li>
              <li>
                Clocking in after 9:00 AM and before 9:30 AM is considered on
                time.
              </li>
              <li>Clocking in at 9:30 AM or later is considered late.</li>
              <li>
                If you are unable to report to work or will be late, notify your
                supervisor as soon as possible.
              </li>
            </ul>
          </div>
          <div className="guideline-item">
            <h3>Accurate Time Tracking</h3>
            <ul>
              <li>
                Use the Pulse_HR app to check in and out accurately, reflecting
                your actual work hours.
              </li>
              <li>
                Ensure that you clock in and out for all scheduled shifts and
                breaks.
              </li>
              <li>
                Do not engage in any form of time manipulation or falsification
                of time records.
              </li>
            </ul>
          </div>

          <div className="guideline-item">
            <h3>Technical Support</h3>
            <ul>
              <li>
                If you encounter any technical issues or have questions
                regarding the Pulse_HR app, contact the designated support team.
              </li>
              <li>
                Report any malfunctions, errors, or discrepancies in the time
                tracking system promptly.
              </li>
              <li>
                Attend training sessions or review user guides to familiarize
                yourself with the Pulse_HR app's features and functionalities.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkplaceGuidelines;