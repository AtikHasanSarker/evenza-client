"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Card, Separator } from "@heroui/react";
import {
  Calendar,
  User,
  Mail,
  Building,
  Share2,
  ArrowRight,
  MapPin,
  Armchair,
} from "lucide-react";
import { fetchEventById, fetchEvents, Event } from "@/services/api/events";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import EventCard from "@/components/ui/EventCard";
import Button from "@/components/ui/Button";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function EventDetailsPage() {
  const params = useParams();
  const eventId = params.id as string;

  const [event, setEvent] = useState<Event | null>(null);
  const [relatedEvents, setRelatedEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        setIsLoading(true);

        const eventData = await fetchEventById(eventId);
        setEvent(eventData);
        const relatedData = await fetchEvents(1, 3, eventData.category);
        setRelatedEvents(
          relatedData.data.filter((e) => e._id !== eventId).slice(0, 3)
        );
      } finally {
        setIsLoading(false);
      }
    };

    if (eventId) {
      fetchEventDetails();
    }
  }, [eventId]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }
  console.log(relatedEvents);
  console.log(event);

  if (!event) {
    return (
      <div className="space-y-6 py-12">
        <div className="rounded-xl border border-red-200 bg-red-50 p-8 text-center">
          <p className="text-lg text-red-700">
            {"Event not found"}
          </p>
          <Link href="/explore">
            <Button className="mt-4 p-2">
              Back to Events
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 py-8">
      {/* Event Banner */}
      <div className="relative h-96 w-full overflow-hidden rounded-2xl sm:h-125">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

        {/* Category Badge */}
        <div className="absolute left-6 top-6">
          <span className="inline-block rounded-full bg-warning px-4 py-2 text-sm font-semibold text-white capitalize">
            {event.category}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Event Info - Left Section */}
        <div className="space-y-6 lg:col-span-2">
          {/* Title and Actions */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
              {event.title}
            </h1>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button className="font-semibold px-2 bg-secondary">
                Book Ticket - ${event.price}
              </Button>
              <Button variant="bordered" className="p-2">
                <Share2 size={20} />
              </Button>
            </div>
          </div>

          <Separator />

          {/* Event Details Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Date & Time */}
            <Card className="p-6">
              <div className="flex item-center gap-4">
                <Calendar className="h-8 w-8 text-primary shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">Date & Time</p>
                  <p className="mt-1 text-lg font-semibold text-gray-900">
                    {new Date(event.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p className="text-sm text-gray-600">TBD</p>
                </div>
              </div>
            </Card>

            {/* Location */}
            <Card className="p-6">
              <div className="flex item-center gap-4">
                <MapPin className="h-8 w-8 text-primary shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="mt-1 text-lg font-semibold text-gray-900">
                    {event.location}
                  </p>
                </div>
              </div>
            </Card>

            {/* Venue */}
            <Card className="p-6 sm:col-span-2">
              <div className="flex item-center gap-4">
                <Building className="h-8 w-8 text-primary shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-gray-600">Venue</p>
                  <p className="mt-1 text-lg font-semibold text-gray-900">
                    {event.venue}
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 sm:col-span-2">
              <div className="flex item-center gap-4">
                <Armchair className="h-8 w-8 text-primary shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-gray-600">Total Seats</p>
                  <p className="mt-1 text-lg font-semibold text-success">
                    {event.seats}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Separator />

          {/* Description */}
          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              About This Event
            </h2>
            <p className="whitespace-pre-wrap text-lg leading-relaxed text-gray-700">
              {event.description}
            </p>
          </div>
        </div>

        {/* Sidebar - Right Section */}
        <div className="space-y-6">
          {/* Quick Info Card */}
          <Card className="p-6">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-gray-600">Price</p>
                <p className="mt-2 text-4xl font-bold text-accent">
                  ${event.price}
                  {event.price === 0 && <span className="text-lg">FREE</span>}
                </p>
              </div>

              <Separator />

              {/* Organizer Info */}
              <div>
                <p className="mb-4 text-sm font-medium text-gray-600">
                  Organized By
                </p>
                <div className="space-y-3 rounded-lg bg-gray-50 p-4">
                  <div className="flex items-center gap-3">
                    <User className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-gray-900">
                      {event.organizer.name}
                    </span>
                  </div>
                  <a
                    href={`mailto:${event.organizer.email}`}
                    className="flex items-center gap-3 text-primary hover:underline"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="break-all text-sm">
                      {event.organizer.email}
                    </span>
                  </a>
                </div>
              </div>

              <Separator />

              {/* Share Buttons */}
              <div>
                <p className="mb-3 text-sm font-medium text-gray-600">Share</p>
                <div className="flex gap-3">
                  <Link
                    href="#"
                    className="rounded-full border p-2 text-gray-600 transition hover:border-primary hover:text-primary"
                  >
                    <FaFacebook size={18} />
                  </Link>

                  <Link
                    href="#"
                    className="rounded-full border p-2 text-gray-600 transition hover:border-primary hover:text-primary"
                  >
                    <FaInstagram size={18} />
                  </Link>

                  <Link
                    href="#"
                    className="rounded-full border p-2 text-gray-600 transition hover:border-primary hover:text-primary"
                  >
                    <FaLinkedinIn size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </Card>

          {/* Back Button */}
          <Link href="/explore" className="w-full">
            <Button
              variant="bordered"
              endContent={<ArrowRight size={20} />}
              className="w-full h-10"
            >
              Back to Events
            </Button>
          </Link>
        </div>
      </div>

      {/* Related Events */}
      {relatedEvents.length > 0 && (
        <div className="space-y-6 mt-20">
          <div className="flex items-center gap-3 justify-between">
            <h2 className="text-3xl font-bold text-gray-900">
              More Events in {event.category}
            </h2>
            <Link href={`/events`}>
              <Button
                variant="light"
                color="secondary"
                endContent={<ArrowRight size={18} />}
                className="px-2 w-30 h-10"
              >
                View All
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedEvents.map((relatedEvent) => (
              <EventCard
                key={relatedEvent._id}
                id={relatedEvent._id}
                title={relatedEvent.title}
                image={relatedEvent.image}
                category={relatedEvent.category}
                date={relatedEvent.date}
                location={relatedEvent.location}
                price={relatedEvent.price}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
