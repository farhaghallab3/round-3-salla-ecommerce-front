import CheckoutItemsList from "../components/CheckoutItemsList";
import CheckoutSummary from "../components/CheckoutSummary";

function Checkout() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-lg responsive-padding-y responsive-padding-x mt-40">
      <CheckoutItemsList />
      <CheckoutSummary />
    </section>
  );
}

export default Checkout;
