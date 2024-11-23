// app/api/resources/index/route.ts

import { NextResponse } from 'next/server'

const resources = [
    { id: 1, title: 'Startup Guide', url: 'https://example.com/guide' },
    { id: 2, title: 'Business Plan Template', url: 'https://example.com/template' }
  ]
  
  export async function GET() {
    return NextResponse.json(resources)
  }
  