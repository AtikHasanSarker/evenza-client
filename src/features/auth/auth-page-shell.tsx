'use client';

import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import Card, { CardBody, CardHeader } from "@/components/ui/Card";
import SectionContainer from "@/components/ui/SectionContainer";

interface AuthPageShellProps {
  title: string;
  description: string;
  footerText: string;
  footerLinkText: string;
  footerHref: string;
  children: ReactNode;
}

export default function AuthPageShell({
  title,
  description,
  footerText,
  footerLinkText,
  footerHref,
  children,
}: AuthPageShellProps) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.10),_transparent_35%),linear-gradient(135deg,_#f8fafc_0%,_#eef2ff_100%)] py-8 md:py-10">
      <SectionContainer as="div" className="py-4">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[24px] border border-slate-200 bg-white/80 p-8 shadow-soft-md backdrop-blur md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
              <Sparkles size={16} />
              EventHub Auth
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Discover, manage, and grow your events with confidence.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              The authentication experience is now powered by Better Auth with real sign-in and sign-up flows for your event platform.
            </p>
            <div className="mt-8 space-y-3 text-sm text-slate-600">
              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-3">
                <div className="mt-0.5 h-2.5 w-2.5 rounded-full bg-primary" />
                <span>Modern form experience with client-side validation and inline feedback.</span>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-3">
                <div className="mt-0.5 h-2.5 w-2.5 rounded-full bg-secondary" />
                <span>Responsive layout that adapts seamlessly across mobile, tablet, and desktop.</span>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-3">
                <div className="mt-0.5 h-2.5 w-2.5 rounded-full bg-accent" />
                <span>Real registration and login flow that creates sessions and redirects users after success.</span>
              </div>
            </div>
          </div>

          <Card className="border-slate-200 shadow-soft-md">
            <CardHeader className="px-6 pb-0 pt-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-primary"
              >
                <ArrowLeft size={16} />
                Back home
              </Link>
            </CardHeader>
            <CardBody className="px-6 pb-6 pt-4">
              <div className="mb-6">
                <h1 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h1>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </div>
              {children}
              <p className="mt-6 text-center text-sm text-slate-600">
                {footerText}{" "}
                <Link href={footerHref} className="font-semibold text-primary transition hover:text-secondary">
                  {footerLinkText}
                </Link>
              </p>
            </CardBody>
          </Card>
        </div>
      </SectionContainer>
    </div>
  );
}
