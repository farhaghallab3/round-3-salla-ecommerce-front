function CheckoutSummaryHeader() {
  return (
    <>
      <h4 className="font-heading-medium text-heading-small">ملخص الطلب</h4>

      <div className="flex justify-between items-center text-body-base text-content-base">
        <p className="font-body-regular">مجموع المنتجات</p>
        <p className="font-body-regular">145 ر.س</p>
      </div>
    </>
  );
}

export default CheckoutSummaryHeader;
