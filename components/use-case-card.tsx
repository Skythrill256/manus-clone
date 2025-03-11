
import { Card, CardContent } from "@/components/ui/card"
import type { UseCase } from "./use-case-gallery"
import Image from "next/image"

interface UseCaseCardProps {
  useCase: UseCase
}

export function UseCaseCard({ useCase }: UseCaseCardProps) {
  return (
    <Card className="overflow-hidden group h-full flex flex-col bg-white border border-gray-100 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
      <CardContent className="p-4 flex flex-col flex-grow">
        <div className="bg-black rounded-full w-8 h-8 flex items-center justify-center text-white mb-3">
          {useCase.icon}
        </div>

        <h3 className="text-lg font-semibold mb-1">{useCase.title}</h3>

        <p className="text-sm text-muted-foreground mb-4 flex-grow">{useCase.description}</p>

        <div className="relative w-full h-32 mt-auto overflow-hidden rounded-md">
          <Image
            src={useCase.imageSrc || "/placeholder.svg"}
            alt={useCase.title}
            fill
            className="object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
      </CardContent>
    </Card>
  )
}

