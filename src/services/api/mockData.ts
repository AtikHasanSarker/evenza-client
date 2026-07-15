import { Event, EventsResponse } from "@/services/api/events";

/**
 * Mock events data for testing
 * Replace with real API calls when backend is ready
 */
const mockEvents: Event[] = [
  {
    id: "1",
    title: "React Workshop 2024",
    image: "https://images.unsplash.com/photo-1540575467063-178f50002fbb?w=500&h=300&fit=crop",
    category: "technology",
    date: "2024-08-15",
    location: "San Francisco, CA",
    price: 49,
    description: "Learn React from industry experts",
    venue: "Tech Hub Center",
    organizer: {
      name: "Tech Academy",
      email: "info@techacademy.com",
    },
  },
  {
    id: "2",
    title: "Web Development Conference",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
    category: "technology",
    date: "2024-08-20",
    location: "New York, NY",
    price: 99,
    description: "Annual web development conference",
    venue: "Convention Center",
    organizer: {
      name: "Web Developers Inc",
      email: "contact@webdevsinc.com",
    },
  },
  {
    id: "3",
    title: "Jazz Night at the Venue",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=300&fit=crop",
    category: "music",
    date: "2024-08-25",
    location: "Los Angeles, CA",
    price: 65,
    description: "An evening of smooth jazz music",
    venue: "Blue Note Jazz Club",
    organizer: {
      name: "Live Music Events",
      email: "bookings@livemusicevents.com",
    },
  },
  {
    id: "4",
    title: "Business Leadership Summit",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    category: "business",
    date: "2024-09-01",
    location: "Chicago, IL",
    price: 149,
    description: "Network with industry leaders",
    venue: "Hilton Downtown",
    organizer: {
      name: "Business Quarterly",
      email: "events@businessquarterly.com",
    },
  },
  {
    id: "5",
    title: "Sports Festival 2024",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=300&fit=crop",
    category: "sports",
    date: "2024-09-05",
    location: "Boston, MA",
    price: 39,
    description: "Multi-sport festival for all ages",
    venue: "Sports Complex",
    organizer: {
      name: "Sports Authority",
      email: "events@sportsauth.com",
    },
  },
  {
    id: "6",
    title: "Art Exhibition Opening",
    image: "https://images.unsplash.com/photo-1578321272176-0f74c16c1c44?w=500&h=300&fit=crop",
    category: "art",
    date: "2024-09-10",
    location: "Miami, FL",
    price: 0,
    description: "Contemporary art exhibition",
    venue: "Modern Art Gallery",
    organizer: {
      name: "Art Institute",
      email: "exhibitions@artinst.com",
    },
  },
  {
    id: "7",
    title: "TypeScript Advanced Patterns",
    image: "https://images.unsplash.com/photo-1516321318423-f06f70d504d0?w=500&h=300&fit=crop",
    category: "technology",
    date: "2024-09-12",
    location: "Seattle, WA",
    price: 79,
    description: "Master advanced TypeScript patterns",
    venue: "Dev Academy",
    organizer: {
      name: "Dev Academy",
      email: "courses@devacademy.com",
    },
  },
  {
    id: "8",
    title: "Educational Summit",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    category: "education",
    date: "2024-09-15",
    location: "Austin, TX",
    price: 89,
    description: "Latest trends in education",
    venue: "University Convention",
    organizer: {
      name: "Education Plus",
      email: "info@edplus.com",
    },
  },
  {
    id: "9",
    title: "Rock Concert",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop",
    category: "music",
    date: "2024-09-20",
    location: "Denver, CO",
    price: 75,
    description: "Live rock music performance",
    venue: "Red Rocks Amphitheatre",
    organizer: {
      name: "Live Events Co",
      email: "booking@liveevents.com",
    },
  },
  {
    id: "10",
    title: "Digital Marketing Bootcamp",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    category: "business",
    date: "2024-09-22",
    location: "Phoenix, AZ",
    price: 129,
    description: "Intensive digital marketing training",
    venue: "Business Center",
    organizer: {
      name: "Marketing Masters",
      email: "admin@marketingmasters.com",
    },
  },
  {
    id: "11",
    title: "Marathon Race Day",
    image: "https://images.unsplash.com/photo-1469394662684-2b8fd3d3a01d?w=500&h=300&fit=crop",
    category: "sports",
    date: "2024-09-25",
    location: "Portland, OR",
    price: 65,
    description: "Annual city marathon",
    venue: "Downtown Start Line",
    organizer: {
      name: "Running Community",
      email: "register@runningcommunity.com",
    },
  },
  {
    id: "12",
    title: "Photography Workshop",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=300&fit=crop",
    category: "art",
    date: "2024-09-28",
    location: "Santa Fe, NM",
    price: 59,
    description: "Learn professional photography",
    venue: "Art Studio",
    organizer: {
      name: "Photo Academy",
      email: "classes@photoacademy.com",
    },
  },
];

/**
 * Mock API response for events list
 * Simulates pagination and filtering
 */
export const mockFetchEvents = (
  page: number = 1,
  limit: number = 12,
  category?: string,
  search?: string
): EventsResponse => {
  let filtered = [...mockEvents];

  // Filter by category
  if (category && category !== "all" && category !== "") {
    filtered = filtered.filter(
      (event) => event.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Filter by search query
  if (search) {
    filtered = filtered.filter(
      (event) =>
        event.title.toLowerCase().includes(search.toLowerCase()) ||
        event.description.toLowerCase().includes(search.toLowerCase()) ||
        event.location.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Calculate pagination
  const total = filtered.length;
  const pages = Math.ceil(total / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedEvents = filtered.slice(startIndex, endIndex);

  return {
    success: true,
    data: paginatedEvents,
    pagination: {
      total,
      page,
      limit,
      pages,
    },
  };
};

/**
 * Mock API response for single event
 */
export const mockFetchEventById = (id: string) => {
  const event = mockEvents.find((e) => e.id === id);

  if (!event) {
    throw new Error("Event not found");
  }

  return {
    success: true,
    data: event,
  };
};
