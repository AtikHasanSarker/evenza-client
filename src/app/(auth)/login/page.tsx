import type { Metadata } from "next";
import AuthPageShell from "@/features/auth/auth-page-shell";
import LoginForm from "@/features/auth/login-form";

export const metadata: Metadata = {
  title: "Login | EventHub",
  description: "Sign in to EventHub and continue managing your events.",
};

export default function LoginPage() {
  return (
    <AuthPageShell
      title="Welcome back"
      description="Sign in to continue managing your events and explore what EventHub has to offer."
      footerText="New here?"
      footerLinkText="Create an account"
      footerHref="/register"
    >
      <LoginForm />
    </AuthPageShell>
  );
}
