
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



import {
  ShoppingCart,
  User,
  ChevronDown,
  Phone,
  Mail,
  Search,
  Menu,

  ChevronUp,
} from 'lucide-react';
import axios from 'axios';
import LOGO from '@assets/images/salla.png';
import UserDrawer from './UserDrawer';
import MobileMenu from './MobileMenu';



const HeaderNavbar: FC = () => {

  const [userName, setUserName] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);


  const bottomLinks = [
    { label: 'كل المنتجات', to: '/products' },
    { label: 'الكترونيات', to: '/products' },
    { label: 'موبايلات', to: '/products' },
    { label: 'كاميرات مراقبة', to: '/products' },
    { label: 'سماعات رقمية', to: '/products' },
    { label: 'كاميرات رقمية', to: '/products' },
    { label: 'اكسسوارات', to: '/products' },
    { label: 'شاشات كمبيوتر', to: '/products' },
    { label: 'سماعات', to: '/products' },
  ];

  const user = {
    name: "فرحا",
    image: "https://via.placeholder.com/150", 
  };


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .get('https://salla.digital-vision-solutions.com/api/login/email', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setUserName(res.data.name);
          setIsLoggedIn(true);
        })
        .catch(() => {
          setIsLoggedIn(false);
        });
    }
  }, []);

  return (
<nav className='fixed top-0 left-0 w-full z-50 bg-white shadow-md'>
    <div className="w-full overflow-x-hidden max-w-[100vw] ">
      <header className="w-full border-b text-sm font-light ">
        {/* ✅ Top Bar */}
        <div className="hidden lg:flex justify-between items-center px-4 py-2 bg-gray-100 text-gray-600 sm:px-6 lg:px-52 font-sans">

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone size={14} className="text-[#21c2ac]" />
              +966556754472
            </span>
            <span className="text-gray-400">|</span>
            <span className="flex items-center gap-1">
              <Mail size={14} className="text-[#21c2ac]" />
              Support@salla.sa
            </span>
          </div>
          <div className="flex gap-4 font-sans">
            <Link to="/products">المفضلة</Link>
            <span className="text-gray-400">|</span>
            <Link to="/products">سياسة الاستبدال أو الاسترجاع</Link>
            <span className="text-gray-400">|</span>
            <span>تواصل معنا</span>
          </div>
        </div>

        {/* ✅ Mobile Top Bar */}
        <div className="lg:hidden px-2 py-2 flex justify-between items-center bg-gray-100 text-gray-600 text-xs">

          <div className="flex items-center gap-2">
            <Mail size={14} className="text-[#21c2ac]" />
            Support@salla.sa
          </div>
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-[#21c2ac]" />
            +966556754472
          </div>
        </div>

        {/* ✅ Mobile Side Menu */}
         {showFilters && (
                  <>
                    <button
                      className={`fixed inset-0 bg-black  z-40 transition-opacity duration-300 ${
                        showFilters ? "opacity-70" : "opacity-0 pointer-events-none"
                      }`}
                      onClick={() => setShowFilters(false)}
                    ></button>
                    <MobileMenu
                      setShowFilters={setShowFilters}
                      showFilters={showFilters}
                    />
                  </>
                )}



       {/* ✅ Main Header */}
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 px-4 sm:px-6 lg:px-52 py-3">
  {/* Top Row for Mobile: Menu + Logo + User/Cart */}
  <div className="w-full flex items-center justify-between lg:hidden">
    {/* Menu icon at far right */}
    <button onClick={() => setShowFilters(true)} className="text-gray-600 order-3  absolute right-0  mr-2">
      <Menu size={35} className="text-[#21c2ac]" />
    </button>

    {/* Logo */}
    <div className="flex items-center gap-1 text-gray-700 font-bold text-lg order-1 mr-8">
      <Link to="/">
        <img src={LOGO} alt="Logo" className="w-10 h-10" />
      </Link>
      <div>
        <div>متجر</div>
        <div>سلة</div>
      </div>
    </div>

           {/* Login & Cart */}
    <div className="flex gap-4 order-2">
      <div className="flex items-center gap-1">
       

      <button onClick={() => setIsDrawerOpen(true)}>
  <User
    className={`rounded-full h-8 w-8 p-1 ${
      user ? "bg-gray-100 text-gray-500" : "bg-gray-100 text-gray-500"
    }`}
  />
</button>




        <div>
          
          
        </div>
      </div>
      <div className="relative">
        <div className="flex items-center gap-1">
          <ShoppingCart size={20} className="text-gray-500 rounded-full h-6 w-6 bg-gray-100" />
          <div>
            <div className="text-gray-400">
              <Link to="/Checkout">سلة المشتريات </Link>

            </div>
            <div className="font-semibold text-gray-700">1,200 رس</div>
          </div>
        </div>
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">2</span>
      </div>
    </div>
  </div>
  
 {/* ✅ Search Input */}
 <div className="block lg:hidden w-full lg:flex-1 px-4 mt-2 lg:mt-0">
    <div className="relative">
      <input
        type="text"
        placeholder="ابحث عما تريد"
        className="w-full border rounded pt-2 pb-2 pr-4 pl-12 text-right font-heading-small font-regular text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#21c2ac]"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
    </div>
  </div>
        
   {/* ✅ Desktop Only Login & Cart */}
   <div className="hidden lg:flex text-right relative gap-4 items-center w-full ">
  {/* ✅ Logo on far right */}
  <div className="flex items-center gap-1 text-gray-700 font-bold text-lg ml-auto">
    <Link to="/">
      <img src={LOGO} alt="Logo" className="w-10 h-10 " />
    </Link>
    <div className="text-right leading-tight">
      <div>متجر</div>
      <div>سلة</div>
    </div>
  </div>
    {/* ✅ Search Input */}
    <div className=" w-full lg:flex-1 px-4 mt-2 lg:mt-0">
    <div className="relative">
      <input
        type="text"
        placeholder="ابحث عما تريد"
        className="w-full border rounded pt-2 pb-2 pr-4 pl-12 text-right font-heading-small font-regular text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#21c2ac]"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
    </div>
  </div>

  {/* ✅ Login */}
  <div className="flex items-center gap-1">
    <User size={20} className="text-gray-500 rounded-full h-6 w-6 bg-gray-100" />
    <div>
      <div className="text-gray-400">مرحبا بك</div>
      <div className="flex items-center gap-1 font-semibold mb-6 text-gray-700">
        {isLoggedIn ? <span>{userName}</span> : <Link to="/signin">تسجيل دخول</Link>}
        <ChevronUp size={14} />
      </div>
    </div>
  </div>

  {/* ✅ Cart */}
  <div className="relative">
    <div className="flex items-center gap-1">
      <ShoppingCart size={20} className="text-gray-500 rounded-full h-6 w-6 bg-gray-100" />
      <div>
        <div className="text-gray-400">
          <Link to="/Checkout">سلة المشتريات </Link>
        </div>
        <div className="font-semibold text-gray-700">1,200 رس</div>
      </div>
    </div>
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">2</span>
  </div>
</div>

</div>

        {/* ✅ Bottom Navigation */}
        <nav className="hidden lg:flex bg-black text-white px-4 py-2 gap-6 justify-center text-sm">

      {bottomLinks.map(({ label, to }, idx) => (
        <Link
          key={idx}
          to={to}
          className="cursor-pointer flex items-center gap-1 hover:text-[#21c2ac] transition-colors"
        >
          {label}
          <ChevronDown size={16} />
        </Link>
      ))}
    </nav>

      </header>

      <UserDrawer
  isOpen={isDrawerOpen}
  onClose={() => setIsDrawerOpen(false)}
  user={user}
/>

    </div>
  </nav>
  );
};

export default HeaderNavbar;
