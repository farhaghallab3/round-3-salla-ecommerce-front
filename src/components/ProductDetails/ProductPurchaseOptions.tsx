"use client";

interface ProductPurchaseOptionsProps {
  quantity: number;
  setQuantity: (quantity: number) => void;
  price: number;
}

const ProductPurchaseOptions = ({ quantity, setQuantity }: ProductPurchaseOptionsProps) => {
  return (
    <div className="space-y-2 font-bold text-gray-700 mt-7">
    <div className="flex items-center gap-60 mt-6">
              

<div className="flex items-center gap-2 text-gray-600">
  <span className="text-gray-700 font-bold">حدد الكمية</span>
  <div className="flex items-center border rounded overflow-hidden">
    <button
      onClick={() => setQuantity(Math.max(quantity - 1, 1))}
      className="px-3 py-1 bg-gray-100"
    >
      -
    </button>
    <span className="px-4">{quantity}</span>
    <button
      onClick={() => setQuantity(quantity + 1)}
      className="px-3 py-1 bg-gray-100"
    >
      +
    </button>
  </div>
</div>


<p className="text-xl font-bold text-gray-600">{(250 * quantity).toFixed(2)} ر.س</p>
</div>
</div>
    
  );
};

export default ProductPurchaseOptions;
