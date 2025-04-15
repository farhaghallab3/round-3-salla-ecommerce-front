import Laptop from "@/assets/images/lap.png";
import LapContainer from "@/assets/images/lapContainer.png";
import { Link } from "react-router-dom";

export const LapBanner = () => {
  return (
    <div className=" mx-auto mt-12">
      <div
        style={{ backgroundImage: `url(${LapContainer})` }}
        className="w-full min-h-[500px] bg-cover bg-center rounded-lg flex flex-col xl:flex-row items-center justify-center gap-8 lg:justify-between px-4 py-12 sm:px-6 lg:px-52 mx-auto"
      >
        {/* text */}
        <div className="flex flex-col items-center lg:items-start justify-center h-full w-max gap-4">
          <h2 className="text-2xl xl:text-5xl font-bold text-white">
            افضل التخفيضات 2025
          </h2>
          <p className="text-sm text-white lg:text-medium font-regular max-w-[456px] w-[70%]">
            متجر سلة يوفر لك كل ما تحتاجه من إلكترونيات او أثات منزلي بالإضافة
            إلي أفضل التخفيضات علي المنتجاتز تسوق الان واستمتع بكل التخفيضات علي
            المنتجات
          </p>
          <Link
            to="/"
            className="text-sm text-white bg-accent-primary py-4 px-10 rounded-sm w-fit mt-4"
          >
            اكتشف المزيد
          </Link>
        </div>
        {/* image */}
        <div>
          <img src={Laptop} alt="" className="object-contain w-auto" />
        </div>
      </div>
    </div>
  );
};
