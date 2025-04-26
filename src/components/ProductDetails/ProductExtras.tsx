"use client";

import { useState } from "react";
import { Gift, PenBox, Store } from "lucide-react";
import ProductCustomization from "./ProductCustomization";
// import ProductCustomization from "./ProductCustomization"; // Uncomment if you have this

const AccordionSections = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-4">
      {/* تخصيص المنتج */}
      <div className="border p-2 rounded flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 text-[#62d0b6]">
            <PenBox className="w-4 h-4" />
            <span className="text-gray-700 font-regular">تخصيص المنتج</span>
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
          <span className="text-gray-700 font-regular">التوفر في المعارض</span>
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
          <span className="text-gray-700 font-regular">جدول القياسات</span>
        </div>
        <button className="relative w-8 h-8 rounded-full border-2 cursor-pointer flex items-center justify-center">
          +
        </button>
      </div>

      
      <div className="border p-2 rounded flex justify-between items-center">
        <div className="flex items-center gap-1 text-[#62d0b6]">
          <Gift className="w-4 h-4" />
          <span className="text-gray-700 font-regular">اهدي من تحب</span>
        </div>
        <button className="text-sm flex items-center justify-center bg-white text-[#62d0b6] border border-[#62d0b6] px-3 py-2 rounded">
          ارسل كهدية
        </button>
      </div>

      
      <div className="border p-2 rounded flex justify-between items-center">
        <div className="flex items-center gap-1 text-[#62d0b6]">
         
          <span className="text-gray-700 font-regular">احصل عليه الان قبل الجميع</span>
        </div>
        <button className="text-sm flex items-center justify-center bg-white text-[#62d0b6] border border-[#62d0b6] px-3 py-2 rounded">
          اطلبه الان
        </button>
      </div>
    </div>
  );
};

export default AccordionSections;
