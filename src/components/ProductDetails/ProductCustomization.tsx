import photophones from '@assets/images/ad-2.png'
import {Clock , Calendar , ImagePlus, FileText , Link , Check} from 'lucide-react'
import { useState } from "react";


const colors = [
    { name: "رمادي", value: "gray" },
    { name: "أبيض", value: "white" },
    { name: "أسود", value: "black" },
    { name: "أحمر", value: "red" },
    { name: "أصفر", value: "yellow" },
  ];


const ProductCustomization = () => {
  
    const [selectedColor, setSelectedColor] = useState("red");
  return (
    
      <div className="container mx-auto text-right px-4">
    
      {/* Content */}
      
        <div className="mt-6 space-y-6 text-right">
          {/*  images products */}
          <div>
            <h3 className="font-bold mb-4  text-xl text-gray-600">صور المنتج</h3>
            <div className="flex gap-3 overflow-x-auto">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="text-center">
                  <img
                    src={photophones}
                    alt="عنوان الصورة"
                    className="w-40 h-30  "
                  />
                  <p className="text-sm mt-1 text-gray-400">عنوان الصورة</p>
                </div>
              ))}
            </div>
          </div>

          {/*  color */}
          <div className="space-y-4 mt-8">
  <h3 className="font-bold text-xl text-gray-700">الألوان المتاحة</h3>
  <div className="flex items-center gap-[70px] flex-wrap">
    {colors.map((color, index) => (
      <div
        key={color.value}
        className="flex flex-col relative items-center gap-2"
      >
       
        <div
          className={`relative w-8 h-8 rounded-full border-2 cursor-pointer flex items-center justify-center`}
          style={{
            backgroundColor: color.value,
            borderColor:
              selectedColor === color.value ? "#62d0b6" : "#e5e7eb",
          }}
          onClick={() => setSelectedColor(color.value)}
        >
          {selectedColor === color.value && (
            <Check className="w-4 h-4 text-white" />
          )}
        </div>

       
        <button
          className={`text-sm ${
            selectedColor === color.value ? "text-black" : "text-gray-400"
          }`}
          onClick={() => setSelectedColor(color.value)}
        >
          {color.name}
        </button>

       
        {index < colors.length - 1 && (
          <span className="absolute right-[80px] top-6 transform -translate-y-1/2  flex items-center text-gray-300">
            |
          </span>
        )}
      </div>
    ))}
  </div>
</div>

          <div className="space-y-2 mt-8">
            <h3 className="font-bold text-xl mb-1 text-gray-600"> نص بديل للعنوان</h3>
            <span className='text-gray-400 text-sm'>نص بديل لوصف حقل الادخال</span>
            <div className="relative mt-2 text-sm">
                <input
                type="text"
                placeholder="نص بديل للقيمة"
                className="  w-full border rounded pt-2 pb-2 pr-4 pl-12 text-right   text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#21c2ac]"
                >
                
                </input>
            </div>
            <div className="space-y-2 mt-8">
            <h3 className="font-bold text-xl mb-1 text-gray-600"> نص بديل للعنوان</h3>
            <div className="relative mt-2 text-sm">
                <input
                type="text"
                placeholder="نص بديل للقيمة"
                className="  w-full border rounded pt-2 pb-2 pr-4 pl-12 text-right   text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#21c2ac]"
                >
                
                </input>
            </div>
            <div className="space-y-2 mt-8">
  <h3 className="font-bold text-xl mb-1 text-gray-600">اضف ملاحظاتك</h3>
  <div className="relative mt-2 text-sm">
    <textarea
      placeholder="برجاء ادخال ملاحظاتك"
      className="w-full border rounded pt-4 pb-2 pr-4 pl-4 text-right text-gray-600 focus:outline-none h-28 resize-none"
    ></textarea>
  </div>
</div>

<div className="space-y-2 mt-8">
  <h3 className="font-bold text-xl mb-1 text-gray-600">تاريخ التوصيل</h3>
  <div className="relative mt-2 text-sm">
    <input
      type="text"
      placeholder="برجاء تحديد التاريخ"
      className="w-full border rounded pt-2 pb-2 pr-4 pl-12 text-right text-gray-600 focus:outline-none"
    />
    <button className="absolute inset-y-0 left-3 flex items-center justify-center text-[#62d0b6]  px-2 py-1 rounded-full text-sm">
      <Calendar className="w-4 h-4" />
    </button>
  </div>
</div>
<div className="space-y-2 mt-8">
  <h3 className="font-bold text-xl mb-1 text-gray-600">تحديد الوقت</h3>
  <div className="relative mt-2 text-sm">
    <input
      type="text"
      placeholder="برجاء تحديد الوقت"
      className="w-full border rounded pt-2 pb-2 pr-4 pl-12 text-right text-gray-600 focus:outline-none"
    />
    <button className="absolute inset-y-0 left-3 flex items-center justify-center text-[#62d0b6]  px-2 py-1 rounded-full text-sm">
      <Clock className="w-4 h-4" />
    </button>
  </div>
</div>
<div className="space-y-2 mt-8">
  <h3 className="font-bold text-xl mb-1 text-gray-600">اضف صور التاجر</h3>

  
  <div
    className="relative mt-2 text-sm w-full h-32 rounded border border-gray-200 p-1"
    onDragOver={(e) => e.preventDefault()}
    onDrop={(e) => {
      e.preventDefault();
      const files = e.dataTransfer.files;
      
      console.log("Dropped file:", files[0]);
    }}
  >
    
    <input
      type="file"
      accept="image/*"
      id="upload-photo"
      className="hidden"
      onChange={(e) => {
        const file = e.target.files?.[0];
        if (file) {
          console.log("Uploaded file:", file);
        }
      }}
    />

   
    <div className="w-full h-full border-2 border-dashed border-gray-300 flex flex-col items-center justify-center rounded text-gray-400 ">
      <ImagePlus className="w-6 h-6 text-[#62d0b6] mb-1" />
      <span className="text-sm text-center">
        اسحب و افلت الصورة هنا او{" "}
        <label
          htmlFor="upload-photo"
          className="text-[#62d0b6] text-sm cursor-pointer hover:underline"
        >
          تصفح جهازك
        </label>
      </span>
    </div>
  </div>
</div>
<div className="space-y-2 mt-8">
  <h3 className="font-bold text-xl mb-1 text-gray-600">المرفقات</h3>

  <div className="flex space-x-4">
    {/* Container for first border (signature) */}
    <div className="flex items-center justify-center border-2 border-gray-200 rounded-lg w-1/2 p-2">
      <FileText className="w-5 h-5 text-gray-600 mr-2" />
      <span className="text-sm text-gray-600"> كتابة ملاحظات</span>
      
    </div>

    {/* Container for second border (link share) */}
    <div className="flex items-center justify-center border-2 border-gray-200 rounded-lg w-1/2 p-2">
      <Link className="w-5 h-5 text-gray-600 mr- justify-center items-center" to={''} />
      <span className="text-sm text-gray-600"> ارفاق ملف</span>
      
    </div>
  </div>
</div>







          </div>

          </div>

           

         
        </div>
        </div>
        
    
    
  );
};

export default ProductCustomization;
