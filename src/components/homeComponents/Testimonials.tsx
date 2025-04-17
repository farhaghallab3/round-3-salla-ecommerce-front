import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Star } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: `استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات ترقيه مدفوعة، خسرنا مبالغ كبيرة جدًا في عمل متجر، وتعبنا جدًا في التعامل مع المبرمجين. ثم عدنا لمنصة سلة ووجدنا تطورًا هائلًا وعملًا مميزًا`,
    name: "مطصفي عبد الله",
    job: "مهندس إستشاري لدى شركة سلة",
    image: "src/assets/images/man.png",
    rating: 3,
  },
  {
    text: `استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات ترقيه مدفوعة، خسرنا مبالغ كبيرة جدًا في عمل متجر، وتعبنا جدًا في التعامل مع المبرمجين. ثم عدنا لمنصة سلة ووجدنا تطورًا هائلًا وعملًا مميزًا`,
    name: "هدي السيد",
    job: "مهندس إستشاري لدى شركة سلة",
    image: "src/assets/images/man.png",
    rating: 4,
  },
  {
    text: `استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات ترقيه مدفوعة، خسرنا مبالغ كبيرة جدًا في عمل متجر، وتعبنا جدًا في التعامل مع المبرمجين. ثم عدنا لمنصة سلة ووجدنا تطورًا هائلًا وعملًا مميزًا`,
    name: "محمد السيد",
    job: "مهندس إستشاري لدى شركة سلة",
    image: "src/assets/images/man.png",
    rating: 2,
  },
  {
    text: `استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات ترقيه مدفوعة، خسرنا مبالغ كبيرة جدًا في عمل متجر، وتعبنا جدًا في التعامل مع المبرمجين. ثم عدنا لمنصة سلة ووجدنا تطورًا هائلًا وعملًا مميزًا`,
    name: "احمد علي",
    job: "مهندس إستشاري لدى شركة سلة",
    image: "src/assets/images/man.png",
    rating: 2,
  },
  {
    text: `استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات ترقيه مدفوعة، خسرنا مبالغ كبيرة جدًا في عمل متجر، وتعبنا جدًا في التعامل مع المبرمجين. ثم عدنا لمنصة سلة ووجدنا تطورًا هائلًا وعملًا مميزًا`,
    name: "farha",
    job: "مهندس إستشاري لدى شركة سلة",
    image: "src/assets/images/man.png",
    rating: 2,
  },
];

const renderStars = (rating: number) => {
  return (
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

  return (
    <section className="px-4 sm:px-6 lg:px-52 max-w-[1920px] mx-auto mt-12">
      <div className="container mx-auto text-right px-4">
        {/* Title */}
        <h2 className="text-2xl mb-2 text-gray-700 font-semibold">آراء العملاء</h2>
        <p className="text-gray-600 mb-8">يتم استعراض بعض آراء وتجارب المستخدمين</p>

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
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="keen-slider__slide border rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-4">
  
  {renderStars(item.rating)}

  
  <img src="src/assets/images/quots.png" className="w-10 h-10 opacity-70" alt="quote" />
</div>


              <p className="text-sm text-gray-600 mb-4">{item.text}</p>
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.job}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
