// components/HeroSlider.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";


const slides = [
  {
    id: 1,
    image: "/Assets/slide1.webp",
    title: "Do your part to make their future bright!",
    button: "Start a Fundraiser",
  },
  {
    id: 2,
    image: "/Assets/slide2.webp",
    title: "Be a hero for someone in need!",
    button: "Join the Movement",
  },
  {
    id: 3,
    image: "/Assets/slide3.webp",
    title: "Every small help makes a big impact",
    button: "Donate Now",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    },12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          className="absolute w-full h-[88vh] left-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          
        >
          <Image
            src={slides[current].image}
            alt="Slide"
            fill
            className="w-full h-full object-cover"
            priority
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00e0ff88] via-[#ff7e5f88] to-[#76ff0388]"></div>

          {/* Text Content */}
          <motion.div
            className="absolute inset-0 flex flex-col justify-center items-start px-24 mt-3 text-white z-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          >
            <h1 className="text-6xl font-bold mb-4 max-w-2xl">{slides[current].title}</h1>
             <Link href="/all-campaign">
              <button className="bg-teal-600 px-6 py-3 text-lg font-semibold rounded-full hover:bg-teal-700 transition">
                {slides[current].button}
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons (optional) */}
      <div className="absolute inset-y-0 left-4 flex items-center z-20">
        <button onClick={() => setCurrent((current - 1 + slides.length) % slides.length)} className="text-white text-3xl bg-black/30 px-3 py-1 rounded-full">
          ←
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 flex items-center z-20">
        <button onClick={() => setCurrent((current + 1) % slides.length)} className="text-white text-3xl bg-black/30 px-3 py-1 rounded-full">
          →
        </button>
      </div>
    </div>
  );
}
