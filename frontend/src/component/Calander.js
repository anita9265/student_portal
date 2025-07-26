import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './style.css'; // Custom dark styling

function Calander() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="container mt-4">
      <h3 className="text-white
       mb-4">
        <i className="bi bi-calendar3 me-2 text-white"></i>Academic Calendar
      </h3>

      <div className="bg-dark  p-4 rounded shadow w-100" style={{ maxWidth: "400px" }}>
        <Calendar
          onChange={setDate}
          value={date}
        
        />

        <div className="mt-4">
          <strong>Selected Date: </strong>
          <span className="text-info">{date.toDateString()}</span>
        </div>
      </div>
    </div>
  );
}

export default Calander;
