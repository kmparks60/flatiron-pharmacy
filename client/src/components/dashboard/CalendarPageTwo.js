import React, { useState } from "react";
import "./calendar.css";

function CalendarPageTwo() {
  const [events, setEvents] = useState([]);
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

  // const handleAddEvent = (event) => {
  //   setEvents([...events, event]);
  // };

  // const handleDeleteEvent = (event) => {
  //   const newEvents = events.filter((e) => e.id !== event.id);
  //   setEvents(newEvents);
  // };

  // const handleDelete = () => {
	// 	fetch(`http://localhost:5555/events/${events.id}`, {
	// 		method: 'DELETE'
	// 	})
	// 	.then(removeEventFromState(events.id))
	// }

  const monthDays = [];

  for (let i = 1; i <= daysInMonth(selectedDate); i++) {
    monthDays.push(
      <div
        key={i}
        className="day"
        onClick={() => handleDayClick(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i))}
      >
        <div className="day-number">{i}</div>
        {events.filter((event) => new Date(event.date).getDate() === i).map((event) => (
          <div key={event.id} className="event">
            <div className="event-time">{event.time}</div>
            <div className="event-title">{event.title}</div>
            <div className="event-notes">{event.notes}</div>
            {/* <button onClick={handleDelete}>Delete</button> */}
          </div>
        ))}
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
      {/* <form>
      <div className="add-event">
        <h3>Add Event</h3>
        <label>
          Title:
          <input type="text" id="title" />
        </label>
        <label>
          Date:
          <input type="date" id="date" />
        </label>
        <label>
          Time:
          <input type="time" id="time" />
        </label>
        <label>
          Notes:
          <textarea id="notes"></textarea>
        </label>
        <button onClick={() => handleAddEvent({ id: events.length + 1, title: document.getElementById("title").value, date: document.getElementById("date").value, time: document.getElementById("time").value, notes: document.getElementById("notes").value })}>
          Add
        </button>
      </div>
      </form> */}
    </div>
  );
};

export default CalendarPageTwo;

