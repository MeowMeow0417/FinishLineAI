'use client'
import React from 'react'

import Upcoming from "@/components/custom/Upcoming"
import Schedule from "@/components/custom/Schedule"
import GPSLeft from "@/components/custom/GPSLeft";
import DriverStandings from "@/components/custom/DriverStandings";
import ModelAccuracy from "@/components/custom/ModelAccuracy";
import Footer from "@/components/custom/Footer";
import NavBar from '@/components/custom/NavBar'

export default function Home() {


  return (
    <section className="grid gap-4 p-6 grid-cols-12 auto-rows-min">

      {/* LEFT COLUMN */}
      <article className="col-span-12 lg:col-span-3 md:col-span-6 sm:col-span-12 xs:col-span-12">
        <div className="grid gap-4">

          {/* Race Schedule */}
          <Schedule />
          {/* Model Accuracy */}
          <ModelAccuracy />
        </div>
      </article>

      {/* MIDDLE COLUMN */}
      <article className="col-span-12 lg:col-span-6 md:col-span-6 sm:col-span-12 xs:col-span-12">
        <div className="grid gap-4">
          {/* GPs Left */}
          <GPSLeft />
          {/* Upcoming Race + Other Highlights */}
          <Upcoming />
          {/* Footer */}
          <Footer />
        </div>
      </article>

      {/* RIGHT COLUMN */}
      <article className="col-span-12 lg:col-span-3 md:col-span-6 sm:col-span-12 xs:col-span-12 lg:row-span-2">
        <div className="grid gap-4">
          {/* Nav Bar */}
          <NavBar />
          {/* Driver Standings */}
          <DriverStandings />
        </div>
      </article>
    </section>
  );
}
