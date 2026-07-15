import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Banner from "@/components/homepage/Banner";
import Categories from "@/components/homepage/Categories";
import FaqSection from "@/components/homepage/FaqSection";
import FeaturedEvents from "@/components/homepage/FeaturedEvents";
import Newsletter from "@/components/homepage/Newsletter";
import Statistics from "@/components/homepage/Statistics";
import Testimonials from "@/components/homepage/Testimonials";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Banner />
        <FeaturedEvents />
        <Categories />
        <Statistics />
        <Testimonials />
        <FaqSection />
        <Newsletter />
      </main>
    </>
  );
}
