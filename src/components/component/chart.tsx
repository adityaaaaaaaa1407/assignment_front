"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
  ReferenceLine,
} from "recharts";

interface DataPoint {
  percentile: number;
  numberOfStudents: number;
}

const data: DataPoint[] = [
  { percentile: 0, numberOfStudents: 0 },
  { percentile: 10, numberOfStudents: 5 },
  { percentile: 15, numberOfStudents: 10 },
  { percentile: 25, numberOfStudents: 15 },
  { percentile: 30, numberOfStudents: 20 },
  { percentile: 50, numberOfStudents: 45 },
  { percentile: 75, numberOfStudents: 10 },
  { percentile: 90, numberOfStudents: 4 },
  { percentile: 100, numberOfStudents: 2 },
];

function CustomTooltip({
  active,
  payload,
  label,
}: TooltipProps<number, string>) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded shadow text-sm">
        <p className="font-semibold">Percentile: {label}</p>
        <p>Number of Students: {payload[0].value}</p>
      </div>
    );
  }
  return null;
}

interface ComparisonGraphProps {
  percentile: number;
}

function ComparisonGraph({ percentile }: ComparisonGraphProps) {
  return (
    <div className="p-6 bg-gray-100 rounded shadow-md w-full lg:w-2/3 border border-gray-300 mx-auto xl:mt-[-200px] lg:mt-[-190px] mt-0">
      <h2 className="text-lg font-semibold mb-4">Comparison Graph</h2>
      <div className="text-gray-700 mb-6">
        <span className="font-bold">You scored {percentile}% percentile</span>,
        which is lower than the average percentile
        <span className="font-bold"> {100 - percentile}%</span> of all the
        engineers who took this assessment.
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="percentile" />
          {/* <YAxis /> */}
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="numberOfStudents"
            stroke="#8884d8"
            dot={{ r: 3 }}
          />
          {/* Add a ReferenceLine for the user's percentile */}
          <ReferenceLine
            x={percentile}
            stroke="gray"
            label={{
              value: "Your Percentile",
              position: "center",
              fill: "gray",

              fontSize: 16,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ComparisonGraph;
