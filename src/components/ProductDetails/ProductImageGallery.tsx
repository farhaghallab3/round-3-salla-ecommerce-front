"use client";

import clsx from "clsx";
import phones from '@assets/images/ad-2.png'
import phons2 from '@assets/images/ad-1.png'
import phones3 from '@assets/images/ad-3.png'


interface ProductImageGalleryProps {



  thumbnails: string[];
  selectedImage: string;
  setSelectedImage: (img: string) => void;
  
}

const thumbnails = [
    phones,
    phons2,
    phones3,
    phones,
    phones3
   
  ];

const ProductImageGallery = ({  selectedImage, setSelectedImage }: ProductImageGalleryProps) => {


    
  return (
    <div className="w-full md:w-1/2 flex justify-center pt-20">
      <div className="w-full flex flex-col-reverse md:flex-row gap-4 ">
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
        <div className="flex-1 flex justify-center">
          <img
            src={selectedImage}
            alt="Main Product"
            className="w-full h-[500px] rounded-lg border object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImageGallery;
