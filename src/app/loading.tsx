import React from "react";
import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] flex-1 py-12 gap-4">
      <Spinner size="lg" />
      <span className="text-slate-500 font-medium font-heading">Loading Evenza...</span>
    </div>
  );
}
