import productOne from "../assets/images/checkout-product-1.png";
import productTwo from "../assets/images/checkout-product-2.png";
import productThree from "../assets/images/checkout-product-3.png";
import CheckoutProductCard from "./CheckoutProductCard";

export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

const products: Product[] = [
  {
    id: 1,
    image: productOne,
    name: "موبايل  آبل آيفون بشريحتين و 64 جيجا بالإضافة الى كاميرتين",
    price: 50,
    quantity: 1,
  },
  {
    id: 2,
    image: productTwo,
    name: "موبايل  آبل آيفون بشريحتين و 64 جيجا بالإضافة الى كاميرتين",
    price: 50,
    quantity: 2,
  },
  {
    id: 3,
    image: productThree,
    name: "موبايل  آبل آيفون بشريحتين و 64 جيجا بالإضافة الى كاميرتين",
    price: 50,
    quantity: 3,
  },
];

function CheckoutItemsList() {
  return (
    <div className="cols-span-1 lg:col-span-9 w-full text-content-dark bg-surface-primary rounded-small">
      <div className="flex flex-col gap-[16px]">
        {products.map((product) => (
          <CheckoutProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CheckoutItemsList;
