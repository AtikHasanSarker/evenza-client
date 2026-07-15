"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button, Input, Select } from "@heroui/react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import EventCard from "@/components/ui/EventCard";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { useEvents } from "@/hooks/useEvents";

const categories = [
  { label: "All Categories", value: "" },
  { label: "Technology", value: "technology" },
  { label: "Music", value: "music" },
  { label: "Sports", value: "sports" },
  { label: "Business", value: "business" },
  { label: "Art", value: "art" },
  { label: "Education", value: "education" },
];

export default function ExploreEventsPage() {
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.get("page") || "1")
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [tempSearch, setTempSearch] = useState("");

  const { events, isLoading, error, pagination } = useEvents({
    page: currentPage,
    limit: 12,
    category: selectedCategory,
    search: searchQuery,
  });

  const handleSearch = () => {
    setSearchQuery(tempSearch);
    setCurrentPage(1);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && pagination && newPage <= pagination.pages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="space-y-8 py-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Explore Events</h1>
        <p className="mt-2 text-gray-600">
          Discover and attend amazing events in your area
        </p>
      </div>

      {/* Filters Section */}
      <div className="space-y-4 rounded-xl border border-gray-200 bg-white p-6">
        <div className="grid gap-4 md:grid-cols-3">
          {/* Search Input */}
          <div className="md:col-span-2">
            <Input
              placeholder="Search events by title..."
              value={tempSearch}
              onChange={(e) => setTempSearch(e.target.value)}
              onKeyPress={handleKeyPress}
              startContent={<Search size={18} className="text-gray-400" />}
              className="w-full"
            />
          </div>

          {/* Search Button */}
          <Button
            onClick={handleSearch}
            color="primary"
            className="w-full"
            size="lg"
          >
            Search
          </Button>
        </div>

        {/* Category Filter */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Category
          </label>
          <Select
            placeholder="Select a category"
            selectedKeys={selectedCategory ? [selectedCategory] : ["all"]}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="w-full"
          >
            {/* {CATEGORIES.map((category) => (
              <SelectItem key={category.value || "all"} value={category.value || "all"}>
                {category.label}
              </SelectItem>
            ))} */}
          </Select>
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex justify-center py-20">
          <LoadingSpinner />
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
          <p className="text-red-700">
            Failed to load events. Please try again later.
          </p>
        </div>
      )}

      {/* Events Grid */}
      {!isLoading && !error && events.length > 0 && (
        <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

          {/* Pagination Controls */}
          {pagination && pagination.pages > 1 && (
            <div className="flex items-center justify-center gap-4">
              <Button
                isIconOnly
                variant="outline"
                onClick={() => handlePageChange(currentPage - 1)}
                isDisabled={currentPage === 1}
              >
                <ChevronLeft size={20} />
              </Button>

              <div className="flex items-center gap-2">
                {Array.from({ length: Math.min(pagination.pages, 5) }).map(
                  (_, index) => {
                    const pageNum =
                      pagination.pages <= 5 ? index + 1 : currentPage - 2 + index;

                    if (pageNum < 1 || pageNum > pagination.pages) {
                      return null;
                    }

                    return (
                      <Button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        variant={pageNum === currentPage ? "solid" : "outline"}
                        color={pageNum === currentPage ? "primary" : "default"}
                        isIconOnly
                      >
                        {pageNum}
                      </Button>
                    );
                  }
                )}
              </div>

              <Button
                isIconOnly
                variant="outline"
                onClick={() => handlePageChange(currentPage + 1)}
                isDisabled={currentPage === pagination.pages}
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          )}

          {/* Results Info */}
          <div className="text-center text-sm text-gray-600">
            Showing {(currentPage - 1) * pagination.limit + 1} to{" "}
            {Math.min(currentPage * pagination.limit, pagination.total)} of{" "}
            {pagination.total} events
          </div>
        </>
      )}

      {/* No Results State */}
      {!isLoading && !error && events.length === 0 && (
        <div className="rounded-xl border border-gray-200 bg-white p-12 text-center">
          <p className="text-gray-600">
            No events found. Try adjusting your filters or search query.
          </p>
        </div>
      )}
    </div>
  );
}
