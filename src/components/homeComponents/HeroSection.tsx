import { useEffect, useRef } from "react";
import heroImageLg from "../../assets/images/hero-section-banner-lg.png";
import heroImageSm from "../../assets/images/hero-section-banner-sm.png";
import { Link } from "react-router-dom";
import getDate from "@/utils/getDate";

function HeroSection() {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const currentYear = getDate();

  useEffect(() => {
    const handleImage = () => {
      if (!imageRef.current) return;

      const screenWidth = window.innerWidth;

      if (screenWidth < 768) {
        imageRef.current.src = heroImageSm;
      } else {
        imageRef.current.src = heroImageLg;
      }
    };

    handleImage();
    window.addEventListener("resize", handleImage);

    return () => window.removeEventListener("resize", handleImage);
  }, []);

  return (
    <section className="relative w-full h-[60dvh]">
      <img
        ref={imageRef}
        src={heroImageLg}
        alt="hero section background"
        className="w-full h-full object-cover"
      />

      <div className="absolute start-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 flex flex-col items-center gap-md w-full px-lg md:w-[67%] text-content-light text-center z-10">
        <h2 className="font-heading-medium md:font-heading-bold text-heading-xlarge md:text-heading-huge">
          أفضل التخفيضات {currentYear}
        </h2>

        <p className="font-body-regular text-body-small md:text-body-base text-content-subtle">
          متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي بالإضافة إلى
          أفضل التحفيضات على المنتجات , تسوق الان واستمتع بكل بالتخفيضات على
          المنتجات
        </p>

        <Link
          to=""
          className="w-fit mt-md py-md px-3xl md:px-2xl font-button-medium text-button-base bg-button-primary hover:bg-button-primary-hover active:bg-button-primary-active rounded-small duration-200"
        >
          اكتشف المزيد
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
