"use client"
import React from 'react'
import { ThemeSwitcher } from '@/components/custom/ThemeSwitcher'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import Profile from '@/app/dashboard/profile/ProfileCard'


const NavBar = () => {
  return (
    <nav className="flex justify-between p-2 pr-4 items-center">
    <div className="p-2">
      <h1 className="text-2xl font-bold">FinishLineAI</h1>
    </div>

    <Card className="w-[500px] p-2">
      <CardContent className="flex justify-end gap-4 items-center">
        How to use
        About
        <Profile />
        <ThemeSwitcher />
      </CardContent>
    </Card>
  </nav>
  )
}

export default NavBar