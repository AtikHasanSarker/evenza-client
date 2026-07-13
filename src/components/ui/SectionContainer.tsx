import React from "react";

interface SectionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  as?: React.ElementType;
}

export default function SectionContainer({
  children,
  className = "",
  as: Component = "section",
  ...props
}: SectionContainerProps) {
  return (
    <Component
      className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
