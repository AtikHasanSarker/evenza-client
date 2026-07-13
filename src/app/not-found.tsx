import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] flex-1 px-4 text-center py-12">
      <h1 className="text-9xl font-bold font-heading text-slate-200 tracking-wider">
        404
      </h1>
      <h2 className="text-3xl font-bold font-heading text-slate-900 mt-4 mb-2">
        Page Not Found
      </h2>
      <p className="text-slate-600 max-w-md mb-8">
        Sorry, we couldn't find the page you are looking for. It might have been moved, deleted, or never existed.
      </p>
      <Link
        href="/"
        className="btn-premium px-6 py-2.5 bg-primary text-white hover:bg-blue-700 shadow-soft-sm flex items-center justify-center gap-2 w-fit mx-auto cursor-pointer"
      >
        <Home size={18} />
        Back to Home
      </Link>
    </div>
  );
}
