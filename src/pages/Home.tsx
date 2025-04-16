import CategoriesHome from "@/components/homeComponents/CategoriesHome";
import { FeaturesSection } from "../components/homeComponents/FeaturesSection";
import { LapBanner } from "../components/homeComponents/LapBanner";
import { SpecialProducts } from "../components/homeComponents/SpecialProducts";
import BannerBase from "@/components/homeComponents/BannerBestDiscounts/BannerBase";
import EndSoonHome from "@/components/homeComponents/EndSoonHome";
import NewArrival from "@/components/homeComponents/NewArrival";


export const Home = () => {
  // const api = import.meta.env.VITE_API_BASE_URL;

  return (

    <div>
     
      

      <FeaturesSection />
      {/* special products 1 */}
      <SpecialProducts title="منتجات خاصة" />
      <LapBanner />
      {/* special products 2 */}
      <EndSoonHome/>
      <NewArrival/>
      <SpecialProducts title="منتجات مميزة " />
      <CategoriesHome />
      <BannerBase/>
    </div>
  );
};
