"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRupeeSign, FaLock } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";

const Page = () => {
  const [amount, setAmount] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const [selectedBank, setSelectedBank] = useState(""); // Store selected bank
 const [balance, setBalance] = useState<number | null>(null);

  const handleWithdraw = async () => {
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      alert("Please enter a valid withdrawal amount.");
      return;
    }
    if (!password) {
      alert("Please enter your password.");
      return;
    }
    if (!selectedBank) {
      alert("Please select a bank.");
      return;
    }

    setLoading(true);

    try {
      const token= localStorage.getItem("token");
      if (!token) {
        alert("Unauthorized: No token found. Please log in again.");
        setLoading(false);
        return;
      }

      const response = await fetch(
        "http://20.235.246.99:4500/api/wallet/withdraw",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
          body: JSON.stringify({
            amount: Number(amount),
            password,
            bank: selectedBank,
          }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert(`Withdrawal successful: ₹${amount}`);
        setAmount("");
        setPassword("");
        setSelectedBank("");
      } else {
        alert(`Withdrawal failed: ${result.message || "Try again later"}`);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(`Error processing withdrawal: ${error.message}`);
      } else {
        alert("Error processing withdrawal. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

 useEffect(() => {
  const API_URL = "http://20.235.246.99:4500/api/wallet/balance";
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

  
  return (
    <div className="min-h-screen">
      {/* Header section */}
      <div className="bg-white flex justify-between py-3 items-center px-3 shadow-md">
        <Link href="/wallet">
          <Image src="/left-arrow.png" width={20} height={20} alt="Back" />
        </Link>
        <h1 className="text-xl font-semibold">Withdraw</h1>
        <div></div>
      </div>

      {/* Background Section */}
      <div className="bg-green-50 min-h-screen">
        {/* Banner Section */}
        <div className="p-5 bg-[url('/bannerbg.png')] bg-cover mx-4 rounded-xl shadow-md">
          <div className="flex items-center gap-2">
            <Image src="/walet.png" width={24} height={24} alt="Wallet" />
            <h1 className="text-white text-xl">Balance</h1>
          </div>
          <div className="flex items-center gap-3 mb-16">
            <h1 className="text-white text-3xl font-bold">{loading ? "Loading..." : `₹ ${balance?.toFixed(2)}`}</h1>
            <Image onClick={()=>window.location.reload()} src="/refresh.png" width={20} height={20} alt="Refresh" />
          </div>
        </div>

        {/* Bank Selection */}
        <div className="relative mx-4 my-5">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-white text-lg font-semibold text-black w-full py-2 rounded-lg border shadow-md flex justify-between items-center px-4"
          >
            {selectedBank || "Select Bank Details"}
            <span
              className={`text-gray-500 transform ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              &#9662;
            </span>
          </button>

          {isOpen && (
            <div className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <ul className="py-2">
                {["State Bank of India", "Punjab Bank of India"].map((bank) => (
                  <li
                    key={bank}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelectedBank(bank);
                      setIsOpen(false);
                    }}
                  >
                    {bank}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Withdrawal Form */}
        <div className="bg-white shadow-md rounded-lg p-4 mx-4 mt-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Image
              src="/deposita.png"
              width={24}
              height={24}
              alt="Withdraw Icon"
            />
            Withdrawal Form
          </h2>

          {/* Amount Input */}
          <div className="flex items-center bg-gray-100 rounded-md p-3 mt-3">
            <FaRupeeSign className="text-green-600 mr-2" />
            <input
              type="number"
              placeholder="Enter withdrawal amount"
              className="bg-transparent w-full outline-none text-gray-700"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            {amount && (
              <IoCloseCircleOutline
                className="text-gray-500 cursor-pointer"
                onClick={() => setAmount("")}
              />
            )}
          </div>

          {/* Password Input */}
          <div className="flex items-center bg-gray-100 rounded-md p-3 mt-3">
            <FaLock className="text-green-600 mr-2" />
            <input
              type="password"
              placeholder="Enter login password"
              className="bg-transparent w-full outline-none text-gray-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Withdrawal Button */}
          <button
            className="mt-4 w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 rounded-full hover:opacity-90 transition"
            onClick={handleWithdraw}
            disabled={loading}
          >
            {loading ? "Processing..." : "Withdraw"}
          </button>
        </div>

        {/* Withdrawal Instruction */}
        <div className="bg-white rounded-xl mx-4 pb-6 my-4">
          <div className="flex items-center p-3 gap-3">
            <Image
              className="w-7 h-7"
              src="/selectr.png"
              width={500}
              height={500}
              alt="Instructions"
            />
            <h1 className="text-lg font-semibold">Withdrawal Instruction</h1>
          </div>
          <div className="border-2 p-4 mx-2 rounded-xl">
            <ul className="text-gray-400 text-sm font-semibold space-y-1">
              <li>Need to bet 0.00 to be able to withdraw.</li>
              <li>Always pay on an active QR code or UPI ID.</li>
              <li>Contact support if you are facing any issues.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
