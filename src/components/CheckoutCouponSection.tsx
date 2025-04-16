function CheckoutCouponSection() {
  return (
    <div className="flex flex-col gap-sm font-body-regular text-body-base">
      <p className="font-body-regular text-body-small">هل لديك كود خصم</p>
      <div className="flex w-full">
        <input
          type="text"
          name=""
          id=""
          placeholder="أدخل كود الخصم"
          className="w-full py-[10.5px] ps-[12px] font-body-regular text-body-small border border-e-0 rounded-small outline-none"
        />
        <button
          type="button"
          className="py-[10px] px-md text-accent-primary hover:text-content-light bg-surface-primary hover:bg-button-primary active:bg-button-primary-active border border-accent-primary active:border-accent-primary-active rounded-small hover:shadow-md active:shadow-none duration-300"
        >
          إضافة
        </button>
      </div>
    </div>
  );
}

export default CheckoutCouponSection;
