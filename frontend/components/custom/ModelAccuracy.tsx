'use client'
import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const ModelAccuracy = () => {
  return (
    <Card className="w-full h-[225px] flex flex-col justify-between">
      <CardHeader className="flex items-center">
        <CardTitle>Model Accuracy</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        <p className="text-lg font-medium">Model Accuracy Data Here</p>
      </CardContent>
    </Card>
  )
}

export default ModelAccuracy
