import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { setCategory, resetFilters } from "@/redux/slices/filtersSlice";
import { BrandFilters } from "./BrandFilters";
import { PriceFilter } from "./PriceFilter";
import { ColorFilters } from "./ColorFilters";
import { RatingFilters } from "./RatingFilters";
import { X } from "lucide-react";

type CategoryfilterContent = {
  title: string;
  amount: number;
};

type CategoryFilter = CategoryfilterContent[];

const categoryFilters: CategoryFilter = [
  {
    title: "الإلكترونيات والموبايلات",
    amount: 100,
  },
  {
    title: "التلفزيونات والشاشات",
    amount: 100,
  },
  {
    title: "سماعات أذن",
    amount: 100,
  },
  {
    title: "كاميرات ديجتال",
    amount: 100,
  },
  { title: "مكبرات صوت", amount: 100 },
];

type Props = {
  setShowFilters: React.Dispatch<React.SetStateAction<boolean>>;
  showFilters: boolean;
};

export const FiltersMobile = ({ setShowFilters, showFilters }: Props) => {
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector((state) => state.filters.category);

  const handleCategoryChange = (category: string) => {
    if (category === "All") {
      dispatch(setCategory("All"));
    } else {
      dispatch(setCategory(category));
    }
  };

  return (
    <div className="relative">
      <div
        className={`block lg:hidden w-[342px] h-dvh border overflow-auto border-content-muted fixed top-0 right-0 z-50 bg-white transform transition-transform duration-300 ${
          showFilters ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ scrollbarWidth: "none" }}
      >
        <Accordion
          type="multiple"
          dir="rtl"
          defaultValue={["item-1", "item-2", "item-3"]}
        >
          {/* category */}
          <AccordionItem value="item-1" className="p-4">
            <AccordionTrigger className="text-[16px] font-medium text-content-dark">
              الفئة
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
                        checked={selectedCategory === "All"}
                        onChange={() => handleCategoryChange("All")}
                      />
                      الكل
                      <p className="justify-self-end mr-auto">(1000)</p>
                    </label>

                    {/* other filters */}
                    {categoryFilters.map((filter, index) => (
                      <label key={index} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="category"
                          className="appearance-none w-[18px] h-[18px] rounded-full border border-gray-400 checked:bg-accent-primary"
                          checked={selectedCategory === filter.title}
                          onChange={() => handleCategoryChange(filter.title)}
                        />
                        <p className="text-sm text-content-dark">
                          {filter.title}
                        </p>
                        <p className="justify-self-end mr-auto">
                          ({filter.amount})
                        </p>
                      </label>
                    ))}
                  </form>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Brand */}
          <BrandFilters />

          {/* Price */}
          <PriceFilter />

          {/* Color */}
          <ColorFilters />

          {/* Rating */}
          <RatingFilters />

          {/* Filter button */}
          <button
            className="py-2.5 text-sm font-normal text-center text-content-dark border border-content-dark w-full rounded-sm hover:bg-accent-primary-hover hover:text-white hover:border-accent-primary-hover mb-8"
            onClick={() => dispatch(resetFilters())}
          >
            اعادة ضبط
          </button>
        </Accordion>
      </div>
      {/* close button */}
      {showFilters && (
        <button
          className="fixed top-3.5 right-[342px] size-9 bg-surface-badge text-white flex items-center justify-center rounded-tl-full rounded-bl-full z-50 "
          onClick={() => setShowFilters(false)}
        >
          <X className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};
