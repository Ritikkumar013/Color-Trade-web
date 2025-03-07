// "use client"; // Ensure this runs on the client side
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// const Page = () => {
//   const [amount, setAmount] = useState(""); // State to store selected amount

// try {

// } catch (error) {

// }

//   return (
//     <div className="min-h-[100vh]">
//       {/* Header section */}
//       <div className="bg-white flex justify-between py-3 items-center ml-3">
//         <Link href="/wallet">
//           <Image
//             className="w-5 h-5"
//             src="/left-arrow.png"
//             width={500}
//             height={500}
//             alt=""
//           />
//         </Link>
//         <h1 className="text-xl">Deposit</h1>
//         <div></div>
//       </div>

//       <div className="bg-green-50 min-h-[100vh]">
//         {/* Balance Section */}
//         <div className="p-5 bg-[url('/bannerbg.png')] bg-cover mx-4 rounded-xl">
//           <div className="flex items-center gap-2">
//             <Image className="w-6 h-6" src="/walet.png" width={500} height={500} alt="" />
//             <h1 className="text-white text-xl">Balance</h1>
//           </div>
//           <div className="flex items-center gap-3 mb-16">
//             <h1 className="text-white text-3xl font-bold">0.00</h1>
//             <Image className="w-5 h-5" src="/refresh.png" width={500} height={500} alt="" />
//           </div>
//         </div>

//         {/* Payment Method */}
//         <div className="bg-green-500 w-32 mx-4 rounded-xl flex justify-center py-5 my-5">
//           <Image className="w-12" src="/upi.png" width={500} height={500} alt="" />
//         </div>

//         {/* Deposit Amount Section */}
//         <div className="bg-white rounded-xl mx-4 pb-6 px-3 my-4">
//           <div className="flex items-center p-3 gap-3">
//             <Image className="w-7" src="/deposita.png" width={500} height={500} alt="" />
//             <h1 className="text-lg font-semibold">Deposit Amount</h1>
//           </div>

//           {/* Amount Buttons */}
//           <div className="grid grid-cols-3 gap-3 justify-center">
//             {["350", "1000", "2000", "5000", "10000", "25000", "40000", "75000", "100000"].map(
//               (value) => (
//                 <button
//                   key={value}
//                   className="border-2 border-green-500 p-2 rounded-xl flex justify-center w-32 text-xl text-green-600"
//                   onClick={() => setAmount(value)} // Set amount on click
//                 >
//                   ₹{value}
//                 </button>
//               )
//             )}
//           </div>

//           {/* Input Field */}
//           <div className="mx-4 mt-4">
//             <input
//               className="p-2 w-full bg-green-100 rounded-lg border-l-2 border-black"
//               placeholder="Enter or select recharge amount"
//               value={amount} // Bind input value to state
//               onChange={(e) => setAmount(e.target.value)} // Allow manual input
//             />
//             <button className="w-full bg-green-500 p-2 mt-5 text-white font-bold text-lg rounded-full">
//               Deposit
//             </button>
//           </div>
//         </div>

//         {/* Deposit Instruction */}
//         <div className="bg-white rounded-xl mx-4 pb-6 my-4">
//           <div className="flex items-center p-3 gap-3">
//             <Image className="w-7" src="/selectr.png" width={500} height={500} alt="" />
//             <h1 className="text-lg font-semibold">Deposit Instruction</h1>
//           </div>
//           <div className="border-2 p-4 mx-2 rounded-xl ">
//             <ul className="text-gray-400 text-sm font-semibold space-y-1">
//               <li>Don't Save Old Or Code or Upi ID From Recharge Page.</li>
//               <li>Always Pay on Active QR Code or UPI ID.</li>
//               <li>Contact support if you're facing any issues.</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const [amount, setAmount] = useState(""); // State to store selected amount
  const [loading, setLoading] = useState(false); // Loading state for button
  const [balance, setBalance] = useState<number | null>(null);

  const handleDeposit = async () => {
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      alert("Please enter a valid deposit amount.");
      return;
    }

    setLoading(true);

    try {
      const token = localStorage.getItem("token"); // Retrieve token from storage

      // const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YTVkODA1NGM4OWQ0ZmYzZGRiMjE3ZiIsIm5hbWUiOiJHYXVyYXYiLCJudW1iZXIiOiI3OTA2Mjg3NzAxIiwiaWF0IjoxNzM5ODU1Njg2LCJleHAiOjE3Mzk5NDIwODZ9.kpkO2wcE7Ak7VbPjrrbzneM5nW1cETPjqGdrabx2OWg";
      if (!token) {
        alert("Unauthorized: No token found. Please log in again.");
        setLoading(false);
        return;
      }

      const response = await fetch(
        "http://20.235.246.99:4500/api/wallet/deposit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Attach token dynamically
          },
          body: JSON.stringify({ amount: Number(amount) }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert(`Deposit successful: ₹${amount}`);
        // window.location.reload();
      } else {
        alert(`Deposit failed: ${result.message || "Try again later"}`);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(`Error processing deposit: ${error.message}`);
      } else {
        alert("Error processing deposit. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }     
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
    <div className="min-h-[100vh]">
      {/* Header section */}
      <div className="bg-white flex justify-between py-3 items-center ml-3">
        <Link href="/wallet">
          <Image
            className="w-5 h-5"
            src="/left-arrow.png"
            width={500}
            height={500}
            alt="Back"
          />
        </Link>
        <h1 className="text-xl">Deposit</h1>
        <div></div>
      </div>

      <div className="bg-green-50 min-h-[100vh]">
        {/* Balance Section */}
        <div className="p-5 bg-[url('/bannerbg.png')] bg-cover mx-4 rounded-xl">
          <div className="flex items-center gap-2">
            <Image
              className="w-6 h-6"
              src="/walet.png"
              width={500}
              height={500}
              alt="Wallet"
            />
            <h1 className="text-white text-xl">Balance</h1>
          </div>
          <div className="flex items-center gap-3 mb-16">
          <h1 className="text-white text-3xl font-bold">{loading? "loading..." : `₹ ${balance?.toFixed(2)}`}</h1>
            <Image
            onClick={()=>window.location.reload()}
              className="w-5 h-5"
              src="/refresh.png"
              width={500}
              height={500}
              alt="Refresh"
            />
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-green-500 w-32 mx-4 rounded-xl flex justify-center py-5 my-5">
          <Image
            className="w-12"
            src="/upi.png"
            width={500}
            height={500}
            alt="UPI"
          />
        </div>

        {/* Deposit Amount Section */}
        <div className="bg-white rounded-xl mx-4 pb-6 px-3 my-4">
          <div className="flex items-center p-3 gap-3">
            <Image
              className="w-7"
              src="/deposita.png"
              width={500}
              height={500}
              alt="Deposit Icon"
            />
            <h1 className="text-lg font-semibold">Deposit Amount</h1>
          </div>

          {/* Amount Buttons */}
          <div className="grid grid-cols-3 gap-3 justify-center">
            {[
              "350",
              "1000",
              "2000",
              "5000",
              "10000",
              "25000",
              "40000",
              "75000",
              "100000",
            ].map((value) => (
              <button
                key={value}
                className={`border-2 p-2 rounded-xl flex justify-center hover:bg-green-500 hover:text-white w-32 text-xl ${
                  amount === value
                    ? "bg-green-500 text-white"
                    : "border-green-500 text-green-600"
                }`}
                onClick={() => setAmount(value)} // Set amount on click
              >
                ₹{value}
              </button>
            ))}
          </div>

          {/* Input Field */}
          <div className="mx-4 mt-4">
            <input
              className="p-2 w-full bg-green-100 rounded-lg border-l-2 border-black"
              placeholder="Enter or select recharge amount"
              value={amount} // Bind input value to state
              onChange={(e) => setAmount(e.target.value)} // Allow manual input
              type="number"
            />
            <button
              className="w-full bg-green-500 p-2 mt-5 text-white font-bold text-lg rounded-full"
              onClick={handleDeposit}
              disabled={loading}
            >
              {loading ? "Processing..." : "Deposit"}
            </button>
          </div>
        </div>

        {/* Deposit Instruction */}
        <div className="bg-white rounded-xl mx-4 pb-6 my-4">
          <div className="flex items-center p-3 gap-3">
            <Image
              className="w-7"
              src="/selectr.png"
              width={500}
              height={500}
              alt="Instructions"
            />
            <h1 className="text-lg font-semibold">Deposit Instruction</h1>
          </div>
          <div className="border-2 p-4 mx-2 rounded-xl">
            <ul className="text-gray-400 text-sm font-semibold space-y-1">
              <li>Dont Save Old QR Code or UPI ID From Recharge Page.</li>
              <li>Always Pay on Active QR Code or UPI ID.</li>
              <li>Contact support if you are facing any issues.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
