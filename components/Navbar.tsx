
"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <ManusLogo />
          </Link>
        </div>

        <div className="flex items-center space-x-8">
          <Link href="#intro" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
            Intro
          </Link>
          <Link href="#use-cases" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
            Use cases
          </Link>
          <Link href="#benchmarks" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
            Benchmarks
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative group">
            <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 text-sm font-medium">
              <span>English</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>

          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors text-sm font-medium">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}

function ManusLogo() {
  return (
    <div className="flex items-center space-x-2">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
          fill="#1A1A1A"
        />
        <path
          d="M15 8.5C15 9.88071 13.8807 11 12.5 11C11.1193 11 10 9.88071 10 8.5C10 7.11929 11.1193 6 12.5 6C13.8807 6 15 7.11929 15 8.5Z"
          fill="#1A1A1A"
        />
        <path
          d="M8.5 13C9.32843 13 10 13.6716 10 14.5C10 15.3284 9.32843 16 8.5 16C7.67157 16 7 15.3284 7 14.5C7 13.6716 7.67157 13 8.5 13Z"
          fill="#1A1A1A"
        />
        <path
          d="M15.5 13C16.3284 13 17 13.6716 17 14.5C17 15.3284 16.3284 16 15.5 16C14.6716 16 14 15.3284 14 14.5C14 13.6716 14.6716 13 15.5 13Z"
          fill="#1A1A1A"
        />
      </svg>
      <span className="text-xl font-medium">manus</span>
    </div>
  )
}

