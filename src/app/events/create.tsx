// app/events/create.tsx

import { useState } from 'react'

export default function CreateEvent() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newEvent = { title, description, date }
    try {
      const res = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEvent),
      })

      if (res.ok) {
        alert('Event created successfully!')
        // Optionally, you can redirect or clear the form
      } else {
        alert('Error creating event.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error creating event.')
    }
  }

  return (
    <main>
      <h1>Create New Event</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Event</button>
      </form>
    </main>
  )
}