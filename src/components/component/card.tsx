"use client";

import { useState } from "react";
import Dialog from "./dialog";

interface StatsData {
  rank: number;
  percentile: number;
  score: number;
}

interface QuickStatsCardProps {
  currentData: StatsData;
  onUpdate: (updatedData: StatsData) => void;
}

const QuickStatsCard = ({ currentData, onUpdate }: QuickStatsCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState(false);

  const handleUpdateClick = () => {
    setIsDialogOpen(true);
  };

  const handleUpdateSubmit = (updatedData: StatsData) => {
    onUpdate(updatedData);
    setIsDialogOpen(false);
  };

  const stats = [
    {
      icon: "🏆",
      value: currentData.rank,
      label: "YOUR RANK",
      color: "text-yellow-500",
    },
    {
      icon: "📊",
      value: `${currentData.percentile}%`,
      label: "PERCENTILE",
      color: "text-gray-500",
    },
    {
      icon: "✅",
      value: `${currentData.score} / 15`,
      label: "CORRECT ANSWERS",
      color: "text-green-500",
    },
  ];

  return (
    <div className="w-full lg:w-2/3">
      {/* Header Section */}
      <div className="border border-gray-300 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
              alt="HTML5 Logo"
              className="w-12 h-12 mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">
                Hyper Text Markup Language
              </h3>
              <p className="text-sm text-gray-600">
                Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
              </p>
            </div>
          </div>

          {/* Update Button */}
          <button
            onClick={handleUpdateClick}
            className="px-4 py-2 text-white bg-blue-800 rounded hover:bg-blue-700"
          >
            Update
          </button>
        </div>
      </div>

      {/* Quick Statistics */}
      <div className="border border-gray-300 rounded-lg p-4 ">
        <h4 className="text-md font-bold mb-4">Quick Statistics</h4>
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-row sm:gap-4 gap-4 items-center"
            >
              <div className={`sm:text-2xl text-md font-bold ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <p className="sm:text-lg text-[10px] text-black font-bold mt-2">
                  {stat.value}
                </p>
                <p className="text-gray-500 font-bold sm:text-md text-[10px]">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isDialogOpen && (
        <Dialog
          currentData={currentData}
          onClose={() => setIsDialogOpen(false)}
          onSubmit={handleUpdateSubmit}
        />
      )}
    </div>
  );
};

export default QuickStatsCard;
