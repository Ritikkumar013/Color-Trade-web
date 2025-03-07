"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter hook from Next.js

const Register = () => {
  const [passwordVis, setPasswordVis] = useState(false);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  
  const router = useRouter(); // Initialize useRouter to handle navigation

  const handleImageClick = () => {
    setPasswordVis(!passwordVis);
  };

  const handlePhoneNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Remove any non-numeric characters and limit to 10 digits
    const sanitizedValue = value.replace(/\D/g, "").slice(0, 10);
    setPhoneNumber(sanitizedValue);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare the payload
    const payload = {
      name,
      password,
      number: phoneNumber,
    };

    try {
      const response = await fetch("http://20.235.246.99:4500/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json();
        setErrorMessage(data.message || "Something went wrong");
      } else {
        const data = await response.json();
        setSuccessMessage(data.message || "Registration successful");

        // Redirect to /otp and pass the phone number via URL query
        router.push(`/otp?phone=${phoneNumber}`);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Network error. Please try again later.");
      }
    }
  }    

  const handleBackButtonClick = () => {
    window.history.back();
  };

  return (
    <div className="min-h-[100vh]">
      {/* Section 1 */}
      <div className="flex-1">
        <div className="bg-[#1ab266] pt-2 px-5 pb-6">
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
            <Image
              className="w-36 mx-auto mb-6"
              src="/headerlogo.png"
              width={320}
              height={120}
              alt=""
            />
          </div>
          <h1 className="text-xl font-semibold text-white">Register</h1>
          <p className="text-white text-sm font-light mt-2">
            Please Register using your Mobile Number
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
            Register your Phone
          </h1>
        </div>
        <form className="py-5" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <div className="flex items-center mb-3 gap-2">
              <Image
                className="w-5"
                src="/user.png"
                width={100}
                height={100}
                alt=""
              />
              <h1 className="font-semibold">Full Name</h1>
            </div>
            <input
              type="text"
              className="bg-gray-200 text-black p-2 rounded-md w-full"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Phone Number Field */}
          <div className="mb-4">
            <div className="flex items-center mb-3 gap-2">
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
              <select className="bg-gray-200 p-2 rounded-md px-2">
                <option value="+91">+91</option>
              </select>

              <input
                className="bg-gray-200 text-black p-2 rounded-md ml-3 w-96"
                type="text"
                placeholder="Enter mobile number"
                maxLength={10}
                value={phoneNumber}
                onChange={handlePhoneNumberInput}
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="relative mb-4">
            <div className="flex items-center">
              <Image
                className="w-6"
                src="/forgetpassword.png"
                width={100}
                height={100}
                alt=""
              />
              <h1 className="font-semibold mx-2 my-2">Set password</h1>{" "}
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
              className="w-5 absolute right-3 top-12 cursor-pointer"
              src={passwordVis ? "/eye.png" : "/eye-hide.png"}
              width={60}
              height={60}
              alt="password"
            />
          </div>

          {/* Invite Code Field */}
          <div className="mb-5">
            <div className="flex items-center gap-2 ">
              <Image
                className="w-6"
                src="/invitation.png"
                width={100}
                height={100}
                alt=""
              />
              <h1 className="font-semibold my-2">Invite code</h1>{" "}
            </div>

            <input
              type="text"
              className="p-2 bg-gray-200 rounded-md w-full"
              value={inviteCode}
              onChange={(e) => setInviteCode(e.target.value)}
            />
          </div>

          {/* Privacy Agreement */}
          <div className="flex gap-2 my-3">
            <input type="checkbox" className="w-5 " required />
            <h1 className="font-semibold text-gray-500">
              I have read & agree{" "}
              <span className="mx-1 text-red-500 cursor-pointer">
                [Privacy Agreement]
              </span>
            </h1>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col items-center gap-4">
            {errorMessage && (
              <p className="text-red-500">{errorMessage}</p>
            )}
            {successMessage && (
              <p className="text-green-500">{successMessage}</p>
            )}
            <button
              type="submit"
              className="bg-[#1ab266] p-2 rounded-full px-16"
            >
              Continue
            </button>
          </div>
        </form>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col text-bold text-white items-center gap-4 pb-5">
        <span className="text-gray-700 font-semibold text-sm">
          Already have an Account?{" "}
          <Link
            href="/Login"
            className=" text-[#1ab266] underline underline-offset-2"
          >
            Login
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
