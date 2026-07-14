import HeroSection from "@/components/homepage/Banner";
import Categories from "@/components/homepage/Categories";
import FeaturedEvents from "@/components/homepage/FeaturedEvents";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedEvents />
      <Categories />
    </div>
  );
}
