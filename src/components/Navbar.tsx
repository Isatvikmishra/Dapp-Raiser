'use client';
import { client } from "@/app/client";
import Link from "next/link";
import { ConnectButton, lightTheme, useActiveAccount } from "thirdweb/react";
import { polygonAmoy } from "thirdweb/chains";

const Navbar = () => {
    const account = useActiveAccount();

    return (
        <nav className="border-b-2 bg-white shadow-lg py-4 px-4 sticky top-0 z-50 border-b-slate-200">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Open main menu</span>
                        <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="-ml-8 flex items-center space-x-2">
                            <img src="/Assets/logo.png" alt="Logo" className="h-16 w-24 mt-4 -ml-32 -mr-4 " />
                            <Link
                                    href={'/'}
                            >
                            <span className=" text-4xl -ml-3 font-bold ">D&apos;app Raiser</span>
                            </Link>
                        </div>
                        
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex pt-1 space-x-4">
                                <Link
                                    href={'/all-campaign'}
                                >
                                    <p className="rounded-md ml-8 mt-4 px-3 py-2 text-xl text-gray-700 hover:bg-teal-500 hover:text-white font-medium transition delay-100 duration-200 ease-in-out ">Explore Campaigns</p>
                                </Link>
                                <Link
                                    href={'/how-it-works'}
                                >
                                    <p className="rounded-md mt-4 py-2 px-3 text-xl text-gray-700  hover:bg-teal-500 hover:text-white font-medium transition delay-100 duration-200 ease-in-out ">How it Works</p>
                                </Link>
                                <Link
                                    href={'/contact-us'}
                                >
                                    <p className="rounded-md mt-4 py-2 px-3 text-xl text-gray-700  hover:bg-teal-500 hover:text-white transition delay-100 duration-200 ease-in-out ">Contact Us</p>
                                </Link>
                                {account && (
                                    <Link
                                        href={`/dashboard/${account?.address}`}
                                    >
                                        <p className="rounded-md px-3 mt-4 py-2 text-xl font-medium  hover:bg-teal-500 hover:text-white text-gray-700 transition delay-100 duration-200 ease-in-out">Dashboard</p>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <ConnectButton
                            client={client}
                            chain={polygonAmoy}
                            theme={lightTheme()}
                            detailsButton={{
                                style: {
                                    maxHeight: "50px",
                                    
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;
