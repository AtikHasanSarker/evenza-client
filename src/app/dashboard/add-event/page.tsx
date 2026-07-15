"use client";

import AddEventForm from "@/components/dashboard/AddEventForm";
import { Card } from "@heroui/react";

export default function AddEventPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Add Event</h1>
        <p className="mt-2 text-gray-600">
          Create a new event and share it with the community.
        </p>
      </div>

      <Card className="p-8">
        <AddEventForm />
      </Card>
    </div>
  );
}
