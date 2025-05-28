'use client';
import { useState } from "react";
import { client } from "@/app/client";
import Link from "next/link";
import { ConnectButton, lightTheme, useActiveAccount } from "thirdweb/react";
import { polygonAmoy } from "thirdweb/chains";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const account = useActiveAccount();

  return (
    <nav className="border-b-2 bg-white shadow-lg py-4 px-4 sticky top-0 z-50 border-b-slate-200">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Logo and desktop nav links */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="-ml-8 flex items-center space-x-2">
              <img
                src="/Assets/logo.png"
                alt="Logo"
                className="h-16 w-24 mt-4 -ml-32 -mr-4"
              />
              <Link href={"/"}>
                <span className="text-4xl -ml-3 font-bold cursor-pointer">
                  D&apos;app Raiser
                </span>
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden sm:ml-6 sm:flex sm:pt-1 space-x-4">
              <Link href={"/all-campaign"}>
                <p className="rounded-md ml-8 mt-4 px-3 py-2 text-xl text-gray-700 hover:bg-teal-500 hover:text-white font-medium transition delay-100 duration-200 ease-in-out cursor-pointer">
                  Explore Campaigns
                </p>
              </Link>
              <Link href={"/how-it-works"}>
                <p className="rounded-md mt-4 py-2 px-3 text-xl text-gray-700 hover:bg-teal-500 hover:text-white font-medium transition delay-100 duration-200 ease-in-out cursor-pointer">
                  How it Works
                </p>
              </Link>
              <Link href={"/contact-us"}>
                <p className="rounded-md mt-4 py-2 px-3 text-xl text-gray-700 hover:bg-teal-500 hover:text-white transition delay-100 duration-200 ease-in-out cursor-pointer">
                  Contact Us
                </p>
              </Link>
              {account && (
                <Link href={`/dashboard/${account?.address}`}>
                  <p className="rounded-md px-3 mt-4 py-2 text-xl font-medium hover:bg-teal-500 hover:text-white text-gray-700 transition delay-100 duration-200 ease-in-out cursor-pointer">
                    Dashboard
                  </p>
                </Link>
              )}
            </div>
          </div>

          {/* Connect Button */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <ConnectButton
              client={client}
              chain={polygonAmoy}
              theme={lightTheme()}
              detailsButton={{
                style: {
                  maxHeight: "50px",
                },
              }}
            />
          </div>
        </div>
      </div>

      {/* Mobile menu, shown when mobileMenuOpen is true */}
      {mobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link href={"/all-campaign"}>
              <p
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-teal-500 hover:text-white cursor-pointer"
              >
                Explore Campaigns
              </p>
            </Link>
            <Link href={"/how-it-works"}>
              <p
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-teal-500 hover:text-white cursor-pointer"
              >
                How it Works
              </p>
            </Link>
            <Link href={"/contact-us"}>
              <p
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-teal-500 hover:text-white cursor-pointer"
              >
                Contact Us
              </p>
            </Link>
            {account && (
              <Link href={`/dashboard/${account?.address}`}>
                <p
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-teal-500 hover:text-white cursor-pointer"
                >
                  Dashboard
                </p>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
