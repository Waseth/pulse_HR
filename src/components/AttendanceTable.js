
import React from "react";
import './AttendanceTable.css'

const AttendanceTable = ({attendanceData}) => {


 
  return (
    <div>
      <h2 id='attendance-header'>Attendance Records</h2>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Arrival Time</th>
            <th>Attendance Status</th>
          </tr>
        </thead>
        <tbody>
          
            <tr>
              <td>{attendanceData.date}</td>
              <td>{attendanceData.arrivalTime}</td>
              <td>{attendanceData.attendanceStatus}</td>
            </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;