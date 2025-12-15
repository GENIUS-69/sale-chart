"use client";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { SalesData } from "@/types/sales";

type SalesChartProps = {
  data: SalesData[];
  type: "bar" | "line" | "pie";
};

export default function SalesChart({ data, type }: SalesChartProps) {
  return (
    <div
      className="
        h-95
        rounded-2xl
        bg-white
        p-6
        shadow
      "
    >
      <ResponsiveContainer width="100%" height="100%">
        {type === "bar" && (
          <BarChart data={data}>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="sales"
              fill="#2563eb"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        )}

        {type === "line" && (
          <LineChart data={data}>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Line
              dataKey="sales"
              stroke="#16a34a"
              strokeWidth={3}
              dot={{ r: 6 }}
            />
          </LineChart>
        )}

        {type === "pie" && (
          <PieChart>
            <Pie
              data={data}
              dataKey="sales"
              nameKey="year"
              outerRadius={120}
              fill="#f97316"
              label
            />
            <Tooltip />
          </PieChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
