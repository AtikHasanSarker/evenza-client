import Image from "next/image";
import { CalendarDays, MapPin, Trash2 } from "lucide-react";
import Button from "./Button";

interface ManageEventCardProps {
  id: string;
  title: string;
  image: string;
  category: string;
  date: string;
  location: string;
  price: number;
  onDelete?: (id: string) => void;
}

export default function ManageEventCard({
  id,
  title,
  image,
  category,
  date,
  location,
  price,
}: ManageEventCardProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="flex flex-col md:flex-row">
        {/* Event Image */}
        <div className="relative h-52 w-full md:h-auto md:w-72">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        {/* Event Details */}
        <div className="flex flex-1 flex-col justify-between p-6">
          <div>
            <div className="mb-4 flex items-center justify-between gap-4">
              <span className="rounded-md bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary">
                {category}
              </span>

              <span className="font-semibold text-accent">
                {price === 0 ? "Free" : `$${price}`}
              </span>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>

            <div className="mt-5 space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CalendarDays size={18} />
                <span>{date}</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>{location}</span>
              </div>
            </div>
          </div>

          {/* Action */}
          <div className="mt-6 flex justify-end">
            <Button
              color="danger"
              startContent={<Trash2 size={18} />}
              className="px-2 h-10"
            >
              Delete Event
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
