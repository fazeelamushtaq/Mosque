import React from "react"
import Link from "next/link"
import { Menus } from "@/constants/menu"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-pink-500 via-red-400 to-indigo-500 text-white shadow-md w-full">
      <div className="w-full px-4 sm:px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src="/logo1.png" alt="logo" width={80} height={80} />
          <div className="text-xl font-bold py-4">Mosque</div>
        </div>
        <ul className="flex gap-4 items-center overflow-x-auto">
          {Menus.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="text-white font-medium text-md px-2 py-2 whitespace-nowrap"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
