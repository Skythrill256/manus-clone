"use client"

import type React from "react"

import { useState } from "react"
import { UseCaseCard } from "./use-case-card"
import { cn } from "@/lib/utils"

export type UseCaseCategory = "Featured" | "Research" | "Life" | "Data Analysis" | "Education" | "Productivity" | "WTF"

export interface UseCase {
  id: string
  title: string
  description: string
  category: UseCaseCategory[]
  icon: React.ReactNode
  imageSrc: string
}

interface UseCaseGalleryProps {
  useCases: UseCase[]
  className?: string
}

export default function UseCaseGallery({ useCases, className }: UseCaseGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<UseCaseCategory>("Featured")

  const categories: UseCaseCategory[] = [
    "Featured",
    "Research",
    "Life",
    "Data Analysis",
    "Education",
    "Productivity",
    "WTF",
  ]

  const filteredUseCases = useCases.filter((useCase) =>
    activeCategory === "Featured" ? useCase.category.includes("Featured") : useCase.category.includes(activeCategory),
  )

  return (
    <div className={cn("w-full max-w-6xl mx-auto px-4 py-8", className)}>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Use case gallery</h1>
        <p className="text-lg text-muted-foreground">
          Learn how Manus handles real-world tasks through step-by-step replays.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
              activeCategory === category ? "bg-black text-white" : "bg-muted hover:bg-muted/80",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredUseCases.map((useCase) => (
          <UseCaseCard key={useCase.id} useCase={useCase} />
        ))}
      </div>
    </div>
  )
}

