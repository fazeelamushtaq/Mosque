import React from "react"
import Link from "next/link"
import { Menus } from "@/constants/menu"

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-pink-400 to-pink-600 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Mosque</div>
        <ul className="flex gap-5 justify-between items-center">
          {Menus.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="text-white font-xl text-md px-3 py-3"
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
