import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="fixed max-w-lg bottom-0 w-full bg-white">
      <div className="border-t-2 flex justify-center py-2">
       
      <Link href="https://diuvin.com/app.apk" className="basis-1/5 flex flex-col items-center justify-center">  
            {" "}
            <Image
              className="w-9 rounded-lg "
              src="/download.png"
              width={70}
              height={70}
              alt="Account Icon"
            />
            <p className="text-sm text-gray-500">Download</p>
        </Link>

        <Link href="/wallet" className="basis-1/5 flex flex-col items-center">
          
            {" "}
            <Image
              className="w-9 h-9 p-1 rounded-lg "
              src="/wallet1.png"
              width={70}
              height={70}
              alt="Wallet Icon"
            />{" "}
          
          <p className="text-sm text-gray-500">Wallet</p>
        </Link>

        <div className="basis-1/5 flex flex-col items-center justify-center">
          <Link href="/">
            {" "}
            <div className="bg-green-600 p-2 px-5 rounded-3xl ">
            <Image
              className="w-6"
              src="/gameHome.png"
              width={70}
              height={70}
              alt="Home Icon"
            />{" "}
            </div>
          </Link>
          {/* <p className="text-sm">Home</p> */}
        </div>


        <div className="basis-1/5 flex flex-col items-center ">
          <Link href="/game1">
            {" "}
            <Image
              className="w-9 h-9 p-1 rounded-lg "
              src="/win.png"
              width={70}
              height={70}
              alt="Account Icon"
            />{" "}
          </Link>
          <p className="text-sm text-gray-500">game</p>
        </div>


        <div className="basis-1/5 flex flex-col items-center ">
          <Link href="/account">
            {" "}
            <Image
              className="w-9 h-9 p-1 rounded-lg "
              src="/profile (1).png"
              width={70}
              height={70}
              alt="Account Icon"
            />{" "}
          </Link>
          <p className="text-sm text-gray-500">Account</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
