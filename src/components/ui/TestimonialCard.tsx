import Image from "next/image";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  review: string;
}

export default function TestimonialCard({
  name,
  role,
  image,
  review,
}: TestimonialCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      {/* Rating */}
      <div className="mb-5 flex items-center gap-1 text-[#F59E0B]">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} size={18} fill="currentColor" />
        ))}
      </div>

      {/* Review */}
      <p className="leading-7 text-gray-600">&quot;{review}&quot;</p>

      {/* User */}
      <div className="mt-6 flex items-center gap-4">
        <Image
          src={image}
          alt={name}
          width={50}
          height={50}
          className="rounded-full object-cover"
        />

        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>

          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}
