// ActivityLog.js
import React from "react";

const ActivityLog = ({ activityLog }) => {
  return (
    <div className="activity-log">
      <h2>Activity Log</h2>
      <ul>
        {activityLog.map((log, index) => (
          <li key={index}>{log.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityLog;
