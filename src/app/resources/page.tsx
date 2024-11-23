// app/resources/page.tsx
"use client"
import { useEffect, useState } from 'react'

interface Resource {
    id: number,
    title: string,
    url: string
    }

const ResourcesPage = () => {
  const [resources, setResources] = useState([])

  useEffect(() => {
    const fetchResources = async () => {
      const response = await fetch('/api/resources')
      const data = await response.json()
      setResources(data)
    }

    fetchResources()
  }, [])

  return (
    <div className="text-center py-10">
      <h1 className="text-3xl font-bold">Startup Resources</h1>
      <ul className="mt-4">
        {resources.map((resource: Resource) => (
          <li key={resource.id}><a href={resource.url} target="_blank">{resource.title}</a></li>
        ))}
      </ul>
    </div>
  )
}

export default ResourcesPage