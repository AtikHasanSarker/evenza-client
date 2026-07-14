import TestimonialCard from "../ui/TestimonialCard";

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Event Attendee",
    image: "/images/users/user-1.jpg",
    review:
      "Evenza made it incredibly easy to discover local events. The platform is simple, clean, and everything I needed was just a few clicks away.",
  },
  {
    name: "Tanvir Hasan",
    role: "Event Organizer",
    image: "/images/users/user-2.jpg",
    review:
      "Publishing and managing events has never been this easy. Evenza helped me reach more participants without any hassle.",
  },
  {
    name: "Nusrat Jahan",
    role: "Community Member",
    image: "/images/users/user-3.jpg",
    review:
      "I love how organized the platform feels. Searching events and finding the right one takes only a few seconds.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            What Our Users Say
          </h2>

          <p className="mt-3 text-gray-600">
            Hear what attendees and organizers have to say about their
            experience with Evenza.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
