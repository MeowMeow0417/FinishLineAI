'use client'
import React from 'react'

import Upcoming from "@/components/custom/Upcoming"
import RaceTimeline from '@/components/custom/RaceTimeline';
import DriverStandings from "@/components/custom/DriverStandings";
import ModelAccuracy from "@/components/custom/ModelAccuracy";

import { Card, CardHeader, CardTitle,  CardContent, CardDescription} from "@/components/ui/card";

// Weather Impact Card
const WeatherImpact = () => (
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
);




export default function Home() {
  return (
    <div >
      {/* Main Content: Optimized Grid Layout */}
      <section className="grid grid-cols-12 gap-5 p-4">

        {/* LEFT COLUMN */}
        <article className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col gap-5">
        <RaceTimeline />
          <WeatherImpact />

          {/* <NewsHighlights /> */}
        </article>

        {/* MIDDLE COLUMN */}
        <article className="col-span-12 sm:col-span-12 md:col-span-8 lg:col-span-6 flex flex-col gap-5">
          <Upcoming />
          <ModelAccuracy />
        </article>

        {/* RIGHT COLUMN */}
        <article className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col gap-5">
          <DriverStandings />
        </article>
      </section>
    </div>
  )
}
