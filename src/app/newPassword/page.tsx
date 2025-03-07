// "use client";
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation"; // Import useRouter
// import Image from "next/image";
// import { useSearchParams } from "next/navigation"; // Import useSearchParams

// const ResetPasswordScreen = () => {
//   const router = useRouter(); // Initialize router
//   const searchParams = useSearchParams(); // Access query params
//   const number = searchParams.get("number"); // Get number from query params

//   const [otp, setOtp] = useState(""); // Empty OTP field
//   const [newPassword, setNewPassword] = useState(""); // Empty new password field
//   const [confirmPassword, setConfirmPassword] = useState(""); // Empty confirm password field
//   const [errorMessage, setErrorMessage] = useState(""); // Error message

//   // Handle OTP input change
//   const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setOtp(e.target.value);
//   };

//   // Handle new password input change
//   const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setNewPassword(e.target.value);
//   };

//   // Handle confirm password input change
//   const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setConfirmPassword(e.target.value);
//   };

//   // Handle form submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!otp || !newPassword || !confirmPassword || !number) {
//       setErrorMessage("Please fill all the fields.");
//       return;
//     }

//     if (newPassword !== confirmPassword) {
//       setErrorMessage("Passwords do not match.");
//       return;
//     }

//     try {
//       const response = await fetch("http://20.235.246.99:4500/api/auth/update-password", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           number: number, // Send the mobile number
//           otp: otp, // Send the OTP
//           newPassword: newPassword, // Send the new password
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Something went wrong");
//       }

//       // Handle successful reset
//     //   alert("Password reset successful!"); // Show success message or redirect
//      router.push('/login');
//     } catch (error: unknown) {
//       if (error instanceof Error) {
//         setErrorMessage(error.message);
//       } else {
//         setErrorMessage("An unknown error occurred.");
//       }
//     }
//   }

//   useEffect(() => {
//     if (!number) {
//       // If number is not available in the query, redirect to the previous page
//       router.push("/continue");
//     }
//   }, [number, router]);

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
//         <h1 className="text-xl font-semibold text-white">Reset Password</h1>
//         <p className="text-white text-sm font-light mt-2">
//           Enter the OTP sent to your mobile number, then set a new password.
//         </p>
//       </div>

//       {/* Input Section */}
//       <div className="p-5">
//         <form className="py-5" onSubmit={handleSubmit}>
//           <div className="mb-5">
//             <label className="block text-gray-700 font-semibold mb-2">Mobile Number</label>
//             <input
//               className="w-full bg-gray-200 text-black p-2 rounded-md"
//               type="text"
//               placeholder="Mobile number"
//               value={number || ""}
//               disabled // Disable the input as it's pre-filled from query params
//             />
//           </div>

//           <div className="mb-5">
//             <label className="block text-gray-700 font-semibold mb-2">Verify OTP</label>
//             <input
//               className="w-full bg-gray-200 text-black p-2 rounded-md"
//               type="text"
//               placeholder="Enter OTP"
//               value={otp} // OTP field should remain empty
//               onChange={handleOtpChange} // Allow the user to input OTP
//               required
//             />
//           </div>

//           <div className="mb-5">
//             <label className="block text-gray-700 font-semibold mb-2">New Password</label>
//             <input
//               className="w-full bg-gray-200 text-black p-2 rounded-md"
//               type="password"
//               placeholder="Enter new password"
//               value={newPassword} // New password field should remain empty
//               onChange={handleNewPasswordChange} // Allow the user to input new password
//               required
//             />
//           </div>

//           <div className="mb-5">
//             <label className="block text-gray-700 font-semibold mb-2">Confirm New Password</label>
//             <input
//               className="w-full bg-gray-200 text-black p-2 rounded-md"
//               type="password"
//               placeholder="Confirm new password"
//               value={confirmPassword} // Confirm password field should remain empty
//               onChange={handleConfirmPasswordChange} // Allow the user to input confirm password
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
//               Set New Password
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ResetPasswordScreen;
"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const ResetPasswordScreen = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordContent />
    </Suspense>
  );
};

const ResetPasswordContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const number = searchParams.get("number");

  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!number) {
      router.push("/continue");
    }
  }, [number, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp || !newPassword || !confirmPassword || !number) {
      setErrorMessage("Please fill all the fields.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    try {
      const response = await fetch("http://20.235.246.99:4500/api/auth/update-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          number: number,
          otp: otp,
          newPassword: newPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      router.push("/login");
    } catch (error: unknown) {
      setErrorMessage(error instanceof Error ? error.message : "An unknown error occurred.");
    }
  };

  return (
    <div className="min-h-[100vh]">
      <div className="bg-[#1ab266] px-5 pt-2 pb-6">
        <div className="relative">
          <Image className="w-36 mx-auto mb-6" src="/headerlogo.png" width={320} height={120} alt="logo" />
        </div>
        <h1 className="text-xl font-semibold text-white">Reset Password</h1>
        <p className="text-white text-sm font-light mt-2">
          Enter the OTP sent to your mobile number, then set a new password.
        </p>
      </div>
      <div className="p-5">
        <form className="py-5" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block text-gray-700 font-semibold mb-2">Mobile Number</label>
            <input className="w-full bg-gray-200 text-black p-2 rounded-md" type="text" value={number || ""} disabled />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 font-semibold mb-2">Verify OTP</label>
            <input className="w-full bg-gray-200 text-black p-2 rounded-md" type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} required />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 font-semibold mb-2">New Password</label>
            <input className="w-full bg-gray-200 text-black p-2 rounded-md" type="password" placeholder="Enter new password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 font-semibold mb-2">Confirm New Password</label>
            <input className="w-full bg-gray-200 text-black p-2 rounded-md" type="password" placeholder="Confirm new password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>
          {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
          <div className="flex flex-col items-center gap-4">
            <button type="submit" className="bg-green-500 text-white p-2 w-96 rounded-full">
              Set New Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordScreen;
