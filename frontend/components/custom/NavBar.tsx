"use client"
import React from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"


const NavBar = () => {
  return (
        <Card className='w-full p-2 mr-0 '>
            <CardContent className='flex justify-end'>
                <ThemeSwitcher />
            </CardContent>
        </Card>
  )
}

export default NavBar