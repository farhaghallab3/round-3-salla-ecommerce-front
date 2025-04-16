import { Product } from "./CheckoutItemsList";
import CheckoutCartProductImage from "./CheckoutCartProductImage";
import CheckoutCartProductInfo from "./CheckoutCartProductInfo";
import CheckoutProductTotalAmount from "./CheckoutProductTotalAmount";
import CheckoutProductCardRemoveButton from "./CheckoutProductCardRemoveButton";

interface CheckoutProductCardProps {
  product: Product;
}

function CheckoutProductCard({ product }: CheckoutProductCardProps) {
  return (
    <div className="flex flex-col gap-md border md:border-hidden rounded-small divide-y lg:divide-y-0 p-md md:p-0 lg:px-md">
      <div className="flex justify-between items-center gap-md py-md pe-md text-content-dark md:border md:rounded-small">
        <div className="flex items-center gap-md">
          <CheckoutCartProductImage productImage={product.image} />

          <CheckoutCartProductInfo
            productName={product.name}
            productPrice={product.price}
          />

          <CheckoutProductTotalAmount
            productPrice={product.price}
            className="hidden md:flex"
          />
        </div>

        <CheckoutProductCardRemoveButton />
      </div>

      <CheckoutProductTotalAmount
        productPrice={product.price}
        className="flex md:hidden"
      />
    </div>
  );
}

export default CheckoutProductCard;
