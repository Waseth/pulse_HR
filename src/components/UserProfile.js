//UserProfileserprofile.js
import React from "react";
import './UserProfile.css'

const UserProfile = ({ userName, userRole }) => {
  return (
    <div className="User-Profile">
    <h2>Take Control of Your Attendance Today </h2>
      <p><strong>Hello</strong>, {userName}!</p>
      <p className="role">Role: {userRole}</p>

      <p className="attendance-message">Check your attendance summary below and stay on top of your performance!</p>
    </div>
  );
};

export default UserProfile;