// ProductDetails.tsx
import {
  Flame,
  ShoppingCart,
  Star,
  Box,
  PenBox,
  Store,
  Gift,
  Heart,
  Share2,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import phones from "@assets/images/ad-2.png";
import phons2 from "@assets/images/ad-1.png";
import phones3 from "@assets/images/ad-3.png";
import bigPhone from "@assets/images/ad-2.png";
import samsungLogo from "@assets/images/brandsamasung.png";
import ProductCustomization from "./ProductCustomization";
import clsx from "clsx";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetailsUpper = () => {
  const [selectedImage, setSelectedImage] = useState(bigPhone);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  interface Product {
    id: string;
    name: string;
    remaining_quantity: number;
    sold: number;
    reviews_count: number;
    reviews_average: number;
    description: string;
    images: string[];
  }

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `https://salla.digital-vision-solutions.com/api/products/${id}`
        );
        setProduct(res.data);
        // Set first image as default main image
        if (res.data.images && res.data.images.length > 0) {
          setSelectedImage(res.data.images[0]);
        }
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return (
      <div className="justify-center items-center flex mt-8">
        Product not found
      </div>
    );
  }

  const handleToggleFavorite = () => {
    setIsFavorite((prev) => !prev);
    // TODO: Send to API to update favorite status
    // await api.updateFavorite(product.id, !isFavorite);
  };

  const thumbnails = [phones, phons2, phones3, phones, phones3];

  //const product = {
  // totalRatings: 16,
  // sold: 12,
  // remaining: 5,
  //};

  const renderStars = (reviews_average: number) => {
    return (
      <div className="flex gap-1 justify-end mb-2">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            fill={i < reviews_average ? "#FFC62A" : "#D6D6D6"}
            stroke={i < reviews_average ? "#FFC62A" : "#D6D6D6"}
            className="w-4 h-4"
          />
        ))}
      </div>
    );
  };

  return (
    <div dir="rtl" className="font-regular mx-auto p-4 max-w-screen-xl">
      <div>
        <Link to="/">
          <span className="text-[#62d0b6] text-md">
            {" "}
            الرئيسية /
            <Link to="/products">
              <span>كل المنتجات /</span>
            </Link>{" "}
            <span className="text-md text-gray-600">تفاصيل المنتج</span>
          </span>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-5 ">
        {/* Image gallery */}
        <div className="w-full md:w-1/2 flex justify-center pt-20 ">
          {/* Image Gallery Container */}
          <div className="w-full flex flex-col-reverse md:flex-row gap-4 ">
            {/* Thumbnails */}
            <div className="flex md:flex-col flex-row gap-3 justify-center md:justify-start">
              {thumbnails.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  onClick={() => setSelectedImage(img)}
                  className={clsx(
                    "w-20 h-20 object-cover cursor-pointer border rounded-md transition-opacity duration-200",
                    selectedImage === img
                      ? "border-[#21c2ac] opacity-100"
                      : "opacity-50"
                  )}
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 flex justify-center">
              <img
                src={selectedImage}
                alt="Main Product"
                className="w-full h-[500px] rounded-lg border object-contain"
              />
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 space-y-4 pt-20">
          <div>
            <img src={samsungLogo} alt="brand" className="w-16 mb-2" />
            <h1 className="text-xl font-bold">{product.name}</h1>

            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500  mt-4">
              <Box className="w-4 h-4 text-[#62d0b6]" />
              <span className="flex items-center gap-1 ">
                المتبقي{" "}
                <span className="text-[#62d0b6] font-medium">
                  {product.remaining_quantity}
                </span>{" "}
                وحدة
              </span>
              <span className="text-gray-200 text-sm">|</span>

              <Flame className="w-4 h-4 text-red-500" />
              <span className="flex items-center gap-1 ">تم شراؤه</span>

              <span className="text-[#62d0b6] font-medium">{product.sold}</span>
              <span> مرة</span>
            </div>

            <div className="flex items-center gap-x-4 mt-4">
              {/* Stars + Total Ratings */}
              <div className="flex items-center gap-1 ">
                {renderStars(product.reviews_average)}
                <span className="text-gray-500 text-sm">
                  (<span className="font-regular">{product.reviews_count}</span>
                  ) تقييمات
                </span>
              </div>

              <span className="text-gray-200 text-sm">|</span>

              {/* Favorite */}
              <div
                className="flex items-center gap-1 cursor-pointer"
                onClick={handleToggleFavorite}
              >
                <Heart
                  className={`w-4 h-4 transition-colors ${
                    isFavorite ? "text-red-500 fill-red-500" : "text-gray-400"
                  }`}
                />
                <span title={isFavorite ? "إزالة من المفضلة" : "إضافة للمفضلة"}>
                  اضف للمفضلة
                </span>
              </div>
              <span className="text-gray-200 text-sm">|</span>
              {/* Share */}
              <div className="flex items-center gap-1 cursor-pointer">
                <Share2 className="w-4 h-4 text-gray-400" />
                <span className="text-gray-500 text-sm">مشاركة المنتج</span>
              </div>
            </div>
          </div>

          <p className="text-gray-600 ">{product?.description}</p>
          <Link to="/products" className="text-[#62d0b6] mt-2">
            عرض المزيد
          </Link>

          {/* Sections */}
          <div className="space-y-2 text-regular text mt-4 space-text-heading-small">
            <div className="text-gray-600 font-regular ">
              <Link to="" className="underline ">
                {" "}
                الكترونيات
              </Link>
              <span className="text-gray-300"> | </span>
              <Link to="" className="underline">
                {" "}
                الموبايلات
              </Link>
              <span className="text-gray-300"> | </span>
              <Link to="" className="underline">
                {" "}
                ايفون
              </Link>
              <span className="text-gray-300"> | </span>
              <Link to="" className="underline">
                {" "}
                تخفيضات
              </Link>
              <span className="text-gray-300"> | </span>
              <Link to="" className="underline">
                {" "}
                الكترونيات
              </Link>
            </div>
            <div className="space-y-2 font-bold text-gray-700 mt-7">
              <div className="border p-2 rounded">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1 text-[#62d0b6]">
                    <PenBox className="w-4 h-4" />
                    <span className="text-gray-700 font-regular">
                      تخصيص المنتج
                    </span>
                  </div>
                  <button onClick={() => setIsOpen((prev) => !prev)}>
                    {isOpen ? (
                      <span className="relative w-8 h-8 rounded-full border-2 cursor-pointer flex items-center justify-center bg-[#62d0b6] text-white">
                        -
                      </span>
                    ) : (
                      <span className="relative w-8 h-8 rounded-full border-2 cursor-pointer flex items-center justify-center">
                        +
                      </span>
                    )}
                  </button>
                </div>

                {isOpen && (
                  <div className="mt-4">
                    <ProductCustomization />
                  </div>
                )}
              </div>

              <div className="border p-2 rounded flex justify-between items-center">
                <div className="flex items-center gap-1 text-[#62d0b6]">
                  <Store className="w-4 h-4" />
                  <span className="text-gray-700 font-regular">
                    التوفر في المعارض
                  </span>
                </div>
                <button className="relative w-8 h-8 rounded-full border-2 cursor-pointer flex items-center justify-center">
                  +
                </button>
              </div>
              <div className="border p-2 rounded flex justify-between items-center">
                <div className="flex items-center gap-1 text-[#62d0b6]">
                  <PenBox className="w-4 h-4" />
                  <span className="text-gray-700 font-regular">وزن المنتج</span>
                </div>
                <span className="text-sm text-gray-500">0.45 اوقية</span>
              </div>
              <div className="border p-2 rounded flex justify-between items-center">
                <div className="flex items-center gap-1 text-[#62d0b6]">
                  <PenBox className="w-4 h-4" />
                  <span className="text-gray-700 font-regular">
                    جدول القياسات
                  </span>
                </div>
                <button className="relative w-8 h-8 rounded-full border-2 cursor-pointer flex items-center justify-center">
                  +
                </button>
              </div>
              <div className="border p-2 rounded flex justify-between items-center">
                <div className="flex items-center gap-1 text-[#62d0b6]">
                  <Gift className="w-4 h-4" />
                  <span className="text-gray-700 font-regular">
                    اهدي من تحب
                  </span>
                </div>
                <button className=" text-sm flex items-center  justify-center  bg-white text-[#62d0b6] border border-[#62d0b6] px-3 py-2  rounded  ">
                  ارسل كهداية
                </button>
              </div>
              <div className="border p-2 rounded flex justify-between items-center">
                <div className="flex items-center gap-1 text-color-accent-primary">
                  <PenBox className="w-4 h-4" />
                  <span className="text-gray-700 font-regular">
                    احصل عليه الان قبل الجميع
                  </span>
                </div>
                <button className="text-sm  flex items-center  justify-center  bg-white text-[#62d0b6] border border-[#62d0b6] px-3 py-2  rounded  ">
                  اطلبه الان
                </button>
              </div>
            </div>
          </div>

          {/* Price and Quantity */}
          <div className="p-2 rounded flex justify-between items-center">
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-gray-700 font-bold">حدد الكمية</span>
              <div className="flex items-center border rounded overflow-hidden">
                <button
                  onClick={() => setQuantity((q) => Math.max(q - 1, 1))}
                  className="px-3 py-1 bg-gray-100"
                >
                  -
                </button>
                <span className="px-4">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-1 bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            <p className="text-xl font-bold text-gray-600">
              {(250 * quantity).toFixed(2)} ر.س
            </p>
          </div>

          {/* Buttons */}

          <div className="flex flex-col md:flex-row gap-2 pt-2 ">
            <button className="flex items-center justify-center gap-1 bg-[#62d0b6] text-white  rounded py-2 px-4  w-full ">
              <ShoppingCart size={14} className="text-white" />
              الشراء السريع
            </button>

            <button className="  flex items-center  justify-center gap-1 bg-white text-[#62d0b6] border border-[#62d0b6] px-3 py-2  rounded w-full ">
              <ShoppingCart size={14} className="text-[#62d0b6]" />
              إضافة إلى السلة
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsUpper;
