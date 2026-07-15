"use client";

import { useState, useEffect } from "react";
import { Calendar, Layers, TrendingUp } from "lucide-react";
import StatisticCard from "@/components/ui/StatisticCard";
import MonthlyStatsChart from "@/components/charts/MonthlyStatsChart";
import CategoryStatsChart from "@/components/charts/CategoryStatsChart";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

interface DashboardStats {
  totalEvents: number;
  categoriesCount: number;
  thisMonthEvents: number;
  monthlyStats: Array<{
    month: string;
    events: number;
  }>;
  categoryStats: Array<{
    category: string;
    count: number;
  }>;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // For now, using mock data
        // Replace with actual API call when backend is ready
        const mockStats: DashboardStats = {
          totalEvents: 12,
          categoriesCount: 5,
          thisMonthEvents: 3,
          monthlyStats: [
            { month: "Jan", events: 2 },
            { month: "Feb", events: 3 },
            { month: "Mar", events: 2 },
            { month: "Apr", events: 4 },
            { month: "May", events: 1 },
            { month: "Jun", events: 3 },
            { month: "Jul", events: 5 },
          ],
          categoryStats: [
            { category: "Technology", count: 4 },
            { category: "Music", count: 3 },
            { category: "Sports", count: 2 },
            { category: "Art", count: 2 },
            { category: "Business", count: 1 },
          ],
        };

        setStats(mockStats);
      } catch (error) {
        console.error("Failed to fetch dashboard stats:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Welcome back! Here's your event statistics.
        </p>
      </div>

      {/* Statistics Cards */}
      {stats && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <StatisticCard
            title="Total Events"
            value={stats.totalEvents.toString()}
            icon={Calendar}
          />
          <StatisticCard
            title="Categories"
            value={stats.categoriesCount.toString()}
            icon={Layers}
          />
          <StatisticCard
            title="This Month"
            value={stats.thisMonthEvents.toString()}
            icon={TrendingUp}
          />
        </div>
      )}

      {/* Charts */}
      {stats && (
        <div className="grid gap-6 lg:grid-cols-2">
          <MonthlyStatsChart data={stats.monthlyStats} />
          <CategoryStatsChart data={stats.categoryStats} />
        </div>
      )}
    </div>
  );
}
