// productCard.tsx
import { ArrowLeft } from "lucide-react";
import { ProductCard } from "../commonComponents/ProductCard";
import { Link } from "react-router-dom";

type ProductCardProps = {
  title: string;
  description: string;
  price: number;
  image: string;
  specialTag?: "جديد" | "خصم";
  oldPrice?: number;
};
const products: ProductCardProps[] = [
  {
    title: "ساعة ذكية جديدة من سلسلة 8",
    description: "سوار رياضي اسود - عادي",
    price: 250,
    image: "https://placehold.co/600x400",
    specialTag: "جديد",
  },
  {
    title: "سماعات بلوتوث لاسلكية",
    description: "جودة صوت عالية وتقنية عزل الضوضاء",
    price: 150,
    image: "https://placehold.co/600x400",
    specialTag: "خصم",
    oldPrice: 200,
  },
  {
    title: "باور بانك 20000mAh",
    description: "شحن سريع بتقنية PD",
    price: 120,
    image: "https://placehold.co/600x400",
    specialTag: "جديد",
  },
  {
    title: "كيبورد ميكانيكي للألعاب",
    description: "إضاءة RGB ومفاتيح زرقاء",
    price: 320,
    image: "https://placehold.co/600x400",
    specialTag: "خصم",
    oldPrice: 450,
  },
  {
    title: "لابتوب للأعمال",
    description: "رام 16GB - SSD 512GB",
    price: 320,
    image: "https://placehold.co/600x400",
    oldPrice: 450,
    specialTag: "خصم",
  },
  {
    title: "هاتف ذكي بشاشة 6.5 إنش",
    description: "ذاكرة داخلية 128GB - كاميرا 64MP",
    price: 2200,
    image: "https://placehold.co/600x400",
    specialTag: "جديد",
  },
  {
    title: "تابلت تعليمي للأطفال",
    description: "مع برامج تعليمية وألعاب مفيدة",
    price: 490,
    image: "https://placehold.co/600x400",
    specialTag: "جديد",
  },
  {
    title: "ماوس لاسلكي مريح",
    description: "تصميم مريح للاستخدام الطويل",
    price: 90,
    image: "https://placehold.co/600x400",
    specialTag: "جديد",
  },
];

type Props = {
  title: string;
};

export const SpecialProducts = (Props: Props) => {
  return (
    <div className="responsive-padding-x responsive-margin-y mx-auto">
      {/* header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl lg:text-2xl font-bold text-content-dark">
            {Props.title}
          </h3>
          <p className="font-regular text-sm text-content-base">
            تسوق احدث المنتجات المميزة المضافة جديد
          </p>
        </div>
        <Link
          to={"/products"}
          className="border-2 text-accent-primary border-accent-primary flex items-center gap-2 text-sm px-4 py-2 rounded-sm self-end whitespace-nowrap"
        >
          عرض الكل
          <ArrowLeft size={16} />
        </Link>
      </div>
      {/* products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center mt-12">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};
