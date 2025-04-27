"use client";

import { useEffect, useState } from "react";
import ProductImageGallery from "./ProductImageGallery";
import ProductExtras from "./ProductExtras";
import ProductPurchaseOptions from "./ProductPurchaseOptions";
import ProductInfo from "./ProductInfo";
import ActionButtons from "./ProductActionButtons";
import ad1 from "../../assets/images/ad-1.png";
import ad2 from "../../assets/images/ad-2.png";
import ad3 from "../../assets/images/ad-3.png";
import { Link, useParams } from "react-router-dom";

const ProductDetailsUpper = () => {
  const product1 = {
    id: 1,
    images: [ad1, ad2, ad3],
  };

  interface Product {
    id2: number;
    name: string;
    purchased: number;
  }

  const [selectedImage, setSelectedImage] = useState(product1.images[0]);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

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

  return (
    <div className="mt-40 px-4">
     
      <div className=" text-gray-500 mb-8 space-x-2 flex items-center ">
        <Link to="/" className="hover:text-[#21c2ac] transition-colors mt-4">الرئيسية</Link>
        <span className="text-gray-500 mt-4">/</span>
        <Link to="/products" className="hover:text-[#21c2ac] transition-colors mt-4">المنتجات</Link>
        <span className="text-gray-500 mt-4">/</span>
        <span className="text-[#21c2ac] mt-4">{product?.name}</span>
      </div>

      {/* تفاصيل المنتج */}
      <div className="flex flex-col md:flex-row gap-5">
        <ProductImageGallery
          thumbnails={product1.images}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
        <div className="w-full md:w-1/2 space-y-4">
          <ProductInfo />
          <ProductExtras />
          <ProductPurchaseOptions
            quantity={quantity}
            setQuantity={setQuantity}
            price={product?.purchased ?? 0}
          />
          <ActionButtons 
            product={{
              id: product?.id2 ?? 0,
              name: product?.name ?? "",
              price: product?.purchased ?? 0,
              image: selectedImage,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsUpper;
