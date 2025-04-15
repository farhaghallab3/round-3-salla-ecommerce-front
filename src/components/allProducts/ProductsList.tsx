import { Filter, Grid, List } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/hooks";
import { setListStyle, setSort } from "@/redux/slices/filtersSlice";
import { ProductsLayout } from "./ProductsLayout";
import { FiltersMobile } from "./FiltersMobile";
import { useState } from "react";

export const ProductsList = () => {
  const dispatch = useDispatch();
  const listStyle = useAppSelector((state) => state.filters.listStyle);
  const sort = useAppSelector((state) => state.filters.sort);

  const handleListStyle = (style: "grid" | "list") => {
    dispatch(setListStyle(style));
  };

  const [showFilters, setShowFilters] = useState(false);

  const sortOptions = [
    { value: "desc", label: "من الأعلى إلى الأقل" },
    { value: "asc", label: "من الأقل إلى الأعلى" },
  ];

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row gap-4 border border-content-muted w-full h-fit justify-between p-4">
        {/* top menu */}
        <div className="flex items-center">
          <div className="flex gap-2">
            <button
              onClick={() => handleListStyle("grid")}
              className={
                listStyle === "grid" ? "bg-accent-primary text-white" : ""
              }
            >
              <Grid size={34} />
            </button>
            <button
              onClick={() => handleListStyle("list")}
              className={
                listStyle === "list" ? "bg-accent-primary text-white" : ""
              }
            >
              <List size={34} className="rotate-180" />
            </button>
            <button
              onClick={() => setShowFilters(true)}
              className="lg:hidden size-[34px] border border-content-muted text-black flex items-center justify-center"
            >
              <Filter size={14} />
            </button>
          </div>
        </div>

        {/* Dropdown Filter */}
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 text-right">
              <p>ترتيب حسب:</p>
              <span className="underline">
                {sortOptions.find((option) => option.value === sort)?.label}
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48" sideOffset={8}>
              {sortOptions.map((option) => (
                <DropdownMenuItem
                  key={option.value}
                  onSelect={() => dispatch(setSort(option.value))}
                  className="flex items-center justify-between"
                >
                  <span>{option.label}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Products */}
      <ProductsLayout />

      {/* Filters on mobile */}
      {showFilters && (
        <>
          <button
            className={`fixed inset-0 bg-black  z-40 transition-opacity duration-300 ${
              showFilters ? "opacity-70" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setShowFilters(false)}
          ></button>
          <FiltersMobile
            setShowFilters={setShowFilters}
            showFilters={showFilters}
          />
        </>
      )}
    </div>
  );
};
