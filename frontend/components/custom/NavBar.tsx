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
    <section className=' flex justify-between p-2 items-center'>
      <div className='p-2 '>
        <h1 className='text-2xl font-bold'>FinishLineAI</h1>
      </div>

      <Card className='w-2xl p-2 '>
            <CardContent className='flex justify-end'>
                <ThemeSwitcher />
            </CardContent>
        </Card>
    </section>
  )
}

export default NavBar