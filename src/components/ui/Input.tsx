import React from "react";
import { Input as HeroInput, type InputProps as HeroInputProps } from "@heroui/react";

export interface InputProps extends Omit<HeroInputProps, "radius" | "label" | "classNames"> {
  label?: string;
  errorMessage?: string;
  isRequired?: boolean;
  isInvalid?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", label, errorMessage, isRequired, isInvalid, ...props }, ref) => {
    return (
      <div className="w-full">
        {label ? (
          <label className="mb-1 block text-sm font-semibold text-slate-700">
            {label}
            {isRequired ? <span className="ml-1 text-danger">*</span> : null}
          </label>
        ) : null}
        <HeroInput
          ref={ref}
          className={`w-full ${className}`}
          variant={isInvalid ? "primary" : undefined}
          {...props}
        />
        {errorMessage ? <p className="mt-1 text-xs font-medium text-danger">{errorMessage}</p> : null}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
