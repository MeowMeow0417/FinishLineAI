'use client'

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import React from 'react'

const Weather = () => {
  return (
    <Card className="p-4 rounded-xl shadow-md overflow-hidden text-sm">
    <CardHeader>
      <CardTitle className="text-md font-bold">🌦️ Weather Impact</CardTitle>
      <CardDescription> <p className="">Track: <strong>Spa-Francorchamps</strong></p></CardDescription>
    </CardHeader>
    <CardContent>
    <ul className="list-disc list-inside space-y-1">
      <li>Rain Probability: <strong>65%</strong></li>
      <li>Temperature: <strong>18°C</strong></li>
      <li>Humidity: <strong>72%</strong></li>
      <li>Wind Speed: <strong>12 km/h</strong></li>
      <li>Track Temperature: <strong>24°C</strong></li>
      <li>Air Pressure: <strong>1013 hPa</strong></li>
      <li>Cloud Cover: <strong>80%</strong></li>
      <li>UV Index: <strong>5 (Moderate)</strong></li>
      <li>Visibility: <strong>8 km</strong></li>
    </ul>
    </CardContent>
  </Card>
  )
}

export default Weather