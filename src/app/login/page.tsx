"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Login = () => {
  const [passwordVis, setPasswordVis] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();

  const handleImageClick = () => {
    setPasswordVis(!passwordVis);
  };

  const handlePhoneNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Remove any non-numeric characters and limit to 10 digits
    const sanitizedValue = value.replace(/\D/g, "").slice(0, 10);
    setPhoneNumber(sanitizedValue);
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   // Prepare the payload
  //   const payload = {
  //     number: phoneNumber,
  //     password,
  //   };

  //   try {
  //     const response = await fetch("http://20.235.246.99:4500/api/auth/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(payload),
  //     });

  //     if (!response.ok) {
  //       const data = await response.json();
  //       setErrorMessage(data.message || "Something went wrong");
  //     } else {
  //       const data = await response.json();
  //       setSuccessMessage(data.message || "Login Successful");
  //       // router.push("/");
  //       window.location.href = "/"; // window.location.href = "/dashboard";
  //       // Optionally, you can redirect the user to a dashboard or home page after success
        
  //     }
      
  //   } catch (error) {
  //     setErrorMessage("Network error. Please try again later.");
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const payload = {
      number: phoneNumber,
      password,
    };
  
    try {
      const response = await fetch("http://20.235.246.99:4500/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      const data = await response.json();
  
      console.log("API Response:", data); // ✅ Log response for debugging
      console.log("✅ Storing Token:", data.data.token); 
  
      if (!response.ok) {
        setErrorMessage(data.message || "Something went wrong");
        return;
      }
  
      if (!data.data.token) {
        setErrorMessage("❌ Token not received from API!");
        return;
      }
  
      // ✅ Store token in localStorage (fixed space issue)
      console.log("✅ Storing Token:", data.token);
      console.log("✅ Storing Token:", data.data.token); 
      localStorage.setItem("token", data.data.token);
  console.log(successMessage)
      setSuccessMessage(data.message || "Login Successful");
  
      // ✅ Redirect user
      router.push("/"); // Update with your actual page
  
    } catch (error) {
      console.error("Network error:", error);
      setErrorMessage("Network error. Please try again later.");
    }
  };
  

  const handleBackButtonClick = () => {
    window.history.back(); // This takes the user back to the previous page in history
  };

  return (
    <div className="min-h-[100vh]">
      {/* Section 1 */}
      <div className="flex-1">
        <div className="bg-[#1ab266] px-5 pt-2 pb-6">
          <div className="relative">
            <Image
              className="w-36 mx-auto mb-6"
              src="/headerlogo.png"
              width={320}
              height={120}
              alt=""
            />
            {/* Back button */}
            <button
              onClick={handleBackButtonClick}
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

          <h1 className="text-xl font-semibold text-white">Login</h1>
          <p className="text-white text-sm font-light mt-2">
            Please login with your phone number or email
          </p>
          <p className="text-white text-sm font-light">
            If you forget your password, please contact customer service
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="p-5">
        <div className="flex flex-col items-center bg-white pb-4 border-b-2 border-[#1ab266] mb-5">
          <Image
            className="w-6"
            src="/cellphone.png"
            width={432}
            height={578}
            alt=""
          />
          <h1 className="text-center text-[#1ab266] text-lg font-semibold">
            Login using Phone
          </h1>
        </div>
        <form className="py-5" onSubmit={handleSubmit}>
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-3">
              <Image
                className="w-5"
                src="/cellphone.png"
                width={100}
                height={100}
                alt=""
              />
              <h1 className="font-semibold">Phone number</h1>{" "}
            </div>
            <div className="flex items-center">
              {/* Country code select dropdown */}
              <select className="bg-gray-200 p-2 rounded-md px-2">
                <option value="+91">+91</option>
                {/* Add more as needed */}
              </select>

              {/* Mobile number input field */}
              <input
                className="bg-gray-200 text-black p-2 rounded-md ml-3 w-full"
                type="text"
                placeholder="Enter mobile number"
                maxLength={10}
                value={phoneNumber}
                onChange={handlePhoneNumberInput}
                required
              />
            </div>
          </div>

          <div className="mb-5">
            <div className="relative">
              <div className="flex items-center gap-2 mb-3">
                <Image
                  className="w-6"
                  src="/forgetpassword.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <h1 className="font-semibold">Password</h1>
              </div>
              <input
                className="w-full bg-gray-200 text-black p-2 rounded-md"
                type={passwordVis ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Image
                onClick={handleImageClick}
                className="w-5 h-5 absolute right-3 top-12 cursor-pointer"
                src={passwordVis ? "/eye.png" : "/eye-hide.png"}
                width={60}
                height={60}
                alt="password"
              />
            </div>
            <div className="flex gap-2 my-3">
              <input type="checkbox" className="w-5" />
              <h1 className="font-semibold text-gray-500">Remember password</h1>
            </div>
          </div>

          {/* Display error/success messages */}
          {errorMessage && (
            <p className="text-red-500 text-center">{errorMessage}</p>
          )}
            {/* {successMessage && (
              <p className="text-green-500 text-center">{successMessage}</p>
            )} */}

          {/* Submit Button */}
          <div className="flex flex-col items-center gap-4">
            <button
              type="submit"
              className="bg-green-500 text-white p-2 w-96 rounded-full mx-16 my-3"
            >
              Log in
            </button>
            <Link href="/register">
              <button className="text-green-500 border-2 border-green-500 p-2 rounded-full mx-16 w-96">
                Register
              </button>
            </Link>
          </div>
          <Link href="/resetPassword">
            {" "}
            <h1 className="text-center my-2 text-green-600 font-bold">
              Forgot password ?
            </h1>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
