import CheckoutSummaryHeader from "./CheckoutSummaryHeader";
import CheckoutCouponSection from "./CheckoutCouponSection";
import CheckoutTotalPrice from "./CheckoutTotalPrice";
import CheckoutSubmitButton from "./CheckoutSubmitButton";

function CheckoutSummary() {
  return (
    <div className="col-span-1 lg:col-span-3">
      <div className="lg:sticky lg:top-6 flex flex-col gap-md p-md text-body-base text-content-dark bg-surface-primary border border-content-muted rounded-small">
        <CheckoutSummaryHeader />

        <CheckoutCouponSection />

        <div className="h-[1px] bg-content-muted"></div>

        <CheckoutTotalPrice />

        <CheckoutSubmitButton />
      </div>
    </div>
  );
}

export default CheckoutSummary;
