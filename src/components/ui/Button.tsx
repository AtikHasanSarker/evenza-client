import React from "react";
import { LoaderCircle } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "accent" | "danger" | "success" | "warning" | "default";
  variant?: "solid" | "bordered" | "light" | "flat";
  isLoading?: boolean;
  isDisabled?: boolean;
}

export default function Button({
  children,
  color = "primary",
  className = "",
  variant = "solid",
  isLoading = false,
  isDisabled = false,
  type = "button",
  ...props
}: ButtonProps) {
  let colorClasses = "";

  if (color === "accent") {
    if (variant === "bordered") {
      colorClasses = "border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B]/10";
    } else if (variant === "light") {
      colorClasses = "text-[#F59E0B] hover:bg-[#F59E0B]/10";
    } else if (variant === "flat") {
      colorClasses = "bg-[#F59E0B]/20 text-[#D97706]";
    } else {
      colorClasses = "bg-[#F59E0B] text-slate-900 hover:bg-[#D97706] font-semibold";
    }
  } else if (color === "secondary") {
    colorClasses = "bg-[#7C3AED] text-white hover:bg-[#6D28D9]";
  } else if (color === "danger") {
    colorClasses = "bg-rose-600 text-white hover:bg-rose-700";
  } else if (color === "success") {
    colorClasses = "bg-emerald-600 text-white hover:bg-emerald-700";
  } else if (color === "warning") {
    colorClasses = "bg-amber-500 text-slate-900 hover:bg-amber-600";
  } else {
    colorClasses = "bg-primary text-white hover:bg-blue-700";
  }

  const baseClasses = `font-heading font-semibold rounded-[12px] transition-all duration-200 active:scale-[0.98] ${colorClasses} ${className}`;

  return (
    <button
      type={type}
      className={baseClasses}
      disabled={isDisabled || isLoading}
      {...props}
    >
      <span className="inline-flex items-center justify-center gap-2">
        {children}
        {isLoading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : null}
      </span>
    </button>
  );
}
