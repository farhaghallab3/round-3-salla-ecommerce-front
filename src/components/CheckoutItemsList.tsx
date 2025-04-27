import { useEffect, useState } from "react";
import CheckoutProductCard from "./CheckoutProductCard";

export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

function CheckoutItemsList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setProducts(cartItems);
  }, []);

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
