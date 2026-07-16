import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5000";

export interface Event {
  _id: string;
  title: string;
  image: string;
  category: string;
  date: string;
  location: string;
  price: number;
  seats: number;
  description: string;
  venue: string;
  organizer: {
    name: string;
    email: string;
  };
}

export interface EventsResponse {
  success: boolean;
  data: Event[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    pages: number;
  };
}

export interface EventDetailsResponse {
  success: boolean;
  data: Event;
}

/**
 * Fetch events with pagination and filtering
 */
export const fetchEvents = async (
  page: number = 1,
  limit: number = 12,
  category?: string,
  search?: string
): Promise<EventsResponse> => {
  try {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });

    if (category) params.append("category", category);
    if (search) params.append("search", search);

    const response = await axios.get<EventsResponse>(
      `${API_BASE_URL}/events?${params.toString()}`
    );

    return response.data;
  } catch (error) {
    console.error("Failed to fetch events:", error);
    throw error;
  }
};

/**
 * Fetch a single event by ID
 */
export const fetchEventById = async (id: string): Promise<Event> => {
  try {
    const response = await axios.get<Event>(`${API_BASE_URL}/events/${id}`);

    return response.data;
  } catch (error) {
    console.error("Failed to fetch event details:", error);
    throw error;
  }
};


/**
 * Fetch events by user ID
 */
export const fetchEventByUserId = async (userId: string): Promise<EventsResponse> => {
  try {
    const response = await axios.get<EventsResponse>(`${API_BASE_URL}/events/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch event details:", error);
    throw error;
  }
};

/**
 * Create a new event (requires authentication)
 */
export const createEvent = async (eventData: Partial<Event>): Promise<EventDetailsResponse> => {
  try {
    const response = await axios.post<EventDetailsResponse>(
      `${API_BASE_URL}/events`,
      eventData
    );

    return response.data;
  } catch (error) {
    console.error("Failed to create event:");
    throw error;
  }
};

/**
 * Delete an event (requires authentication)
 */
export const deleteEvent = async (id: string): Promise<{ success: boolean }> => {
  try {
    const response = await axios.delete<{ success: boolean }>(
      `${API_BASE_URL}/events/${id}`
    );

    return response.data;
  } catch (error) {
    console.error("Failed to delete event:", error);
    throw error;
  }
};


//featured event
export const fetchFeaturedEvents = async (): Promise<Event[]> => {
  const response = await axios.get<Event[]>(`${API_BASE_URL}/featured-events`);

  return response.data;
};
