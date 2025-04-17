import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import imageOne from "@/assets/images/Image (16).png";
import imageTwo from "@/assets/images/Image (17).png"
import imageThree from "@/assets/images/Image (18).png"
import imageFour from "@/assets/images/Image (19).png"
import imageFive from "@/assets/images/Image (20).png"
import imageSix from "@/assets/images/Image (21).png"

export default function Categories() {
    const data =[{
        id:1,
        image:imageOne,
        Category:"سماعات أذن",
        title:"150 منتج",
    },
    {
        id:2,
        image:imageTwo,
        Category:"شاشات كمبيوتر",
        title:"150 منتج",
    },
    {
        id:3,
        image: imageThree,
        Category:"موبايلات",
        title:"150 منتج",
    },
    {
        id:4,
        image:imageFour,
        Category:"ساعات رقمية",
        title:"150 منتج",
    },
    {
        id:5,
        image:imageFive,
        Category:"موبايلات",
        title:"150 منتج",
    },
    {
        id:6,
        image:imageSix,
        Category:"أجهزة لابتوب",
        title:"150 منتج",
    },
    {
        id:7,
        image: imageOne,
        Category:"سماعات أذن",
        title:"150 منتج",
    }
]
  return (
    <div>
        <div className="w-full mt-5xl responsive-padding-x responsive-padding-y bg-transparent ">
            <div className="flex justify-between">
                <div>
                    <h5 className="text-content-dark text-2xl font-bold">تسوق حسب الفئات</h5>
                    <p className="text-content-base">تسوق احدث المنتجات المميزة المضافة جديد</p>
                </div>
                <div className='flex'>
                    <Link to={'/products'}>
                        <Button className="bg-surface-primary text-accent-primary border
                        border-accent-primary rounded-sm tansition hover:bg-accent-primary
                        hover:text-surface-primary">عرض الكل <ChevronLeft /></Button>
                    </Link>
                </div>
            </div>
            <div className="flex flex-wrap w-full pt-2xl">
                {data.map((item)=><div key={item.id} className="w-1/3 md:w-1/4 lg:w-1/7 px-md">
                   <div className="w-full text-center">
                    <img src={item.image} className="rounded-full" alt="سماعات"/>
                    <h6 className="py-sm text-lg font-bold text-content-dark">{item.Category}</h6>
                    <p className="text-content-base">{item.title}</p>
                   </div>
                </div>)}
            </div>
        </div>
    </div>
  )
}
