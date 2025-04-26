interface Props {
  productName: string;
  productPrice?: number; 
}

function CheckoutCartProductInfo({ productName, productPrice }: Props) {
  return (
    <div className="md:ps-lg">
      <h4 className="w-11/12 font-heading-medium text-body-base md:text-[1.125rem]">
        {productName}
      </h4>
      <p className="w-fit font-body-regular text-body-small md:text-body-base text-content-base">
      {typeof productPrice === 'number' ? `${productPrice.toFixed(2)} ر.س` : 'غير متوفر'}

      </p>
    </div>
  );
}

export default CheckoutCartProductInfo;
