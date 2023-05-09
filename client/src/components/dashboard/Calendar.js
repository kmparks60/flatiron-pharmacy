import React from 'react'
import CalendarPage from './CalendarPageTwo'

function Calendar() {

    // const [events, setEvents] = useState([])

    // const addEvent = (eO) => {
    //     const eventArr = [...events, eO]
    //     fetch('http://localhost:5555/events', {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(eO)
    //     })
    //     .then(r => r.json())
    //     setEvents(eventArr)
    // }

    // const removeEventFromState = removeEventId => {
    //     const eventArr = events.filter(eventObject => {
    //         return eventObject.id !== removeEventId
    //     })
    //     setEvents(eventArr)
    // }

    return (
        <>
            <CalendarPage />
        </>
    )
}

export default Calendar
