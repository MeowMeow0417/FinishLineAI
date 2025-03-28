'use client'
import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Upcoming = () => {
  return (
    <Card className="w-full h-full flex flex-col justify-between">
      <CardHeader className="flex items-center justify-center">
        <CardTitle className="text-5xl font-bold text-red-500 tracking-wide">Upcoming Race</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-4">
        <h3 className="text-lg font-semibold text-gray-500">Japanese Grand Prix - 2025</h3>
        <p>Time Remaining: <strong>3 Days, 14 Hours</strong></p>
      </CardContent>
    </Card>
  )
}

export default Upcoming
