// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import AttendanceTable from "./AttendanceTable";
// import UserProfile from "./UserProfile";
// import './EmployeeDashboard.css';
// import ActivityLog from "./ActivityLog";
// import FeedbackForm from "./FeedbackForm";

// const EmployeeDashboard = ({ firstName }) => {
//   const location = useLocation();
//   const loginTime = location.state?.loginTime;
//   const logoutTime = location.state?.logoutTime;

//   const currentDate = new Date();

//   // Format the date as needed (e.g., YYYY-MM-DD HH:MM:SS)
//   const formattedDate = currentDate.toISOString().slice(0, 10); // YYYY-MM-DD
//   const formattedTime = currentDate.toTimeString().slice(0, 8); // HH:MM:SS

//   const [attendanceData, setAttendanceData] = useState({
//     attendanceStatus: "login",
//     date: formattedDate,
//     arrivalTime: formattedTime
//   });

//   const [userName, setUserName] = useState("");
//   const [userRole, setUserRole] = useState("");
//   const [activityLog, setActivityLog] = useState([]);
//   const [showFeedbackForm, setShowFeedbackForm] = useState(false);
//   const [overtimeHours, setOvertimeHours] = useState(null);
//   const [leaveDetails, setLeaveDetails] = useState({
//     subject: "",
//     message: ""
//   });

//   useEffect(() => {
//     fetch("http://localhost:3000/activity")
//       .then((response) => response.json())
//       .then((data) => {
//         const user = data.find(user => user.firstName === firstName);
//         if (user) {
//           setUserName(user.firstName + " " + user.lastName);
//           setUserRole(user.role);
//           setAttendanceData((prevData) => ({
//             ...prevData,
//             attendanceStatus: user.attendanceStatus,
//             date: user.date,
//             arrivalTime: user.arrivalTime || loginTime
//           }));
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching user data:", error);
//       });

//     fetch("/activity")
//       .then((response) => response.json())
//       .then((data) => setActivityLog(data))
//       .catch((error) => {
//         window.alert("Error fetching activity log:", error);
//       });
//   }, [firstName, loginTime]);

//   const handleTimesheetSubmit = () => {
//     window.alert("Timesheet submitted");
//   };

//   const handleLogout = () => {

//     const loginTimeMs = new Date(attendanceData.arrivalTime).getTime();
//     const logoutTimeMs = new Date(attendanceData.departureTime).getTime();
//     const overtimeMs = logoutTimeMs - loginTimeMs;
//     const overtimeHours = (overtimeMs / (1000 * 60 * 60)).toFixed(2);

//     setOvertimeHours(overtimeHours);

//     const newActivityLog = {
//       userName: userName,
//       logoutTime: logoutTime,
//       overtime: overtimeHours,
//     };

//     fetch("http://localhost:3000/logout", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newActivityLog),
//     })
//       .then((response) => {
//         if (response.ok) {
//           console.log("Logout time logged successfully");
//         } else {
//           console.error("Failed to log logout time");
//         }
//       })
//       .catch((error) => {
//         console.error("Error logging logout time:", error);
//       });

//     setShowFeedbackForm(true);
//   };

//   const handleFeedbackSubmit = (feedback) => {
//     console.log("Feedback submitted", feedback);
//     setShowFeedbackForm(false);
//     window.alert(`You have worked for ${overtimeHours} hours of overtime today.`);
//   };
// //   leave
//   const handleLeaveRequestClick = () => {
//     setShowLeaveForm(true);
//   };

//   const handleLeaveFormSubmit = (event) => {
//     event.preventDefault();
//     const mailtoLink = `mailto:teddywasethkoome@gmail.com?subject=${encodeURIComponent(leaveDetails.subject)}&body=${encodeURIComponent(leaveDetails.message)}`;
//     window.open(mailtoLink, '_blank');
//     setShowLeaveForm(false);
//     setLeaveDetails({ subject: "", message: "" });
//   };

//   const handleLeaveDetailChange = (event) => {
//     const { name, value } = event.target;
//     setLeaveDetails((prevDetails) => ({
//       ...prevDetails,
//       [name]: value
//     }));
//   };


//   return (
//     <div className="employee-dashboard-container">
//       <div className="employee-dashboard">
//         <h1>Employee Dashboard</h1>
//         <UserProfile userName={userName} userRole={userRole} />
//         <AttendanceTable attendanceData={attendanceData} />
//         <button id="submit-timesheet-button" onClick={handleTimesheetSubmit}>
//           Submit Timesheet
//         </button>
//         <button id="logout-button" onClick={handleLogout}>
//           Logout
//         </button>
//         <button id="leave-request-button" onClick={handleLeaveRequestClick}>
//           Request Leave
//         </button>
//         <div id="activity-log-container">
//         <ActivityLog activityLog={activityLog} />
//         </div>
//         {showFeedbackForm && <FeedbackForm onSubmit={handleFeedbackSubmit} />}
//         {showLeaveForm && (
//           <form onSubmit={handleLeaveFormSubmit} className="leave-form">
//             <h2>Leave Request</h2>
//             <label htmlFor="subject">Subject:</label>
//             <input
//               type="text"
//               id="subject"
//               name="subject"
//               value={leaveDetails.subject}
//               onChange={handleLeaveDetailChange}
//               required
//             />
//             <label htmlFor="message">Message:</label>
//             <textarea
//               id="message"
//               name="message"
//               value={leaveDetails.message}
//               onChange={handleLeaveDetailChange}
//               required
//             />
//             <button type="submit">Send Leave Request</button>
//             <button type="button" onClick={() => setShowLeaveForm(false)}>Cancel</button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EmployeeDashboard;