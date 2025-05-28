import Link from 'next/link';
import React from 'react';


const HeroSection: React.FC = () => {
  return (
    <div className="bg-white mb-24">
          {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center p-8 md:p-16">
        {/* Left Image */}
        <div className="w-full pl-8 md:w-1/2 mb-8 md:mb-0">
          <img src= "https://images.unsplash.com/photo-1578496781985-452d4a934d50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Child" className="rounded-lg w-11/12 object-cover " />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl pr-8 md:text-5xl mb-4 font-bold text-gray-800">
            Need Funds to Pay For a Medical Emergency or Social Cause?
          </h1>

          <div className="flex space-x-6 text-center">
            <div>
              <p className="text-teal-500 font-bold text-2xl">0%</p>
              <p className="text-gray-600 text-md">Platform Fee*</p>
            </div>
            <div>
              <p className="text-teal-500 font-bold text-2xl">72 Lakh+</p>
              <p className="text-gray-600 text-md">Contributors</p>
            </div>
            <div>
              <p className="text-teal-500 font-bold text-2xl">3.2 Lakh+</p>
              <p className="text-gray-600 text-md">Fundraisers</p>
            </div>
          </div>

          <p className="text-gray-700 text-md">
            Dapp Raiser's <span className="font-semibold">0% Platform fees*</span> ensures maximum funds for you
          </p>

          <div className="flex flex-col md:flex-row items-center  gap-4">
            <Link
            href={'/all-campaign'}
      
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold text-md py-3 px-6 rounded-lg text-center">
              Start a Fundraiser for FREE
            
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
