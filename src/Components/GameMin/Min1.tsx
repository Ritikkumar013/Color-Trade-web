"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Min1 = () => {
  const [timer, setTimer] = useState(60);

  // Simulate countdown timer
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const colors = ["Green", "Violet", "Red"];
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {/* Timer and Info */}
      <div className="flex justify-between items-center px-3 py-1 bg-gradient-to-b from-green-600 bg-green-400 rounded-lg ">
        <div>
          <div className="flex items-center space-x-1 border border-white rounded-3xl px-3 p-1">
            <Image src="/howtoplay.png" alt="Help" width={20} height={20} />
            <button className="text-sm text-white font-medium">
              How to play
            </button>
          </div>
          <h1 className="font-bold text-white text-center my-1">
            Win Go 1 Min
          </h1>
        </div>

        {/* Timer Section */}
        <div className="flex flex-col items-center gap-y-1">
          <h1 className="text-md text-white font-semibold">Time Remaining</h1>
          <div className="flex items-center space-x-1">
            {`00:${timer.toString().padStart(2, "0")}`
              .split("")
              .map((char, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center h-8 w-7 bg-white text-green-600 font-semibold text-lg rounded-md ${
                    char === ":" ? "bg-transparent text-black text-xl" : ""
                  }`}
                >
                  {char}
                </div>
              ))}
          </div>
          <span className="text-sm text-white">20250103892</span>
        </div>
      </div>

      {/* Color Selection */}
      <div className="flex justify-around my-4">
        {colors.map((color) => (
          <button
            key={color}
            className={`text-lg px-10 py-2 rounded-tr-2xl rounded-bl-2xl ${
              color === "Green"
                ? "bg-green-600"
                : color === "Violet"
                ? "bg-purple-500"
                : "bg-red-500"
            } text-white`}
          >
            {color}
          </button>
        ))}
      </div>


      {/* Number Grid */}
      <div className="grid grid-cols-5 gap-4">
        {numbers.map((number, index) => (
          <button
            key={index}
            className="flex items-center justify-center h-16 w-16 rounded-full overflow-hidden"
          >
            <Image
            width={500}
            height={500}
              src={`/No_images/${number}.png`} // Replace with your actual image mapping logic
              alt={`Image for number ${number}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap justify-between space-y-1 my-4">
        <button className="px-14 rounded-lg border-2 border-green-500 text-red-500">
          Random
        </button>
        <div className="flex space-x-2">
          {[3, 5, 10, 20, 50].map((multiplier) => (
            <button
              key={multiplier}
              className="p-2 hover:bg-green-500 hover:text-white bg-gray-200 rounded-lg text-gray-700"
            >
              x{multiplier}
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-center w-full">
        <button className="py-3 w-full bg-orange-500 text-white rounded-r-none rounded-3xl">
          Big
        </button>
        <button className=" py-3 w-full bg-blue-500 text-white rounded-l-none rounded-3xl">
          Small
        </button>
      </div>
    </>
  );
};

export default Min1;
