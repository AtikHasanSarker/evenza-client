import {
  Laptop,
  Music,
  GraduationCap,
  BriefcaseBusiness,
  Trophy,
  Palette,
} from "lucide-react";

import CategoryCard from "../ui/CategoryCard";

const categories = [
  {
    title: "Technology",
    count: 25,
    icon: Laptop,
  },
  {
    title: "Music",
    count: 18,
    icon: Music,
  },
  {
    title: "Education",
    count: 12,
    icon: GraduationCap,
  },
  {
    title: "Business",
    count: 16,
    icon: BriefcaseBusiness,
  },
  {
    title: "Sports",
    count: 10,
    icon: Trophy,
  },
  {
    title: "Art",
    count: 8,
    icon: Palette,
  },
];

export default function Categories() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white to-slate-50 py-24">
      {/* Background Decoration */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-violet-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-primary">
            Categories
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            Browse Events by Category
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Discover conferences, workshops, concerts, sports, and many more
            exciting events tailored to your interests.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              count={category.count}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
