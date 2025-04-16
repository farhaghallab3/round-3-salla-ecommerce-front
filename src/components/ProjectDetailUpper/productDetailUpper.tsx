import React, { FC } from "react";

const ProjectDetailsUpper: FC = () => {
  return (
    <div className="pt-[130px] min-h-screen px-4 md:px-20 py-10 bg-white">
      {/* Breadcrumb */}
      <div className="text-sm text-green-600 mb-4">
        الرئيسية / كل المنتجات / تفاصيل المنتج
      </div>

      {/* Main content layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Right Section - Product Images */}
        <div className="flex flex-col md:flex-row-reverse gap-4 items-start">
          {/* Thumbnails - vertical slider */}
          <div className="flex md:flex-col gap-2 order-2 md:order-1">
            {["/iphone1.png", "/iphone2.png", "/iphone3.png", "/iphone4.png", "/iphone5.png"].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`thumb-${i}`}
                className="w-16 h-16 border rounded-lg cursor-pointer hover:shadow-md object-cover"
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="order-1 md:order-2 w-full">
            <img
              src="/iphone-main.png"
              alt="iPhone"
              className="w-full max-w-md rounded shadow-lg object-contain"
            />
          </div>
        </div>

        {/* Left Section - Product Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <img src="/samsung-logo.png" alt="samsung" className="w-8 h-8" />
            <h1 className="text-2xl font-extrabold text-gray-800 leading-relaxed">
              موبايل آبل آيفون بشريحتين و 64 جيجا بالإضافة إلى كاميرتين ذات جودة عالية
            </h1>
          </div>

          <div className="text-sm text-gray-600">التقييم 5 | تم التقييم 16 مرة</div>

          <div className="flex gap-1 text-yellow-400 text-lg">
            {[...Array(5)].map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>

          <p className="text-sm text-gray-700 leading-relaxed">
            موبايل آبل آيفون 11 بشريحتين إحتمال وجود ذاكرة داخلية 64 جيجا بحجم شاشة رائعة، الشبكة الجيل الرابع LTE، النسخة العالمية مع شحن سريع وأداء قوي للاستخدام اليومي.
          </p>

          <button className="text-green-700 underline hover:text-green-900">عرض المزيد</button>

          <ul className="text-sm space-y-2 text-gray-700 list-disc pr-4">
            <li>✔ تخصيص المنتج حسب رغبتك</li>
            <li>✔ التقييم في المعارض المعتمدة</li>
            <li>✔ وزن المنتج: 0.45 كجم فقط</li>
            <li>✔ جدول المواصفات التفصيلي</li>
            <li>✔ إمكانية إعادة المنتج بسهولة</li>
          </ul>

          <div className="text-sm text-red-600 font-medium">
            احصل عليه قبل نفاذ الكمية!
          </div>

          <div className="flex items-center gap-4 mt-2">
            <span className="text-2xl font-bold text-green-700">250.00 ر.س</span>
            <div className="flex items-center gap-2 border px-3 py-1 rounded shadow-sm">
              <button className="px-2 font-bold text-lg hover:text-red-600">-</button>
              <span className="font-semibold">1</span>
              <button className="px-2 font-bold text-lg hover:text-green-600">+</button>
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <button className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition">
              الشراء السريع
            </button>
            <button className="border border-green-600 text-green-600 py-2 px-6 rounded-lg hover:bg-green-100 transition">
              أضف للسلة
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsUpper;