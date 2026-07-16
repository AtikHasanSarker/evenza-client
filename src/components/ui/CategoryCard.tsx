import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

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
      className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl"
    >
      {/* Background Glow */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-100 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

      {/* Icon */}
      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
        <Icon size={30} />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-7">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>

        <div className="mt-4 inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
          {count} Events
        </div>

        <div className="mt-8 flex items-center gap-2 font-semibold text-primary">
          <span>Explore</span>

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}
