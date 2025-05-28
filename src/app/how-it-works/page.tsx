'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Connect Wallet',
    description:
      'Use your Metamask or other Web3 wallet to securely connect and authenticate yourself on the platform.',
    icon: '🔗',
  },
  {
    title: 'Create Campaign',
    description:
      'Launch your fundraising campaign by providing details like title, goal, deadline, and an image.',
    icon: '📝',
  },
  {
    title: 'Fund & Share',
    description:
      'Others can fund your campaign using crypto. Share your campaign to reach more donors.',
    icon: '🚀',
  },
  {
    title: 'Withdraw Funds',
    description:
      'If the target is met before the deadline, you can withdraw the raised amount securely.',
    icon: '💰',
  },
]

export default function HowItWorks() {
  return (
    <div>
      <div>
      <section className="bg-gray-50 pt-16 pb-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Definition of Crowdfunding
          </motion.h2>

          <motion.blockquote
            className="text-lg text-gray-700 italic mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            “Crowdfunding is the process of funding a project online by collecting small amounts of money from a large volume of people”
          </motion.blockquote>

          <motion.p
            className="text-base md:text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            But it makes one believe that there is a ‘crowd’ of donors ready to pump funds the minute you make your fundraiser live.
            Hence, we came up with a better definition—how you get to the ‘crowd’ in crowdfunding:
          </motion.p>

          <motion.p
            className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
          >
            It is a campaign marketed for reaching out to those who love your cause and support your work themselves—spreading it among
            their family and friends, and their friends, who then make a part of the crowd that creates a wave of change.
          </motion.p>
        </div>
      </section>
    </div>
    <div>
        <div className="min-h-screen py-16 px-6 bg-white text-gray-800">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
             How It Works
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Launch campaigns, receive crypto donations, and make a real impact.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-10">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
    </div>
  </div>
  )
}
