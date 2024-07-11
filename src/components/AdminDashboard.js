import React, { useState, useEffect } from "react";
import ActivityLog from "./ActivityLog";
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [userStats, setUserStats] = useState([]);
  const [users, setUsers] = useState([]);
  const [activityLog, setActivityLog] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/userStats")
      .then((response) => response.json())
      .then((data) => setUserStats(data))
      .catch((error) => {
        console.error("Error fetching user statistics:", error);
      });

    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => {
        console.error("Error fetching users:", error);
      });

    fetch("http://localhost:3000/activity")
      .then((response) => response.json())
      .then((data) => setActivityLog(data))
      .catch((error) => {
        console.error("Error fetching activity log:", error);
      });
  }, []);

  const handleUserManagement = () => {
    // Handle user management logic here
    console.log("User management");
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      <ActivityLog activityLog={activityLog} />
    </div>
  );
};

export default AdminDashboard;
