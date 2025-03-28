'use client'
import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const GPSLeft = () => {
  return (
    <Card className="w-full h-[85px] flex flex-col justify-between">
      <CardHeader className="flex items-center justify-center">
        <CardTitle>GPs Left for the Year</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        <p className="text-lg font-medium">Remaining GPs: 10</p>
      </CardContent>
    </Card>
  )
}

export default GPSLeft
