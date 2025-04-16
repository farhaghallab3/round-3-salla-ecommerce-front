import AdsSection from "@/components/homeComponents/AdsSection";
import { FeaturesSection } from "../components/homeComponents/FeaturesSection";
import { LapBanner } from "../components/homeComponents/LapBanner";
import SlidersSection from "../components/homeComponents/SlidersSection";
import { SpecialProducts } from "../components/homeComponents/SpecialProducts";
import CategoriesHome from "@/components/CategoriesHome.tsx/CategoriesHome";
import BannerBase from "@/components/BannerBestDiscounts/BannerBase";
import HeroSection from "@/components/homeComponents/HeroSection";
import VideoSection from "@/components/homeComponents/VideoSection";

export const Home = () => {
  // const api = import.meta.env.VITE_API_BASE_URL;

  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      {/* special products 1 */}
      <SpecialProducts title="منتجات خاصة" />
      <LapBanner />
      <AdsSection />
      <SlidersSection />
      {/* special products 2 */}
      <SpecialProducts title="منتجات مميزة " />
      <VideoSection />
      <CategoriesHome />
      <BannerBase />
    </div>
  );
};
