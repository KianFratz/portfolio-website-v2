"use client";
import { useState } from "react";

// components/SimpleTimeline.jsx
const timelineData = [
  {
    year: "Current",
    title: "BS Information Technology",
    subtitle: "University of Cebu",
  },
  {
    year: "2022",
    title: "Hello World!",
    subtitle: "Wrote my first line of code",
  },
];

export default function SimpleTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="relative border-l-2 border-gray-700 pl-8 space-y-2">
        {timelineData.map((item, index) => (
          <div key={index} className="relative">
            <div
              className={`absolute -left-10 mt-1.5 w-4 h-4 rounded-full bg-black border-3 border-gray-700 hover:bg-white"
                ${
                  activeIndex === index ? "bg-white border-white" : "bg-black hover:bg-white"
                }`}
            ></div>
            <div className=" rounded-lg shadow-sm ">
              <div>
                <h3 className="font-bold mt-3 mb-1">{item.title}</h3>
                <p className="flex justify-between">
                  {item.subtitle}
                  <span className="text-sm font-semibold px-3 py-1 rounded-full border">
                    {item.year}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
