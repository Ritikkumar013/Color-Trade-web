"use client"; // Add this directive at the top of your file
import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const handleBackButtonClick = () => {
    window.history.back(); // This takes the user back to the previous page in history
  };

  return (
    <div className="min-h-[100vh] bg-green-50 pb-6">
      {/* Section 1 */}
      <div className="bg-[#1ab266] rounded-b-[4rem] px-5 pt-2 pb-52">
        <div className=" relative">
          <h1 className="text-2xl text-center text-white">My Profile</h1>
          {/* Back button */}
          <button
            onClick={handleBackButtonClick} // When clicked, it goes back in history
            className="absolute left-0 top-[7px]"
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
      </div>

      {/* Section 2 */}
      <div className="px-5 my-7">
        <div className="bg-green-50 z-10 rounded-lg shadow-lg p-5 -mt-40 text-center">
          <div className="flex justify-center">
            <Image
              className="rounded-full w-36"
              src="/avatar2.png"
              width={512}
              height={512}
              alt=""
            />
          </div>
          <div className="bg-[#f2f2f1] flex justify-between p-4 rounded-2xl mt-10 my-3">
            <h1 className=" font-bold">NICKNAME</h1>

            <div className="flex gap-2 items-center">
              <p className="font-semibold hover:border-b border-black cursor-pointer">
                Niklaus
              </p>
              <Image
                className="w-4 h-4"
                src="/edit.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
          </div>

          <div className="bg-[#f2f2f1] flex justify-between p-4 rounded-2xl my-3">
            <h1 className=" font-bold">EMAIL</h1>

            <div className="flex gap-2">
              <p className="font-semibold hover:border-b border-black cursor-pointer">
                ritikkumar@crobstacle.com
              </p>
              <Image
                className="w-5 h-5"
                src="/copy.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
          </div>

          <div className="bg-[#f2f2f1] flex justify-between p-4 rounded-2xl my-3">
            <h1 className="font-bold">UID</h1>

            <div className="flex gap-2">
              <p className="font-semibold hover:border-b border-black cursor-pointer">
                364789
              </p>
              <Image
                className="w-5 h-5"
                src="/copy.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="px-5 my-7">
        <h1 className="text-lg font-bold border-l-4 pl-3 border-red-500">
          Security Information
        </h1>
        <Link href="/changepassword" className="bg-white flex justify-between rounded-2xl my-5">
          
            <div className="flex items-center p-3 gap-3">
              <Image
                className="w-7"
                src="/reset.png"
                width={100}
                height={100}
                alt=""
              />

              <h1 className="font-semibold text-lg">Login Password</h1>
            </div>
            <div className="flex p-3 gap-3">
              <h1 className="text-lg">Edit</h1>
              <Image
                className="w-7 h-7"
                src="/next.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
          
        </Link>

        <div className="bg-white flex justify-between rounded-2xl my-5">
          
            <div className="flex items-center p-3 gap-3">
              <Image
                className="w-7"
                src="/update.png"
                width={100}
                height={100}
                alt=""
              />

              <h1 className="font-semibold text-lg">Update version</h1>
            </div>
            <div className="flex p-3 gap-3">
              <h1 className="text-lg">2.0.6</h1>
              <Image
                className="w-7 h-7"
                src="/next.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default page;
