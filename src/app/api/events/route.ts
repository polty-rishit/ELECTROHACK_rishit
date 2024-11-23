// app/api/events/route.ts

import { NextResponse } from 'next/server'

const eventsData = [
  { id: 1, title: 'Tech Startup Workshop', description: 'A workshop on how to launch your tech startup.', date: '2024-12-10' },
  { id: 2, title: 'Funding Bootcamp', description: 'Learn how to pitch your startup to investors.', date: '2024-12-15' },
  { id: 3, title: 'Networking Mixer', description: 'Join a networking event with industry experts and other entrepreneurs.', date: '2024-12-20' },
]

export async function GET() {
  return NextResponse.json(eventsData)
}
