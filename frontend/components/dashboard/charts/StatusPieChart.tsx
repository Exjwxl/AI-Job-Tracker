"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useJobStore } from "@/stores/JobStore";

const COLORS = [
  "#3B82F6",
  "#FACC15",
  "#22C55E",
  "#EF4444",
];

export default function StatusPieChart() {
  const jobs = useJobStore((state) => state.jobs);

  const data = [
    {
      name: "Applied",
      value: jobs.filter((j) => j.status === "Applied").length,
    },
    {
      name: "Interview",
      value: jobs.filter((j) => j.status === "Interview").length,
    },
    {
      name: "Offer",
      value: jobs.filter((j) => j.status === "Offer").length,
    },
    {
      name: "Rejected",
      value: jobs.filter((j) => j.status === "Rejected").length,
    },
  ];

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold">
        Applications by Status
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius={100}
              label
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}