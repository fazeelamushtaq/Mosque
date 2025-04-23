"use client"
import React, { useState, useEffect } from "react"
import {
  getFormattedArabicDate,
  getFormattedDate,
  getFormattedTime,
} from "@/utils"
import { jummaTiming, prayerTimes } from "@/constants/timings"
import "remixicon/fonts/remixicon.css"

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-white p-10 rounded-xl text-pink-600 shadow-lg w-[650px] h-[650px] space-y-6">
        <div className="text-center space-y-1">
          <h2 className="text-5xl font-bold">
            {getFormattedTime(currentTime)}
          </h2>
          <p className="text-lg uppercase tracking-wide">
            {getFormattedDate(currentTime)}
          </p>
          <p className="text-xl font-bold text-center">
            {getFormattedArabicDate(currentTime)}
          </p>
        </div>

        <div className="flex justify-between uppercase font-bold text-xl">
          <h1>Prayer</h1>
          <div className="flex gap-20">
            <h1>Start</h1>
            <h1>Iqamah</h1>
          </div>
        </div>

        <div className="border-t border-gray-300 w-full"></div>

        {prayerTimes.map((prayer, index) => (
          <div key={index}>
            <div className="flex justify-between items-center uppercase">
              <div className="flex items-center gap-2">
                <i className={`${prayer.icon} text-xl`}></i>
                <p className="text-2xl font-semibold">{prayer.name}</p>
              </div>

              <div className="flex gap-10 text-2xl">
                <p>{prayer.start}</p>
                <p>{prayer.end}</p>
              </div>
            </div>

            <div className="my-4 border-t border-gray-300 w-full"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Clock
