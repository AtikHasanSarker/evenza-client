"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "@/assets/images/nav-logo.png";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

    if (pathname.startsWith("/dashboard")) return null;

  return (
    <footer className="border-t bg-white">
      <div className="mx-auto grid max-w-7xl lg:gap-20 gap-10 px-4 py-8 md:grid-cols-5">
        {/* Logo & Description */}
        <div className="md:col-span-2">
          <Link href="/">
            <Image src={logo} alt="Evenza Logo" width={250} height={250} />
          </Link>

          <p className="mt-3 text-sm leading-6 text-gray-600 text-justify">
            Evenza is your all-in-one platform for discovering, exploring, and
            managing events with ease. From conferences and workshops to
            cultural festivals and community meetups, find exciting events
            happening around you or create and share your own in just a few
            clicks.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-2xl font-semibold text-gray-900">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="text-gray-600 hover:text-[#2563EB]">
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/events"
                className="text-gray-600 hover:text-[#2563EB]"
              >
                Explore Events
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="text-gray-600 hover:text-[#2563EB]"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-[#2563EB]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-2xl font-semibold text-gray-900">Contact</h3>

          <div className="space-y-3 text-sm text-gray-600">
            <p>Dhaka, Bangladesh</p>
            <p>support@evenza.com</p>
            <p>+880 1234-567890</p>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="mb-4 text-2xl font-semibold text-gray-900">
            Follow Us
          </h3>

          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="rounded-md border p-2 text-gray-600 transition hover:border-[#2563EB] hover:text-[#2563EB]"
            >
              <FaFacebook size={18} />
            </Link>

            <Link
              href="#"
              className="rounded-md border p-2 text-gray-600 transition hover:border-[#2563EB] hover:text-[#2563EB]"
            >
              <FaInstagram size={18} />
            </Link>

            <Link
              href="#"
              className="rounded-md border p-2 text-gray-600 transition hover:border-[#2563EB] hover:text-[#2563EB]"
            >
              <FaXTwitter size={18} />
            </Link>

            <Link
              href="#"
              className="rounded-md border p-2 text-gray-600 transition hover:border-[#2563EB] hover:text-[#2563EB]"
            >
              <FaLinkedinIn size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-sm text-gray-600 md:flex-row">
          <p>© {new Date().getFullYear()} Evenza. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-[#2563EB]">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-[#2563EB]">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
