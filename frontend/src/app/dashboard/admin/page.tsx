import UserCard from "@/components/UserCard";
import React from "react";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* Left */}
      <div className="w-full lg:w-2/3 bg-red-400">
      {/* User Cards */}
        <div className="flex justify-between">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
      </div>

      {/* Right */}
      <div className="w-full lg:w-1/3 bg-green-400"></div>
    </div>
  );
};

export default AdminPage;
