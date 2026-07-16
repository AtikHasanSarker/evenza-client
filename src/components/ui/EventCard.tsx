import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";

interface EventCardProps {
  id: string;
  title: string;
  image: string;
  category: string;
  date: string;
  location: string;
  price: number;
}

export default function EventCard({
  id,
  title,
  image,
  category,
  date,
  location,
  price,
}: EventCardProps) {
  return (
    <div className="overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-xl border border-gray-200 bg-white">
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="h-52 w-full object-cover"
      />

      <div className="space-y-4 p-5">
        <span className="inline-block rounded bg-[#7C3AED]/10 px-3 py-1 text-xs font-medium text-[#7C3AED]">
          {category}
        </span>

        <h3 className="line-clamp-2 text-xl font-semibold text-gray-900">
          {title}
        </h3>

        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            {date}
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={16} />
            {location}
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <p className="font-semibold text-[#F59E0B]">
            {price === 0 ? "Free" : `$${price}`}
          </p>

          <Link
            href={`/events/${id}`}
            className="text-sm font-medium text-[#2563EB] hover:underline"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
