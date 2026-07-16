import React from "react";
import {
  Input as HeroInput,
  type InputProps as HeroInputProps,
} from "@heroui/react";

export interface InputProps extends Omit<
  HeroInputProps,
  "radius" | "label" | "classNames"
> {
  label?: string;
  errorMessage?: string;
  isRequired?: boolean;
  isInvalid?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      label,
      errorMessage,
      isRequired,
      isInvalid = false,
      startContent,
      endContent,
      style,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-1 block text-sm font-semibold text-slate-700">
            {label}
            {isRequired && <span className="ml-1 text-red-500">*</span>}
          </label>
        )}

        <div className="relative">
          {startContent && (
            <div className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-default-400">
              {startContent}
            </div>
          )}

          <HeroInput
            ref={ref}
            {...props}
            className={`w-full ${className}`}
            style={{
              paddingLeft: startContent ? "2.75rem" : undefined,
              paddingRight: endContent ? "2.75rem" : undefined,
              ...style,
            }}
          />

          {endContent && (
            <div className="absolute right-3 top-1/2 z-10 -translate-y-1/2 text-default-400">
              {endContent}
            </div>
          )}
        </div>

        {isInvalid && errorMessage && (
          <p className="mt-1 text-xs font-medium text-red-500">
            {errorMessage}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
