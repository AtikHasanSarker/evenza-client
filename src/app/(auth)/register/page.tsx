import type { Metadata } from "next";
import AuthPageShell from "@/features/auth/auth-page-shell";
import RegisterForm from "@/features/auth/register-form";

export const metadata: Metadata = {
  title: "Register | EventHub",
  description: "Create your EventHub account and start discovering and managing events.",
};

export default function RegisterPage() {
  return (
    <AuthPageShell
      title="Create your account"
      description="Join EventHub to publish events, manage your listings, and keep everything in one place."
      footerText="Already have an account?"
      footerLinkText="Log in"
      footerHref="/login"
    >
      <RegisterForm />
    </AuthPageShell>
  );
}
