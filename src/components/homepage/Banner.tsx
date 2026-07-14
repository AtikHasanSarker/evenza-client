import Image from "next/image";
import Link from "next/link";
import hero from "@/assets/images/hero.png";


export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-4 py-16 md:flex-row md:py-24">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-[#2563EB]">
            Discover Amazing Events
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Find, Explore & Manage Events
            <span className="block text-[#2563EB]">All in One Place</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600">
            Discover conferences, workshops, concerts, sports, and community
            events happening around you. Create and manage your own events with
            a simple, secure, and user-friendly platform.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <Link
              href="/events"
              className="rounded-lg bg-[#2563EB] px-6 py-3 text-center font-medium text-white transition hover:bg-blue-700"
            >
              Explore Events
            </Link>

            <Link
              href="/register"
              className="rounded-lg border border-gray-300 px-6 py-3 text-center font-medium text-gray-700 transition hover:border-[#2563EB] hover:text-[#2563EB]"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex flex-1 justify-center">
          <Image
            src={hero}
            alt="Event Illustration"
            width={550}
            height={450}
            priority
            className="h-auto w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
