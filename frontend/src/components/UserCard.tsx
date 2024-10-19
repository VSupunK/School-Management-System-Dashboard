import Image from "next/image";
import React from "react";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-PurpleColor even:bg-YellowColor p-4 flex-1 min-w-[130px] shadow-xl">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">2024/25</span>
        <Image src="/more.png" alt="more_icon" width={20} height={20}/>
      </div>
      <h1 className="text-2xl font-semibold my-4 text-gray-500">1,356</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}s</h2>
    </div>
  );
};

export default UserCard;
