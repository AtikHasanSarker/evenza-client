import { CalendarDays, Users, MapPinned, LayoutGrid } from "lucide-react";
import StatisticCard from "../ui/StatisticCard";

const statistics = [
  {
    title: "Total Events",
    value: "250+",
    icon: CalendarDays,
  },
  {
    title: "Active Users",
    value: "1,200+",
    icon: Users,
  },
  {
    title: "Locations",
    value: "45+",
    icon: MapPinned,
  },
  {
    title: "Categories",
    value: "18",
    icon: LayoutGrid,
  },
];

export default function Statistics() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Platform Statistics
          </h2>

          <p className="mt-3 text-gray-600">
            Discover how Evenza is connecting people with events across
            different categories and locations.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((item) => (
            <StatisticCard
              key={item.title}
              title={item.title}
              value={item.value}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
