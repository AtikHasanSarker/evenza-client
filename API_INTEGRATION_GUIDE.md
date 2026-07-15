# Explore Events Page - API Integration Guide

## Overview
The Explore Events page is set up with a flexible API structure that allows you to easily switch between mock data and real API endpoints.

## Current Setup

### Files Created
1. **Event API Service** - `src/services/api/events.ts`
   - Contains API functions for fetching events
   - Example API endpoint: `http://localhost:3001/api/events`

2. **Mock Data Service** - `src/services/api/mockData.ts`
   - Contains mock event data for testing and development
   - Supports filtering, searching, and pagination

3. **useEvents Hook** - `src/hooks/useEvents.ts`
   - Custom React hook for managing events data
   - Handles loading, error states, and pagination

4. **Explore Events Page** - `src/app/(public)/explore/page.tsx`
   - Main page with search, filters, and pagination
   - Responsive grid layout for event cards

## How to Switch from Mock Data to Real API

### Step 1: Update Environment Variables
Create or update `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

For production, update this to your production API URL.

### Step 2: Update the Events API Service
If your actual API has different endpoints or response structure, update `src/services/api/events.ts`:

```typescript
// Example: If your API returns different field names
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
```

### Step 3: Test with Real API
Once your backend is running, the app will automatically fetch from the real API if:
- `NEXT_PUBLIC_API_URL` environment variable is set
- The backend is running and accessible

## Mock Data Testing

To use mock data while developing the backend:

The app currently uses the real API service. To switch to mock data temporarily:

1. Update `src/hooks/useEvents.ts`:
```typescript
import { mockFetchEvents } from "@/services/api/mockData";

// Replace fetchEvents with mockFetchEvents in the hook
const fetchEventsData = async () => {
  try {
    setIsLoading(true);
    setError(null);
    const response = mockFetchEvents(page, limit, category, search);
    setEvents(response.data);
    setPagination(response.pagination);
  } catch (err) {
    setError(err instanceof Error ? err : new Error("Failed to fetch events"));
  } finally {
    setIsLoading(false);
  }
};
```

## Features Implemented

### ✅ Pagination
- First/Previous/Next/Last navigation buttons
- Page number buttons (showing up to 5 pages)
- Results counter showing current range
- Smooth scroll to top on page change

### ✅ Search Functionality
- Search by event title and description
- Press Enter or click Search button
- Resets to page 1 when searching

### ✅ Filtering
- Filter by category
- Multiple category options
- Auto-reset to page 1 when filtering

### ✅ Responsive Design
- Mobile-friendly layout
- Adapts from 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)
- Responsive search and filter bar

### ✅ Error Handling
- Loading state with spinner
- Error message display
- Empty state message

## API Response Format Expected

The app expects the following API response format:

```typescript
{
  success: boolean,
  data: Event[],
  pagination: {
    total: number,
    page: number,
    limit: number,
    pages: number
  }
}
```

## Event Object Structure

```typescript
{
  id: string,
  title: string,
  image: string,
  category: string,
  date: string,
  location: string,
  price: number,
  description: string,
  venue: string,
  organizer: {
    name: string,
    email: string
  }
}
```

## Backend API Endpoints Reference

When implementing the backend, create these endpoints:

### GET `/events`
- **Query Parameters:**
  - `page` (number): Page number for pagination
  - `limit` (number): Number of events per page
  - `category` (string, optional): Filter by category
  - `search` (string, optional): Search by title/description

- **Response:**
```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "total": 100,
    "page": 1,
    "limit": 12,
    "pages": 9
  }
}
```

### GET `/events/:id`
- **Response:**
```json
{
  "success": true,
  "data": {...}
}
```

### POST `/events`
- **Body:** Event object (requires authentication)
- **Response:** Created event object

### DELETE `/events/:id`
- **Response:**
```json
{
  "success": true
}
```

## Troubleshooting

### Events not loading
1. Check if `NEXT_PUBLIC_API_URL` is set correctly
2. Verify backend is running on the correct port
3. Check browser console for error messages
4. Ensure CORS is enabled on backend

### Pagination not working
1. Verify API returns correct `pagination` object
2. Check if `pages` calculation is correct
3. Ensure `limit` parameter is being sent to API

### Search/Filter not working
1. Verify category values match those in database
2. Check if API supports category and search parameters
3. Test with real event data in database

## Future Enhancements

- Add sorting options (by date, price)
- Add location-based filtering
- Add favorites/bookmarking feature
- Add event sharing functionality
- Real-time event updates
