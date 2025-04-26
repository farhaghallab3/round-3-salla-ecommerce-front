"use client";

import { ShoppingCart } from "lucide-react";
import { useNavigate } from 'react-router-dom'; 
import { toast } from "react-hot-toast"; 
import axios from "axios"; 
import photophones from '@assets/images/ad-2.png'


const product = {
  name: "هاتف سامسونج",
  price: 1000,
  image: photophones,
};


const handleFastBuy = async () => {
  try {
    await axios.post('https://salla.digital-vision-solutions.com/api/carts', {
      productName: product.name,
      
    });
    toast.success("تم الشراء بنجاح ✅");
  } catch (error) {
    toast.error("حدث خطأ أثناء الشراء ❌");
    console.error(error);
  }
};

const ActionButtons = () => {
  const navigate = useNavigate(); 


  const handleAddToCart = () => {
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
  
    const newCartItem = {
      id: Date.now(), // أو ID من المنتج لو عندك
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1, // تقدر تخليه ديناميكي لاحقًا
    };
  
    const updatedCartItems = [...existingCartItems, newCartItem];
  
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  
    navigate('/Checkout');
  };
  

  return (
    <div className="flex flex-col md:flex-row gap-2 pt-2">
      <button
        className="flex items-center justify-center gap-1 bg-[#62d0b6] text-white rounded py-2 px-4 w-full"
        onClick={handleFastBuy}
      >
        <ShoppingCart size={14} className="text-white" />
        الشراء السريع
      </button>

      <button
        className="flex items-center justify-center gap-1 bg-white text-[#62d0b6] border border-[#62d0b6] px-3 py-2 rounded w-full"
        onClick={handleAddToCart}
      >
        <ShoppingCart size={14} className="text-[#62d0b6]" />
        إضافة إلى السلة
      </button>
    </div>
  );
};

export default ActionButtons;
