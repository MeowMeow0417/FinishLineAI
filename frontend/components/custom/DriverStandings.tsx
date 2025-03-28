'use client'
import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"


const DriverStandings = () => {
  const drivers = [
    { position: 1, name: 'Max Verstappen', points: 350 },
    { position: 2, name: 'Charles Leclerc', points: 280 },
    { position: 3, name: 'Lewis Hamilton', points: 275 },
    { position: 4, name: 'Lando Norris', points: 260 },
    { position: 5, name: 'Sergio Perez', points: 240 },
    { position: 6, name: 'Carlos Sainz', points: 225 },
    { position: 7, name: 'George Russell', points: 200 },
    { position: 8, name: 'Oscar Piastri', points: 180 },
    { position: 9, name: 'Fernando Alonso', points: 160 },
    { position: 10, name: 'Pierre Gasly', points: 140 },
  ]

  return (
    <Card className="w-full h-[650px] flex flex-col">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-2xl font-bold">Driver Standings</CardTitle>
        <Button variant="outline" className="text-sm">View All</Button>

      </CardHeader>

      <CardContent className="overflow-y-auto">
        <div className="grid gap-4">
          {drivers.map((driver) => (
            <div
              key={driver.position}
              className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-800 transition"
            >
              <div className="flex gap-4 items-center">
                <span className="font-bold">{driver.position}.</span>
                <p className="text-sm">{driver.name}</p>
              </div>
              <p className="text-sm text-gray-500">{driver.points} pts</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default DriverStandings
