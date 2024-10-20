"use client";

import Image from "next/image";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    Present: 65,
    Absent: 35,
  },
  {
    name: "Tue",
    Present: 45,
    Absent: 22,
  },
  {
    name: "Wed",
    Present: 62,
    Absent: 36,
  },
  {
    name: "Thur",
    Present: 59,
    Absent: 38,
  },
  {
    name: "Fri",
    Present: 58,
    Absent: 34,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4 shadow-xl">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="moreIcon" width={20} height={20} />
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#939393"}} tickLine={false}/>
          <YAxis axisLine={false} tick={{fill:"#939393"}} tickLine={false}/>
          <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}}/>
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="Present"
            fill="#c3ebfa"
            activeBar={<Rectangle fill="#c3ebfa" stroke="darkblue" />}
            legendType="circle"
            radius={[10,10,0,0]}
          />
          
          <Bar
            dataKey="Absent"
            fill="#fae27c"
            activeBar={<Rectangle fill="#fae27c" stroke="red" />}
            legendType="circle"
            radius={[10,10,0,0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
