'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!');
      setForm({ name: '', email: '', message: '' }); // ✅ Reset fields
      setLoading(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center text-gray-800 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h1>

        <motion.p
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          We&apos;re love to hear from you! Whether it is a question about crowdfunding, a suggestion, or just to say hello—reach out to us through the form below.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-8 space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={form.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium">
              Message
            </label>
            <textarea
              id="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="How can we help you?"
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full bg-teal-600 text-white py-3 rounded-xl font-semibold transition ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-teal-700'
            }`}
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>

        <motion.div
          className="mt-12 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          Or email us directly at <span className="font-medium text-orange-600">support@dappraiser.com</span>
        </motion.div>
      </div>
    </main>
  );
}
