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
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="bg-white p-12 rounded-xl text-pink-600 shadow-lg w-[700px] space-y-6">
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

        {/* Heading */}
        <div className="flex justify-between items-center uppercase font-bold text-xl mb-2">
          {/* Left side: Jumma */}
          <h1 className="text-xl">{`Jumu'ah`}</h1>

          {/* Right side: Azan & Khutbah */}
          <div className="flex gap-20">
            <h1>Azan</h1>
            <h1>Khutbah</h1>
          </div>
        </div>

        {/* Timings Row */}
        <div>
          <div className="flex justify-between items-center uppercase">
            {/* Left side: Icon + Prayer Name */}
            <div className="flex items-center gap-2">
              <i className={`${jummaTiming.icon} text-xl`}></i>
            </div>

            {/* Right side: Azan & Khutbah Timings */}
            <div className="flex gap-20 text-2xl">
              <p>{jummaTiming.azan}</p>
              <p>{jummaTiming.khutbah}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-4 border-t border-gray-300 w-full"></div>
        </div>
      </div>
    </div>
  )
}

export default Clock
