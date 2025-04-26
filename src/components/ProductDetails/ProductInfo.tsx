import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Flame, Heart, Share2, Star } from "lucide-react";
import samsungLogo from "@assets/images/brandsamasung.png";
import { Link } from "react-router-dom";

interface Product {
  id2: number;
  name: string;
  description: string;
  remaining_quantity: number;
  purchased: number;
  reviews_average: number;
  reviews_count: number;
  small_desc: string;
  sku: string;
}

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

const ProductInfo = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("https://salla.digital-vision-solutions.com/api/products");
        const data = await response.json();
        const singleProduct = data?.data?.find((item: Product) => item.id2 === parseInt(id || ""));
        setProduct(singleProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (!product) return <div>جاري التحميل...</div>;

  return (
    <div className="w-full md:w-1/2 space-y-4 pt-20">
      <div>
        <img src={samsungLogo} alt="brand" className="w-16 mb-2" />
        <h1 className="text-xl font-bold">{product.name}</h1>

        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mt-4">
          <Box className="w-4 h-4 text-[#62d0b6]" />
          <span className="flex items-center gap-1">
            المتبقي <span className="text-[#62d0b6] font-medium">{product.remaining_quantity}</span> وحدة
          </span>
          <span className="text-gray-200 text-sm">|</span>

          <Flame className="w-4 h-4 text-red-500" />
          <span className="flex items-center gap-1">
            تم شراؤه <span className="text-[#62d0b6] font-medium">{product.purchased}</span> مرة
          </span>
        </div>

        <div className="flex items-center gap-x-4 mt-4">
          {/* Stars + Total Ratings */}
          <div className="flex items-center gap-1">
            {renderStars(product.reviews_average)}
            <span className="text-gray-500 text-sm">
              (<span className="font-regular">{product.reviews_count}</span>) تقييمات
            </span>
          </div>

          <span className="text-gray-200 text-sm">|</span>

          {/* Favorite */}
          <div className="flex items-center gap-1 cursor-pointer" onClick={handleToggleFavorite}>
            <Heart
              size={20}
              className={`w-4 h-4 transition-colors ${
                isFavorite ? "text-red-500 fill-red-500" : "text-gray-400"
              }`}
            />
            <span title={isFavorite ? "إزالة من المفضلة" : "إضافة للمفضلة"}>اضف للمفضلة</span>
          </div>

          <span className="text-gray-200 text-sm">|</span>

          {/* Share */}
          <div className="flex items-center gap-1 cursor-pointer">
            <Share2 className="w-4 h-4 text-gray-400" />
            <span className="text-gray-500 text-sm">مشاركة المنتج</span>
          </div>
        </div>
      </div>

      <p className="text-gray-600">{product.description}</p>
      <Link to="/products" className="text-[#62d0b6] mt-2">عرض المزيد</Link>

      {/* Breadcrumbs */}
      <div className="space-y-2 text-regular text mt-4 space-text-heading-small">
        <div className="text-gray-600 font-regular">
          <Link to="" className="underline">الكترونيات</Link>
          <span className="text-gray-300"> | </span>
          <Link to="" className="underline">الموبايلات</Link>
          <span className="text-gray-300"> | </span>
          <Link to="" className="underline">ايفون</Link>
          <span className="text-gray-300"> | </span>
          <Link to="" className="underline">تخفيضات</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
