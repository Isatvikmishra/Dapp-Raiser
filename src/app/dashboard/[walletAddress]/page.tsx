'use client';

import { client } from "@/app/client";
import { CROWDFUNDING_FACTORY } from "@/app/constants/contracts";
import { MyCampaignCard } from "@/components/MyCampaignCard";
import { getContract } from "thirdweb";
import { polygonAmoy } from "thirdweb/chains";
import { useActiveAccount, useReadContract } from "thirdweb/react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const account = useActiveAccount();
  const router = useRouter();

  const contract = getContract({
    client: client,
    chain: polygonAmoy,
    address: CROWDFUNDING_FACTORY,
  });

  const { data: myCampaigns, isLoading: isLoadingMyCampaigns, refetch } = useReadContract({
    contract: contract,
    method: "function getUserCampaigns(address _user) view returns ((address campaignAddress, address owner, string name, uint256 creationTime)[])",
    params: [account?.address as string],
  });

  return (
    <div className="mx-auto max-w-7xl px-4 mt-10 sm:px-6 lg:px-8">
      <div className="flex flex-row justify-between items-center mb-8">
        <p className="text-4xl font-semibold">Dashboard</p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => router.push("/create-campaign")}
        >
          Create a Campaign
        </button>
      </div>
      <p className="text-2xl font-semibold mb-4">My Campaigns:</p>
      <div className="grid grid-cols-3 gap-4">
        {!isLoadingMyCampaigns && (
          myCampaigns && myCampaigns.length > 0 ? (
            myCampaigns.map((campaign, index) => (
              <MyCampaignCard
                key={index}
                contractAddress={campaign.campaignAddress}
              />
            ))
          ) : (
            <p>No campaigns</p>
          )
        )}
      </div>
    </div>
  );
}
