// app/api/investors/index/route.ts

import { NextResponse } from 'next/server'

const investors = [
    { id: 1, name: 'TechInvest', interest: 'Tech Startups' },
    { id: 2, name: 'GreenFunds', interest: 'Sustainable Businesses' }
  ]
  
  export async function GET() {
    return NextResponse.json(investors)
  }
  