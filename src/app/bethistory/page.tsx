'use client';

import React from "react";
import Image from "next/image";


const bethistory = () => {
  const date = new Date();
  const currentDate = () => {
    const formattedDate = date.toLocaleString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true, // Optional: Use 12-hour format
    });
    return formattedDate;
  };

  const handleBackButtonClick = () => {
    window.history.back();
  };

  return (
    <div className="min-h-[100vh] bg-green-50 relative">
      {/* Section 1 */}

      <div className="bg-[#1ab266] px-5">
        <div className="relative">
          {/* Back button */}
          <button
            onClick={handleBackButtonClick} // When clicked, it goes back in history
            className="absolute left-0 top-[15px]"
          >
            <Image
              src="/back-white.png"
              alt="back-button"
              width={100}
              height={100}
              className="w-5"
            />
          </button>
        </div>
        <h1 className="text-xl font-semibold text-white text-center py-3">Bet History</h1>
      </div>

      <div className="px-5">
        <div className="flex justify-between p-4 bg-white my-4 rounded-xl">
          <div>
            <h1 className="text-lg font-bold">PAYTM</h1>
            <p className="text-sm">{currentDate()}</p>
          </div>
          <div>
            <h1 className="text-xl text-[#1ab266] font-bold">Profit</h1>
            <p className="text-md font-semibold">+ ₹ 100</p>
          </div>
        </div>

        <div className="flex justify-between p-4 bg-white my-4 rounded-xl">
          <div>
            <h1 className="text-lg font-bold">PAYTM</h1>
            <p className="text-sm">{currentDate()}</p>
          </div>
          <div>
            <h1 className="text-xl text-red-500 font-bold">Loss</h1>
            <p className="text-md font-semibold">- ₹ 100</p>
          </div>
        </div>

        <div className="flex justify-between p-4 bg-white my-4 rounded-xl">
          <div>
            <h1 className="text-lg font-bold">PAYTM</h1>
            <p className="text-sm">{currentDate()}</p>
          </div>
          <div>
            <h1 className="text-xl text-[#1ab266] font-bold">Profit</h1>
            <p className="text-md font-semibold">+ ₹ 452</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default bethistory;
