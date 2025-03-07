// "use client";
// import React, { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";
// import { toast, ToastContainer } from "react-toastify"; // Import Toastify

// // Don't forget to import the Toastify CSS globally in your _app.tsx or the main entry file
// import 'react-toastify/dist/ReactToastify.css'; 

// export default function Page() {
//   const searchParams = useSearchParams();
//   const phone = searchParams.get("phone");

//   const [otp, setOtp] = useState(["", "", "", ""]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
//     const value = e.target.value;
//     if (/^[0-9]$/.test(value) || value === "") {
//       const newOtp = [...otp];
//       newOtp[index] = value;
//       setOtp(newOtp);

//       if (value && index < 5) {
//         const nextInput = document.getElementById(`otp-input-${index + 1}`) as HTMLInputElement;
//         nextInput?.focus();
//       }
//     }
//   };

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
//     if (e.key === "Backspace" && otp[index] === "") {
//       if (index > 0) {
//         const prevInput = document.getElementById(`otp-input-${index - 1}`) as HTMLInputElement;
//         prevInput?.focus();
//       }
//     }
//   };

//   const handleSubmit = async () => {
//     const otpValue = otp.join("");

//     if (otpValue.length < 4) {
//       setError("Please enter a valid 4-digit OTP.");
//       return;
//     }

//     if (!phone) {
//       setError("Phone number is missing.");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch("http://20.235.246.99:4500/api/auth/verifyOtp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           number: phone,
//           otp: otpValue,
//         }),
//       });

//       if (response.ok) {
//         const data = await response.json();

//         if (data.status === "success" && data.data.number.value === phone && data.data.number.verified) {
//           // Show success message using Toastify
//           toast.success("OTP Verified Successfully!", {
//             position: "top-center",
//             autoClose: 5000, // Auto close after 5 seconds
//             hideProgressBar: true,
//           });

//           // Redirect to the login page after a short delay
//           setTimeout(() => {
//             window.location.href = "/login";
//           }, 2000); // 2 seconds delay before redirecting
//         } else {
//           setError("OTP verification failed. Please try again.");
//         }
//       } else {
//         setError("There was an error verifying the OTP. Please try again.");
//       }
//     } catch (error: unknown) {
//       if (error instanceof Error) {
//         setError(error.message);
//       } else {
//         setError("Network error. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   }    

//   const handleBackButtonClick = () => {
//     window.history.back();
//   };

//   useEffect(() => {
//     if (!phone) {
//       window.location.href = "/register";
//     }
//   }, [phone]);

//   return (
//     <div className="min-h-[100vh]">
//       <div className="flex-1">
//         <div className="bg-[#1ab266] px-5 pt-2 pb-6">
//           <div className="relative">
//             <Image
//               className="w-36 mx-auto mb-6"
//               src="/headerlogo.png"
//               width={320}
//               height={120}
//               alt=""
//             />
//             <button
//               onClick={handleBackButtonClick}
//               className="absolute left-0 top-[15px]"
//             >
//               <Image
//                 src="/back-white.png"
//                 alt="back-button"
//                 width={100}
//                 height={100}
//                 className="w-5"
//               />
//             </button>
//           </div>
//           <h1 className="text-xl font-semibold text-white">Verify OTP</h1>
//           <p className="text-white text-sm font-light mt-2">
//             Enter your OTP received on the registered Mobile Number for verification
//           </p>
//         </div>
//       </div>

//       <div className="p-5">
//         <div className="flex flex-col items-center bg-white pb-4 border-b-2 border-[#1ab266] mb-8">
//           <Image
//             className="w-6"
//             src="/cellphone.png"
//             width={432}
//             height={578}
//             alt=""
//           />
//           <h1 className="text-center text-[#1ab266] text-lg font-semibold">
//             Verify your OTP!
//           </h1>
//         </div>

//         {phone && (
//           <div className="flex flex-col items-center mb-7">
//             <p className="text-gray-500 font-medium">OTP sent to:</p>
//             <p className="text-lg font-semibold">{phone}</p>
//           </div>
//         )}

//         <div className="flex flex-col items-center">
//           <div className="flex justify-center space-x-2 mb-7">
//             {otp.map((digit, index) => (
//               <input
//                 key={index}
//                 id={`otp-input-${index}`}
//                 type="text"
//                 value={digit}
//                 onChange={(e) => handleChange(e, index)}
//                 onKeyDown={(e) => handleKeyDown(e, index)}
//                 maxLength={1}
//                 className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1ab266]"
//                 inputMode="numeric"
//               />
//             ))}
//           </div>
//           {error && <p className="text-red-500 mb-4">{error}</p>}
//           <p className="font-semibold mb-5">
//             <Link href="" className="underline underline-offset-2">
//               Resend OTP
//             </Link>{" "}
//             in <span className="text-blue-500">02:59</span>
//           </p>
//           <button
//             onClick={handleSubmit}
//             className="bg-green-500 p-2 rounded-full px-16 text-white font-semibold"
//             disabled={loading}
//           >
//             {loading ? "Verifying..." : "Submit"}
//           </button>
//         </div>
//       </div>

//       {/* ToastContainer is required to display toast messages */}
//       <ToastContainer />
//     </div>
//   );
// }

"use client"; 
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

import Image from "next/image";
import { toast, ToastContainer } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css'; 

const OtpPageContent = () => {
  const searchParams = useSearchParams();
  const phone = searchParams.get("phone");

  const [otp, setOtp] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-input-${index + 1}`) as HTMLInputElement;
        nextInput?.focus();
      }
    }
  };

  const handleSubmit = async () => {
    const otpValue = otp.join("");

    if (otpValue.length < 4) {
      setError("Please enter a valid 4-digit OTP.");
      return;
    }

    if (!phone) {
      setError("Phone number is missing.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://20.235.246.99:4500/api/auth/verifyOtp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          number: phone,
          otp: otpValue,
        }),
      });

      if (response.ok) {
        const data = await response.json();

        if (data.status === "success" && data.data.number.value === phone && data.data.number.verified) {
          toast.success("OTP Verified Successfully!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
          });

          setTimeout(() => {
            window.location.href = "/login";
          }, 2000);
        } else {
          setError("OTP verification failed. Please try again.");
        }
      } else {
        setError("There was an error verifying the OTP. Please try again.");
      }
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!phone) {
      window.location.href = "/register";
    }
  }, [phone]);

  return (
    <div className="min-h-[100vh]">
      <div className="flex-1">
        <div className="bg-[#1ab266] px-5 pt-2 pb-6">
          <div className="relative">
            <Image className="w-36 mx-auto mb-6" src="/headerlogo.png" width={320} height={120} alt="" />
          </div>
          <h1 className="text-xl font-semibold text-white">Verify OTP</h1>
          <p className="text-white text-sm font-light mt-2">
            Enter your OTP received on the registered Mobile Number for verification
          </p>
        </div>
      </div>

      <div className="p-5">
        <div className="flex flex-col items-center bg-white pb-4 border-b-2 border-[#1ab266] mb-8">
          <Image className="w-6" src="/cellphone.png" width={432} height={578} alt="" />
          <h1 className="text-center text-[#1ab266] text-lg font-semibold">Verify your OTP!</h1>
        </div>

        {phone && (
          <div className="flex flex-col items-center mb-7">
            <p className="text-gray-500 font-medium">OTP sent to:</p>
            <p className="text-lg font-semibold">{phone}</p>
          </div>
        )}

        <div className="flex flex-col items-center">
          <div className="flex justify-center space-x-2 mb-7">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                maxLength={1}
                className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1ab266]"
                inputMode="numeric"
              />
            ))}
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            onClick={handleSubmit}
            className="bg-green-500 p-2 rounded-full px-16 text-white font-semibold"
            disabled={loading}
          >
            {loading ? "Verifying..." : "Submit"}
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OtpPageContent />
    </Suspense>
  );
}
