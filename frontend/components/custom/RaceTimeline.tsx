'use client'
import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const monacoGP = {
  name: "Monaco Grand Prix",
  date: "May 11, 2025",
  sessions: {
    FP1: "May 9, 2025 - 10:00 AM",
    FP2: "May 9, 2025 - 2:00 PM",
    FP3: "May 10, 2025 - 11:00 AM",
    Qualifying: "May 10, 2025 - 3:00 PM",
    Race: "May 11, 2025 - 2:00 PM",
  },
}

const RaceTimeline = () => {
  return (
    <Card className="w-full h-[2 flex flex-col">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-l font-bold">
          🏁 {monacoGP.name}
        </CardTitle>
        <p className="text-sm ">{monacoGP.date}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="p-4 border rounded-lg bg-muted transition">
          {/* Session Details */}
          <div className="space-y-2 text-sm">
            <p>🏎️ FP1: <span >{monacoGP.sessions.FP1}</span></p>
            <p>🏎️ FP2: <span >{monacoGP.sessions.FP2}</span></p>
            <p>🏎️ FP3: <span >{monacoGP.sessions.FP3}</span></p>
            <p>⏱️ Qualifying: <span >{monacoGP.sessions.Qualifying}</span></p>
            <p>🏆 Race: <span >{monacoGP.sessions.Race}</span></p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default RaceTimeline
