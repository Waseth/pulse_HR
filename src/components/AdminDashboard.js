import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ActivityLog from "./ActivityLog";
import './AdminDashboard.css';

const AdminDashboard = ({ adminDetails }) => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [activityLog, setActivityLog] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showActivityLog, setShowActivityLog] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch users and activity log when component mounts
    fetch("/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data); // Initialize filteredUsers with all users
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

    // Update current time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter users based on search query
    const filteredUsers = users.filter(user => 
      user.firstname.toLowerCase().includes(query) ||
      user.lastname.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query)
    );
    setFilteredUsers(filteredUsers);
  };

  const toggleActivityLog = () => {
    setShowActivityLog(!showActivityLog);
  };

  const handleLogout = () => {
    // Perform any additional logout logic if necessary
    navigate('/'); // Redirect to landing page
  };

  // Format time without seconds
  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="admin-dashboard-container">
      <div className="admin-dashboard container">
        <h1>Admin Dashboard</h1>
        <p>Welcome, {adminDetails?.firstname || "Admin"}! You logged in at {formattedTime}. </p>

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

        <div id='activitylog'>
          {showActivityLog && <ActivityLog activityLog={activityLog} />}
        </div>

        <button id="logout-button" onClick={handleLogout}>
          Logout
        </button>

        {/* Display filtered users */}
        <div className="user-list">
          <h2>User List</h2>
          <ul>
            {filteredUsers.map(user => (
              <li key={user.id}>
                <h3>{user.firstname}</h3>
                {user.lastname} <br />
                <p>{user.email}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
