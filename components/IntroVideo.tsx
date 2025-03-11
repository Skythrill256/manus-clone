"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'

export default function IntroVideo() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
      {!isPlaying ? (
        <>
          <Image
            src="/public/images/intro-video-thumbnail.webp"
            alt="Manus Demo"
            width={1200}
            height={675}
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <button
              onClick={() => setIsPlaying(true)}
              className="w-14 h-14 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <Play className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
            </button>
          </div>
        </>
      ) : (
        <iframe
          src="https://www.youtube.com/embed/K27diMbCsuw?autoplay=1"
          title="Manus Introduction"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full border-0"
        />
      )}
    </div>
  )
}
