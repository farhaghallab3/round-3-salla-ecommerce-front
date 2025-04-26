import { useAppSelector } from "@/redux/hooks";
import { ProductCard } from "../commonComponents/ProductCard";
import { ProductFlexCard } from "./ProductFlexCard";
import { useEffect, useState } from "react";

import noCart from "@/assets/icons/noCartIcon.png";
import { useGetQuery } from "@/api/useGetQuery";
import { IProduct } from "@/types/product";

// type ProductCardProps = {
//   title: string;
//   description: string;
//   price: number;
//   image: string;
//   specialTag?: "جديد" | "خصم";
//   oldPrice?: number;
//   rating?: number;
// };
// const products: ProductCardProps[] = [
//   {
//     title: "ساعة ذكية جديدة من سلسلة 8",
//     description: "سوار رياضي اسود - عادي",
//     price: 250,
//     image: "https://placehold.co/600x400",
//     specialTag: "جديد",
//     rating: 4.5,
//   },
//   {
//     title: "سماعات بلوتوث لاسلكية",
//     description: "جودة صوت عالية وتقنية عزل الضوضاء",
//     price: 150,
//     image: "https://placehold.co/600x400",
//     specialTag: "خصم",
//     oldPrice: 200,
//     rating: 3.5,
//   },
//   {
//     title: "باور بانك 20000mAh",
//     description: "شحن سريع بتقنية PD",
//     price: 120,
//     image: "https://placehold.co/600x400",
//     specialTag: "جديد",
//     rating: 5,
//   },
//   {
//     title: "كيبورد ميكانيكي للألعاب",
//     description: "إضاءة RGB ومفاتيح زرقاء",
//     price: 320,
//     image: "https://placehold.co/600x400",
//     specialTag: "خصم",
//     oldPrice: 450,
//     rating: 4,
//   },
//   {
//     title: "لابتوب للأعمال",
//     description: "رام 16GB - SSD 512GB",
//     price: 320,
//     image: "https://placehold.co/600x400",
//     oldPrice: 450,
//     specialTag: "خصم",
//     rating: 4,
//   },
//   {
//     title: "هاتف ذكي بشاشة 6.5 إنش",
//     description: "ذاكرة داخلية 128GB - كاميرا 64MP",
//     price: 2200,
//     image: "https://placehold.co/600x400",
//     specialTag: "جديد",
//     rating: 4,
//   },
//   {
//     title: "تابلت تعليمي للأطفال",
//     description: "مع برامج تعليمية وألعاب مفيدة",
//     price: 490,
//     image: "https://placehold.co/600x400",
//     specialTag: "جديد",
//   },
//   {
//     title: "ماوس لاسلكي مريح",
//     description: "تصميم مريح للاستخدام الطويل",
//     price: 90,
//     image: "https://placehold.co/600x400",
//     specialTag: "جديد",
//     rating: 4,
//   },
// ];

export const ProductsLayout = () => {
  const sort = useAppSelector((state) => state.filters.sort);
  const minPrice = useAppSelector((state) => state.filters.minPrice);
  const maxPrice = useAppSelector((state) => state.filters.maxPrice);
  const selectedCategory = useAppSelector((state) => state.filters.category);
  console.log(selectedCategory);

  const {
    data: productsResponse = [],
    isLoading,
    isError,
    error,
  } = useGetQuery("products", "/products");

  const products = productsResponse.data ?? [];

  function getSortedProducts(
    sortType: string,
    minPrice: number,
    maxPrice: number
  ) {
    return products
      .filter(
        (product: IProduct) =>
          Number(product.price) >= minPrice && Number(product.price) <= maxPrice
      )
      .filter((product: IProduct) =>
        selectedCategory === "All"
          ? true
          : product.category.name === selectedCategory
      )
      .sort((a: IProduct, b: IProduct) =>
        sortType === "desc"
          ? Number(b.price) - Number(a.price)
          : Number(a.price) - Number(b.price)
      );
  }

  const [productsState, setProductsState] = useState<IProduct[]>([]);

  useEffect(() => {
    if (products.length > 0) {
      setProductsState(getSortedProducts(sort, minPrice, maxPrice));
    }
  }, [sort, minPrice, maxPrice, products, selectedCategory]);

  const layoutSystem = useAppSelector((state) => state.filters.listStyle);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message || "An error occurred"}</div>;
  }

  if (productsState.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4">
        <img src={noCart} alt="" />
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl text-content-base font-button-medium">
            لا توجد منتجات حتى الآن
          </p>
          <p className="text-content-dim text-[16px]">
            بحثك لم يطابق أي منتجات
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="@container responsive-padding-y">
      {layoutSystem === "grid" && (
        <div className="grid col-span-1 grid-cols-1 @sm:grid-cols-2 @md:grid-cols-2 @lg:grid-cols-3 gap-4">
          {productsState.map((product) => (
            <ProductCard key={product.id2} {...product} />
          ))}
        </div>
      )}
      {layoutSystem === "list" && (
        <div className="flex flex-col gap-4">
          {productsState.map((product) => (
            <ProductFlexCard key={product.id2} {...product} />
          ))}
        </div>
      )}
    </div>
  );
};
