"use client";

import * as React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import UseCaseGallery, { UseCaseCategory } from "@/components/use-case-gallery";
import ManusSpaces from "@/components/spaces";
import BenchmarksSection from "@/components/Benchmark";
import IntroVideo from "@/components/IntroVideo";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Footer from "@/components/footer";
export default function HomePage() {
  const useCases = [
    // Featured Category (4 items)
    {
      id: "1",
      title: "Trip to Japan in April",
      description: "Manus integrates comprehensive travel information to create personalized itineraries and recommendations.",
      category: ["Featured" as UseCaseCategory],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>,
      imageSrc: "https://images.unsplash.com/photo-1741557571786-e922da981949?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
    },
    {
      id: "2",
      title: "Deeply Analyze Tesla Stocks",
      description: "Manus delivers in-depth stock analysis with visually compelling data analysis.",
      category: ["Featured" as UseCaseCategory],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>,
      imageSrc: "https://images.unsplash.com/photo-1741557571786-e922da981949?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
    },
    {
      id: "3",
      title: "Personal Fitness Tracker",
      description: "Manus creates personalized workout routines and nutrition plans based on your fitness goals.",
      category: ["Featured" as UseCaseCategory],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>,
      imageSrc: "https://images.unsplash.com/photo-1741557571786-e922da981949?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
    },
    {
      id: "4",
      title: "Home Renovation Planner",
      description: "Manus helps plan your home renovation project with budget estimates and contractor recommendations.",
      category: ["Featured" as UseCaseCategory],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>,
      imageSrc: "https://images.unsplash.com/photo-1741557571786-e922da981949?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
    },

    // Research Category (4 items)
    {
      id: "5",
      title: "Interactive Course on the Momentum Theorem",
      description: "Manus develops engaging video presentations for middle school students.",
      category: ["Research" as UseCaseCategory],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>,
      imageSrc: "https://images.unsplash.com/photo-1741557571786-e922da981949?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
    },
    {
      id: "6",
      title: "Literature Review Assistant",
      description: "Manus helps researchers compile and analyze academic literature for comprehensive reviews.",
      category: ["Research" as UseCaseCategory],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>,
      imageSrc: "https://images.unsplash.com/photo-1741557571786-e922da981949?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
    },
    {
      id: "7",
      title: "Clinical Trial Data Analysis",
      description: "Manus assists in analyzing and visualizing complex clinical trial data for medical researchers.",
      category: ["Research" as UseCaseCategory],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>,
      imageSrc: "/images/clinical-trials.png"
    },
    {
      id: "8",
      title: "Patent Analysis Tool",
      description: "Manus streamlines patent research by analyzing existing patents and identifying innovation opportunities.",
      category: ["Research" as UseCaseCategory],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>,
      imageSrc: "/images/patent-analysis.png"
    },

    // Education Category (4 items)
    {
      id: "9",
      title: "Comparative Analysis of Insurance Policies",
      description: "Manus generates clear, structured analysis comparing key policy information.",
      category: ["Education" as UseCaseCategory],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>,
      imageSrc: "/images/insurance-analysis.png"
    },
    {
      id: "10",
      title: "Language Learning Assistant",
      description: "Manus creates personalized language learning plans with interactive exercises and assessments.",
      category: ["Education" as UseCaseCategory],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>,
      imageSrc: "/images/language-learning.png"
    },
    {
      id: "11",
      title: "STEM Curriculum Developer",
      description: "Manus assists educators in developing engaging STEM curriculum materials for K-12 classrooms.",
      category: ["Education" as UseCaseCategory],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>,
      imageSrc: "/images/stem-curriculum.png"
    },
    {
      id: "12",
      title: "College Application Coach",
      description: "Manus guides students through the college application process with personalized advice and essay feedback.",
      category: ["Education" as UseCaseCategory],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>,
      imageSrc: "/images/college-application.png"
    },

    // Productivity Category (4 items)
    {
      id: "13",
      title: "B2B Supplier Sourcing",
      description: "Manus conducts comprehensive research across extensive networks to identify suppliers.",
      category: ["Productivity" as UseCaseCategory],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>,
      imageSrc: "/images/supplier-sourcing.png"
    },
    {
      id: "14",
      title: "AI Products for the Clothing Industry",
      description: "Manus provides comprehensive product analysis and competitive insights.",
      category: ["Productivity" as UseCaseCategory],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>,
      imageSrc: "/images/clothing-ai.png"
    },
    {
      id: "15",
      title: "Email Management Assistant",
      description: "Manus helps prioritize, organize, and draft responses to your emails to boost productivity.",
      category: ["Productivity" as UseCaseCategory],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>,
      imageSrc: "/images/email-management.png"
    },
    {
      id: "16",
      title: "Project Timeline Generator",
      description: "Manus creates detailed project timelines with resource allocation and milestone tracking.",
      category: ["Productivity" as UseCaseCategory],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>,
      imageSrc: "/images/project-timeline.png"
    },

    // Life Category (4 items)
    {
      id: "17",
      title: "Meal Planning Assistant",
      description: "Manus creates weekly meal plans tailored to your dietary preferences and nutritional goals.",
      category: ["Life" as UseCaseCategory],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>,
      imageSrc: "/images/meal-planning.png"
    },
    {
      id: "18",
      title: "Wedding Planner",
      description: "Manus helps coordinate all aspects of wedding planning from venue selection to guest management.",
      category: ["Life" as UseCaseCategory],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>,
      imageSrc: "/images/wedding-planner.png"
    },
    {
      id: "19",
      title: "Personal Finance Manager",
      description: "Manus helps track expenses, set budgets, and provide personalized financial advice.",
      category: ["Life" as UseCaseCategory],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>,
      imageSrc: "/images/finance-manager.png"
    },
    {
      id: "20",
      title: "Vacation Planner",
      description: "Manus creates customized vacation itineraries based on your preferences, budget, and schedule.",
      category: ["Life" as UseCaseCategory],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>,
      imageSrc: "/images/vacation-planner.png"
    },

    // Data Analysis Category (4 items)
    {
      id: "21",
      title: "Customer Behavior Analysis",
      description: "Manus analyzes customer data to identify trends, preferences, and opportunities for business growth.",
      category: ["Data Analysis" as UseCaseCategory],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>,
      imageSrc: "/images/customer-analysis.png"
    },
    {
      id: "22",
      title: "Market Research Dashboard",
      description: "Manus compiles and visualizes market data to provide actionable business intelligence.",
      category: ["Data Analysis" as UseCaseCategory],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>,
      imageSrc: "/images/market-research.png"
    },
    {
      id: "23",
      title: "Sales Performance Tracker",
      description: "Manus creates detailed sales analytics to identify performance patterns and growth opportunities.",
      category: ["Data Analysis" as UseCaseCategory],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>,
      imageSrc: "/images/sales-tracker.png"
    },
    {
      id: "24",
      title: "Web Analytics Reporter",
      description: "Manus analyzes website traffic data to provide insights for improving user engagement and conversion.",
      category: ["Data Analysis" as UseCaseCategory],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>,
      imageSrc: "/images/web-analytics.png"
    },

    // WTF Category (4 items)
    {
      id: "25",
      title: "AI Art Collaborator",
      description: "Manus generates creative art concepts and visualizations based on your wild imagination.",
      category: ["WTF" as UseCaseCategory],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>,
      imageSrc: "/images/ai-art.png"
    },
    {
      id: "26",
      title: "Fictional Universe Creator",
      description: "Manus builds detailed fictional worlds complete with maps, characters, and lore.",
      category: ["WTF" as UseCaseCategory],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>,
      imageSrc: "/images/universe-creator.png"
    },
    {
      id: "27",
      title: "Dream Interpreter",
      description: "Manus analyzes your dreams and suggests possible meanings and interpretations.",
      category: ["WTF" as UseCaseCategory],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>,
      imageSrc: "/images/dream-interpreter.png"
    },
    {
      id: "28",
      title: "Conversation Simulator",
      description: "Manus helps practice difficult conversations through realistic interactive simulations.",
      category: ["WTF" as UseCaseCategory],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>,
      imageSrc: "/images/conversation-simulator.png"
    }
  ];

  return (
    <AuroraBackground>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <section id="intro" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
                Leave it to Manus
              </h1>
              <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
                Manus is a general AI agent that bridges minds and actions: it doesn't just think, it delivers results. Manus excels at various tasks in work and life, getting everything done while you rest.
              </p>

              {/* Video Section */}
              <div className="max-w-3xl mx-auto mt-12">
                <IntroVideo />
              </div>
            </div>
          </section>

          {/* Use Case Gallery Section with id "use-cases" */}
          <section id="use-cases" className="py-16 bg-gray-50">

            <p className="text-lg text-gray-600 text-center mb-12">
              Learn how Manus handles real-world tasks through step-by-step replays.
            </p>
            <UseCaseGallery useCases={useCases} />
          </section>

          {/* Manus Spaces Gallery */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <ManusSpaces />
            </div>
          </section>

          {/* Benchmarks Section with id "benchmarks" */}
          <section id="benchmarks" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <BenchmarksSection />
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div >
    </AuroraBackground>
  );
}
