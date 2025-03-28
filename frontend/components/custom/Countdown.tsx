'use client'
import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card"


const Countdown = () => {
  return (
    <Card className='h-[90px] '>
        <CardHeader className='flex items-center '>
          <CardTitle className='text-lg'>Countdown: </CardTitle>
          <CardDescription className='flex justify-center items-center'>
            <p className='text-3xl'>00:00:00:00</p>
          </CardDescription>
        </CardHeader>

    </Card>
  )
}

export default Countdown