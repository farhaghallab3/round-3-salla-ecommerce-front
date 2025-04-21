import ProductBrands from "./ProductBrands";
import { ProductDetailsTabs } from "./ProductDetailsTabs";
import RelatedProducts from "./RelatedProducts";

export default function ProductDetails() {
  return (
    <>
      <div className="responsive-padding-x responsive-margin-y w-full">
        <ProductDetailsUpper/>
        <ProductBrands/>
        <ProductDetailsTabs/>
        <RelatedProducts/>
      </div>
    </>
  )
}
