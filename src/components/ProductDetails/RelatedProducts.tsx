import { ChevronLeft } from "lucide-react";
import { ProductCard } from "../commonComponents/ProductCard";
// import headPhone from "@/assets/images/Image (7).png";
// import airPods from "@/assets/images/Image (8).png";
// import earPhone from "@/assets/images/Image (9).png";
// import smartWhatch from "@/assets/images/ad-1.png";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useGetQuery } from "@/api/useGetQuery";
import { IProduct } from "@/types/product";

// type ProductCardProps = {
//   category: string;
//   title: string;
//   description: string;
//   price: number;
//   image: string;
//   oldPrice?: number;
//   specialTag?: "جديد" | "خصم";
// };

export default function RelatedProducts() {
  // const data: ProductCardProps[] = [
  //   {
  //     category: "ساعات",
  //     title: "ساعة ذكية جديدة من سلسلة 8",
  //     description: "سوار رياضي اسود - عادي.",
  //     price: 250.0,
  //     oldPrice: 350.0,
  //     image: headPhone,
  //     specialTag: "جديد",
  //   },
  //   {
  //     category: "ساعات",
  //     title: "ساعة ذكية جديدة من سلسلة 8",
  //     description: "سوار رياضي اسود - عادي.",
  //     price: 250.0,
  //     oldPrice: 350.0,
  //     image: airPods,
  //     specialTag: "خصم",
  //   },
  //   {
  //     category: "ساعات",
  //     title: "ساعة ذكية جديدة من سلسلة 8",
  //     description: "سوار رياضي اسود - عادي.",
  //     price: 250.0,
  //     oldPrice: 350.0,
  //     image: earPhone,
  //     specialTag: "خصم",
  //   },
  //   {
  //     category: "ساعات",
  //     title: "ساعة ذكية جديدة من سلسلة 8",
  //     description: "سوار رياضي اسود - عادي.",
  //     price: 250.0,
  //     oldPrice: 350.0,
  //     image: smartWhatch,
  //     specialTag: "خصم",
  //   },
  // ];

  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useGetQuery<IProduct[]>("products", "/products");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <div className="w-full mt-5xl responsive-padding-y ">
      <div className="flex justify-between">
        <div>
          <h5 className="text-content-dark">منتجات مشابهة</h5>
          <p className="text-content-base">
            تسوق احدث المنتجات المميزة المضافة جديد
          </p>
        </div>
        <div>
          <Link to={"/products"}>
            <Button
              className="bg-surface-primary text-accent-primary border
                border-accent-primary rounded-sm tansition hover:bg-accent-primary
                 hover:text-surface-primary"
            >
              عرض الكل <ChevronLeft />
            </Button>
          </Link>
        </div>
      </div>

      <div className="pt-xl w-full flex max-lg:flex-wrap">
        {products.map((item: IProduct) => (
          <div className="w-full md:w-1/2 lg:w-1/4 px-sm" key={item.id2}>
            <div className="w-full pt-5">
              <ProductCard {...item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
