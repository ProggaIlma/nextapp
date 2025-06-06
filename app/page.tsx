"use client";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Fametonic</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Top Banner */}
      <div className="bg-gradient-to-r from-pinkhomebar to-homebar text-white text-[16px] lg:text-[22px] text-center py-2 
      font-semibold px-4 z-[1100] relative">
        <span className="text-homebar">🚀 FRESH BEGINNINGS SALE: </span>
        <span>Extra 25% OFF, Limited Spots</span> – start your journey today!
      </div>

      {/* Main Section */}
      <main className="px-4 sm:px-6 md:px-8 lg:px-30">
        {/* Header */}
        <header className="w-full flex items-center lg:justify-between pt-4 px-4 sm:px-6 md:px-3 lg:px-30 z-[1100] relative">
          <Link href="/" className=" items-center w-full flex justify-center lg:max-w-fit">
            <img src="/images/fametonic.svg" alt="Fametonic Logo" className="h-[74px] w-[173px]" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-6 text-lg font-medium">
            <a href="#about" className="text-[#a9a9a9]">
              About Us
            </a>
            <a href="#contact" className=" text-[#a9a9a9]">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden focus:outline-none" aria-label="Toggle Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          {/* Mobile Dropdown */}
          {menuOpen && (
            <div className="absolute top-full right-0  bg-black border-t border-gray-800 px-4 py-2 lg:hidden">
              <a href="#about" className="block py-2 text-sm  text-[#a9a9a9]">
                About Us
              </a>
              <a href="#contact" className="block py-2 text-sm  text-[#a9a9a9]">
                Contact
              </a>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative md:px-3 lg:px-30 lg:pb-[460px]">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-last lg:order-first mt-[310px]  lg:mt-16  z-[1100]">
            <h1 className="text-2xl lg:text-4xl font-bold leading-snug lg:leading-tight">Want to Turn Social Media Into a Profitable Career?</h1>

            <h2 className="text-homebar text-2xl lg:text-4xl font-semibold mt-4 " style={{ textShadow: "0px 4px 4px rgba(252, 0, 78, 1)" }}>Discover your way to success with Fametonic:</h2>

            <ul className="text-left mt-6 space-y-2 text-sm sm:text-base">
              <li>
                <span className="inline-block w-[22px] h-[22px] mr-2">✨</span>
                Start growing your influence right away — no waiting required!
              </li>
              <li>
                <span className="inline-block w-[22px] h-[22px] mr-2">✨</span>
                Create viral TikToks and Reels step by step with easy-to-follow lessons
              </li>
              <li>
                <span className="inline-block w-[22px] h-[22px] mr-2">✨</span>
                Use a Personal AI Worker to boost your content
              </li>
              <li>
                <span className="inline-block w-[22px] h-[22px] mr-2">✨</span>
                Learn from expert-led courses designed for aspiring influencers
              </li>
            </ul>

            <div className="flex flex-col mt-6 lg:w-fit gap-5 lg:gap-2">
              <div className="order-last lg:order-first w-full lg:w-[fit-content] mb-10 lg:mb-0">
                <button className="flex items-center justify-center gap-x-2 bg-pinkhomebar hover:bg-pinkhomebar text-white py-2 px-18 shadow-[2px_2px_10px_rgba(0,231,249,1)] rounded-[10px] font-bold text-xl w-full lg:w-auto">
                  GET STARTED
                  <img src="/images/arrow.svg" alt="Arrow" className="w-5 h-5" />
                </button>

                <p className="text-xs mt-2 text-center">1-minute quiz for personalized insights</p>
              </div>

              <p className="text-xs mt-2 text-grayCustom">By clicking &quot;Get Started&quot;, you agree with Terms and Conditions, Privacy Policy, Subscription Term.</p>
              <p className="text-[10px] mt-1 text-grayCustom">Fametonic 2025. All Rights Reserved.</p>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end absolute z-[1000]  top-[-50px] lg:top-[0px] xl:top-[-170px] lg:right-[100px] xl:right-[100px]">
            <img src="/images/phone-mockup.png" alt="Phone UI" className="w-auto h-[426px] lg:max-w-full lg:h-auto" />
          </div>
        </div>
      </main>
    </div>
  );
}
