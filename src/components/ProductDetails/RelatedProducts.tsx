import {  ChevronLeft } from 'lucide-react';
import { ProductCard } from '../commonComponents/ProductCard';
import headPhone from '@/assets/images/Image (7).png';
import airPods from '@/assets/images/Image (8).png';
import earPhone from '@/assets/images/Image (9).png';
import smartWhatch from '@/assets/images/ad-1.png';
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

type ProductCardProps = {
  category: string;
  title: string;
  description: string;
  price: number;
  image: string;
  oldPrice?: number;
  specialTag?: "جديد" | "خصم";
};

export default function RelatedProducts() {
  
  const data: ProductCardProps[] = [
    {
      category: "ساعات",
      title: "ساعة ذكية جديدة من سلسلة 8",
      description: "سوار رياضي اسود - عادي.",
      price: 250.00,
      oldPrice: 350.00,
      image: headPhone,
      specialTag: "جديد"
    },
    {
      category: "ساعات",
      title: "ساعة ذكية جديدة من سلسلة 8",
      description: "سوار رياضي اسود - عادي.",
      price: 250.00,
      oldPrice: 350.00,
      image: airPods,
      specialTag: "خصم"
    },
    {
      category: "ساعات",
      title: "ساعة ذكية جديدة من سلسلة 8",
      description: "سوار رياضي اسود - عادي.",
      price: 250.00,
      oldPrice: 350.00,
      image: earPhone,
      specialTag: "خصم"
    },
    {
      category: "ساعات",
      title: "ساعة ذكية جديدة من سلسلة 8",
      description: "سوار رياضي اسود - عادي.",
      price: 250.00,
      oldPrice: 350.00,
      image: smartWhatch,
      specialTag: "خصم"
    }
  ];


  return (
    <div className="w-full mt-5xl responsive-padding-y ">
      <div className="flex justify-between">
        <div>
          <h5 className="text-content-dark">منتجات مشابهة</h5>
          <p className="text-content-base">تسوق احدث المنتجات المميزة المضافة جديد</p>
        </div>
        <div>
            <Link to={'/products'}>
                <Button className="bg-surface-primary text-accent-primary border
                border-accent-primary rounded-sm tansition hover:bg-accent-primary
                 hover:text-surface-primary">عرض الكل <ChevronLeft /></Button>
            </Link>
        </div>
      </div>
      
      <div className='pt-xl w-full flex max-lg:flex-wrap'>
        {data.map((item,index)=><div className="w-full md:w-1/2 lg:w-1/4 px-sm">
            <div className="w-full pt-5" key={index}>
            <ProductCard key={index} {...item} />

            </div>
        </div>)}
      </div>
    </div>
  );
}