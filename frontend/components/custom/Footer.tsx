'use client'
import React from 'react'
import {
  Card,
  CardFooter,
} from "@/components/ui/card"

const Footer = () => {
  return (
    <Card className="w-full h-[80px] flex items-center justify-center">
      <CardFooter className="w-full flex justify-center">
        <h1 className="text-lg font-semibold">Footer</h1>
      </CardFooter>
    </Card>
  )
}

export default Footer
