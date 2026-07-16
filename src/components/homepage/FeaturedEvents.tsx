import Link from "next/link";
import EventCard from "@/components/ui/EventCard";
import { fetchFeaturedEvents } from "@/services/api/events";


export default async function FeaturedEvents() {
const featuredEvents = await fetchFeaturedEvents()
const events = featuredEvents.slice(0, 6)
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
          {events.map((event) => (
            <EventCard
              key={event._id}
              id={event._id}
              title={event.title}
              image={event.image}
              category={event.category}
              date={event.date}
              location={event.location}
              price={event.price}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/events"
            className="inline-flex rounded-lg bg-primary px-6 py-3 font-medium text-white hover:bg-blue-700"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
}
