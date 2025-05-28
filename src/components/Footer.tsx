import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 px-6 md:px-16 py-10 border-t">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Logo and Contact */}
        <div className="flex-1">
          <Image src="/Assets/logo1.png"  width={88} height={88} 
          alt="Crowdwave Logo" className="mb-4" />
          <p className="text-3xl font-semibold">Dapp Raiser</p>

          <div className="mt-4 space-y-1 text-sm">
            <p>
              <span className="font-semibold">General Enquiry:</span>{" "}
              <a href="" className="text-teal-500 font-semibold">
                +91 99999 99999
              </a>
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a href="" className="text-black font-semibold">
                admin@dappraiser.com
              </a>
            </p>
          </div>
        </div>

        {/* Fundraise */}
        <div className="flex-1 pt-6">
          <h4 className="font-bold mb-2 text-xl ">FUNDRAISE</h4>
          <ul className="space-y-1 text-md">
            <Link href={"/all-campaign"}>
              <li>Browse Fundraisers</li>
            </Link>
            <Link href={"/create-campaign"}><li>Start a Fundraiser</li></Link>
            <li>Support an NGO</li>
            <li>Donate in Kind</li>
            <li>General Donation</li>
          </ul>
        </div>

        {/* About */}
        <div className="flex-1 pt-6">
          <h4 className="font-bold text-xl mb-2">ABOUT US</h4>
          <ul className="space-y-1 text-md">
            <Link href={"/our-story"}>
              <li>Our Story</li>
            </Link>
            <Link href={"/how-it-works"}>
              <li>How It Works</li>
            </Link>
            <li>FAQs</li>
            <li>CSR Support</li>
            <Link href={"/contact-us"}>
                <li>Contact Us</li>
            </Link>
          </ul>
        </div>

        {/* WhatsApp and Socials */}
        <div className="flex-1 pt-6">
          <h4 className="font-bold mb-3">Reach out to us</h4>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full"
          >
            <FaWhatsapp /> Chat via WhatsApp
          </a>
          <p className="text-sm mt-2 text-gray-600">Monday - Saturday<br />9 am - 6 pm</p>

          <div className="mt-4">
            <p className="text-sm mb-2">FOLLOW US ON</p>
            <div className="flex gap-4 text-xl">
              <a href="#" className="text-black"><FaFacebookF /></a>
              <a href="#" className="text-black"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-sm text-gray-600 border-t pt-4">
        <p>
          Dapp raiser is an engaging, transparent and cost-effective crowdfunding platform that aims to spread awareness and raise funds for various social causes.
        </p>
        <p className="mt-2">
          We provide prospective donors with a 100% secure payment gateway and all the information they need about each campaign we run, enabling them to make informed decisions on where they would like to donate.
        </p>
        <p className="mt-2">
          With our social media and email promotion tools, we hope to reach out and inspire more people to #joinourwave and make the world a better place.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
