"use client";

import { Card } from "@heroui/react";

export default function ManageEventsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Manage Events</h1>
        <p className="mt-2 text-gray-600">
          View and manage all your published events.
        </p>
      </div>

      <Card className="p-8">
        <div className="text-center text-gray-500">
          <p>Manage Events list coming soon...</p>
        </div>
      </Card>
    </div>
  );
}
