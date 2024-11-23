// components/Chatbot.tsx

import { useState } from 'react'

export default function Chatbot() {
  const [messages, setMessages] = useState<{ user: string; bot: string }[]>([])
  const [input, setInput] = useState('')

  // Function to handle sending messages to the backend
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    const userMessage = input
    setMessages((prev) => [...prev, { user: userMessage, bot: '...' }]) // Add the user's message to the chat

    setInput('') // Clear the input field

    try {
      const res = await fetch('/api/dialogflow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      })

      const data = await res.json()

      if (data.reply) {
        // Add the bot's response to the chat
        setMessages((prev) => [
          ...prev.slice(0, -1), // Remove the "..."
          { user: userMessage, bot: data.reply },
        ])
      } else {
        // Handle error in case of failure
        setMessages((prev) => [
          ...prev.slice(0, -1),
          { user: userMessage, bot: "Sorry, I didn't understand that." },
        ])
      }
    } catch (error) {
      console.error('Error:', error)
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { user: userMessage, bot: 'Sorry, something went wrong.' },
      ])
    }
  }

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <div className="user-message">{msg.user}</div>
            <div className="bot-message">{msg.bot}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}