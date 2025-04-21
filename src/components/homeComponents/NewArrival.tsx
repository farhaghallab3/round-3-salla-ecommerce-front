import * as React from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { ProductCard } from "../commonComponents/ProductCard";
// import headPhone from "@/assets/images/Image (7).png";
// import airPods from "@/assets/images/Image (8).png";
// import earPhone from "@/assets/images/Image (9).png";
// import smartWhatch from "@/assets/images/ad-1.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
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

export default function NewArrival() {
  const [api, setApi] = React.useState<any>(null);
  //get the data from api using custom hook useGetQuery
  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useGetQuery("products", "/products");

  console.log("products", products);
  //handel loading & error states
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }
  //   const data: ProductCardProps[] = [
  //   {
  //     category: "ساعات",
  //     title: "ساعة ذكية جديدة من سلسلة 8",
  //     description: "سوار رياضي اسود - عادي.",
  //     price: 250.00,
  //     oldPrice: 350.00,
  //     image: headPhone,
  //     specialTag: "جديد"
  //   },
  //   {
  //     category: "ساعات",
  //     title: "ساعة ذكية جديدة من سلسلة 8",
  //     description: "سوار رياضي اسود - عادي.",
  //     price: 250.00,
  //     oldPrice: 350.00,
  //     image: airPods,
  //     specialTag: "خصم"
  //   },
  //   {
  //     category: "ساعات",
  //     title: "ساعة ذكية جديدة من سلسلة 8",
  //     description: "سوار رياضي اسود - عادي.",
  //     price: 250.00,
  //     oldPrice: 350.00,
  //     image: earPhone,
  //     specialTag: "خصم"
  //   },
  //   {
  //     category: "ساعات",
  //     title: "ساعة ذكية جديدة من سلسلة 8",
  //     description: "سوار رياضي اسود - عادي.",
  //     price: 250.00,
  //     oldPrice: 350.00,
  //     image: smartWhatch,
  //     specialTag: "خصم"
  //   },
  //   {
  //     category: "ساعات",
  //     title: "ساعة ذكية جديدة من سلسلة 8",
  //     description: "سوار رياضي اسود - عادي.",
  //     price: 250.00,
  //     oldPrice: 350.00,
  //     image: smartWhatch,
  //     specialTag: "خصم"
  //   },
  //   {
  //     category: "ساعات",
  //     title: "ساعة ذكية جديدة من سلسلة 8",
  //     description: "سوار رياضي اسود - عادي.",
  //     price: 250.00,
  //     oldPrice: 350.00,
  //     image: smartWhatch,
  //     specialTag: "خصم"
  //   },
  //   {
  //     category: "ساعات",
  //     title: "ساعة ذكية جديدة من سلسلة 8",
  //     description: "سوار رياضي اسود - عادي.",
  //     price: 250.00,
  //     oldPrice: 350.00,
  //     image: smartWhatch,
  //     specialTag: "خصم"
  //   },
  //   {
  //     category: "ساعات",
  //     title: "ساعة ذكية جديدة من سلسلة 8",
  //     description: "سوار رياضي اسود - عادي.",
  //     price: 250.00,
  //     oldPrice: 350.00,
  //     image: smartWhatch,
  //     specialTag: "خصم"
  //   },
  //   {
  //     category: "ساعات",
  //     title: "ساعة ذكية جديدة من سلسلة 8",
  //     description: "سوار رياضي اسود - عادي.",
  //     price: 250.00,
  //     oldPrice: 350.00,
  //     image: smartWhatch,
  //     specialTag: "خصم"
  //   },
  //   {
  //     category: "ساعات",
  //     title: "ساعة ذكية جديدة من سلسلة 8",
  //     description: "سوار رياضي اسود - عادي.",
  //     price: 250.00,
  //     oldPrice: 350.00,
  //     image: smartWhatch,
  //     specialTag: "خصم"
  //   },
  //   {
  //     category: "ساعات",
  //     title: "ساعة ذكية جديدة من سلسلة 8",
  //     description: "سوار رياضي اسود - عادي.",
  //     price: 250.00,
  //     oldPrice: 350.00,
  //     image: smartWhatch,
  //     specialTag: "خصم"
  //   },
  //   {
  //     category: "ساعات",
  //     title: "ساعة ذكية جديدة من سلسلة 8",
  //     description: "سوار رياضي اسود - عادي.",
  //     price: 250.00,
  //     oldPrice: 350.00,
  //     image: smartWhatch,
  //     specialTag: "خصم"
  //   }
  // ];

  const scrollPrev = () => {
    if (api) api.scrollPrev();
  };

  const scrollNext = () => {
    if (api) api.scrollNext();
  };

  return (
    <div className="w-full mt-5xl responsive-padding-x responsive-padding-y bg-surface-secondary">
      <div className="flex justify-between">
        <div>
          <h5 className="text-content-dark">وصل حديثا</h5>
          <p className="text-content-base">
            تسوق احدث المنتجات المميزة المضافة جديد
          </p>
        </div>
        <div className="flex">
          <button
            onClick={scrollNext}
            className="bg-surface-primary px-3 flex items-center justify-center me-2 text-content-base rounded-full"
          >
            <ChevronRight />
          </button>
          <button
            onClick={scrollPrev}
            className="bg-surface-primary px-3 flex items-center justify-center text-content-base rounded-full"
          >
            <ChevronLeft />
          </button>
        </div>
      </div>

      <div className="pt-xl w-full">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            slidesToScroll: 4,
          }}
          className="w-full"
        >
          <CarouselContent>
            {products.data.map((item: IProduct) => (
              <CarouselItem
                key={item.id2}
                className="basis-full md:basis-1/2 lg:basis-1/4"
              >
                <div className="p-1">
                  <div className="bg-surface-primary">
                    <ProductCard {...item} />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
