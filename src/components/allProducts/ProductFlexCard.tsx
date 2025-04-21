import { IProduct } from "@/types/product";
import { Heart, ShoppingCart, Star } from "lucide-react";
import smartWatch from "../../assets/images/Image (6).png";
import { calculateDiscountedPrice } from "@/utils/prodFunctions";

export const ProductFlexCard = (Props: IProduct) => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          fill={i < rating ? "#FFC62A" : "#D6D6D6"}
          stroke={i < rating ? "#FFC62A" : "#D6D6D6"}
          strokeWidth={1}
          className="border-0"
          size={13}
        />
      );
    }
    return stars;
  };
  return (
    <div className="relative flex flex-row border rounded border-content-muted hover:border-accent-primary">
      <div className="relative w-full max-w-[150px] xl:max-w-[240px]">
        {Props.images[0] ? (
          <img
            src={Props.images[0].image}
            alt={Props.name}
            className="w-full max-h-[300px] object-cover"
          />
        ) : (
          <img
            src={smartWatch}
            alt=""
            className="w-full max-h-[300px] object-cover"
          />
        )}
        {Props.has_variants ? (
          <div className="absolute top-4 left-4 bg-accent-primary text-white py-1 px-2 rounded">
            متعدد
          </div>
        ) : (
          Props.has_discount && (
            <div className="absolute top-4 left-4 bg-red-600 text-white py-1 px-2 rounded">
              خصم {Props.discount}%
            </div>
          )
        )}
      </div>

      {/* special tag */}

      {/* info */}
      <div className="p-4 flex flex-col gap-1 w-full justify-between">
        <p className="text-accent-primary text-sm font-regular">ساعات</p>
        <h3 className="text-content-dark text-medium font-medium">
          {Props.name}
        </h3>
        <h3 className="text-content-base text-sm font-regular">
          {Props.description}
        </h3>
        {/* rating */}
        {Props.reviews_average && (
          <div className="flex items-center gap-1">
            {renderStars(Props.reviews_average)}
            <span className="text-content-dim text-sm">
              ({Props.reviews_count})
            </span>
          </div>
        )}
        <p className="text-large font-medium">
          {Props.price} رس{" "}
          {Props.has_discount && (
            <span className="text-content-dim text-sm line-through ms-2">
              {calculateDiscountedPrice(Props.price, Props.discount)} رس
            </span>
          )}
        </p>

        {/* buttons */}
        <div className="flex gap-2 mt-2">
          <button className="w-full py-3 flex items-center justify-center gap-2 text-medium text-content-dark border rounded border-content-muted hover:bg-button-primary hover:text-white">
            <ShoppingCart size={16} className="hidden lg:block" />
            اضف للسلة
          </button>
          <button className="group py-3 flex items-center justify-center border rounded border-content-muted px-4 text-content-dim ">
            <Heart
              size={16}
              className="fill-transparent group-hover:fill-button-tertiary"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
