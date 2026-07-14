import { LucideIcon } from "lucide-react";

interface StatisticCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
}

export default function StatisticCard({
  title,
  value,
  icon: Icon,
}: StatisticCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#2563EB]/10 text-[#2563EB]">
        <Icon size={28} />
      </div>

      <h3 className="text-3xl font-bold text-gray-900">{value}</h3>

      <p className="mt-2 text-sm text-gray-600">{title}</p>
    </div>
  );
}
