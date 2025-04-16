import { Heart, ShoppingCart } from "lucide-react";

type ProductCardProps = {
  title: string;
  description: string;
  price: number;
  image: string;
  specialTag?: "جديد" | "خصم";
  oldPrice?: number;
};

export const ProductCard = (Props: ProductCardProps) => {
  return (
    <div className="relative flex flex-col border rounded border-content-muted hover:border-accent-primary ">
      <img
        src={Props.image}
        alt={Props.title}
        className="w-full h-[228px] object-cover"
      />
      {/* special tag */}
      {Props.specialTag === "جديد" ? (
        <div className="absolute top-4 left-4 bg-accent-primary text-white py-1 px-2 rounded">
          {Props.specialTag}
        </div>
      ) : (
        Props.specialTag === "خصم" && (
          <div className="absolute top-4 left-4 bg-surface-badge text-white py-1 px-2 rounded">
            {Props.specialTag}
          </div>
        )
      )}
      {/* info */}
      <div className="p-4 flex flex-col gap-1">
        <p className="text-accent-primary text-sm font-regular">ساعات</p>
        <h3 className="text-content-dark text-medium font-medium min-h-[48px] lg:min-h-0">
          {Props.title}
        </h3>
        <h3 className="text-content-base text-sm font-regular min-h-[48px]  lg:min-h-0">
          {Props.description}
        </h3>
        <p className="text-large font-medium">
          {Props.price} رس{" "}
          {Props.oldPrice && (
            <span className="text-content-dim text-sm line-through ms-2">
              {Props.oldPrice} رس
            </span>
          )}
        </p>

        {/* buttons */}
        <div className="flex gap-2 mt-2">
          <button className="w-full tansition py-3 flex items-center justify-center gap-2 text-medium text-content-dark border rounded border-content-muted hover:bg-button-primary hover:text-white">
            <ShoppingCart size={16} className="hidden lg:block" />
            اضف للسلة
          </button>
          <button className="group py-3 flex items-center justify-center border rounded border-content-muted px-4 text-content-dim tansition">
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
