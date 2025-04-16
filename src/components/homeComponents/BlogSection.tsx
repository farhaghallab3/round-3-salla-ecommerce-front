import { FC } from "react";
import { ArrowLeft } from "lucide-react";

const BlogSection: FC = () => {
  const posts = [
    {
      img: "src/assets/images/blog1.png",
      date: new Date("2025-01-18"),
      title: "مدى تأثير التكنولوجيا على حياة الإنسان",
      desc: "لكي تنجح في أعمال التجارة الإلكترونية، تحتاج إلى بيع المنتجات المطلوبة. إذا لم يكن لديك فكرة، سنشاركك في هذه المقالة قائمة أنواع المنتجات"
    },
    {
      img: "src/assets/images/blog1.png",
      date: new Date("2025-02-10"),
      title: "مدى تأثير التكنولوجيا على حياة الإنسان",
      desc: "لكي تنجح في أعمال التجارة الإلكترونية، تحتاج إلى بيع المنتجات المطلوبة. إذا لم يكن لديك فكرة، سنشاركك في هذه المقالة قائمة أنواع المنتجات"
    },
    {
      img: "src/assets/images/blog1.png",
      date: new Date("2025-03-05"),
      title: "مدى تأثير التكنولوجيا على حياة الإنسان",
      desc: "لكي تنجح في أعمال التجارة الإلكترونية، تحتاج إلى بيع المنتجات المطلوبة. إذا لم يكن لديك فكرة، سنشاركك في هذه المقالة قائمة أنواع المنتجات"
    },
  ];

  const monthNames = [
    "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
    "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-52 max-w-[1920px] mx-auto mt-20">
    
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
      <div>
        <h2 className="text-2xl mb-2 text-gray-700 font-semibold">أحدث المقالات</h2>
        <p className="text-gray-600 mb-8">تسوق أحدث المنتجات المميزة المضافة جديد</p>
      </div>
      
      
      <button className="hidden lg:flex items-center gap-1 text-[#21c2ac] border border-[#21c2ac] px-4 py-1 rounded text-sm hover:bg-[#21c2ac] hover:text-white transition duration-300">
        عرض الكل
        <ArrowLeft size={16} />
      </button>
    </div>
  
  
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
      {posts.map((post, index) => {
        const day = post.date.getDate();
        const month = monthNames[post.date.getMonth()];
  
        return (
          <div key={index} className="bg-white shadow rounded-md overflow-hidden">
            <div className="relative">
              <img src={post.img} alt="blog" className="w-full h-56 object-cover" />
              <div className="absolute top-2 right-2 bg-white text-sm text-gray-700 px-3 py-2 rounded-md shadow flex flex-col items-center">
                <span className="text-lg font-bold">{day}</span>
                <span className="text-xs">{month}</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-[16px] mb-2">{post.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{post.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  
    
    <div className="flex justify-center lg:hidden">
      <button className="flex items-center gap-1 text-[#21c2ac] border border-[#21c2ac] px-4 py-1 rounded text-sm hover:bg-[#21c2ac] hover:text-white transition duration-300">
        عرض الكل
        <ArrowLeft size={16} />
      </button>
    </div>
  </section>
  

  );
};

export default BlogSection;
