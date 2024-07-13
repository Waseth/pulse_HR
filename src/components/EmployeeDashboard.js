import React, { useState, useEffect } from "react";
import AttendanceTable from "./AttendanceTable";
import UserProfile from "./UserProfile";
// import nowLog from "./nowLog";
import FeedbackForm from "./FeedbackForm";
import './EmployeeDashboard.css';

const EmployeeDashboard = ({ email }) => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    role: "",
    attendanceStatus: "",
    date: "",
    arrivalTime: ""
  });
  const [nowLog, setnowLog] = useState([]);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  useEffect(() => {
    if (!email) return; // Ensure email is available before fetching data

    // Fetch user data based on email
    fetch('/now')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        return response.json();
      })
      .then((data) => {
        setUserData(data); // Assuming data contains user details
        // Fetch now logs based on email
        fetch(`/now/${email}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to fetch now log");
            }
            return response.json();
          })
          .then((nowData) => {
            setnowLog(nowData); // Assuming nowData is an array of logs
          })
          .catch((error) => {
            console.error("Error fetching now log:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [email]);

  const handleTimesheetSubmit = () => {
    // Handle timesheet submission logic here
    window.alert("Timesheet submitted");
  };

  const handleLogout = () => {
    // Handle logout logic here
    setShowFeedbackForm(true); // Example behavior, adjust as needed
  };

  const handleFeedbackSubmit = (feedback) => {
    // Handle feedback form submission logic here
    console.log("Feedback submitted", feedback);
    // Send feedback via email or handle as needed
    setShowFeedbackForm(false); // Example behavior, adjust as needed
  };

  return (
    <div className="employee-dashboard-container">
      <div className="employee-dashboard">
        <h1>Employee Dashboard</h1>
        <UserProfile
          userName={`${userData.firstName} ${userData.lastName}`}
          userRole={userData.role}
        />
        <AttendanceTable
          attendanceData={{
            attendanceStatus: userData.attendanceStatus,
            date: userData.date,
            arrivalTime: userData.arrivalTime
          }}
        />
        <button id="submit-timesheet-button" onClick={handleTimesheetSubmit}>
          Submit Timesheet
        </button>
        <button id="logout-button" onClick={handleLogout}>
          Logout
        </button>
        <nowLog nowLog={nowLog} />
        {showFeedbackForm && <FeedbackForm onSubmit={handleFeedbackSubmit} />}
      </div>
    </div>
  );
};

export default EmployeeDashboard;
