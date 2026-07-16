"use client";

import Loading from "@/app/loading";
import ManageEventCard from "@/components/ui/ManageEventCard";
import type { Event as EventType } from "@/services/api/events";
import useUser from "@/hooks/useSession";
import { fetchEventByUserId } from "@/services/api/events";
import { useEffect, useState } from "react";

export default function ManageEventsPage() {
  const {user} = useUser()
  console.log(user)
    const userId = user?.id as string;
    const [events, setEvents] = useState<EventType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true);

        const userEvents = await fetchEventByUserId(userId);
        setEvents(userEvents.data);
        
      } finally {
        setIsLoading(false);
      }
    };

    if (userId) {
      fetchEvents();
    }
  }, [userId]);

  if (isLoading) {
    return (
      <>
      <Loading />
      </>
    );
  }


  return (
    <section className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Manage Events</h1>

        <p className="mt-2 text-gray-600">
          View and manage all your published events.
        </p>
      </div>

      {/* Empty State */}
      {!user || events?.length === 0 ? (
        <div className="flex h-72 items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-900">
              No Events Found
            </h2>

            <p className="mt-2 text-gray-500">
              You haven&#39;t created any events yet.
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {events.map((event) => (
            <ManageEventCard
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
      )}
    </section>
  );
}
