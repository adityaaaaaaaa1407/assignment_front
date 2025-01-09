/* eslint-disable @next/next/no-img-element */
"use client ";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Pie, Cell } from "recharts";

const PieChart = dynamic(() => import("recharts").then((mod) => mod.PieChart), {
  ssr: false,
});
interface QuestionAnalysisProps {
  score: number;
}

const COLORS = ["#4A90E2", "#E4EAF0"];

function QuestionAnalysis({ score }: QuestionAnalysisProps) {
  const totalQuestions = 15;
  const data = [
    { name: "Correct", value: score },
    { name: "Remaining", value: totalQuestions - score },
  ];
  console.log(data);
  return (
    <div className="p-6 bg-gray-100 rounded shadow-md w-full lg:w-1/3 mx-auto border border-gray-300">
      <div className="flex flex-row justify-between">
        <h2 className="text-lg font-semibold mb-2">Question Analysis</h2>
        <p className="text-right text-lg font-semibold text-blue-800">
          {score}/{totalQuestions}
        </p>
      </div>
      <div className="text-gray-700 xl:mb-12 mb-6">
        <span className="font-bold">
          You scored {score} questions correct out of {totalQuestions}.
        </span>{" "}
        However, it still needs some improvements.
      </div>
      <div className="flex justify-center items-center relative">
        <PieChart width={150} height={150}>
          <Pie
            data={data}
            nameKey="name"
            dataKey="value"
            innerRadius={50}
            outerRadius={70}
            startAngle={240}
            endAngle={-120}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>

        <div className="absolute flex justify-center items-center w-16 h-16 rounded-full bg-white">
          <Image
            src="/target.png"
            alt="Target Icon"
            className="w-10 h-10"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
}

export default QuestionAnalysis;
