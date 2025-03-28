'use client'
import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"

const chartData = [
  { accuracy: 87.5, fill: "var(--color-safari)" },
]

const chartConfig = {
  accuracy: {
    label: "Model Accuracy",
  },
} satisfies ChartConfig

const ModelAccuracy = () => {
  return (
    <Card className="w-full h-[320px] flex flex-col justify-between">
      <CardHeader className="flex items-center justify-between">
        <CardTitle>🏆 Model Accuracy</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-row items-center justify-center gap-4">
        {/* Chart Section */}
        <div className="flex-1 w-2">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[200px]"
          >
            <RadialBarChart
              data={chartData}
              startAngle={0}
              endAngle={250}
              innerRadius={80}
              outerRadius={110}
            >
              <PolarGrid
                gridType="circle"
                radialLines={false}
                stroke="none"
                className="first:fill-muted last:fill-background"
                polarRadius={[86, 74]}
              />
              <RadialBar dataKey="accuracy" background cornerRadius={10} />
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-4xl font-bold"
                          >
                            {chartData[0].accuracy.toFixed(1)}%
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            Accuracy
                          </tspan>
                        </text>
                      )
                    }
                  }}
                />
              </PolarRadiusAxis>
            </RadialBarChart>
          </ChartContainer>
        </div>

        {/* Info Section */}
        <div className="flex-1 space-y-2 text-sm">
          <p>🌧️ Wet Weather: <strong>82%</strong></p>
          <p>☀️ Dry Weather: <strong>90%</strong></p>

          <hr className="border-t border-muted my-1" />

          {/* Historical Performance */}
          <h3 className="text-md font-semibold">📊 Historical Performance</h3>
          <p>Previous Race: <strong>Monaco GP</strong></p>
          <p>Accuracy: <strong>85%</strong></p>
          <p>Top 3 Correct: <strong>✔️ Verstappen, Perez, Hamilton</strong></p>
        </div>
      </CardContent>
      <CardFooter>
          <p className='text-sm'>"Prediction Accuracy: 87.5% (based on historical performance)"</p>
      </CardFooter>
    </Card>
  )
}

export default ModelAccuracy
