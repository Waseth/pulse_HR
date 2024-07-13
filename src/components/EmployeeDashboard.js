import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AttendanceTable from "./AttendanceTable";
import UserProfile from "./UserProfile";
import './EmployeeDashboard.css';
import ActivityLog from "./ActivityLog";
import FeedbackForm from "./FeedbackForm";

const EmployeeDashboard = ({ firstName }) => {
  const location = useLocation();
  const loginTime = location.state?.loginTime;
  const logoutTime = location.state?.logoutTime;

  const [attendanceData, setAttendanceData] = useState({
    attendanceStatus: "",
    date: "",
    arrivalTime: loginTime || "",
    departureTime: logoutTime || ""
  });
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [activityLog, setActivityLog] = useState([]);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [overtimeHours, setOvertimeHours] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/user")
      .then((response) => response.json())
      .then((data) => {
        const user = data.find(user => user.firstName === firstName);
        if (user) {
          setUserName(user.firstName + " " + user.lastName);
          setUserRole(user.role);
          setAttendanceData((prevData) => ({
            ...prevData,
            attendanceStatus: user.attendanceStatus,
            date: user.date,
            arrivalTime: user.arrivalTime || loginTime
          }));
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
  }, [firstName, loginTime]);

  const handleTimesheetSubmit = () => {
    window.alert("Timesheet submitted");
  };

  const handleLogout = () => {

    const loginTimeMs = new Date(attendanceData.arrivalTime).getTime();
    const logoutTimeMs = new Date(attendanceData.departureTime).getTime();
    const overtimeMs = logoutTimeMs - loginTimeMs;
    const overtimeHours = (overtimeMs / (1000 * 60 * 60)).toFixed(2);

    setOvertimeHours(overtimeHours);

    const newActivityLog = {
      userName: userName,
      logoutTime: logoutTime,
      overtime: overtimeHours,
    };

    fetch("http://localhost:3000/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newActivityLog),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Logout time logged successfully");
        } else {
          console.error("Failed to log logout time");
        }
      })
      .catch((error) => {
        console.error("Error logging logout time:", error);
      });

    setShowFeedbackForm(true);
  };

  const handleFeedbackSubmit = (feedback) => {
    console.log("Feedback submitted", feedback);
    setShowFeedbackForm(false);
    window.alert(`You have worked for ${overtimeHours} hours of overtime today.`);
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
        <div id="activity-log-container">
        <ActivityLog activityLog={activityLog} />
        </div>
        {showFeedbackForm && <FeedbackForm onSubmit={handleFeedbackSubmit} />}
      </div>
    </div>
  );
};

export default EmployeeDashboard;
