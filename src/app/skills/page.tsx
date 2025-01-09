"use client";

import { useState } from "react";
import QuickStatsCard from "@/components/component/card";
import ComparisonGraph from "@/components/component/chart";
import QuestionAnalysis from "@/components/component/questionAnalysis";
import SyllabusAnalysis from "@/components/component/syllabusAnalysis";

interface StatsData {
  rank: number;
  percentile: number;
  score: number;
}

const Page = () => {
  const [currentData, setCurrentData] = useState<StatsData>({
    rank: 1,
    percentile: 30,
    score: 10,
  });

  const updateStatsData = (updatedData: StatsData) => {
    setCurrentData(updatedData);
  };

  return (
    <div className="flex flex-col lg:flex-wrap lg:flex-row w-full items-start justify-start bg-gray-100 gap-6 p-6">
      {/* Row 1: QuickStatsCard and SyllabusAnalysis */}
      <h1 className="ml-4 text-gray-700 font-bold mb-4">Skill Test</h1>
      <div className="flex flex-col lg:flex-row w-full gap-6">
        <QuickStatsCard currentData={currentData} onUpdate={updateStatsData} />
        <SyllabusAnalysis />
      </div>

      {/* Row 2: ComparisonGraph and QuestionAnalysis */}
      <div className="flex flex-col lg:flex-row w-full gap-6">
        <ComparisonGraph percentile={currentData.percentile} />
        <QuestionAnalysis score={currentData.score} />
      </div>
    </div>
  );
};

export default Page;
