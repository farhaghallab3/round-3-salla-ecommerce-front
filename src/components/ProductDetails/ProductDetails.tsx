import ProductBrands from "./ProductBrands";
import ProductDetailsUpper from "./upper";

export default function ProductDetails() {
  return (
    <>
      <div className="responsive-padding-x responsive-margin-y w-full">
        <ProductDetailsUpper/>
        <ProductBrands/>
      </div>
    </>
  )
}
