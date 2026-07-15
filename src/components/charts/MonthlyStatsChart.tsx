"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface MonthlyStatsChartProps {
  data: Array<{
    month: string;
    events: number;
  }>;
}

export default function MonthlyStatsChart({ data }: MonthlyStatsChartProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <h3 className="mb-6 text-lg font-bold text-gray-900">
        Monthly Event Statistics
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="month"
            stroke="#6b7280"
            style={{ fontSize: "12px" }}
          />
          <YAxis stroke="#6b7280" style={{ fontSize: "12px" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="events"
            stroke="#2563EB"
            strokeWidth={2}
            dot={{ fill: "#2563EB", r: 4 }}
            activeDot={{ r: 6 }}
            name="Events Created"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
