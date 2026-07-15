"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import authClient from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";

export default function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const { error } = await authClient.signIn.email({
        email,
        password,
      });

      if (error) {
        console.error("Login error:", error);
        setIsSubmitting(false);
        return;
      }

      router.push("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <Input
        name="email"
        type="email"
        label="Email Address"
        placeholder="you@example.com"
        autoComplete="email"
        required
      />

      <div className="space-y-2">
        <Input
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          autoComplete="current-password"
          required
        />

        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-sm font-medium text-primary hover:text-secondary"
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </button>
        </div>
      </div>

      <Button
        type="submit"
        color="primary"
        className="h-10 w-full"
        isLoading={isSubmitting}
        isDisabled={isSubmitting}
      >
        {isSubmitting ? "Signing in..." : "Login"}
      </Button>

      <div className="relative my-5">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-200"></span>
        </div>

        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-sm text-gray-500">OR</span>
        </div>
      </div>

      <Button
        type="button"
        onClick={handleGoogleSignin}
        className="h-10 w-full font-semibold"
      >
        <FcGoogle className="text-xl" />
        Sign in with Google
      </Button>
    </form>
  );
}
