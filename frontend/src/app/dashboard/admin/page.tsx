'use client';

import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";
import React from "react";


const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* Left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
      {/* User Cards */}
        <div className="flex flex-wrap justify-between gap-4">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* Middle chart */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* Count chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
          <CountChart /></div>
          {/* Attendance chart */}
          <div className="w-full lg:w-2/3 h-[450px]"></div>
        </div>
        {/* Bottom chart */}
        <div className=""></div>
      </div>

      {/* Right */}
      <div className="w-full lg:w-1/3 bg-green-400"></div>
    </div>
  );
};

export default AdminPage;
