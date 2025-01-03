import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalender from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";
import React from "react";


const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/*------------- Left -------------*/}
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
          <div className="w-full lg:w-2/3 h-[450px]">
          <AttendanceChart /></div>
        </div>
        {/* Bottom chart */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>

      {/*------------- Right ----------------*/}
      <div className="w-full lg:w-1/3 flex flex-col gap-8 bg-white rounded-md">
        <EventCalender/>
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
