import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setRating } from "@/redux/slices/filtersSlice";
import { Star } from "lucide-react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
const rates = [
  {
    rate: 5,
    count: 50,
  },
  {
    rate: 4,
    count: 50,
  },
  {
    rate: 3,
    count: 50,
  },
  {
    rate: 2,
    count: 50,
  },
  {
    rate: 1,
    count: 50,
  },
];

export const RatingFilters = () => {
  const dispatch = useAppDispatch();
  const rating = useAppSelector((state) => state.filters.rating);

  const handleRateChange = (rate: number) => {
    dispatch(setRating(rate));
  };

  const handleAllChange = () => {
    dispatch(setRating(0));
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          fill={i < rating ? "#FFC62A" : "#D6D6D6"}
          stroke={i < rating ? "#FFC62A" : "#D6D6D6"}
          strokeWidth={1}
          className="border-0"
        />
      );
    }
    return stars;
  };

  return (
    <AccordionItem value="item-5" className="p-4">
      <AccordionTrigger className="text-[16px] font-medium text-content-dark">
        التقييم
      </AccordionTrigger>
      <AccordionContent className="border-b">
        <ul>
          <li>
            <form action="submit" className="flex flex-col gap-2">
              {/* All button */}
              <label className="flex items-center gap-2 justify-start mb-2">
                <input
                  type="checkbox"
                  name="category"
                  className="appearance-none w-[18px] h-[18px] rounded-full border border-gray-400 checked:bg-accent-primary"
                  checked={rating === 0}
                  onChange={handleAllChange}
                />
                الكل
                <p className="justify-self-end mr-auto">(1000)</p>
              </label>

              {/* other filters */}
              {rates.map((stars, index) => (
                <label key={index} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="rating"
                    className="appearance-none w-[18px] h-[18px] rounded-full border border-gray-400 checked:bg-accent-primary"
                    checked={rating === stars.rate}
                    onChange={() => handleRateChange(stars.rate)}
                  />
                  {renderStars(stars.rate)}
                  <p className="justify-self-end mr-auto">({stars.rate})</p>
                </label>
              ))}
            </form>
          </li>
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
};
