import ProductBrands from "./ProductBrands";
import { ProductDetailsTabs } from "./ProductDetailsTabs";
import RelatedProducts from "./RelatedProducts";
import ProductDetailsUpper from "./ProductDetailsUpper";

export default function ProductDetails() {
  return (
    <>
      <div className="responsive-padding-x responsive-margin-y w-full mt-40">
        <ProductDetailsUpper/>
        <ProductBrands/>
        <ProductDetailsTabs/>
        <RelatedProducts/>
      </div>
    </>
  )
}
