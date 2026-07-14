
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
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Event Categories</h2>

          <p className="mt-3 text-gray-600">
            Browse events by category and discover what interests you most.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
