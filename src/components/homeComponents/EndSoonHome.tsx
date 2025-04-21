import { Button } from "@/components/ui/button";
import { ChevronLeft, Heart, ShoppingCart, Star } from "lucide-react";
import smartWatch from "../../assets/images/Image (6).png";
import { Link } from "react-router-dom";
import { useGetQuery } from "@/api/useGetQuery";

export default function EndSoonHome() {
  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useGetQuery("products", "/products");

  const discountedProducts = products?.data?.filter(
    (product: any) => product.has_discount === true
  );

  console.log("products", discountedProducts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1 justify-end mb-2">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            fill={i < rating ? "#FFC62A" : "#D6D6D6"}
            stroke={i < rating ? "#FFC62A" : "#D6D6D6"}
            className="w-4 h-4"
          />
        ))}
      </div>
    );
  };

  const calculateTimeRemaining = (end_discount: string) => {
    const now = new Date();
    const endDate = new Date(end_discount);
    const diff = endDate.getTime() - now.getTime();

    const day = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hour = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minute = Math.floor((diff / (1000 * 60)) % 60);
    const second = Math.floor((diff / 1000) % 60);

    return { day, hour, minute, second };
  };

  return (
    <div className="w-full mt-5xl py-5xl responsive-padding-x">
      <div className="flex justify-between">
        <div>
          <h5 className="text-content-dark font-heading-bold text-2xl pb-sm">
            عروض تنتهى قريبا
          </h5>
          <p className="text-content-base">
            تسوق احدث المنتجات المميزة المضافة جديد
          </p>
        </div>
        <div>
          <Link to={"/products"}>
            <Button className="bg-surface-primary text-accent-primary border border-accent-primary rounded-sm tansition hover:bg-accent-primary hover:text-surface-primary">
              عرض الكل <ChevronLeft />
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex max-md:flex-wrap w-full gap-5 pt-xl">
        {discountedProducts?.map((product: any) => {
          const discountedPrice = Math.round(
            product.price - product.price * (product.discount / 100)
          );

          const timeLeft = calculateTimeRemaining(product.end_discount);

          return (
            <div key={product.id} className="w-full md:w-1/2">
              <div className="w-full flex max-lg:flex-wrap pb-md border rounded-sm border-accent-primary">
                <div className="w-full lg:w-1/3 relative">
                  <img
                    className="w-full h-auto min-h-[170px]"
                    src={product.image|| smartWatch}
                    alt={product.name}
                  />
                  <p className="absolute top-2 end-2 px-sm py-1 bg-surface-badge text-surface-secondary">
                    خصم {Math.round(product.discount)}%
                  </p>
                </div>
                <div className="w-full lg:w-2/3 px-md pt-lg">
                  <p className="text-accent-secondary ">{product.category.name}</p>
                  <h6 className="text-content-dark py-sm font-bold">{product.name}</h6>
                  <p className="text-content-base">{product.small_desc}</p>
                  <div className="flex justify-between w-2/3 py-sm">
                    <p className="text-surface-badge">{discountedPrice} رس</p>
                    <p className="text-content-dim line-through">
                      {Math.round(product.price)} رس
                    </p>
                  </div>
                    <div className="flex text-filled-star">
                        {renderStars(product.reviews_average)}
                    </div>
                    
                  <div className="flex justify-between pt-lg">
                    <div className="px-md lg:px-lg py-sm text-center bg-content-subtle rounded-sm">
                      <p className="text-content-dark">{timeLeft.day}</p>
                      <p className="text-content-dim text-body-small">يوم</p>
                    </div>
                    <div className="px-md lg:px-lg py-sm text-center bg-content-subtle rounded-sm">
                      <p className="text-content-dark">{timeLeft.hour}</p>
                      <p className="text-content-dim text-body-small">ساعة</p>
                    </div>
                    <div className="px-md lg:px-lg py-sm text-center bg-content-subtle rounded-sm">
                      <p className="text-content-dark">{timeLeft.minute}</p>
                      <p className="text-content-dim text-body-small">دقيقة</p>
                    </div>
                    <div className="px-md lg:px-lg py-sm text-center bg-content-subtle rounded-sm">
                      <p className="text-content-dark">{timeLeft.second}</p>
                      <p className="text-content-dim text-body-small">ثانية</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-end w-full">
                    <div>
                      <Link to={"/"}>
                        <Button className="tansition px-22 mt-lg bg-accent-primary py-lg text-surface-primary rounded-sm hover:text-accent-primary border-accent-primary hover:bg-transparent border hover:border-accent-primary-active">
                          <ShoppingCart className="ms-3xl lg:ms-5xl" />
                          <p className="me-3xl lg:me-5xl">أضف للسلة</p>
                        </Button>
                      </Link>
                    </div>
                    <div className="px-3 lg:px-4 py-3  rounded-sm border border-content-muted">
                      <Heart className="text-content-dim m-0 tansition fill-transparent hover:fill-button-tertiary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
