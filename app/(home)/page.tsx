import React from "react";
import dynamic from "next/dynamic";

const Clock = dynamic(() => import("@/components/Clock/Clock"), { ssr: false })

const HomePage = () => {
  return (
    <>
      <Clock />
    </>
  )
}

export default HomePage;
