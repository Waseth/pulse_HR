import React, { useState, useEffect } from 'react';
import {email} from './LoginPage'


function ActivityLogComponent() {
  const [activity_Log, setActivity_Log] = useState([]);

  useEffect(() => {
    // Fetch activity logs from backend
    fetch(`/activity/${email}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch activity log');
        }
        return response.json();
      })
      .then(data => {
        setActivity_Log(data.activity_logs); // Assuming data is an object with 'activity_logs' array
      })
      .catch(error => {
        console.error('Error fetching activity log:', error);
      });
  }, []);

  return (
    <div>
      <h2>Activity Log</h2>
      <ul>
        {activity_Log.map(item => (
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
