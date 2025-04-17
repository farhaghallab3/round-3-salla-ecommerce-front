import AdsSection from "@/components/homeComponents/AdsSection";
import { FeaturesSection } from "../components/homeComponents/FeaturesSection";
import { LapBanner } from "../components/homeComponents/LapBanner";
import SlidersSection from "../components/homeComponents/SlidersSection";
import { SpecialProducts } from "../components/homeComponents/SpecialProducts";

import { Testimonials } from "@/components/homeComponents/Testimonials";
import BlogSection from "@/components/homeComponents/BlogSection";
import BrandSlider from "@/components/homeComponents/brandSlider";

import EndSoonHome from "@/components/homeComponents/EndSoonHome";
import NewArrival from "@/components/homeComponents/NewArrival";
import HeroSection from "@/components/homeComponents/HeroSection";
import VideoSection from "@/components/homeComponents/VideoSection";
import Categories from "@/components/homeComponents/Categories";
import BannerSound from "@/components/homeComponents/BannerSound";

export const Home = () => {
  // const api = import.meta.env.VITE_API_BASE_URL;

  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      {/* special products 1 */}
      <SpecialProducts title="منتجات خاصة" />
      <LapBanner />
      <Categories/>
      <BannerSound/>
      <AdsSection />
      <SlidersSection />
      {/* special products 2 */}
      <EndSoonHome />
      <NewArrival />
      <SpecialProducts title="منتجات مميزة " />
      <VideoSection />
      <Testimonials />
      <BlogSection />
      <BrandSlider />
    </div>
  );
};
