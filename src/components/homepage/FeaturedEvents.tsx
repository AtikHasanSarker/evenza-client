import Link from "next/link";
import EventCard from "@/components/ui/EventCard";

const featuredEvents = [
  {
    id: "1",
    title: "Tech Conference 2026",
    image: "/images/events/event-1.jpg",
    category: "Technology",
    date: "20 July 2026",
    location: "Dhaka",
    price: 30,
  },
  {
    id: "2",
    title: "Summer Music Festival",
    image: "/images/events/event-2.jpg",
    category: "Music",
    date: "25 July 2026",
    location: "Chattogram",
    price: 0,
  },
  {
    id: "3",
    title: "Startup Meetup",
    image: "/images/events/event-3.jpg",
    category: "Business",
    date: "28 July 2026",
    location: "Sylhet",
    price: 15,
  },
];

export default function FeaturedEvents() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Featured Events</h2>

          <p className="mt-3 text-gray-600">
            Discover some of our most popular upcoming events.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/events"
            className="inline-flex rounded-lg bg-[#2563EB] px-6 py-3 font-medium text-white hover:bg-blue-700"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
}
