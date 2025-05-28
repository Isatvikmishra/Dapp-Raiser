import React from 'react';
import { FiThumbsUp, FiUsers, FiTool, FiCreditCard, FiHelpCircle, FiMonitor, FiDownload, FiGlobe } from 'react-icons/fi';
import TestimonialsSection from './TestimonialSection';

const MidFooterSection = () => {
  const features = [
    {
      Icon: FiThumbsUp,
      title: "Industry’s best fundraising success rate",
    },
    {
      Icon: FiUsers,
      title: "Supported By 55,00,000+ Contributors",
    },
    {
      Icon: FiTool,
      title: "Easy-To-Manage Tools To Boost Results",
    },
    {
      Icon: FiCreditCard,
      title: "Receive contributions via all popular payment modes",
    },
    {
      Icon: FiHelpCircle,
      title: "Get Expert Support 24/7",
    },
    {
      Icon: FiMonitor,
      title: "A Dedicated Smart-Dashboard",
    },
    {
      Icon: FiDownload,
      title: "Withdraw Funds Without Hassle",
    },
    {
      Icon: FiGlobe,
      title: "International Payment Support",
    },
  ];

  return (
    <div>
      <section className="py-16 mt-6 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-1  md:text-4xl font-bold text-gray-700">Why Dapp Raiser?</h2>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-16 md:px-20">
          {features.map((feature, index) => (
            <div key={index} className="flex  flex-col items-center text-center">
              <feature.Icon className="text-teal-500 h-16 w-16 mb-4 transition delay-150 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110" />
              <div className="w-12 h-1 bg-yellow-400 mb-4"></div>
              <p className="text-gray-700 text-[15px] leading-6">{feature.title}</p>
            </div>
          ))}
        </div>
      </section>

    <div>
      <TestimonialsSection />
    </div>
    
    </div>
  );
};

export default MidFooterSection;
