import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  count: number;
  icon: LucideIcon;
}

export default function CategoryCard({
  title,
  count,
  icon: Icon,
}: CategoryCardProps) {
  return (
    <Link
      href={`/events?category=${encodeURIComponent(title)}`}
      className="group rounded-xl border border-gray-200 bg-white p-6 transition-colors hover:border-[#2563EB]"
    >
      <div className="mb-5 inline-flex rounded-lg bg-[#2563EB]/10 p-3 text-[#2563EB]">
        <Icon size={28} />
      </div>

      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#2563EB]">
        {title}
      </h3>

      <p className="mt-2 text-sm text-gray-600">{count} Events</p>
    </Link>
  );
}
