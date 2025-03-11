"use client"

import { useState } from "react"
import { Leaf, BookOpen, Building2, Flame, BarChart3, Thermometer, Mountain, Film, Car } from "lucide-react"
import { motion } from "framer-motion"

export default function ManusShowcase() {
  const [hoverButton, setHoverButton] = useState(false)

  const examples = [
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "Best Books on Media and Linguistics in France 2019-2025",
      quote:
        "Please help me to create a table of the best books about medias and linguistics (separated topics) published in France between 2019 and 2025. With a summary of why they are the best. At least 15 books in each category, covering the dewey notation 0...",
      from: "j*****h@gmail.com",
    },
    {
      icon: <Building2 className="h-5 w-5" />,
      title: "Largest Real Estate Brokerages in Major Metro Areas",
      quote:
        "Find the largest real estate brokerages in each of the top 10 major metro areas and break them down by number of agents, total number of transactions, total revenue, average commission per side.",
      from: "w*****h@gmail.com",
    },
    {
      icon: <Flame className="h-5 w-5" />,
      title: "Impact of Fire Control Technologies on U.S. Victory",
      quote:
        "Please do a research on how damage control, specifically fire control technologies, helped the U.S. Pacific Fleet withstand air strikes and ultimately defeat Japan during World War II. Please focus on the Pearl Harbor attack, the Battle of...",
      from: "m*****23@gmail.com",
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Generate SEO-Friendly Blog That Passes Google AI Test",
      quote: "How to generate blog that pass Google AI content test and with good SEO",
      from: "zh*****k@gmail.com",
    },
    {
      icon: <Thermometer className="h-5 w-5" />,
      title: "Impact of Climate Change on Earth and Society Next Decade",
      quote:
        "Create a detailed report on the potential impacts of climate change on Earth and human society over the next decade, including environmental, economic, and social consequences.",
      from: "e*****r@gmail.com",
    },
    {
      icon: <Mountain className="h-5 w-5" />,
      title: "Best Hiking Trails in the Swiss Alps",
      quote:
        "Can you list the Top 10 best hiking trails in the Swiss Alps, including difficulty level, duration, best time to visit, and key attractions along each route?",
      from: "h*****g@gmail.com",
    },
    {
      icon: <Film className="h-5 w-5" />,
      title: "Scriptwriting Tools for Video Production and Filmmaking",
      quote:
        "What are the best scriptwriting tools and software for independent filmmakers? Compare features, pricing, and compatibility with production workflows.",
      from: "d*****r@gmail.com",
    },
    {
      icon: <Car className="h-5 w-5" />,
      title: "Two-Month Family Trip Itinerary and Guide",
      quote:
        "Create a detailed itinerary for a two-month family road trip across the United States, including kid-friendly attractions, accommodation recommendations, and budget planning.",
      from: "t*****r@gmail.com",
    },
  ]

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 bg-white">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-serif font-medium mb-4">See how others use Manus</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Got a task? Let Manus take care of it! Submit yours and see the best results featured here.
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <motion.button
          className="relative group flex items-center justify-center rounded-full px-8 py-2.5 bg-white"
          onHoverStart={() => setHoverButton(true)}
          onHoverEnd={() => setHoverButton(false)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Gradient border */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-70"></span>
          <span className="absolute inset-[1.5px] rounded-full bg-white"></span>

          <span className="relative flex items-center">
            <Leaf className="h-5 w-5 mr-2 text-purple-600" />
            <span className="text-base">Let Manus try my task</span>
          </span>
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {examples.map((example, index) => (
          <motion.div
            key={index}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all duration-300"
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center mb-4">{example.icon}</div>
            <h3 className="font-medium text-lg mb-3 line-clamp-2">{example.title}</h3>
            <div className="mb-4">
              <div className="text-gray-300 text-3xl font-serif mb-1">"</div>
              <p className="text-gray-600 text-sm line-clamp-6 -mt-4">{example.quote}</p>
            </div>
            <div className="text-xs text-gray-400 mt-auto">From: {example.from}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
