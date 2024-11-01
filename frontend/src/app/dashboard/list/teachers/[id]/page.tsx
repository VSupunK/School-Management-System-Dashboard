import Image from "next/image";
import React from "react";

const SigleTeacherPage = () => {
  return (
    <div className="flex p-4 flex-col gap-4 xl:flex-row">
      {/* Left */}
      <div className="w-full xl:w-2/3">
        {/* Top */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* User info card */}
          <div className="bg-skyColor py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="/teacher1.webp"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-lg font-semibold">John Smith</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 2xl:h-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span>January 2025</span>
                </div>
                <div className="w-full md:w-1/3 flex items-center gap-2">
                  <span>Darmadasa</span>
                  <Image src="/mail.png" alt="" width={14} height={14} />
                </div>
                <div className="w-full md:w-1/3 flex items-center gap-2">
                  <Image src="/" alt="" width={14} height={14} />
                  <span>+84 012 0365 42</span>
                </div>
              </div>
            </div>
          </div>

          {/* Small cards */}
          <div className="flex-1"></div>
        </div>

        {/* Right */}
        <div className=""></div>
      </div>

      <div className="w-full xl:w-1/3">righr</div>
    </div>
  );
};

export default SigleTeacherPage;
