'use client';

import { motion } from 'framer-motion';

export default function OurStoryPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Story
        </motion.h1>

        <motion.p
          className="text-gray-600 text-lg leading-relaxed mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          What started as a simple idea in a small room has now evolved into a powerful tool for change. We created this platform to make fund raising easier, more transparent, and more impactful.
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          src="/Assets/ourstory.jpg"
          alt="Our Team"
          className="w-full h-full object-cover rounded-2xl shadow-md"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        />

        <motion.div
          className="text-gray-700 space-y-6 text-justify"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
        <p className="mb-6">
            We started this platform with one simple belief: no one should face a medical crisis alone.
        </p>
        <p className="mb-6">
            Time and again, we saw families struggling to gather funds for life-saving treatments. It wasn’t just about money—it was about finding hope, building trust, and getting urgent help without delay.
        </p>
        <p className="mb-6">
            With the power of technology and the compassion of community, we created this space where people in need can raise funds transparently and quickly—and others can be a part of their healing journey.
        </p>
        <p className="font-semibold text-teal-600">
            This is more than just a crowdfunding platform. It’s a lifeline. A place where generosity meets urgency—and every donation brings someone closer to recovery.
        </p>
        </motion.div>
      </div>

      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Our Mission</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Whether you’re here to raise funds, donate to a cause, or just explore what’s possible—welcome to our story. Now let’s write the next chapter together.
        </p>
      </motion.div>

      {/* Timeline Section */}
        <motion.section
        className="mt-20 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">Milestones</h2>

        <div className="relative border-l-4 border-teal-500 pl-6 space-y-10">
            {[
            {
                year: "2024",
                title: "Idea Was Born",
                desc: "We realized the gap in accessible and transparent crowdfunding, and began shaping our mission.",
            },
            {
                year: "2025",
                title: "Platform Launched",
                desc: "We officially launched our MVP, allowing users to create, share, and fund campaigns with ease.",
            },
            ].map((event, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                className="relative"
            >
                <div className="absolute w-4 h-4 bg-teal-500 rounded-full -left-2 top-1.5"></div>
                <h3 className="text-lg px-4 font-semibold text-teal-600">{event.year} — {event.title}</h3>
                <p className="text-gray-600">{event.desc}</p>
            </motion.div>
            ))}
        </div>
        </motion.section>

    </main>
  );
}
