// app/api/mentors/index/route.ts
import { NextResponse } from 'next/server'

const mentors = [
    { id: 1, name: 'John Doe', expertise: 'Business Strategy' },
    { id: 2, name: 'Jane Smith', expertise: 'Marketing' }
  ]
  
  export async function GET() {
    return NextResponse.json(mentors)
  }
  