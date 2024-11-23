// app/api/auth/signup/route.ts

import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'

interface User {
  id: string;
  email: string;
  passwordHash: string;
}

const users: User[] = [] // This will be replaced by actual DB in the future

export async function POST(req: Request) {
  const { email, password } = await req.json()

  // Hash the password
  const passwordHash = await bcrypt.hash(password, 10)

  // Example user creation (replace with actual database query)
  const newUser = { id: uuidv4(), email, passwordHash }
  users.push(newUser)

  return NextResponse.json({ message: 'User registered successfully' })
}