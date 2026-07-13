import React from "react";
import { Card as HeroCard, type CardProps as HeroCardProps } from "@heroui/react";

export interface CardProps extends HeroCardProps {
  elevation?: "sm" | "md" | "lg";
  hoverEffect?: "none" | "lift";
}

export default function Card({
  children,
  elevation = "md",
  hoverEffect = "none",
  className = "",
  ...props
}: CardProps) {
  const shadowClasses = {
    sm: "shadow-soft-sm",
    md: "shadow-soft-md",
    lg: "shadow-soft-lg",
  }[elevation];

  const hoverClasses = hoverEffect === "lift"
    ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg"
    : "";

  return (
    <HeroCard
      className={`rounded-[20px] bg-white border border-slate-100 ${shadowClasses} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </HeroCard>
  );
}

export function CardHeader({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`px-6 pt-6 pb-2 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardBody({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`px-6 py-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`px-6 pb-6 pt-2 border-t border-slate-50 ${className}`} {...props}>
      {children}
    </div>
  );
}
