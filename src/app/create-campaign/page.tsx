'use client';

import { useState } from "react";
import { useActiveAccount } from "thirdweb/react";
import { client } from "@/app/client";
import { polygonAmoy } from "thirdweb/chains";
import { deployPublishedContract } from "thirdweb/deploys";
import { motion } from "framer-motion";

export default function CreateCampaignPage() {
  const account = useActiveAccount();

  const [isDeployingContract, setIsDeployingContract] = useState(false);
  const [campaignName, setCampaignName] = useState("");
  const [campaignDescription, setCampaignDescription] = useState("");
  const [campaignGoal, setCampaignGoal] = useState(1);
  const [campaignDeadline, setCampaignDeadline] = useState(1);

  const handleDeployContract = async () => {
    if (!account) {
      alert("Connect your wallet first!");
      return;
    }

    setIsDeployingContract(true);
    try {
      const contractAddress = await deployPublishedContract({
        client: client,
        chain: polygonAmoy,
        account: account,
        contractId: "Crowdfunding",
        contractParams: [
          account.address,
          campaignName,
          campaignDescription,
          (campaignGoal * 1e18).toString(),
          campaignDeadline.toString(),
        ],
        publisher: "0x02CB6b0a25FC8cE931626f11f623e9BE0C3398e6",
        version: "1.0.0",
      });
      alert("Contract deployed successfully at " + contractAddress);
    } catch (error) {
      console.error(error);
      alert("Failed to deploy contract.");
    } finally {
      setIsDeployingContract(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto mt-12 p-6 bg-white rounded-md shadow-md"
    >
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Create a New Campaign</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">Tell us why you are raising funds, and what your goals are.</p>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">We at Dapp Raiser will help you achieve it.</p>

      <label className="block mb-2 font-semibold">Campaign Name</label>
      <input
        type="text"
        value={campaignName}
        onChange={(e) => setCampaignName(e.target.value)}
        placeholder="Enter campaign name"
        className="w-full p-3 mb-4 border rounded-md focus:outline-teal-500"
      />

      <label className="block mb-2 font-semibold">Campaign Description</label>
      <textarea
        value={campaignDescription}
        onChange={(e) => setCampaignDescription(e.target.value)}
        placeholder="Describe your campaign"
        className="w-full p-3 mb-4 border rounded-md focus:outline-teal-500"
        rows={5}
      />

      <label className="block mb-2 font-semibold">Amount to Raise (in Polygon)</label>
      <input
        type="number"
        min={1}
        value={campaignGoal}
        onChange={(e) => setCampaignGoal(Math.max(1, parseInt(e.target.value)))}
        className="w-full p-3 mb-4 border rounded-md focus:outline-teal-500"
      />

      <label className="block mb-2 font-semibold">Campaign Length (Days)</label>
      <input
        type="number"
        min={1}
        value={campaignDeadline}
        onChange={(e) => setCampaignDeadline(Math.max(1, parseInt(e.target.value)))}
        className="w-full p-3 mb-6 border rounded-md focus:teal-blue-500"
      />

      <motion.button
        disabled={isDeployingContract}
        onClick={handleDeployContract}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-full py-3 rounded-md text-white transition ${
          isDeployingContract ? "bg-gray-400 cursor-not-allowed" : "bg-teal-600 hover:bg-teal-700"
        }`}
      >
        {isDeployingContract ? "Creating Campaign..." : "Create Campaign"}
      </motion.button>
    </motion.div>
  );
}
