"use client";

import { useState } from "react";
import ProductImageGallery from "./ProductImageGallery";
import ProductExtras from "./ProductExtras";
import ProductPurchaseOptions from "./ProductPurchaseOptions";
import ProductInfo from "./ProductInfo";
import ActionButtons from "./ProductActionButtons";
import ad1 from "../../assets/images/ad-1.png";
import ad2 from "../../assets/images/ad-2.png";
import ad3 from "../../assets/images/ad-3.png";

const ProductDetailsUpper = () => {
  const product = {
    id: 1,
    name: "موبايل آيفون",
    brand: "Brand Name",
    description: "This is a sample product description to explain all features.",
    price: 3000,
    images: [
      ad1,
      ad2,
      ad3,
    ],
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col md:flex-row gap-5">
      <ProductImageGallery
        thumbnails={product.images}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
      <div className="w-full md:w-1/2 space-y-4">
        <ProductInfo />
        <ProductExtras />
        <ProductPurchaseOptions
          quantity={quantity}
          setQuantity={setQuantity}
          price={product.price}
        />
<ActionButtons 
  product={{
    id: product.id,
    name: product.name,
    price: product.price,
    image: selectedImage, 
  }}
/>

       
      </div>
    </div>
  );
};

export default ProductDetailsUpper;
