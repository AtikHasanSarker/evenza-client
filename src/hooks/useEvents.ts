"use client";

import { useState, useEffect } from "react";
import { fetchEvents, Event, EventsResponse } from "@/services/api/events";

interface UseEventsOptions {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
}

interface UseEventsReturn {
  events: Event[];
  isLoading: boolean;
  error: Error | null;
  pagination: {
    total: number;
    page: number;
    limit: number;
    pages: number;
  } | null;
  refetch: () => void;
}

export const useEvents = (options: UseEventsOptions = {}): UseEventsReturn => {
  const { page = 1, limit = 12, category, search } = options;
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [pagination, setPagination] = useState<EventsResponse["pagination"] | null>(null);

  const fetchEventsData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetchEvents(page, limit, category, search);
      setEvents(response.data);
      setPagination(response.pagination);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to fetch events"));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEventsData();
  }, [page, limit, category, search]);

  return {
    events,
    isLoading,
    error,
    pagination,
    refetch: fetchEventsData,
  };
};
