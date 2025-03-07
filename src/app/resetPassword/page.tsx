// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// const ContinueScreen = () => {
//   const [inputValue, setInputValue] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const router = useRouter();

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setInputValue(event.target.value);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Basic validation for mobile number format
//     if (!/^\d{10}$/.test(inputValue)) {
//       setErrorMessage("Please enter a valid 10-digit mobile number.");
//       return;
//     }

//     try {
//       const response = await fetch("http://20.235.246.99:4500/api/auth/forget-password", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ number: inputValue }), // Send mobile number as "number"
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Something went wrong");
//       }

//       // If API response is successful, navigate to new password screen
//       router.push("/newPassword");
//     } catch (error: any) {
//       setErrorMessage(error.message);
//     }
//   };

//   return (
//     <div className="min-h-[100vh]">
//       {/* Header Section */}
//       <div className="bg-[#1ab266] px-5 pt-2 pb-6">
//         <div className="relative">
//           <Image
//             className="w-36 mx-auto mb-6"
//             src="/headerlogo.png"
//             width={320}
//             height={120}
//             alt="logo"
//           />
//         </div>
//         <h1 className="text-xl font-semibold text-white">Enter your details</h1>
//         <p className="text-white text-sm font-light mt-2">
//           Enter your mobile number to continue
//         </p>
//       </div>

//       {/* Input Section */}
//       <div className="p-5">
//         <form className="py-5" onSubmit={handleSubmit}>
//           <div className="mb-5">
//             <label className="block text-gray-700 font-semibold mb-2">
//               Mobile Number
//             </label>
//             <input
//               className="w-full bg-gray-200 text-black p-2 rounded-md"
//               type="text"
//               placeholder="Enter mobile number"
//               value={inputValue}
//               onChange={handleInputChange}
//               required
//             />
//           </div>

//           {/* Error Message */}
//           {errorMessage && (
//             <p className="text-red-500 text-center">{errorMessage}</p>
//           )}

//           {/* Submit Button */}
//           <div className="flex flex-col items-center gap-4">
//             <button
//               type="submit"
//               className="bg-green-500 text-white p-2 w-96 rounded-full"
//             >
//               Continue
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContinueScreen;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ContinueScreen = () => {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation for mobile number format
    if (!/^\d{10}$/.test(inputValue)) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    try {
      const response = await fetch("http://20.235.246.99:4500/api/auth/forget-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ number: inputValue }), // Send mobile number as "number"
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      // Navigate to the ResetPasswordScreen with the mobile number as a query parameter
      router.push(`/newPassword?number=${inputValue}`);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unknown error occurred.");
      }
    }
  }    
  return (
    <div className="min-h-[100vh]">
      {/* Header Section */}
      <div className="bg-[#1ab266] px-5 pt-2 pb-6">
        <div className="relative">
          <Image
            className="w-36 mx-auto mb-6"
            src="/headerlogo.png"
            width={320}
            height={120}
            alt="logo"
          />
        </div>
        <h1 className="text-xl font-semibold text-white">Enter your details</h1>
        <p className="text-white text-sm font-light mt-2">
          Enter your mobile number to continue
        </p>
      </div>

      {/* Input Section */}
      <div className="p-5">
        <form className="py-5" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block text-gray-700 font-semibold mb-2">
              Mobile Number
            </label>
            <input
              className="w-full bg-gray-200 text-black p-2 rounded-md"
              type="text"
              placeholder="Enter mobile number"
              value={inputValue}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-500 text-center">{errorMessage}</p>
          )}

          {/* Submit Button */}
          <div className="flex flex-col items-center gap-4">
            <button
              type="submit"
              className="bg-green-500 text-white p-2 w-96 rounded-full"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContinueScreen;
