import { useState } from "react";

interface Props {
  productPrice: number;
  className?: string;
}

function CheckoutProductTotalAmount({ productPrice, className = "" }: Props) {
  const [quantity, setQuantity] = useState<number>(1);
  const quantityThreshold = quantity === 1;

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev === 1 ? 1 : prev - 1));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div
      className={`${className} flex justify-between items-center gap-xl font-body-regular text-body-base text-content-base`}
    >
      <div className="flex items-center gap-1 py-sm md:py-[0.78125rem] px-4 border border-content-muted rounded-small">
        <button
          type="button"
          onClick={incrementQuantity}
          className="w-fit h-fit p-sm text-content-dim hover:text-content-base hover:bg-gray-50 active:bg-gray-100 rounded-[100%]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </button>
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min={1}
          className="w-16 px-2 font-body-regular text-body-base text-shadow-content-base text-center border-x"
        />
        <button
          type="button"
          onClick={decreaseQuantity}
          disabled={quantityThreshold}
          className={`w-fit h-fit p-[8px] ${
            quantityThreshold ? "text-content-border" : "text-content-dim"
          } hover:text-content-base hover:bg-gray-50 ${
            !quantityThreshold ? "active:bg-gray-100" : ""
          } disabled:bg-transparent rounded-[100%]`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
          </svg>
        </button>
      </div>

      <h4 className="flex flex-wrap items-center gap-0.5 font-heading-medium text-body-base">
        <span className="md:hidden flex-1">المجموع:</span>
        <span>{(quantity * productPrice).toFixed(2)} ر.س</span>
      </h4>
    </div>
  );
}

export default CheckoutProductTotalAmount;
