"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import authClient from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { Label, TextField } from "@heroui/react";

export default function RegisterForm() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const { data, error } = await authClient.signUp.email({
        name: fullName,
        email,
        password,
      });

      if (error) {
        return;
      }
      if (data?.token) {
        toast.success("Account created successfully!");
      }
      setIsSubmitting(false);

      router.push("/dashboard");
    } catch (error) {
      console.error("Signup error:", error);
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
    toast.success("Account created successfully!");
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <TextField className="w-full" isRequired>
        <Label>Full Name</Label>

        <Input name="fullName" placeholder="John Doe" autoComplete="name" />
      </TextField>

      <TextField className="w-full" isRequired>
        <Label>Email Address</Label>

        <Input
          name="email"
          type="email"
          placeholder="john@example.com"
          autoComplete="email"
        />
      </TextField>

      <div className="space-y-2">
        <TextField className="w-full" isRequired>
          <Label>Password</Label>

          <Input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            autoComplete="new-password"
          />
        </TextField>

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
        {isSubmitting ? "Creating Account..." : "Create Account"}
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
