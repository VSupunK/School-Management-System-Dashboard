"use client"

import Image from "next/image";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 110,
    fill: "white",
  },
  {
    name: "Boys",
    count: 60,
    fill: "#c3ebfa",
  },
  {
    name: "Girls",
    count: 50,
    fill: "#fae27c",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4 shadow-xl">
      {/* Title */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="moreIcon" width={20} height={20} />
      </div>
      {/* Chart */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={24}
            data={data}
          >
            <RadialBar
              background
              //clockWise
              dataKey="count"
            />
            
          </RadialBarChart>
        </ResponsiveContainer>
      <Image src="/maleFemale.png" alt="moreIcon" width={50} height={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>

      </div>

      {/* Bottom */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-blue-200 rounded-full" />
            <h1 className="font-bold">1,235</h1>
            <h2 className="text-xs text-gray-400">Boys (50%)</h2>
          
        </div>

        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-yellow-200 rounded-full" />
            <h1 className="font-bold">1,235</h1>
            <h2 className="text-xs text-gray-400">Girls (50%)</h2>
          
        </div>
      </div>
    </div>
  );
};

export default CountChart;




