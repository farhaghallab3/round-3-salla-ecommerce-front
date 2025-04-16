import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setBrand } from "@/redux/slices/filtersSlice";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

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
    title: "إتش بي",
    amount: 100,
  },
  {
    title: "أبل",
    amount: 100,
  },
  {
    title: "سامسونج",
    amount: 100,
  },
  { title: "ديل", amount: 100 },
  { title: "لينوفو", amount: 100 },
];

export const BrandFilters = () => {
  const dispatch = useAppDispatch();
  const selectedBrand = useAppSelector((state) => state.filters.brand);

  const handleBrandChange = (brand: string) => {
    if (brand === "All") {
      dispatch(setBrand([]));
    } else {
      const isSelected = selectedBrand.includes(brand);
      const newSelected = isSelected
        ? selectedBrand.filter((b) => b !== brand)
        : [...selectedBrand, brand];
      dispatch(setBrand(newSelected));
    }
  };
  return (
    <div>
      {/* category */}
      <AccordionItem value="item-2" className="p-4">
        <AccordionTrigger className="text-[16px] font-medium text-content-dark">
          الماركة
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
                    checked={selectedBrand.length === 0}
                    onChange={() => handleBrandChange("All")}
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
                      checked={selectedBrand?.includes(filter.title)}
                      onChange={() => handleBrandChange(filter.title)}
                    />
                    <p className="text-sm text-content-dark">{filter.title}</p>
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
    </div>
  );
};
