// app/page.tsx
"use client";

import * as React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import UseCaseGallery from "@/components/use-case-gallery";
import ManusSpaces from "@/components/spaces";
import BenchmarksSection from "@/components/Benchmark";

export default function HomePage() {
  const useCases = [
    {
      id: 1,
      title: "Trip to Japan in April",
      description: "Manus integrates comprehensive travel information to create personalized itineraries and recommendations.",
      image: "/images/japan-trip.png"
    },
    {
      id: 2,
      title: "Deeply Analyze Tesla Stocks",
      description: "Manus delivers in-depth stock analysis with visually compelling data analysis.",
      image: "/images/tesla-analysis.png"
    },
    {
      id: 3,
      title: "Interactive Course on the Momentum Theorem",
      description: "Manus develops engaging video presentations for middle school students.",
      image: "/images/momentum-course.png"
    },
    {
      id: 4,
      title: "Comparative Analysis of Insurance Policies",
      description: "Manus generates clear, structured analysis comparing key policy information.",
      image: "/images/insurance-analysis.png"
    },
    {
      id: 5,
      title: "B2B Supplier Sourcing",
      description: "Manus conducts comprehensive research across extensive networks to identify suppliers.",
      image: "/images/supplier-sourcing.png"
    },
    {
      id: 6,
      title: "AI Products for the Clothing Industry",
      description: "Manus provides comprehensive product analysis and competitive insights.",
      image: "/images/clothing-ai.png"
    },
    // Add more custom use cases as needed
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
              Leave it to Manus
            </h1>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Manus is a general AI agent that bridges minds and actions: it doesn't just think, it delivers results. Manus excels at various tasks in work and life, getting everything done while you rest.
            </p>

            {/* Video Section */}
            <div className="max-w-3xl mx-auto mt-12 rounded-lg overflow-hidden shadow-xl relative">
              <div className="aspect-video bg-[#1A1A1A] relative">
                <div className="absolute top-8 left-8 text-white z-10">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Introducing<br />Manus
                  </h2>
                </div>
                {/* Video placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-black border-b-8 border-b-transparent ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Case Gallery Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4">Use case gallery</h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Learn how Manus handles real-world tasks through step-by-step replays.
            </p>
            <UseCaseGallery useCases={useCases} />
          </div>
        </section>

        {/* Manus Spaces Gallery */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4">Manus Spaces gallery</h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Discover and explore incredible Spaces created with Manus.
            </p>
            <ManusSpaces />
          </div>
        </section>

        {/* Benchmarks Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4">Benchmarks</h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              GAIA is a benchmark for evaluating General AI Assistants on solving real-world problems. 
              Manus has achieved new state-of-the-art (SOTA) performance across all three difficulty levels.
            </p>
            <BenchmarksSection />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/manus-logo.svg" alt="Manus" width={24} height={24} />
                <span className="text-xl font-medium">manus</span>
              </div>
              <p className="text-sm text-gray-600">
                © 2025 Manus AI
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h3 className="font-medium mb-4">Follow us</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">X (Twitter)</a>
                  <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">LinkedIn</a>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-4">Company</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Feedback</a>
                  <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Media Inquiries</a>
                  <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Contact us</a>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-4">Resources</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Privacy policy</a>
                  <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Terms of service</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}