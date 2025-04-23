import React from "react"
import dynamic from "next/dynamic"
import Mosque from "../Mosque/Mosque"
const Clock = dynamic(() => import("@/components/Clock/Clock"), { ssr: false })

const Home = () => {
  return (
    <div className="bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <Clock />
        <Mosque />
      </div>
    </div>
  )
}

export default Home
