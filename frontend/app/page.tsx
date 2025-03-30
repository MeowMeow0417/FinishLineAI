'use client'
import React from 'react'

import Upcoming from "@/components/custom/Upcoming"
import RaceTimeline from '@/components/custom/RaceTimeline';
import DriverStandings from "@/components/custom/DriverStandings";
import ModelAccuracy from "@/components/custom/ModelAccuracy";
import Weather from '@/components/custom/Weather';

import { Card, CardHeader, CardTitle,  CardContent, CardDescription} from "@/components/ui/card";


export default function Home() {
  return (
    <div >
      {/* Main Content: Optimized Grid Layout */}
      <section className="grid grid-cols-12 gap-5 p-4">

        {/* LEFT COLUMN */}
        <article className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col gap-5">
        <RaceTimeline />
          <Weather />

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
