"use client";

import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface CategoryStats {
  category: string;
  count: number;
}

interface CategoryStatsChartProps {
  data: CategoryStats[];
}

const COLORS = [
  "#2563EB",
  "#7c3aed",
  "#06b6d4",
  "#10b981",
  "#f59e0b",
  "#ef4444",
];

export default function CategoryStatsChart({ data }: CategoryStatsChartProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <h3 className="mb-6 text-lg font-bold text-gray-900">
        Events by Category
      </h3>
      {data.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="count"
              nameKey="category"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <div className="flex items-center justify-center py-12">
          <p className="text-gray-500">No events created yet</p>
        </div>
      )}
    </div>
  );
}
