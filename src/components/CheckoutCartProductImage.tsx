interface Props {
  productImage: string;
}

function CheckoutCartProductImage({ productImage }: Props) {
  return (
    <div className="relative w-[95px] h-[80px] flex justify-between items-center bg-surface-primary rounded-small">
      <img
        src={productImage}
        alt="product-image"
        className="md:absolute w-full md:start-[-15%] md:top-1/2 md:-translate-y-1/2"
      />
    </div>
  );
}

export default CheckoutCartProductImage;
