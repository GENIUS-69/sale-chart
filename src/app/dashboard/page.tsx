"use client";

import { useState } from "react";
import { salesData } from "@/data/sales";

import SalesChart from "@/components/organisms/SalesChart";
import SalesFilter from "@/components/molecules/SalesFilter";
import ChartSwitcher from "@/components/molecules/ChartSwitcher";

export default function DashboardPage() {
  const [threshold, setThreshold] = useState<number>(0);
  const [chartType, setChartType] = useState<"bar" | "line" | "pie">("bar");

  const filteredSales = salesData.filter(
    (item) => item.sales >= threshold
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <h1 className="mb-6 text-3xl font-bold text-gray-900">
        📊 Sales Dashboard
      </h1>

      {/* Controls */}
      <div className="mb-6 flex flex-wrap gap-4">
        <SalesFilter
          threshold={threshold}
          setThreshold={setThreshold}
        />
        <ChartSwitcher setType={setChartType} />
      </div>

      {/* Chart */}
      <SalesChart
        data={filteredSales}
        type={chartType}
      />
    </div>
  );
}
