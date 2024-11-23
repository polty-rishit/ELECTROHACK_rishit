// app/investors/page.tsx
"use client"
import { useEffect, useState } from 'react'

interface Investor {
    id: number,
    name: string,
    interest: string
}

const InvestorsPage = () => {
    const [investors, setInvestors] = useState([])

    useEffect(() => {
        const fetchInvestors = async () => {
            const response = await fetch('/api/investors')
            const data = await response.json()
            setInvestors(data)
        }

        fetchInvestors()
    }, [])

    return (
        <div className="text-center py-10">
            <h1 className="text-3xl font-bold">Find Your Investor</h1>
            <ul className="mt-4">
                {investors.map((investor: Investor) => (
                    <li key={investor.id}>{investor.name} - {investor.interest}</li>
                ))}
            </ul>
        </div>
    )
}

export default InvestorsPage
