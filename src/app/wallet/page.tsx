'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "@/Components/CommonComponents/Footer";
import Link from "next/link";

const Wallet = () => {
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  const totalWalletLimit = 1000000; // ₹1,00,000

  const API_URL = "http://20.235.246.99:4500/api/wallet/balance"; // Replace with actual API

  useEffect(() => {

    const fetchBalance = async () => {
      const token = localStorage.getItem("token");
      try {
        
        if (!token) {
          alert("Failed to fetch balance: No Token Found");
          setLoading(false);
          return;
        }
    
        const response = await fetch(API_URL, {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
    
        if (!response.ok) {
          throw new Error("Failed to fetch balance");
        }
    
        const data = await response.json();
        console.log("Fetched API Response:", data); // Debugging log
        setBalance(data.data.balance); // Accessing balance correctly
      } catch (error) {
        console.error("Error fetching balance:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBalance();
  }, []);


  const handleBackButtonClick = () => {
    window.history.back();
  };

  // Calculate progress percentage safely
  const progressPercentage = balance !== null ? (balance / totalWalletLimit) * 100 : 0;
  const circleCircumference = 2 * Math.PI * 50;
  const strokeDashoffset = circleCircumference - (progressPercentage / 100) * circleCircumference;

  return (
    <div className="mb-10">
      {/* Wallet Section */}
      <div className="flex-1">
        <div className="bg-[#1ab266] px-5 pt-3 pb-6">
          <div className="relative flex flex-col gap-3 items-center text-white">
            <h1 className="text-2xl mb-3">Wallet</h1>
            <Image className="w-14 mx-auto" src="/wallets.png" width={160} height={160} alt="Wallet Icon" />

            {/* Display fetched balance or loading state */}
            <h1 className="text-2xl">{loading ? "Loading..." : `₹${balance?.toFixed(2)}`}</h1>

            <h1 className="text-sm font-semibold">Total Amount</h1>

            {/* Back button */}
            <button onClick={handleBackButtonClick} className="absolute left-0 top-[7px]">
              <Image src="/back-white.png" alt="back-button" width={100} height={100} className="w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Progress Bar Section */}
      <div className="px-5 flex flex-col text-center py-10 gap-8">
        <div className="flex flex-col justify-center items-center gap-2">
          {/* Circular Progress Bar */}
          <div className="relative flex justify-center items-center">
            <svg className="transform rotate-90" width="120" height="120" viewBox="0 0 120 120">
              {/* Background Circle */}
              <circle cx="60" cy="60" r="50" stroke="#e6e6e6" strokeWidth="10" fill="none" />
              {/* Foreground Circle for progress */}
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="#1ab266"
                strokeWidth="10"
                fill="none"
                strokeDasharray={circleCircumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
              />
            </svg>

            {/* Display Progress Percentage */}
            <div className="absolute text-center">
              <h1 className="text-2xl">{loading ? "..." : `${progressPercentage.toFixed(2)}%`}</h1>
            </div>
          </div>
          <h1 className="text-center font-semibold text-[#1ab266]">
            <span className="text-black">Current Amount:</span> ₹{loading ? "..." : balance?.toFixed(2)}
          </h1>
        </div>

        {/* Add to Wallet Button */}
        <div className="bg-[#1ab266] py-2 font-semibold text-white text-xl w-full rounded-3xl">
          ADD TO WALLET
        </div>

        {/* Wallet Actions */}
        <div className="flex justify-center py-5 font-semibold text-sm">
          <Link href='/addMoney' className="rounded-md basis-1/4 flex flex-col items-center gap-3">
            <Image className="w-12 p-2 rounded-lg shadow-lg" src="/deposit.png" width={100} height={100} alt="Wallet Icon" />
            <h1 className="">Add <br /> Money</h1>
          </Link>

          <Link href='/withMoney' className="rounded-md basis-1/4 flex flex-col items-center gap-3">
            <Image className="w-12 p-2 rounded-lg shadow-lg" src="/withdrawal.png" width={100} height={100} alt="Withdrawal Icon" />
            <h1 className="">Withdrawal Money</h1>
          </Link>

          <div className="rounded-md basis-1/4 flex flex-col items-center gap-3">
            <Link href="/deposithistory">
              <Image className="w-12 p-2 rounded-lg shadow-lg" src="/dep-history.png" width={100} height={100} alt="deposit history" />
            </Link>
            <h1 className="">Deposit <br/> History</h1>
          </div>

          <div className="rounded-md basis-1/4 flex flex-col items-center gap-3">
            <Link href="/withdrawalhistory">
              <Image className="w-12 p-2 rounded-lg shadow-lg" src="/withd-history.png" width={100} height={100} alt="Wallet Icon" />
            </Link>
            <h1 className="">Withdrawal History</h1>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Wallet;
