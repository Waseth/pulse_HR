import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ActivityLog from "./ActivityLog";
import './AdminDashboard.css';

const AdminDashboard = ({ adminDetails }) => {
  // const [userStats, setUserStats] = useState([]);
  const [users, setUsers] = useState([]);
  const [activityLog, setActivityLog] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showActivityLog, setShowActivityLog] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // fetch("http://localhost:3000/userStats")
    //   .then((response) => response.json())
    //   .then((data) => setUserStats(data))
    //   .catch((error) => {
    //     console.error("Error fetching user statistics:", error);
    //   });

    fetch("/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });

    fetch("/activity")
      .then((response) => response.json())
      .then((data) => setActivityLog(data))
      .catch((error) => {
        console.error("Error fetching activity log:", error);
      });
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setFilteredUsers(users.filter(user => user.name.toLowerCase().includes(query.toLowerCase())));
  };

  const toggleActivityLog = () => {
    setShowActivityLog(!showActivityLog);
  };

  const handleLogout = () => {
    // Perform any additional logout logic if necessary
    navigate('/'); // Redirect to landing page
  };

  return (
    <div className="admin-dashboard-container">
      <div className="admin-dashboard container">
        <h1>Admin Dashboard</h1>
        <p>Welcome, {adminDetails?.name || "Admin"}! You logged in at {adminDetails?.loginTime || "N/A"}.</p>

        <div id="search-container">
          <input
            type="text"
            placeholder="Search for a user..."
            value={searchQuery}
            onChange={handleSearch}
            id="search-bar"
            className="search-bar"
          />
        </div>

        <div id="activity-log-button-container">
          <button id="activity-log-button" onClick={toggleActivityLog}>
            {showActivityLog ? "Hide Activity Log" : "Show Activity Log"}
          </button>
        </div>

        {showActivityLog && <ActivityLog activityLog={activityLog} />}
        
        <button id="logout-button" onClick={handleLogout}>
          Logout
        </button>

        <div className="user-list">
          <h2>User List</h2>
          <ul>
            {filteredUsers.map(user => (
              <li key={user.id}><h3>{user.firstname}</h3> {user.lastname} <p>{user.email}</p></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
