import { useEffect, useState } from "react";
import videoBannerSm from "../../assets/images/video-banner-sm.png";
import videoBannerLg from "../../assets/images/video-banner-lg.png";

function VideoSection() {
  const [imageSrc, setImageSrc] = useState(videoBannerSm);

  useEffect(() => {
    const handleImageSize = () => {
      const screenWidth = window.innerWidth;

      setImageSrc(screenWidth < 768 ? videoBannerSm : videoBannerLg);
    };

    handleImageSize();

    window.addEventListener("resize", handleImageSize);

    return () => window.removeEventListener("resize", handleImageSize);
  }, []);

  return (
    <section className={`w-full bg-no-repeat bg-cover bg-center`}>
      <img src={imageSrc} alt="banner" role="presentation" className="w-full" />
    </section>
  );
}

export default VideoSection;
