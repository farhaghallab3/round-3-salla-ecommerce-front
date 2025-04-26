"use client";

import { ShoppingCart } from "lucide-react";



const ActionButtons = () => {
    return (
        <div className="flex flex-col md:flex-row gap-2 pt-2 ">
        <button className="flex items-center justify-center gap-1 bg-[#62d0b6] text-white  rounded py-2 px-4  w-full ">
          <ShoppingCart size={14} className='text-white' />
          الشراء السريع
        </button>
        
        <button className="  flex items-center  justify-center gap-1 bg-white text-[#62d0b6] border border-[#62d0b6] px-3 py-2  rounded w-full ">
          <ShoppingCart size={14} className='text-[#62d0b6]' />
            إضافة إلى السلة
        </button>
      </div>
    );
  };
  

export default ActionButtons;
