import React, { useState } from "react";
import "./calendar.css";

function CalendarPageTwo() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const firstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const handleDayClick = (day) => {
    setSelectedDate(day);
  };

  const monthDays = [];

  for (let i = 1; i <= daysInMonth(selectedDate); i++) {
    monthDays.push(
      <div
        key={i}
        className="day"
        onClick={() => handleDayClick(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i))}
      >
        <div className="day-number">{i}</div>
      </div>
    );
  }

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1))}>
          Previous
        </button>
        <div className="month">{selectedDate.toLocaleString("default", { month: "long" })}</div>
        <button onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1))}>
          Next
        </button>
      </div>
      <div className="days-of-week">
        {daysOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="month-days" style={{ gridTemplateColumns: `repeat(${daysOfWeek.length}, 1fr)` }}>
        {[...Array(firstDayOfMonth(selectedDate))].map((_, i) => (
          <div key={i} className="day"></div>
        ))}
        {monthDays}
      </div>
    </div>
  );
};

export default CalendarPageTwo;
