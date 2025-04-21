import TabyImg from "@/assets/images/download.png"
import SpotiImg from "@/assets/images/image (10).png"
import TamaraImg from "@/assets/images/image (11).png"
import { Link } from "react-router-dom"

export default function ProductBrands() {
  return (
    <div className="w-full">
        <div className="flex max-md:flex-wrap">
            <div className="w-full md:w-1/3 px-sm">
               <div className="border border-content-muted rounded-sm px-lg py-md">
                  <img src={TabyImg} alt='taby brand'/>
                  <p className="text-content-dark font-semibold text-sm py-3">SAR ادفع ربع القيمة 11.77 .قسطه على 3 أشهر. بدون رسوم</p>
                   <Link to={"/"}><p className="text-accent-primary">أعرف أكثر</p></Link>
               </div>
            </div>
            <div className="w-full md:w-1/3 px-sm max-md:my-5">
               <div className="border border-content-muted rounded-sm px-lg py-md">
                  <img className="mb-md" src={SpotiImg} alt='spoti brand'/>
                  <p className="text-content-dark font-semibold text-sm py-3">SAR ادفع ربع القيمة 11.77 .قسطه على 3 أشهر. بدون رسوم</p>
                   <Link to={"/"}><p className="text-accent-primary">أعرف أكثر</p></Link>
               </div>
            </div>
            <div className="w-full md:w-1/3 px-sm">
               <div className="border border-content-muted rounded-sm px-lg py-md">
                  <img className="mb-md" src={TamaraImg} alt='tamara brand'/>
                  <p className="text-content-dark font-semibold text-sm py-3">SAR ادفع ربع القيمة 11.77 .قسطه على 3 أشهر. بدون رسوم</p>
                   <Link to={"/"}><p className="text-accent-primary">أعرف أكثر</p></Link>
               </div>
            </div>
        </div>
    </div>
  )
}
