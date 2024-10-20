"use client";

import Image from "next/image";
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const FinanceChart = () => {
  const data = [
    {
      name: "Jan",
      income: 4000,
      expense: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      income: 3000,
      expense: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      income: 2000,
      expense: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      income: 2780,
      expense: 3908,
      amt: 2000,
    },
    {
      name: "Jun",
      income: 1890,
      expense: 4800,
      amt: 2181,
    },
    {
      name: "Jul",
      income: 2390,
      expense: 3800,
      amt: 2500,
    },
    {
      name: "Aug",
      income: 3490,
      expense: 4300,
      amt: 2100,
    },
    {
      name: "Sep",
      income: 3490,
      expense: 4300,
      amt: 2100,
    },
    {
      name: "Oct",
      income: 3490,
      expense: 4300,
      amt: 2100,
    },
    {
      name: "Nov",
      income: 3490,
      expense: 4300,
      amt: 2100,
    },
    {
      name: "Dec",
      income: 3490,
      expense: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="bg-white rounded-xl w-full h-full p-4 shadow-xl">
      {/* Title */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src="/moreDark.png" alt="moreIcon" width={20} height={20} />
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#939393"}} tickLine={false} tickMargin={10}/>
          <YAxis axisLine={false} tick={{fill:"#939393"}} tickLine={false} tickMargin={20}/>
          <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightGray"}}/>
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line type="monotone" dataKey="expense" stroke="#c3ebfa" strokeWidth={5} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="income" stroke="#cfceff" strokeWidth={5}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
    
  );
};

export default FinanceChart;
