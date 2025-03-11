"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Clock } from "lucide-react";

interface Space {
  title: string;
  image: string;
  author: string;
}

const spaces: Space[] = [
  {
    title: "JAPAN LBQ QUEST",
    image: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&q=80&w=2000",
    author: "kavan****rick@gmail.com",
  },
  {
    title: "Quantum Computing Learning Hub",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=2000",
    author: "roxa****@gmail.com",
  },
  {
    title: "Stock Pattern Matcher",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2000",
    author: "142****@h*****.com",
  },
  {
    title: "Discover the Wonder of Physics",

    image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=2000",
    author: "im****206@gmail.com",
  },
  {
    title: "IBIT ETF Dashboard",

    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=2000",
    author: "je****001@gmail.com",
  },
  {
    title: "Super Mario Minecraft Style",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000",
    author: "eric****@s****.com",
  },
  {
    title: "Room with Calm Pop Culture Vibe",

    image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=2000",
    author: "che****wa2@gmail.com",
  },
  {
    title: "Zinc Oxide Growth on Nickel Foam",
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=2000",
    author: "kate****sci@gmail.com",
  },
];

function SpaceCard({ space }: { space: Space }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative bg-white rounded-lg overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.1)] cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ y: -4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3]">
        <img
          src={space.image}
          alt={space.title}
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />

        {isHovered && (
          <>
            <motion.div
              className="absolute top-4 right-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-black/90">
                <Globe className="w-4 h-4" />
                Visit Space
              </button>
            </motion.div>

            <motion.div
              className="absolute bottom-4 left-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <button className="text-white/90 text-sm flex items-center gap-2 hover:text-white">
                <Clock className="w-4 h-4" />
                Watch replay of this task
              </button>
            </motion.div>
          </>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-press-start text-sm mb-2 leading-relaxed">{space.title}</h3>
        <p className="text-sm text-gray-500">From {space.author}</p>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif mb-4">Manus Spaces gallery</h1>
          <p className="text-lg text-gray-600">
            Discover and explore incredible Spaces created with Manus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {spaces.map((space, index) => (
            <SpaceCard key={index} space={space} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-black text-white px-6 py-2.5 rounded-full inline-flex items-center gap-2 hover:bg-gray-900 transition-colors">
            Explore more Spaces
            <span className="text-white/80">›</span>
          </button>
        </div>
      </div>
    </div>
  );
}
