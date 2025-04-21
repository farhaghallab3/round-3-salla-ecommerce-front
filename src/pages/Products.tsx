import { Filters } from "@/components/allProducts/Filters";
import { ProductsList } from "@/components/allProducts/ProductsList";


export const Products = () => {
  // scroll to top on page load
  window.scrollTo(0, 0);
  return (
    <div className="flex gap-6 flex-row responsive-padding-x">
      
      <Filters />
      <ProductsList />
    </div>
  );
};
