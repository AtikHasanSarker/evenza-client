import React from "react";
import { Spinner } from "@heroui/react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  label?: string;
  variant?: "inline" | "card" | "fullpage";
}

export default function LoadingSpinner({
  size = "md",
  color = "primary",
  label,
  variant = "inline",
}: LoadingSpinnerProps) {
  const spinnerColor = color === "danger"
    ? "danger"
    : color === "success"
      ? "success"
      : color === "warning"
        ? "warning"
        : "current";

  if (variant === "fullpage") {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-slate-50/80 backdrop-blur-sm z-50 animate-fade-in">
        <Spinner size="lg" color={spinnerColor} />
        {label && (
          <span className="mt-4 text-slate-600 font-semibold font-heading animate-pulse">
            {label}
          </span>
        )}
      </div>
    );
  }

  if (variant === "card") {
    return (
      <div className="flex flex-col items-center justify-center p-8 w-full min-h-50 gap-3">
        <Spinner size={size} color={spinnerColor} />
        {label && (
          <span className="text-sm text-slate-500 font-medium font-heading">
            {label}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Spinner size={size} color={spinnerColor} />
      {label && (
        <span className="text-sm text-slate-600 font-medium font-sans">
          {label}
        </span>
      )}
    </div>
  );
}
