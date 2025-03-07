import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const SplashScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading delay (you can replace this with your own logic)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 seconds

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  if (!isLoading) {
    return null; // Return null when loading is complete
  }

  return (
    <div className="fixed max-w-lg mx-auto inset-0 bg-[#1ab266] flex items-center justify-center z-50">
      <div className="text-center">
        <Image src="/headerlogo.png" alt="Logo-image" width={320} height={120} className='w-40'/>
      </div>
    </div>
  );
};

export default SplashScreen;
