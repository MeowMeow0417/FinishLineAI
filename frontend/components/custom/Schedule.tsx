'use client'
import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const Schedule = () => {
  const raceSchedule = [
    { name: "Japanese Grand Prix", date: "March 30, 2025" },
    { name: "Italian Grand Prix", date: "April 14, 2025" },
    { name: "Monaco Grand Prix", date: "May 11, 2025" },
    { name: "British Grand Prix", date: "June 23, 2025" },
    { name: "Canadian Grand Prix", date: "July 7, 2025" },
    { name: "Hungarian Grand Prix", date: "August 4, 2025" },
    { name: "Belgian Grand Prix", date: "August 18, 2025" },
    { name: "Dutch Grand Prix", date: "September 1, 2025" },
    { name: "Singapore Grand Prix", date: "September 15, 2025" },
    { name: "United States Grand Prix", date: "October 6, 2025" },
    { name: "Mexican Grand Prix", date: "October 20, 2025" },
    { name: "Brazilian Grand Prix", date: "November 3, 2025" },
    { name: "Abu Dhabi Grand Prix", date: "November 24, 2025" },
  ]

  return (
    <Card className="w-full h-[450px] flex flex-col">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-2xl font-bold">Race Schedule</CardTitle>
        <Button variant="outline" className="text-sm">View All</Button>
      </CardHeader>

      <CardContent className="overflow-y-auto h-full">
        <div className="grid gap-4">
          {raceSchedule.map((race, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg flex justify-between items-center hover:bg-gray-900 transition"
            >
              <p className="text-sm font-medium">{race.name}</p>
              <p className="text-sm text-gray-500">{race.date}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default Schedule
