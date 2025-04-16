function CheckoutTotalPrice() {
  return (
    <div className="flex flex-col gap-xs text-body-base">
      <div className="flex justify-between">
        <h4 className="font-heading-medium">الإجمالى</h4>
        <h4 className="font-heading-medium">145 ر.س</h4>
      </div>
      <p className="font-body-regular text-body-small text-content-dim">
        الاسعار شاملة للضريبة <span className="text-red-500">*</span>
      </p>
    </div>
  );
}

export default CheckoutTotalPrice;
