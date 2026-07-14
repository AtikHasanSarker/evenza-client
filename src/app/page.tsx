import HeroSection from "@/components/homepage/Banner";
import Categories from "@/components/homepage/Categories";
import FaqSection from "@/components/homepage/FaqSection";
import FeaturedEvents from "@/components/homepage/FeaturedEvents";
import Newsletter from "@/components/homepage/Newsletter";
import Statistics from "@/components/homepage/Statistics";
import Testimonials from "@/components/homepage/Testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedEvents />
      <Categories />
      <Statistics />
      <Testimonials />
      <FaqSection />
      <Newsletter />
    </div>
  );
}
