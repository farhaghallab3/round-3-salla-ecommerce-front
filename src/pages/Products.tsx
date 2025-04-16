import { Filters } from "@/components/allProducts/Filters";
import { ProductsList } from "@/components/allProducts/ProductsList";

export const Products = () => {
  return (
    <div className="flex gap-6 flex-row responsive-padding-x">
      <Filters />
      <ProductsList />
    </div>
  );
};
