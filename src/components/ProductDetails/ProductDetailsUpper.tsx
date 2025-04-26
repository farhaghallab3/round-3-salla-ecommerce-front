"use client";

import { useState } from "react";
import ProductImageGallery from "./ProductImageGallery";
import ProductExtras from "./ProductExtras";
import ProductPurchaseOptions from "./ProductPurchaseOptions";
import ProductActionButtons from "./ProductActionButtons";
import ProductInfo from "./ProductInfo";
import pigPhone from "@assets/images/ad-2.png";

const ProductDetailsUpper = () => {
  const product = {
    name: "Sample Product",
    brand: "Brand Name",
    description: "This is a sample product description to explain all features.",
    images: [
      "/assets/images/ad-1.png",
      "/assets/images/ad-2.png",
      "/assets/images/ad-3.png",
    ],
  };

  const [selectedImage, setSelectedImage] = useState(pigPhone);
  const [quantity, setQuantity] = useState(1);

  
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <ProductImageGallery
        thumbnails={product.images}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
      <div className="w-full md:w-1/2 space-y-4 ">
      <ProductInfo />
        <ProductExtras />
        <ProductPurchaseOptions
          quantity={quantity}
          setQuantity={setQuantity}
          price={250}
        />
        <ProductActionButtons />
      </div>
    </div>
  );
};

export default ProductDetailsUpper;
