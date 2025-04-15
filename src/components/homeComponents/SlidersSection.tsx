import { Link } from "react-router-dom";
// import sliderImageSm from "../../assets/images/sliders-section-sm.png";
import sliderImageLg from "../../assets/images/sliders-section-lg.png";

function SlidersSection() {
  return (
    <section className="relative w-full h-[60dvh]">
      <img
        // ref={imageRef}
        src={sliderImageLg}
        alt=""
        role="presentation"
        className="w-full h-full object-cover object-center-left"
      />

      <div className="absolute start-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 flex flex-col items-center gap-md w-full px-lg md:w-[67%] text-content-light text-center z-10">
        <h2 className="w-3/4 md:w-full font-heading-medium md:font-heading-bold text-heading-xlarge md:text-heading-huge">
          أفضل التخفيضات 2022
        </h2>

        <p className="w-[90%] md:w-1/2 font-body-regular text-body-small md:text-body-base text-content-subtle">
          متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي بالإضافة إلى
          أفضل التحفيضات على المنتجات , تسوق الان واستمتع بكل بالتخفيضات على
          المنتجات
        </p>

        <Link
          to="/"
          className="w-fit mt-md py-md px-3xl md:px-2xl font-button-medium text-button-base bg-button-primary hover:bg-button-primary-hover active:bg-button-primary-active rounded-small duration-200"
        >
          اكتشف المزيد
        </Link>
      </div>
    </section>
  );
}

export default SlidersSection;
