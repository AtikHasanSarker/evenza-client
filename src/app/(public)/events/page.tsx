"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import {
  Label,
  ListBox,
  Select,
} from "@heroui/react";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
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
    Number(searchParams.get("page")) || 1,
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [tempSearch, setTempSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

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

  const handlePageChange = (page: number) => {
    if (!pagination) return;

    if (page >= 1 && page <= pagination.pages) {
      setCurrentPage(page);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="space-y-8 py-8">
      {/* Page Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">Explore Events</h1>

        <p className="mt-2 text-default-500">
          Discover amazing events happening around you.
        </p>
      </div>

      {/* Search & Filter */}
      <div className="rounded-2xl border bg-white p-6 space-y-5">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <Input
              placeholder="Search events..."
              value={tempSearch}
              onChange={(e) => setTempSearch(e.target.value)}
              onKeyDown={handleKeyDown}
              startContent={<Search size={18} className="text-default-400" />}
            />
          </div>

          <Button onClick={handleSearch} className="w-full">
            Search
          </Button>
        </div>

        <Select
          placeholder="Select Category"
          selectedKey={selectedCategory || null}
          onSelectionChange={(key) => {
            handleCategoryChange((key as string) ?? "");
          }}
        >
          <Label>Category</Label>

          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>

          <Select.Popover>
            <ListBox>
              {categories.map((category) => (
                <ListBox.Item
                  key={category.value}
                  id={category.value}
                  textValue={category.label}
                >
                  {category.label}
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>
      </div>
      {/* Loading */}
      {isLoading && (
        <div className="flex justify-center py-16">
          <LoadingSpinner />
        </div>
      )}

      {/* Error */}
      {!isLoading && error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
          <p className="text-red-600">
            Failed to load events. Please try again.
          </p>
        </div>
      )}

      {/* Events */}
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

          {/* Pagination */}
          {pagination && pagination.pages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-2">
              <Button
                variant="bordered"
                onClick={() => handlePageChange(currentPage - 1)}
                isDisabled={currentPage === 1}
              >
                Previous
              </Button>

              {Array.from({ length: pagination.pages }, (_, i) => i + 1).map(
                (page) => (
                  <Button
                    key={page}
                    color={page === currentPage ? "primary" : "default"}
                    variant={page === currentPage ? "solid" : "bordered"}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </Button>
                ),
              )}

              <Button
                variant="bordered"
                onClick={() => handlePageChange(currentPage + 1)}
                isDisabled={currentPage === pagination.pages}
              >
                Next
              </Button>
            </div>
          )}

          {/* Result Count */}
          {pagination && (
            <div className="text-center text-sm text-default-500">
              Showing {(currentPage - 1) * pagination.limit + 1}
              {" - "}
              {Math.min(
                currentPage * pagination.limit,
                pagination.total,
              )} of {pagination.total} events
            </div>
          )}
        </>
      )}

      {/* Empty State */}
      {!isLoading && !error && events.length === 0 && (
        <div className="rounded-2xl border bg-white p-12 text-center">
          <h3 className="text-xl font-semibold">No Events Found</h3>

          <p className="mt-2 text-default-500">
            Try changing your search keyword or category.
          </p>
        </div>
      )}
    </div>
  );
}