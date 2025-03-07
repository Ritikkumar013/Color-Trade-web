"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

function about() {
    
  const handleBackButtonClick = () => {
    window.history.back();
  };

  return (
    <div className="bg-green-50 flex-1 min-h-screen">
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
        <h1 className="text-xl font-semibold text-white text-center py-3">
          About Us
        </h1>
      </div>

      {/* Section 2 */}
      <div>
        <Image
          src="/about-us.png"
          alt="about-us.png"
          width={750}
          height={284}
        />
      </div>

      {/* Section 3 */}

      <div className="p-5 flex flex-col gap-5">
        <Link href="/privacy" className="bg-white flex justify-between items-center p-4 rounded-lg">
          <div className="flex items-center gap-3">
            <Image
              alt="inivitecode.png"
              src="/inivitecode.png"
              width={90}
              height={90}
              className="w-9"
            />
            <h3 className="font-semibold text-lg">Confidentiality Agreement</h3>
          </div>
          <Image
            className="w-7 h-7"
            src="/next.png"
            width={100}
            height={100}
            alt=""
          />
        </Link>
        <Link href="/riskagreement" className="bg-white flex justify-between items-center p-4 rounded-lg">
          <div className="flex items-center gap-3">
            <Image
              alt="inivitecode.png"
              src="/inviterule.png"
              width={90}
              height={90}
              className="w-9"
            />
            <h3 className="font-semibold text-lg">Risk Disclosure Agreement</h3>
          </div>
          <Image
            className="w-7 h-7"
            src="/next.png"
            width={100}
            height={100}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}

export default about;
