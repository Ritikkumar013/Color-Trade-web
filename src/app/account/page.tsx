"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Footer from "@/Components/CommonComponents/Footer";
import { useEffect } from "react";

const Account = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const[loading, setLoading]= useState(true)
  const [balance, setBalance] = useState<number | null>(null);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const router = useRouter();

  const logOut = () => {
    router.push("/LandingPage");
  };

  const API_URL = "http://20.235.246.99:4500/api/wallet/balance"; // Replace with actual balance API

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("Failed to fetch balance");
          setLoading(false);
          return;
        }

        const response = await fetch(API_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch balance");
        }

        const data = await response.json();
        setBalance(data.data.balance); // Assuming API response is { balance: 1000 }
      } catch (error) {
        console.error("Error fetching balance:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBalance();
  }, []);

  return (
    <div className="flex-1">
      {/* Section 1 */}
      <div className="bg-[#1ab266] rounded-b-[4rem] px-10 pt-8 pb-32">
        <div className="flex gap-3 items-center justify-center">
          <Image
            className="rounded-full"
            src="/avatar2.png"
            width={100}
            height={100}
            alt=""
          />
          <div className="text-white flex flex-col font-semibold items-start gap-1">
            <h1 className="uppercase text-2xl">MEMBERRITIK013</h1>
            <h1 className="bg-orange-200 rounded-full px-2 text-sm text-red-500">
              UID | 254872
            </h1>
            <h1 className="text-sm">Mobile : +91-6397731399</h1>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="px-5">
        <div className="bg-green-50 rounded-lg shadow-lg p-5 -mt-28 text-center">
          <p className="font-semibold">Total Balance</p>
          <div className="flex w-full gap-2 items-center justify-center">
         <p> {loading ? "Loading..." : `₹ ${balance?.toFixed(2)}`}</p>
            <Image
            onClick={() => window.location.reload()}
              className="w-4 h-4 my-3"
              src="/refresh.png"
              width={100}
              height={100}
              alt="Refresh Icon"
            />
          </div>
          <div className="flex items-center mt-5 font-semibold">
            <Link
              href="/wallet"
              className="flex basis-1/3 flex-col items-center"
            >
              <Image
                className="w-10"
                src="/wallet.png"
                width={100}
                height={100}
                alt="Wallet"
              />
              <h1 className="text-sm my-1">Wallet</h1>
            </Link>
            <Link href="/addMoney" className="flex flex-col basis-1/3 items-center">
              <Image
                className="w-10"
                src="/deposit.png"
                width={100}
                height={100}
                alt="Wallet Icon"
              />
              <h1 className="text-sm my-1">Deposit</h1>
            </Link>

            <Link href="/withMoney" className="flex flex-col items-center basis-1/3">
              <Image
                className="w-10"
                src="/withdrawal.png"
                width={100}
                height={100}
                alt="Withdrawal Icon"
              />
              <h1 className="text-sm my-1">Withdrawal</h1>
            </Link>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="bg-white container grid grid-cols-2 mt-5 gap-3 px-5">
        <Link
          href="/bethistory"
          className="flex basis-1/2 bg-green-100 p-3 items-center rounded-lg gap-2"
        >
          <Image
            className="w-9"
            src="/trnx.png"
            width={100}
            height={100}
            alt="Wallet Icon"
          />
          <div className="">
            <p className="text-lg leading-5">Bet</p>
            <p className="text-xs text-gray-500 font-medium">
              My Bet History
            </p>{" "}
          </div>
        </Link>
        <Link
          href="/transactionhistory"
          className="flex basis-1/2 bg-green-100 p-3 items-center rounded-lg gap-2"
        >
          <Image
            className="w-9"
            src="/trnsc.png"
            width={100}
            height={100}
            alt="Wallet Icon"
          />
          <div className="">
            <p className="text-lg leading-5">Transaction</p>
            <p className="text-xs text-gray-500 font-medium">
              My Transaction History
            </p>
          </div>
        </Link>
        <Link
          href="/deposithistory"
          className="flex basis-1/2 bg-green-100 p-3 items-center rounded-lg gap-2"
        >
          <Image
            className="w-9"
            src="/4-deposite.png"
            width={100}
            height={100}
            alt="Wallet Icon"
          />
          <div className="">
            <p className="text-lg">Deposit</p>
            <p className="text-xs text-gray-500 font-medium">
              My Deposit History
            </p>
          </div>
        </Link>
        <Link
          href="/withdrawalhistory"
          className="flex basis-1/2 bg-green-100 p-3 items-center rounded-lg gap-2"
        >
          <Image
            className="w-9"
            src="/withd.png"
            width={100}
            height={100}
            alt="Wallet Icon"
          />
          <div className="">
            <p className="text-lg leading-5">Withdraw</p>
            <p className="text-xs text-gray-500 font-medium">
              My Withdraw History
            </p>
          </div>
        </Link>
      </div>

      {/* Section 4 */}
      <div className="my-5  px-5">
        <div className="rounded-lg bg-green-50 p-3 ">
          <Link href="/profile" className="cursor-pointer">
            <div className="flex  px-2 py-3 justify-between">
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-3 items-center">
                  <Image
                    className="w-10"
                    src="/promote.png"
                    width={100}
                    height={100}
                    alt=""
                  />
                  <h1 className="font-semibold">My Profile</h1>
                </div>
                <Image
                  className="flex w-7 justify-end"
                  src="/next.png"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
            </div>
          </Link>
          <Link href="/changepassword" className="cursor-pointer">
            <div className="flex  px-2 py-3 justify-between">
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-3 items-center">
                  <Image
                    className="w-10"
                    src="/setting.png"
                    width={100}
                    height={100}
                    alt=""
                  />
                  <h1 className="font-semibold">Settings</h1>
                </div>
                <Image
                  className="flex w-7 justify-end"
                  src="/next.png"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
            </div>
          </Link>
          <Link href="/about" className="cursor-pointer">
            <div className="flex  px-2 py-3 justify-between">
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-3 items-center">
                  <Image
                    className="w-10"
                    src="/about.png"
                    width={100}
                    height={100}
                    alt=""
                  />
                  <h1 className="font-semibold">About Us</h1>
                </div>
                <Image
                  className="flex w-7 justify-end"
                  src="/next.png"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
            </div>
          </Link>
          <Link href="/support" className="cursor-pointer">
            <div className="flex  px-2 py-3 justify-between">
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-3 items-center">
                  <Image
                    className="w-10"
                    src="/ticket.png"
                    width={100}
                    height={100}
                    alt=""
                  />
                  <h1 className="font-semibold">Support</h1>
                </div>
                <Image
                  className="flex w-7 justify-end"
                  src="/next.png"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
            </div>
          </Link>
          <div onClick={openPopup} className="cursor-pointer">
            <div className="flex  px-2 py-3 justify-between">
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-3 items-center">
                  <Image
                    className="w-10"
                    src="/videos.png"
                    width={100}
                    height={100}
                    alt=""
                  />
                  <h1 className="font-semibold">Guide</h1>
                </div>
                <Image
                  className="flex w-7 justify-end"
                  src="/next.png"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* Popup */}
          {isPopupOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 rounded-lg">
              <div className="bg-white p-6 rounded-lg shadow-lg w-[440px] text-sm text-gray-500 font-[500] flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-4 text-black">Game Rule</h2>
                <p className="mb-4">1 minute 1 period, 50 seconds to order, 10 seconds waiting for the draw. It opens all day, the total number of purchases in a day is 1440 times.</p>
                <p className="mb-4">All the single bets will be have handling fee 2%.<br/>For example bet 100 Rs after deduct the fee the exact betting amount will be 98 Rs.</p>
                <h3 className="text-base font-bold mb-1 text-black">Odds:</h3>
                <ul className="mb-4">
                  <li>1. Select Green: if the result shows 1,3,7,9 the pay out is (98*2)=196 ; If the result shows 5, the pay out is (98*1.5) 147</li>
                  <li>2. Select Red: if the result shows 2,4,6,8 the pay out is (98*2)=196 ; If the result shows 0, the pay out is (98*1.5) 147</li>
                  <li>3. Select Violet: if the result shows 0 or 5, the pay out is (98*4.5)=441</li>
                  <li>4. Select Number: if the result is the same as the number you selected, the pay out is (98*9)=882</li>
                  <li>5. Select Big: if the result shows 5,6,7,8,9 the pay out is (98*2)=196</li>
                  <li>6. Select Small: if the result shows 0,1,2,3,4 the pay out is (98*2)=196</li>
                </ul>
                <h3 className="text-base font-bold mb-1 text-black">Game Rules:</h3>
                <ul className="mb-4">
                  <li>- It is not allowed to make 2-sided bets in 1 game period (For example: choosing green and red or big and small in the same period)</li>
                  <li>- To bet on numbers: the maximum total number that can be selected is 7 in 1 period (No more)</li>
                </ul>
                <button
                  onClick={closePopup}
                  className="bg-[#1ab266] text-white px-4 py-2 rounded-full mx-auto w-60"
                >
                  Close
                </button>
              </div>
            </div>
          )}
          <Link href="https://diuvin.com/app.apk" className="cursor-pointer">
            <div className="flex px-2 py-3 justify-between">
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-3 items-center">
                  <Image
                    className="w-10"
                    src="/app.png"
                    width={100}
                    height={100}
                    alt=""
                  />
                  <h1 className="font-semibold">App Download</h1>
                </div>
                <Image
                  className="flex w-7 justify-end"
                  src="/next.png"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
            </div>
          </Link>

          <Link href="/profile" className="cursor-pointer">
            <div className="flex px-2 py-3 justify-between">
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-3 items-center">
                  <Image
                    className="w-10"
                    src="/app.png"
                    width={100}
                    height={100}
                    alt=""
                  />
                  <h1 className="font-semibold">Join Telegram Channel!</h1>
                </div>
                <Image
                  className="flex w-7 justify-end"
                  src="/next.png"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Log Out section */}
      <div className="flex justify-center px-5">
        <button
          className="mb-24 rounded-full text-lg py-2 border border-[#1ab266] bg-[#1ab266] w-full font-semibold text-white"
          onClick={logOut}
        >
          Log Out
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Account;
