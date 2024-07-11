import React, { useState, useEffect } from "react";
import AttendanceTable from "./AttendanceTable";
import UserProfile from "./UserProfile";
import './EmployeeDashboard.css';
import ActivityLog from "./ActivityLog";
import FeedbackForm from "./FeedbackForm";

const EmployeeDashboard = ({ firstName }) => {
  const [attendanceData, setAttendanceData] = useState({
    attendanceStatus: "",
    date: "",
    arrivalTime: ""
  });
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [activityLog, setActivityLog] = useState([]);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/user")
      .then((response) => response.json())
      .then((data) => {
        const user = data.find(user => user.firstName === firstName);
        if (user) {
          setUserName(user.firstName + " " + user.lastName);
          setUserRole(user.role);
          setAttendanceData({
            attendanceStatus: user.attendanceStatus,
            date: user.date,
            arrivalTime: user.arrivalTime
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });

    fetch("http://localhost:3000/activity")
      .then((response) => response.json())
      .then((data) => setActivityLog(data))
      .catch((error) => {
        window.alert("Error fetching activity log:", error);
      });
  }, [firstName]);

  const handleTimesheetSubmit = () => {
    // Handle timesheet submission logic here
    window.alert("Timesheet submitted");
  };

  const handleLogout = () => {
    setShowFeedbackForm(true);
  };

  const handleFeedbackSubmit = (feedback) => {
    // Handle feedback form submission logic here
    console.log("Feedback submitted", feedback);
    // Send feedback via email
    setShowFeedbackForm(false);
  };

  return (
    <div className="employee-dashboard-container">
      <div className="employee-dashboard">
        <h1>Employee Dashboard</h1>
        <UserProfile userName={userName} userRole={userRole} />
        <AttendanceTable attendanceData={attendanceData} />
        <button id="submit-timesheet-button" onClick={handleTimesheetSubmit}>
          Submit Timesheet
        </button>
        <button id="logout-button" onClick={handleLogout}>
          Logout
        </button>
        <ActivityLog activityLog={activityLog} />
        {showFeedbackForm && <FeedbackForm onSubmit={handleFeedbackSubmit} />}
      </div>
    </div>
  );
};

export default EmployeeDashboard;
