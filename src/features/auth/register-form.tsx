'use client';

import { useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "@heroui/react";
import { Eye, EyeOff } from "lucide-react";
import { z } from "zod";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const registerSchema = z
  .object({
    fullName: z.string().trim().min(2, "Full name must be at least 2 characters."),
    email: z.string().trim().email("Enter a valid email address."),
    password: z.string().min(8, "Password must be at least 8 characters."),
    confirmPassword: z.string().min(8, "Please confirm your password."),
    acceptTerms: z.boolean().refine((value) => value, {
      message: "You must accept the terms and conditions.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  const passwordToggleLabel = useMemo(() => (showPassword ? "Hide password" : "Show password"), [showPassword]);
  const confirmPasswordToggleLabel = useMemo(
    () => (showConfirmPassword ? "Hide confirm password" : "Show confirm password"),
    [showConfirmPassword]
  );

  const onSubmit = async (values: RegisterFormValues) => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      await new Promise((resolve) => window.setTimeout(resolve, 700));
      setSubmitMessage({
        type: "success",
        text: `Thanks, ${values.fullName.split(" ")[0] || "there"}! Your account details are ready for Better Auth integration.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      {submitMessage && (
        <div
          className={`rounded-[12px] border px-4 py-3 text-sm ${
            submitMessage.type === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border-rose-200 bg-rose-50 text-rose-700"
          }`}
        >
          {submitMessage.text}
        </div>
      )}

      <Controller
        name="fullName"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label="Full name"
            placeholder="Taylor Morgan"
            autoComplete="name"
            isRequired
            isInvalid={Boolean(errors.fullName)}
            errorMessage={errors.fullName?.message}
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label="Email address"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            isRequired
            isInvalid={Boolean(errors.email)}
            errorMessage={errors.email?.message}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <div className="space-y-2">
            <Input
              {...field}
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="Create a strong password"
              autoComplete="new-password"
              isRequired
              isInvalid={Boolean(errors.password)}
              errorMessage={errors.password?.message}
            />
            <div className="flex justify-end">
              <button
                type="button"
                aria-label={passwordToggleLabel}
                className="text-sm font-semibold text-primary transition hover:text-secondary"
                onClick={() => setShowPassword((value) => !value)}
              >
                {showPassword ? "Hide password" : "Show password"}
              </button>
            </div>
          </div>
        )}
      />

      <Controller
        name="confirmPassword"
        control={control}
        render={({ field }) => (
          <div className="space-y-2">
            <Input
              {...field}
              label="Confirm password"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-enter your password"
              autoComplete="new-password"
              isRequired
              isInvalid={Boolean(errors.confirmPassword)}
              errorMessage={errors.confirmPassword?.message}
            />
            <div className="flex justify-end">
              <button
                type="button"
                aria-label={confirmPasswordToggleLabel}
                className="text-sm font-semibold text-primary transition hover:text-secondary"
                onClick={() => setShowConfirmPassword((value) => !value)}
              >
                {showConfirmPassword ? "Hide password" : "Show password"}
              </button>
            </div>
          </div>
        )}
      />

      <Controller
        name="acceptTerms"
        control={control}
        render={({ field }) => (
          <Checkbox isSelected={Boolean(field.value)} onChange={(value) => field.onChange(value)}>
            <span className="text-sm text-slate-600">
              I accept the terms and conditions.
            </span>
          </Checkbox>
        )}
      />
      {errors.acceptTerms && <p className="-mt-2 text-sm text-danger">{errors.acceptTerms.message}</p>}

      <Button type="submit" color="primary" className="w-full" isLoading={isSubmitting} isDisabled={isSubmitting}>
        {isSubmitting ? "Creating account..." : "Create account"}
      </Button>
    </form>
  );
}
