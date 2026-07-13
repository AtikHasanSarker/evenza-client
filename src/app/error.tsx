"use client";

import React, { useEffect } from "react";
import { Button } from "@heroui/react";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to console or remote monitoring
    console.error("Application error boundary:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] flex-1 px-4 text-center py-12">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-amber-50 text-amber-500 mb-6 shadow-soft-sm">
        <AlertTriangle size={32} />
      </div>
      <h2 className="text-2xl font-bold font-heading text-slate-900 mb-2">
        Something went wrong!
      </h2>
      <p className="text-slate-600 max-w-md mb-8">
        An unexpected error occurred while loading this page. Please try again or refresh the browser.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button
          variant="primary"
          onPress={() => reset()}
          className="font-semibold btn-premium"
        >
          Try Again
        </Button>
        <Button
          variant="secondary"
          onPress={() => window.location.reload()}
          className="font-semibold btn-premium"
        >
          Refresh Page
        </Button>
      </div>
    </div>
  );
}
