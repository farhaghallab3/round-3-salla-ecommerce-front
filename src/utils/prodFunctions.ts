export function calculateDiscountedPrice(price: string, discount: string) {
  const discountAmount = (Number(price) * Number(discount)) / 100;
  return Number(price) - Number(discountAmount);
}
