import { useEffect, useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import image from "@/assets/images/man.png";
import imageQ from "@/assets/images/quots.png";

type Review = {
  id: number;
  rate: string;
  comment: string;
};

export const Testimonials = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
    slides: { perView: 1 },
  });

  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch("https://salla.digital-vision-solutions.com/api/products")
      .then((res) => res.json())
      .then((data) => {
        const firstProduct = data?.data?.[0];
        if (firstProduct?.reviews) {
          setReviews(firstProduct.reviews);
        }
      })
      .catch((err) => console.error("Error fetching reviews:", err));
  }, []);

  const renderStars = (rating: number) => (
    <div className="flex gap-1 justify-end mb-2">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          fill={i < rating ? "#FFC62A" : "#D6D6D6"}
          stroke={i < rating ? "#FFC62A" : "#D6D6D6"}
          className="w-4 h-4"
        />
      ))}
    </div>
  );

  return (
    <section className="px-4 sm:px-6 lg:px-52 max-w-[1920px] mx-auto mt-12 justify-center"> 
      <div className="container mx-auto text-right px-4">
        <h2 className="text-2xl mb-2 text-gray-700 font-semibold">آراء العملاء</h2>
        <p className="text-gray-600 mb-8">يتم استعراض بعض آراء وتجارب المستخدمين</p>

        <div className="flex justify-end gap-4 mb-4 text-gray-500">
          <button onClick={() => instanceRef.current?.prev()} className="border rounded-full p-2 ">
            <ChevronRight />
          </button>
          <button onClick={() => instanceRef.current?.next()} className="border rounded-full p-2">
            <ChevronLeft />
          </button>
        </div> 

        <div ref={sliderRef} className="keen-slider">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="keen-slider__slide border rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                {renderStars(Number(item.rate))}
                <img src={imageQ} className="w-10 h-10 opacity-70" alt="quote" />
              </div>

              <p className="text-sm text-gray-600 mb-4">{item.comment}</p>

              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={image}
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold">محمد عبدالرحمن</p>
                  <p className="text-xs text-gray-500">عميل سلة</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
