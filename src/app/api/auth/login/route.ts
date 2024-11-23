// app/api/auth/login/route.ts

import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function POST(req: Request) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { email, password } = await req.json()

  // Example user check (replace with actual database query)
  const user = { email: 'test@example.com', passwordHash: 'hashedPassword' }

  // Compare hashed passwords (you'll replace this with actual bcrypt check)
  const passwordMatch = await bcrypt.compare(password, user.passwordHash)

  if (passwordMatch) {
    // Create a JWT token
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET!, { expiresIn: '1h' })

    return NextResponse.json({ token })
  } else {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 })
  }
}