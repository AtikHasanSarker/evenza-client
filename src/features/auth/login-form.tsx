'use client';

import { useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "@heroui/react";
import { Eye, EyeOff } from "lucide-react";
import { z } from "zod";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import authService from "@/services/auth";

const loginSchema = z.object({
  email: z.string().trim().email("Enter a valid email address."),
  password: z.string().min(8, "Password must be at least 8 characters."),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const {
    control,
    handleSubmit,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const passwordToggleLabel = useMemo(() => (showPassword ? "Hide password" : "Show password"), [showPassword]);

  const onSubmit = async (_values: LoginFormValues) => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const res = await authService.login({ email: _values.email, password: _values.password });
      setSubmitMessage({ type: "success", text: res?.message || "Signed in" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDemoLogin = () => {
    setValue("email", "demo@evenza.com", { shouldValidate: true });
    setValue("password", "DemoPass123!", { shouldValidate: true });
    setValue("rememberMe", true, { shouldValidate: true });
    setFocus("password");
    setSubmitMessage({
      type: "success",
      text: "Demo credentials filled in. Connect this action to Better Auth later.",
    });
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
              placeholder="Enter your password"
              autoComplete="current-password"
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

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Controller
          name="rememberMe"
          control={control}
          render={({ field }) => (
            <Checkbox isSelected={Boolean(field.value)} onChange={(value) => field.onChange(value)}>
              <span className="text-sm text-slate-600">Remember me</span>
            </Checkbox>
          )}
        />

        <button
          type="button"
          className="text-sm font-semibold text-primary transition hover:text-secondary"
        >
          Forgot password?
        </button>
      </div>

      <div className="flex flex-col gap-3 pt-2">
        <Button type="submit" color="primary" className="w-full" isLoading={isSubmitting} isDisabled={isSubmitting}>
          {isSubmitting ? "Signing in..." : "Login"}
        </Button>

        <Button type="button" color="accent" variant="bordered" className="w-full" onClick={handleDemoLogin}>
          Demo Login
        </Button>
      </div>
    </form>
  );
}
