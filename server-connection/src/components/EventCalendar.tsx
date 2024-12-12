"use client"

import { time } from "console";
import Image from "next/image";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// temporary data
const event = [
  {
    id: 1,
    title: "Meeting",
    time: "10:00 AM - 11:00 AM",
    description: "Meeting with the team",
  },
  {
    id: 2,
    title: "Meeting",
    time: "10:00 AM - 11:00 AM",
    description: "Meeting with the team",
  },
  {
    id: 3,
    title: "Meeting",
    time: "10:00 AM - 11:00 AM",
    description: "Meeting with the team",
  },
];

const EventCalender = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white rounded-md shadow-lg px-4">
      <Calendar onChange={onChange} value={value} />
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold my-4">Events</h1>
          <Image src="/moreDark.png" alt="moreicon" width={20} height={20} />
        </div>
        {event.map((event) => (
          <div key={event.id} className="p-5 rounded-md border-gray-100 border-t-4 odd:border-t-skyColor even:border-t-PurpleColor">
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <p className="text-xs text-gray-400">{event.time}</p>
            </div>
            <p className="text-sm">{event.description}</p>
          </div>
        ))}
        <div></div>
      </div>
    </div>
  );
};

export default EventCalender;
