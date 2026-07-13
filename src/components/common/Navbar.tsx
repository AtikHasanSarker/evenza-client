"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import navLogo from "@/assets/images/nav-logo.png"

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Explore",
    href: "/events",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  // Later replace with JWT authentication
  const isLoggedIn = false;

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={navLogo} alt="EventHub" width={150} height={150} priority />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          {!isLoggedIn ? (
            <>
              <Link
                href="/login"
                className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition hover:text-blue-600"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/dashboard"
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white"
              >
                Dashboard
              </Link>

              <button className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-gray-100">
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t bg-white md:hidden">
          <div className="space-y-2 px-4 py-4">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-md px-3 py-2 text-sm ${
                  isActive(item.href)
                    ? "bg-blue-50 font-semibold text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-4 border-t pt-4">
              {!isLoggedIn ? (
                <div className="space-y-3">
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="block rounded-md border px-4 py-2 text-center text-sm font-medium"
                  >
                    Login
                  </Link>

                  <Link
                    href="/register"
                    onClick={() => setIsOpen(false)}
                    className="block rounded-md bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white"
                  >
                    Register
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  <Link
                    href="/dashboard"
                    onClick={() => setIsOpen(false)}
                    className="block rounded-md bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white"
                  >
                    Dashboard
                  </Link>

                  <button className="w-full rounded-md border px-4 py-2 text-sm font-medium">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
