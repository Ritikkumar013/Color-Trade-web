"use client";

import Image from "next/image";
import "swiper/css"; 
import "swiper/css/pagination"; 
import "swiper/css/navigation";
import PayoutTable from "@/Components/LandingPageComponents/Payout";

export default function Home() {
  return (
    <>
    <div className="overflow-hidden mx-auto bg-green-100 px-5 flex flex-col gap-5 py-20">

      {/* Section 1 */}
      <div className="">
        <Image src="/image1.png" alt="image" width={645} height={300} className="rounded-lg"/>
      </div>

        {/* Section 2 */}

      <div className="bg-white rounded-full flex justify-between items-center px-2 py-1">
        <h1 className="text-2xl">⭐</h1>
        <div className="overflow-hidden text-sm">
          <div className="whitespace-nowrap animate-marquee py-2">
            <h1 className="">
              Your satisfaction is our top Priority. Please fill your card
              information correctly.
            </h1>
          </div>{" "}
        </div>
        <button className="py-1 px-4 text-sm bg-[#1ab266] text-white rounded-full font-semibold">
          Details
        </button>
      </div>

      {/* Section 2 */}
      <div className="text-center  bg-cover rounded-lg">
        <h1 className=" text-2xl font-bold text-black mb-5">Play Exicting Games</h1>
        <div className="flex flex-col text-left gap-8">
          {/* first game */}
          <div className="flex-1">
            <div className="bg-gradient-to-r from-green-600 rounded-t-xl p-4 relative">
            <h3 className="text-white text-xl font-bold mb-2">1 Minute Wingo</h3>
            <p className="text-gray-200 font-semibold text-base">Guess Number, Green, Purple, Red to Win</p>   
            <Image alt="This is Image" src="/940balls.png" width={290} height={216} className="absolute -top-4 right-0 w-36"/>
            </div>
            <div className=" bg-white p-4 rounded-b-xl">
              <div className="flex justify-between items-center">
                  <div className="flex gap-4 items-center">
                      <Image alt="This is Image" src="/avatar2.png" width={40} height={40}/>
                      <h4 className="text-base font-semibold">Name of Person</h4>
                  </div>
                  <div>
                    <p className="text-sm text-gray-800 font-semibold">Won Rs 11294</p>
                  </div>
              </div>

            </div>
          </div>
          {/* second game */}
          <div className="flex-1">
            <div className="bg-gradient-to-r from-green-600 rounded-t-xl p-4 relative">
            <h3 className="text-white text-xl font-bold mb-2">1 Minute Wingo</h3>
            <p className="text-gray-200 font-semibold text-base">Guess Number, Green, Purple, Red to Win</p>   
            <Image alt="This is Image" src="/940balls.png" width={290} height={216} className="absolute -top-4 right-0 w-36"/>
            </div>
            <div className=" bg-white p-4 rounded-b-xl">
              <div className="flex justify-between items-center">
                  <div className="flex gap-4 items-center">
                      <Image alt="This is Image" src="/avatar2.png" width={40} height={40}/>
                      <h4 className="text-base font-semibold">Name of Person</h4>
                  </div>
                  <div>
                    <p className="text-sm text-gray-800 font-semibold">Won Rs 11294</p>
                  </div>
              </div>

            </div>
          </div>
          {/* third game */}
          <div className="flex-1">
            <div className="bg-gradient-to-r from-green-600 rounded-t-xl p-4 relative">
            <h3 className="text-white text-xl font-bold mb-2">1 Minute Wingo</h3>
            <p className="text-gray-200 font-semibold text-base">Guess Number, Green, Purple, Red to Win</p>   
            <Image alt="This is Image" src="/940balls.png" width={290} height={216} className="absolute -top-4 right-0 w-36"/>
            </div>
            <div className=" bg-white p-4 rounded-b-xl">
              <div className="flex justify-between items-center">
                  <div className="flex gap-4 items-center">
                      <Image alt="This is Image" src="/avatar2.png" width={40} height={40}/>
                      <h4 className="text-base font-semibold">Name of Person</h4>
                  </div>
                  <div>
                    <p className="text-sm text-gray-800 font-semibold">Won Rs 11294</p>
                  </div>
              </div>

            </div>
          </div>
          {/* fourth game */}
          <div className="flex-1">
            <div className="bg-gradient-to-r from-green-600 rounded-t-xl p-4 relative">
            <h3 className="text-white text-xl font-bold mb-2">1 Minute Wingo</h3>
            <p className="text-gray-200 font-semibold text-base">Guess Number, Green, Purple, Red to Win</p>   
            <Image alt="This is Image" src="/940balls.png" width={290} height={216} className="absolute -top-4 right-0 w-36"/>
            </div>
            <div className=" bg-white p-4 rounded-b-xl">
              <div className="flex justify-between items-center">
                  <div className="flex gap-4 items-center">
                      <Image alt="This is Image" src="/avatar2.png" width={40} height={40}/>
                      <h4 className="text-base font-semibold">Name of Person</h4>
                  </div>
                  <div>
                    <p className="text-sm text-gray-800 font-semibold">Won Rs 11294</p>
                  </div>
              </div>

            </div>
          </div>
        </div>
      {/* <div className="flex justify-end relative">
        <button className=" opacity-100 hover:bg-green-500 button-prev absolute -top-10 left-5 transform -translate-y-1/2 z-10 text-3xl  border-black border-2 p-1  px-3 rounded-lg shadow">
          🠸
        </button>
        <button className=" opacity-100  hover:bg-green-500 button-next absolute -top-10 right-5 transform -translate-y-1/2 z-10 text-3xl border-black border-2 p-1 px-3 rounded-lg shadow">
          🠺
        </button>

        <Swiper
          slidesPerView={1.5} 
          spaceBetween={1} 
          pagination={{ clickable: true }} 
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          modules={[Pagination, Navigation]} 
        >
          
          <SwiperSlide>
            <Link href="/game1">
              <Image
                className=" w-72 h-52 rounded-2xl"
                src="/front.jpg"
                width={300}
                height={300}
                alt="Game 1"
              />
            </Link>
          </SwiperSlide>

          
          <SwiperSlide>
            <Image
              className=" w-72 h-52 rounded-2xl"
              src="/dice-min.jpg"
              width={700}
              height={700}
              alt="Game 4"
            />
          </SwiperSlide>

          
          <SwiperSlide>
            <Image
              className=" w-72 h-52 rounded-2xl border-2 border-black"
              src="/block-min.jpg"
              width={300}
              height={300}
              alt="Game 3 Duplicate"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              className="w-72 h-52 rounded-2xl"
              src="/game1.jpg"
              width={300}
              height={300}
              alt="Game 3 Duplicate"
            />
          </SwiperSlide>
        </Swiper>
      </div> */}
      </div>

      {/* Section 4 */}
      <div>
      <PayoutTable />
      </div>
    </div>
    </>
  );
}
