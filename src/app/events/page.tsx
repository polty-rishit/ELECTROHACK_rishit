// app/events/page.tsx
"use client"
import { useEffect, useState } from 'react'

interface Event {
  id: number
  title: string
  description: string
  date: string
}

export default function Events() {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    // Fetch events from the API
    const fetchEvents = async () => {
      try {
        const res = await fetch('/api/events')
        const data = await res.json()
        setEvents(data)
      } catch (error) {
        console.error('Error fetching events:', error)
      }
    }

    fetchEvents()
  }, [])

  return (
    <main>
      <h1>Upcoming Events</h1>
      <div className="events-container">
        {events.length === 0 ? (
          <p>No events available at the moment.</p>
        ) : (
          events.map((event) => (
            <div key={event.id} className="event-card">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p><strong>Date:</strong> {event.date}</p>
            </div>
          ))
        )}
      </div>
    </main>
  )
}