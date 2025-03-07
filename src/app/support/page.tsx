"use client";
import React, { useState } from "react";
import Image from "next/image";

function Support() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleBackButtonClick = () => {
    window.history.back();
  };

  const handleWhatsappNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Remove any non-numeric characters and limit to 15 digits
    const sanitizedValue = value.replace(/\D/g, "").slice(0, 15); // Whatsapp numbers can be longer, so setting limit to 15
    setWhatsappNumber(sanitizedValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!name || !type || !whatsappNumber || !message) {
      setErrorMessage("All fields are required.");
      return;
    }

    if (!/^\d{10,15}$/.test(whatsappNumber)) {
      setErrorMessage("Please enter a valid Whatsapp number.");
      return;
    }

    setErrorMessage(""); // Clear previous error message
    setSuccessMessage(""); // Clear previous success message

    // Simulating form submission success
    setSuccessMessage("Your message has been sent successfully.");
  };

  return (
    <div className="min-h-[100vh] bg-white relative">
      {/* Section 1: Header */}
      <div className="bg-[#1ab266] px-5">
        <div className="relative">
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
        <h1 className="text-xl font-semibold text-white text-center py-3">Contact Us</h1>
      </div>

      {/* Section 2: Form */}
      <div className="px-5 py-10">
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <div className="flex items-center mb-3 gap-2">
              {/* <Image
                className="w-5"
                src="/user.png"
                width={100}
                height={100}
                alt="User Icon"
              /> */}
              <h1 className="font-semibold">Enter your Full Name</h1>
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

          {/* Type Field (Select Box) */}
          <div className="mb-4">
            <div className="flex items-center mb-3 gap-2">
              {/* <Image
                className="w-5"
                src="/question.png"
                width={100}
                height={100}
                alt="Type Icon"
              /> */}
              <h1 className="font-semibold">Select your Query Type</h1>
            </div>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="bg-gray-200 text-black p-2 rounded-md w-full"
              required
            >
              <option value="">Select</option>
              <option value="Consult">Consult</option>
              <option value="Recharge Problem">Recharge Problem</option>
              <option value="Withdraw Problem">Withdraw Problem</option>
              <option value="Game Problem">Game Problem</option>
              <option value="other">other</option>
            </select>
          </div>

          {/* Whatsapp Number Field */}
          <div className="mb-4">
            <div className="flex items-center mb-3 gap-2">
              {/* <Image
                className="w-5"
                src="/whatsapp.png"
                width={100}
                height={100}
                alt="Whatsapp Icon"
              /> */}
              <h1 className="font-semibold">Enter your Whatsapp Number</h1>
            </div>
            <input
              type="text"
              className="bg-gray-200 text-black p-2 rounded-md w-full"
              placeholder="Enter your Whatsapp number"
              value={whatsappNumber}
              onChange={handleWhatsappNumberInput}
              maxLength={15}
              required
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <div className="flex items-center mb-3 gap-2">
              {/* <Image
                className="w-5"
                src="/message.png"
                width={100}
                height={100}
                alt="Message Icon"
              /> */}
              <h1 className="font-semibold">Enter your Message</h1>
            </div>
            <textarea
              className="bg-gray-200 text-black p-2 rounded-md w-full"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex flex-col items-center gap-4">
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {successMessage && <p className="text-green-500">{successMessage}</p>}
            <button type="submit" className="bg-[#1ab266] p-2 rounded-full px-16 text-white font-semibold">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Support;
