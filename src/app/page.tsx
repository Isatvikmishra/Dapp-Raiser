'use client';
import { useReadContract } from "thirdweb/react";
import { client } from "./client";
import { polygonAmoy } from "thirdweb/chains";
import { getContract } from "thirdweb";
import { CampaignCard } from "@/components/CampaignCard";
import { CROWDFUNDING_FACTORY } from "./constants/contracts";
import HeroSection from "@/components/HeroSection";
import MidFooterSection from "@/components/MidFooterSection";
import { FiMessageCircle } from 'react-icons/fi';
import HeroSlider from "@/components/HeroSlider";
import Link from "next/link";
import Dummyui from "@/components/Dummyui";

export default function Home() {
  // Get CrowdfundingFactory contract
  const contract = getContract({
    client: client,
    chain: polygonAmoy,
    address: CROWDFUNDING_FACTORY,
  });

  // Get all campaigns deployed with CrowdfundingFactory
  const {data: campaigns, isLoading: isLoadingCampaigns, refetch: refetchCampaigns } = useReadContract({
    contract: contract,
    method: "function getAllCampaigns() view returns ((address campaignAddress, address owner, string name)[])",
    params: []
  });
  return (
   <div> 
        {/* <HeroSection /> */}
        <HeroSlider />
        <div className="bg-orange-500 p-4 -mt-24  mb-16">
          <p className="text-white text-center text-2xl  font-bold">Have any questions for us? Chat with us +91 99999 99999  </p>
        </div>
          <main className="mx-auto w-5/6 px-4 sm:px-2 lg:px-8 bg-white">
            <div className="py-4">
            <h1 className="text-4xl font-bold mb-2 mt-4 text-center">Trending Campaigns</h1>
            <p className="text-lg text-center mb-6">Find one that supports the cause that you believe in.</p>
            <div className="grid grid-cols-4 gap-4">
             {isLoadingCampaigns ? (
                  [...Array(4)].map((_, index) => <Dummyui key={index} />)
                ) : campaigns && campaigns.length > 0 ? (
                 [...campaigns].
                 reverse().slice(0, 4).map((campaign) => (
                  <CampaignCard key={campaign.campaignAddress} campaignAddress={campaign.campaignAddress} />
                ))
                ) : (
                  <p className="col-span-4 text-center">No Campaigns</p>
                )}
            </div>
          
                
            <div className="w-full"> 
              <Link href={"/all-campaign"}>    
                <div className=" mx-auto text-center mt-12 border-2 border-orange-400 font-bold  text-black text-xl p-2 w-[20vh] rounded-xl">View all</div>
              </Link>
            </div>
          </div>
          </main>
          <MidFooterSection />
    </div>
  );
}