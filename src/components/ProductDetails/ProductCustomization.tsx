import photophones from '@assets/images/ad-2.png'
import { Clock, Calendar, Check } from 'lucide-react';
import { useState, useRef } from "react";
import ActionButtons from './ProductActionButtons';



const colors = [
  { name: "رمادي", value: "gray" },
  { name: "أبيض", value: "white" },
  { name: "أسود", value: "black" },
  { name: "أحمر", value: "red" },
  { name: "أصفر", value: "yellow" },
];

const ProductCustomization = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState("red");
  const [notes, setNotes] = useState<string>("");
 

  const hiddenDateInputRef = useRef<HTMLInputElement>(null);
  const hiddenTimeInputRef = useRef<HTMLInputElement>(null);

 

  return (
    <div className="container mx-auto text-right px-4">
      <div className="mt-6 space-y-6 text-right">
        {/* صور المنتج */}
        <div>
          <h3 className="font-bold mb-4 text-xl text-gray-600">صور المنتج</h3>
          <div className="flex gap-3 overflow-x-auto">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="text-center">
                <img
                  src={photophones}
                  alt="عنوان الصورة"
                  className="w-40 h-30"
                />
                <p className="text-sm mt-1 text-gray-400">عنوان الصورة</p>
              </div>
            ))}
          </div>
        </div>

        {/* الألوان */}
        <div className="space-y-4 mt-8">
          <h3 className="font-bold text-xl text-gray-700">الألوان المتاحة</h3>
          <div className="flex items-center gap-[70px] flex-wrap">
            {colors.map((color, index) => (
              <div key={color.value} className="flex flex-col relative items-center gap-2">
                <div
                  className={`relative w-8 h-8 rounded-full border-2 cursor-pointer flex items-center justify-center`}
                  style={{
                    backgroundColor: color.value,
                    borderColor: selectedColor === color.value ? "#62d0b6" : "#e5e7eb",
                  }}
                  onClick={() => setSelectedColor(color.value)}
                >
                  {selectedColor === color.value && (
                    <Check className="w-4 h-4 text-white" />
                  )}
                </div>

                <button
                  className={`text-sm ${selectedColor === color.value ? "text-black" : "text-gray-400"}`}
                  onClick={() => setSelectedColor(color.value)}
                >
                  {color.name}
                </button>

                {index < colors.length - 1 && (
                  <span className="absolute right-[80px] top-6 transform -translate-y-1/2 flex items-center text-gray-300">
                    |
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* الملاحظات */}
        <div className="space-y-2 mt-8">
          <h3 className="font-bold text-xl mb-1 text-gray-600">اضف ملاحظاتك</h3>
          <div className="relative mt-2 text-sm">
            <textarea
              placeholder="برجاء ادخال ملاحظاتك"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full border rounded font-semibold pt-4 pb-2 pr-4 pl-4 text-right text-gray-600 focus:outline-none h-28 resize-none"
            ></textarea>
          </div>
        </div>

        {/* التاريخ والوقت */}
        <div className="space-y-2 mt-8">
          <h3 className="font-bold text-xl mb-1 text-gray-600">تاريخ التوصيل</h3>
          <div className="relative mt-2 text-sm">
            <input
              type="text"
              value={selectedDate}
              onClick={() => hiddenDateInputRef.current?.showPicker()}
              placeholder="برجاء تحديد التاريخ"
              readOnly
              className="w-full border rounded font-semibold pt-2 pb-2 pr-4 pl-12 text-right text-gray-600 focus:outline-none"
            />
            <button
              type="button"
              className="absolute inset-y-0 left-3 flex items-center justify-center text-gray-400 px-2 py-1 rounded-full text-sm"
              onClick={() => hiddenDateInputRef.current?.showPicker()}
            >
              <Calendar className="w-4 h-4" />
            </button>
            <input
              type="date"
              ref={hiddenDateInputRef}
              className="hidden"
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold text-xl mb-1 text-gray-600">تحديد الوقت</h3>
          <div className="relative mt-2 text-sm">
            <input
              type="text"
              value={selectedTime}
              onClick={() => hiddenTimeInputRef.current?.showPicker()}
              placeholder="برجاء تحديد الوقت"
              readOnly
              className="w-full border rounded font-semibold pt-2 pb-2 pr-4 pl-12 text-right text-gray-600 focus:outline-none"
            />
            <button
              type="button"
              className="absolute inset-y-0 left-3 flex items-center justify-center text-gray-400 px-2 py-1 rounded-full text-sm"
              onClick={() => hiddenTimeInputRef.current?.showPicker()}
            >
              <Clock className="w-4 h-4" />
            </button>
            <input
              type="time"
              ref={hiddenTimeInputRef}
              className="hidden"
              onChange={(e) => setSelectedTime(e.target.value)}
            />
          </div>
        </div>

       

      </div>

      <ActionButtons
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        notes={notes}
        selectedColor={selectedColor}
      />
    </div>
  );
};

export default ProductCustomization;
