"use client";

import { Button, Input } from "@heroui/react";
import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="rounded-2xl bg-[#2563EB] px-6 py-14 text-center text-white md:px-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
            <Mail size={30} />
          </div>

          <h2 className="mt-6 text-3xl font-bold">Stay Updated With Evenza</h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Subscribe to our newsletter and never miss upcoming events,
            exclusive announcements, and exciting community activities.
          </p>

          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-4 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email address"
              variant="flat"
              radius="md"
              className="flex-1"
            />

            <Button
              color="warning"
              radius="md"
              className="font-semibold text-black sm:px-8"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
