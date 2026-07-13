import React from "react";
import { TextArea as HeroTextArea, type TextAreaProps as HeroTextAreaProps } from "@heroui/react";

export interface TextareaProps extends Omit<HeroTextAreaProps, "radius" | "label" | "classNames"> {
  label?: string;
  errorMessage?: string;
  isRequired?: boolean;
  isInvalid?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", label, errorMessage, isRequired, isInvalid, ...props }, ref) => {
    return (
      <div className="w-full">
        {label ? (
          <label className="mb-1 block text-sm font-semibold text-slate-700">
            {label}
            {isRequired ? <span className="ml-1 text-danger">*</span> : null}
          </label>
        ) : null}
        <HeroTextArea ref={ref} className={`w-full ${className}`} variant={isInvalid ? "primary" : undefined} {...props} />
        {errorMessage ? <p className="mt-1 text-xs font-medium text-danger">{errorMessage}</p> : null}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
