"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface WinnerInfo {
  id: number;
  username: string;
  avatar: string;
  gameIcon: string;
  amount: number;
}

export default function WinningInfo() {
  const [winners, setWinners] = useState<WinnerInfo[]>([
    {
      id: 1,
      username: "Mem***HCU",
      avatar: "/avatar1.png",
      gameIcon: "/lottery.png",
      amount: 18628.0,
    },
    {
      id: 2,
      username: "Mem***VEI",
      avatar: "/avatar2.png",
      gameIcon: "/lottery.png",
      amount: 25215.0,
    },
    {
      id: 3,
      username: "Mem***QJA",
      avatar: "/avatar3.png",
      gameIcon: "/lottery.png",
      amount: 44239.0,
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate adding new winner data
      const newWinner: WinnerInfo = {
        id: Date.now(),
        username: `Mem***${Math.random()
          .toString(36)
          .substring(2, 5)
          .toUpperCase()}`,
        avatar: `/avatar${Math.ceil(Math.random() * 3)}.png`,
        // gameIcon: `/game-icon${Math.ceil(Math.random() * 3)}.jpg`,
        gameIcon: `/lottery.png`,
        amount: parseFloat((Math.random() * 10000).toFixed(2)),
      };

      setWinners((prevWinners) => [newWinner, ...prevWinners.slice(0, 9)]); // Add to top and limit to 10 items
    }, 5000); // Add a new winner every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="rounded-lg">
      <h1 className="text-lg font-semibold mb-4 border-l-4 pl-2 border-[#1ab266]">
        Winning Information
      </h1>
      <div className="flex gap-3 flex-col">
        {winners.map((winner) => (
          <div
            key={winner.id}
            className="flex items-center bg-white p-3  gap-5 rounded-lg shadow"
          >
            <div className="basis-2/12">
              <Image
              width={500}
              height={500}
                src={winner.avatar}
                alt="Avatar"
                className="w-12 h-12 rounded"
              />
            </div>
            <div className="basis-4/12">
              <p className="font-semibold">{winner.username}</p>
            </div>
            <div className="basis-2/12 rounded-lg">
              <Image
              width={500}
              height={500}
                src={winner.gameIcon}
                alt="Game Icon"
                className="w-16 rounded-lg"
              />
            </div>
            <div className="basis-4/12 text-right">
              <p className="text-green-600 font-bold">
                ₹{winner.amount.toLocaleString()}
              </p>
              <p className="text-sm text-gray-800 font-semibold">Winning amount</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
