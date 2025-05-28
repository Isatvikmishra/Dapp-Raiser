'use client';

import { useState } from "react";
import { useReadContract } from "thirdweb/react";
import { client } from "../client";
import { polygonAmoy } from "thirdweb/chains";
import { getContract } from "thirdweb";
import { CampaignCard } from "@/components/CampaignCard";
import { CROWDFUNDING_FACTORY } from "../constants/contracts";
import Dummyui from "@/components/Dummyui";
import { motion } from "framer-motion";

export default function AllCampaigns() {
  const [currentPage, setCurrentPage] = useState(1);
  const campaignsPerPage = 9;

  const contract = getContract({
    client: client,
    chain: polygonAmoy,
    address: CROWDFUNDING_FACTORY,
  });

  const { data: campaigns, isLoading: isLoadingCampaigns } = useReadContract({
    contract: contract,
    method: "function getAllCampaigns() view returns ((address campaignAddress, address owner, string name)[])",
    params: [],
  });

  // Show loading state with dummy cards
  if (isLoadingCampaigns || !campaigns) {
    return (
      <div className="mx-auto max-w-7xl px-4 mt-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-4xl font-bold mb-4">All Campaigns</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[...Array(9)].map((_, index) => (
            <Dummyui key={index} />
          ))}
        </div>
      </div>
    );
  }

  // Reverse the list so the latest campaigns appear first
  const reversedCampaigns = [...campaigns].reverse();

  const totalCampaigns = reversedCampaigns.length;
  const indexOfLastCampaign = currentPage * campaignsPerPage;
  const indexOfFirstCampaign = indexOfLastCampaign - campaignsPerPage;
  const currentCampaigns = reversedCampaigns.slice(indexOfFirstCampaign, indexOfLastCampaign);

  const totalPages = Math.ceil(totalCampaigns / campaignsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 mt-4 sm:px-6 lg:px-8">
      <div className="py-10">
        <h1 className="text-4xl font-bold mb-4">All Campaigns</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {currentCampaigns.length > 0 ? (
            currentCampaigns.map((campaign, index) => (
              <motion.div
                key={campaign.campaignAddress}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <CampaignCard campaignAddress={campaign.campaignAddress} />
              </motion.div>
            ))
          ) : (
            <p>No Campaigns Found.</p>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Previous
          </button>

          <span className="font-semibold">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-teal-600 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
