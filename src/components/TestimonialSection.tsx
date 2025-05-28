// components/TestimonialsSection.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  handle: string;
  avatar: string;      // URL or import of avatar image
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Riddhi K Shah",
    handle: "@RiddhiKShah",
    avatar: "/Assets/testi1.jpg",
    text: "I've had an incredible experience with D'app Raiser as a first-time fund-raiser. They have been patient, competent and efficient. And that led me to leave them a tip-amount that someone else would have had to set up a small fundraiser. I believe in this move and I think it's brilliant."
  },
  {
    id: 2,
    name: "Ankit Verma",
    handle: "@Ankit.V",
    avatar: "/Assets/testi2.jpg",
    text: "The transparency and ease of use blew me away. Raising funds for my niece’s surgery was so much simpler with their dApp. Kudos to the team!"
  },
  {
    id: 3,
    name: "Sonal Mehta",
    handle: "@SonalM",
    avatar: "/Assets/testi3.jpg",
    text: "I trust blockchain, but I never thought I'd build my own campaign. This UI is so intuitive, I had everything live in minutes!"
  },
  {
    id: 4,
    name: "Vikram Singh",
    handle: "@VikramS",
    avatar: "/Assets/testi4.jpg",
    text: "Amazing support from start to finish. My donors loved the real-time progress updates. Highly recommended."
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setCurrent((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="relative bg-gradient-to-b from-gray-100 to-white py-24 px-4 overflow-hidden">
  {/* Top wave or decorative shape */}
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
    <svg
      className="relative block w-[calc(100%+1.3px)] h-[60px]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,0V46.29c47.82,22,103.74,29.05,158.33,17.39C288,43.83,385,2,485.23,0c104.21-2,191.14,41.93,292.91,52.19,96,9.56,191.13-13.28,282.34-35.35V0Z"
        opacity=".25"
        className="fill-gray-200"
      ></path>
      <path
        d="M0,0V15.81C47.82,37.76,103.74,47.81,158.33,41.25,288,26.35,385,0,485.23,0c104.21,0,191.14,22.16,292.91,28.15,96,5.16,191.13-7.17,282.34-19.09V0Z"
        opacity=".5"
        className="fill-gray-300"
      ></path>
      <path
        d="M0,0V5.63C47.82,24.7,103.74,39.92,158.33,35.34,288,24.91,385,0,485.23,0c104.21,0,191.14,17.09,292.91,22.38,96,5.77,191.13-3.63,282.34-10.48V0Z"
        className="fill-white"
      ></path>
    </svg>
  </div>

  {/* Section content */}
  <h2 className="text-3xl font-semibold text-center mt-3 mb-3 relative z-10">
    What people are saying about D’app Raiser
  </h2>
  <div className="w-24 h-1 bg-gradient-to-r from-teal-400 via-teal-600 to-teal-400 mx-auto mb-8 rounded-full opacity-80 shadow-sm" />

  <div className="flex items-center justify-center space-x-6 relative z-10">
    {/* Left Button */}
    <button
      onClick={prev}
      className="text-2xl text-gray-600 hover:text-gray-900"
    >
      ← Prev
    </button>

    {/* Testimonial Card */}
    <div className="w-full max-w-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={testimonials[current].id}
          className="bg-white rounded-lg shadow-xl p-8 flex space-x-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex-shrink-0">
            <img
              src={testimonials[current].avatar}
              alt={testimonials[current].name}
              className="w-24 h-24 rounded-full object-cover border-2 border-teal-600"
            />
          </div>
          <div>
            <p className="text-gray-800 mb-4 leading-relaxed">
              {testimonials[current].text}
            </p>
            <p className="font-semibold text-gray-900">
              {testimonials[current].name}
            </p>
            <p className="text-sm text-gray-500">{testimonials[current].handle}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>

    {/* Right Button */}
    <button
      onClick={next}
      className="text-2xl text-gray-600 hover:text-gray-900"
    >
      Next →
    </button>
  </div>

  {/* “See all” link */}
  <div className="text-center mt-8 relative z-10">
    <a href="/reviews" className="text-teal-600  hover:underline">
      See all reviews
    </a>
  </div>

  {/* Decorative star outline */}
<div className="absolute right-10 bottom-10 z-[1] opacity-10 pointer-events-none">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-red-500"
        >
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>

       
       
</div>

</section>

  );
}
