import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import logoj from "@/assets/images/joyroom.png";
import logop from "@/assets/images/oppo.png";
import logs from "@/assets/images/samsung.png";

const brands = [
  { name: "JOYROOM", logo: logoj },
  { name: "JOYROOM", logo: logoj },
  { name: "OPPO", logo: logop },
  { name: "SAMSUNG", logo: logs },
  { name: "OPPO", logo: logop},
  { name: "SAMSUNG", logo: logs },
  { name: "OPPO", logo: logop },
];

export const BrandSlider = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 0 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 5, spacing: 0 },
      },
    },
    slides: { perView: 1, spacing: 0 },
  });
  

  return (
    <section className="px-4 sm:px-6 lg:px-52 max-w-[1920px] mx-auto mt-20">
      <div className="container mx-auto text-right px-4">
        {/* Title */}
        <h2 className="text-2xl mb-2 text-gray-700 font-semibold">الماركات التجارية</h2>
        <p className="text-gray-600 mb-8">بمكنك التسوق من خلال الماركات التجارية</p>

        {/* Arrows */}
        <div className="flex justify-end gap-4 mb-4 text-gray-500">
          <button onClick={() => instanceRef.current?.prev()} className="border rounded-full p-2">
            <ChevronRight />
          </button>
          <button onClick={() => instanceRef.current?.next()} className="border rounded-full p-2">
            <ChevronLeft />
          </button>
        </div>

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider">
  {brands.map((item, index) => (
    <div key={index} className="keen-slider__slide  flex items-center justify-center">
      <img
        src={item.logo}
        alt={item.name}
        className="w-32 h-16 object-contain  w-full h-full px-2 py-2"
        style={{ filter: "grayscale(100%)", transition: "filter 0.3s" }}
      />
    </div>
  ))}
</div>

      </div>
    </section>
  );
};
export default BrandSlider;