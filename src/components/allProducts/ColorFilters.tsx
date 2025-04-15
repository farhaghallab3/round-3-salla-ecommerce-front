import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { setColors } from "@/redux/slices/filtersSlice";

const COLORS: {
  title: string;
  amount: number;
  colorCode: string;
}[] = [
  { title: "احمر", amount: 100, colorCode: "#FF0000" },
  { title: "اخضر", amount: 100, colorCode: "#00FF00" },
  { title: "اسود", amount: 100, colorCode: "#000000" },
  { title: "ازرق", amount: 100, colorCode: "#0000FF" },
  { title: "اصفر", amount: 100, colorCode: "#FFFF00" },
];

export const ColorFilters = () => {
  const dispatch = useAppDispatch();
  const selectedColors = useAppSelector((state) => state.filters.colors);

  const handleColorChange = (color: string) => {
    if (color === "All") {
      dispatch(setColors([]));
    } else {
      const isSelected = selectedColors.includes(color);
      const newSelected = isSelected
        ? selectedColors.filter((c) => c !== color)
        : [...selectedColors, color];
      dispatch(setColors(newSelected));
    }
  };

  return (
    <AccordionItem value="item-4" className="p-4">
      <AccordionTrigger className="text-[16px] font-medium text-content-dark">
        اللون
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
                  checked={selectedColors.length === 0}
                  onChange={() => handleColorChange("All")}
                />
                الكل
                <p className="justify-self-end mr-auto">(1000)</p>
              </label>

              {/* other filters */}
              {COLORS.map((color, index) => (
                <label key={index} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="category"
                    className="appearance-none w-[18px] h-[18px] rounded-full border border-gray-400 checked:bg-accent-primary"
                    checked={selectedColors?.includes(color.title)}
                    onChange={() => handleColorChange(color.title)}
                  />
                  <div
                    className="w-5 h-5 rounded-full border border-gray-400"
                    style={{ backgroundColor: color.colorCode }}
                  ></div>
                  <p className="text-sm text-content-dark">{color.title}</p>
                  <p className="justify-self-end mr-auto">({color.amount})</p>
                </label>
              ))}
            </form>
          </li>
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
};
