import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setMinPrice, setMaxPrice } from "@/redux/slices/filtersSlice";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import {
  SliderRange,
  SliderThumb,
  SliderTrack,
  Slider,
} from "@radix-ui/react-slider";
import { useEffect, useState } from "react";

export const PriceFilter = () => {
  const minPrice = useAppSelector((state) => state.filters.minPrice);
  const maxPrice = useAppSelector((state) => state.filters.maxPrice);
  const dispatch = useAppDispatch();

  const [tempMinPrice, setTempMinPrice] = useState<string>(minPrice.toString());
  const [tempMaxPrice, setTempMaxPrice] = useState<string>(maxPrice.toString());

  useEffect(() => {
    setTempMinPrice(minPrice.toString());
  }, [minPrice]);

  useEffect(() => {
    setTempMaxPrice(maxPrice.toString());
  }, [maxPrice]);

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempMaxPrice(e.target.value);
  };

  const handleMinPriceBlur = () => {
    const value = parseInt(tempMinPrice, 10);
    if (!isNaN(value) && value <= maxPrice) {
      dispatch(setMinPrice(value));
    } else {
      setTempMinPrice(minPrice.toString()); // Reset to the last valid value
    }
  };

  const handleMaxPriceBlur = () => {
    const value = parseInt(tempMaxPrice, 10);
    if (!isNaN(value) && value >= minPrice) {
      dispatch(setMaxPrice(value));
    } else {
      setTempMaxPrice(maxPrice.toString()); // Reset to the last valid value
    }
  };

  return (
    <AccordionItem value="item-3" className="p-4">
      <AccordionTrigger className="text-[16px] font-medium text-content-dark">
        السعر
      </AccordionTrigger>
      <AccordionContent className="border-b mt-4">
        <Slider
          className="relative flex items-center w-full h-6"
          min={0}
          max={100000}
          step={100}
          value={[minPrice, maxPrice]}
          onValueChange={(value) => {
            dispatch(setMinPrice(value[0]));
            dispatch(setMaxPrice(value[1]));
          }}
          inverted
        >
          <SliderTrack className="bg-muted relative grow rounded-full h-2">
            <SliderRange className="absolute bg-accent-primary rounded-full h-full" />
          </SliderTrack>
          <SliderThumb className="block w-5 h-5 bg-accent-primary rounded-full shadow" />
          <SliderThumb className="block w-5 h-5 bg-accent-primary rounded-full shadow" />
        </Slider>

        <div className="flex justify-between mt-4 gap-4">
          <div className="flex flex-col items-start text-end">
            <span>من</span>
            <div className="border p-2 rounded-md">
              <input
                type="text"
                value={tempMinPrice}
                onChange={handleMinPriceChange}
                onBlur={handleMinPriceBlur}
                className="w-full text-end"
              />
            </div>
          </div>
          <div className="flex flex-col items-start text-end">
            <span>الى</span>
            <div className="border p-2 rounded-md">
              <input
                type="text"
                value={tempMaxPrice}
                onChange={handleMaxPriceChange}
                onBlur={handleMaxPriceBlur}
                className="w-full text-end"
              />
            </div>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
