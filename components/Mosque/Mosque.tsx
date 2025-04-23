"use client"
import React, { useState } from "react"
import { jummaTiming } from "@/constants/timings"
import Image from "next/image"

const Mosque = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-white rounded-xl text-pink-600 shadow-lg w-[650px] h-[650px] space-y-6 flex flex-col justify-center items-center gap-6">
        <Image
          src="/madina.png"
          alt="Beautiful view of Madina"
          width={150}
          height={100}
          className="rounded-lg shadow-md object-cover"
        />
        <div className="flex flex-col uppercase justify-center items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold">Masjid Omer Staging</h1>
            <div className="border-t border-gray-300 w-full"></div>
            <div className="space-y-6">
              {/* Sunrise & Sunset Section */}

              {/* Jumu'ah Section Heading */}
              <div className="bg-white shadow-sm rounded-xl p-4 flex items-center justify-between border border-gray-200">
                <h1 className="text-xl font-semibold text-gray-700">{`Jumu'ah`}</h1>
                <div className="flex gap-8">
                  <h1 className="text-xl font-medium text-gray-600">Azan</h1>
                  <h1 className="text-xl font-medium text-gray-600">Khutbah</h1>
                </div>
              </div>

              {/* Jumu'ah Timing Row */}
              <div className="bg-gray-50 shadow-inner rounded-xl px-4 py-2 flex items-center justify-between border border-gray-300">
                <div className="flex items-center gap-2 text-gray-700">
                  <i className={`${jummaTiming.icon} text-2xl`} />
                  <span className="text-lg font-medium">Timings</span>
                </div>
                <div className="flex gap-12 text-lg font-semibold text-gray-800">
                  <p>{jummaTiming.azan}</p>
                  <p>{jummaTiming.khutbah}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center uppercase font-bold text-xl mb-2">
              <div className="my-4 border-t border-gray-300 w-full"></div>
            </div>
            <p className="text-xl flex justify-center items-center">
              Next Iqamah in 47 min
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mosque
