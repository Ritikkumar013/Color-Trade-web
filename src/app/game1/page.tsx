"use client";
import React from "react";
import Image from "next/image";
import Carousal from "@/Components/Carousal";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const back = () => {
    router.push("/");
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
    <div className="min-h-[100vh] bg-green-100">
      {/* Section 1 */}
      <div className="bg-green-500 rounded-b-[55px] min-h-[48vh] p-2">
        <Image
          onClick={back}
          className="absolute left-4 top-4 w-5 h-5"
          src="/leftArrow.png"
          alt=""
          width={100}
          height={100}
        />

        <div className="flex justify-center">
          <Image
            className=" w-24 h-10"
            src="/headerlogo.png"
            alt=""
            width={100}
            height={100}
          />
        </div>

        <div className="bg-[url('/walletbg.png')] bg-center bg-cover bg-white mx-5 rounded-2xl p-4 my-3">
          <div className="flex justify-center gap-2 items-center">
            <h1 className="text-2xl font-bold">
              {loading ? "loading..." : `₹ ${balance?.toFixed(2)}`}
            </h1>
            <Image
              onClick={() => window.location.reload()}
              className="w-4 h-4"
              src="/refresh.png"
              width={100}
              height={100}
              alt=""
            />
          </div>

          <div className="flex justify-center gap-2 items-center">
            <Image
              className="w-5 h-5"
              src="/wallet.png"
              width={100}
              height={100}
              alt=""
            />
            <h1 className="text-md font-sm ">Wallet Balance</h1>
          </div>
          <div className="flex justify-between mt-10">
            <button className="bg-green-600 p-2 px-16 rounded-3xl text-white text-lg font-semibold">
              Deposit
            </button>
            <button className="bg-green-600 p-2 px-16 rounded-3xl text-white text-lg font-semibold">
              Withdraw
            </button>
          </div>
        </div>

        {/* Marquee section */}
        <div className="bg-white mx-5 rounded-full my-4 py-1 flex justify-between items-center p-2">
          <h1 className="text-2xl">⭐</h1>
          <div className="overflow-hidden">
            <div className="whitespace-nowrap animate-marquee py-2">
              <h1 className="font-sm">
                Your satisfaction is our top priority. Play at your own risk.
              </h1>
            </div>{" "}
          </div>
          <button className="p-1 px-4 text-sm bg-red-500 text-white rounded-full font-semibold ">
            Details
          </button>
        </div>
      </div>
      <div className="bg-white rounded-2xl -mt-9 mx-3">
        <Carousal />
      </div>
    </div>
  );
};

export default Page;
