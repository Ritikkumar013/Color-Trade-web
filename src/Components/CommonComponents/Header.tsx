import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed w-full max-w-lg z-20 flex justify-between items-center bg-white px-5 py-4">
      <div className="">
        <Image
          className="w-24 rounded-md"
          src="/Logo.png"
          width={320}
          height={120}
          alt="Logo"
        />
      </div>
      <div className="flex gap-4 text-sm font-semibold">
        <Link href="/login">
          {" "}
          <button className="rounded-md border-2 border-[#1ab266] text-white bg-[#1ab266] px-5 py-1">
            Log in
          </button>{" "}
        </Link>
        <Link href="/register">
          {" "}
          <button className="rounded-md border-2 border-[#1ab266] text-[#1ab266] bg-white px-5 py-1">
            Register
          </button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Header;
