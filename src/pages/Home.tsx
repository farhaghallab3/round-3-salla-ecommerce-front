import CategoriesHome from "@/components/CategoriesHome.tsx/CategoriesHome";
import { FeaturesSection } from "../components/homeComponents/FeaturesSection";
import { LapBanner } from "../components/homeComponents/LapBanner";
import { SpecialProducts } from "../components/homeComponents/SpecialProducts";
import BannerBase from "@/components/BannerBestDiscounts/BannerBase";

export const Home = () => {
  // const api = import.meta.env.VITE_API_BASE_URL;

  return (
    <div>
      <FeaturesSection />
      {/* special products 1 */}
      <SpecialProducts title="منتجات خاصة" />
      <LapBanner />
      {/* special products 2 */}
      <SpecialProducts title="منتجات مميزة " />
      <CategoriesHome />
      <BannerBase/>
    </div>
  );
};
