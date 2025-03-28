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
    <Card className="w-full h-[500px] flex flex-col justify-between">
      <CardHeader className="flex items-center justify-center">
        <CardTitle className="text-3xl font-bold">Upcoming Race</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-4">
        <h3 className="text-lg font-semibold text-gray-500">Japanese Grand Prix - 2025</h3>
        <h1 className="text-5xl font-bold text-red-500 tracking-wide">UPCOMING RACE</h1>
      </CardContent>
    </Card>
  )
}

export default Upcoming
