import React, { useState, useEffect } from 'react';

function ActivityLogComponent() {
  const [activityLog, setActivityLog] = useState([]);

  useEffect(() => {
    // Fetch activity logs from backend
    fetch('/activity')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch activity log');
        }
        return response.json();
      })
      .then(data => {
        setActivityLog(data); // Assuming data is an array of activity logs
      })
      .catch(error => {
        console.error('Error fetching activity log:', error);
      });
  }, []);

  return (
    <div>
      <h2>Activity Log</h2>
      <ul>
        {activityLog.map(item => (
          <li key={item.id}>
            {/* Render each item */}
            <h3>{item.user_firstname} {item.user_lastname}</h3>
            <p>{new Date(item.timestamp).toLocaleString()}: {item.action}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityLogComponent;
