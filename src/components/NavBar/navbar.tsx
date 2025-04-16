import { FC, useState } from 'react';
import { ShoppingCart, User, ChevronDown, Phone, Mail, Search, Menu, X ,LogOut , ChevronUp} from 'lucide-react';
import { Link } from 'react-router-dom';

const HeaderNavbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isLoggedIn = true;
  const userName = " فرحة غلاب";
  const userImage = "src/assets/images/lap.png";

  return (
    <div className='w-full overflow-x-hidden max-w-[100vw]'>
      <header className="w-full border-b text-sm font-light">
        {/* Top bar */}
        <div className="hidden lg:flex justify-between items-center px-4 py-2 bg-gray-100 text-gray-600 sm:px-6 lg:px-52">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone size={14} className='text-[#21c2ac]' />
              +966556754472
            </span>
            <span className='text-gray-400'>|</span>
            <span className="flex items-center gap-1">
              <Mail size={14} className='text-[#21c2ac]' />
              Support@salla.sa
            </span>
          </div>
          <div className="flex gap-4">
            <Link to="/products">المفضلة</Link>
            <span className='text-gray-400'>|</span>
            <Link to="/products">سياسة الاستبدال أو الاسترجاع</Link>
            <span className='text-gray-400'>|</span>
            <span>تواصل معنا</span>
          </div>
        </div>

        {/* Mobile Top */}
        <div className="lg:hidden px-2 py-2 flex justify-between items-center bg-gray-100 text-gray-600 text-xs">
          <button onClick={() => setMenuOpen(true)} className="text-gray-600  ">
            <Menu size={20} />
          </button>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Mail size={14} className='text-[#21c2ac]' />
              Support@salla.sa
            </span>
            <span className="flex items-center gap-1">
              <Phone size={14} className='text-[#21c2ac]' />
              +966556754472
            </span>
          </div>
        </div>

        {/* Mobile Side Menu */}
        {menuOpen && (
          <div className="lg:hidden fixed top-0 right-0 w-[90%] h-full bg-white shadow-md z-50 p-6 flex flex-col overflow-y-auto">

            <button onClick={() => setMenuOpen(false)}>
              <X size={24} />
            </button>

            {isLoggedIn ? (
              <div className="flex items-center gap-2 pt-8 mb-4">
                <img src={userImage} alt="Profile" className="w-20 h-20 rounded-full" />
                <span className='font-regular text-gray-600 font-bold'>{userName}</span>
              </div>
            ) : (
              <Link to="/login" className="flex items-center gap-1">
                <User size={18} />
                تسجيل دخول
              </Link>
            )}

            <ul className="flex flex-col gap-3 text-sm text-gray-700 font-regular mt-4">
              <Link to="/" className='text-gray-500 font-bold '>الصفحة الرئيسية</Link>
              <hr/>
              <li className='text-gray-500 font-bold'  >تواصل معنا</li>
              <Link to="/products" className='text-gray-500 font-bold '>سياسة الاستبدال أو الاسترجاع</Link>
              <Link to="/products" className='text-gray-500 font-bold '>المفضلة</Link>
             
             
            </ul>

            <div className="mt-6 ">
              <nav className="flex flex-col gap-4">
                <Link to="/productDetailUpper" className='  font-bold border-2 text-center items-center gap-1 text-accent-primary border border-accent-primary px-4 py-1 rounded  '>كل المنتجات</Link>
                <Link to="/products" className='font-bold border-2 text-center items-center gap-1 text-accent-primary border border-accent-primary px-4 py-1 rounded '>الكترونيات</Link>
                <Link to="/products" className='font-bold border-2 text-center items-center gap-1 text-accent-primary border border-accent-primary px-4 py-1 rounded '>موبايلات</Link>
                <Link to="/products" className='font-bold border-2 text-center items-center gap-1 text-accent-primary border border-accent-primary px-4 py-1 rounded '>كاميرات مراقبة</Link>
                <Link to="/products" className='font-bold border-2 text-center items-center gap-1 text-accent-primary border border-accent-primary px-4 py-1 rounded '>سماعات رقمية</Link>
                <Link to="/products" className='font-bold border-2 text-center items-center gap-1 text-accent-primary border border-accent-primary px-4 py-1 rounded '>كاميرات رقمية</Link>
                <Link to="/products" className='font-bold border-2 text-center items-center gap-1 text-accent-primary border border-accent-primary px-4 py-1 rounded '>اكسسوارات</Link>
                <Link to="/products" className='font-bold border-2 text-center items-center gap-1 text-accent-primary border border-accent-primary px-4 py-1 rounded '>شاشات كمبيوتر</Link>
                <Link to="/products" className='font-bold border-2 text-center items-center gap-1 text-accent-primary border border-accent-primary px-4 py-1 rounded '>الكترونيات</Link>
                <Link to="/products" className='font-bold border-2 text-center items-center gap-1 text-accent-primary border border-accent-primary px-4 py-1 rounded '>سماعات</Link>
                <Link to="/login" className="text-center border-2  flex items-center gap-2 text-lg px-4 py-2 rounded-full bg-accent-primary text-white font-regular font-bold ">
                  <LogOut size={20} className='text-white font-bold' />
                       تسجيل خروج
                           </Link>
              </nav>
            </div>
          </div>
        )}

        {/* Overlay when menu is open */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}

        {/* Main Header */}
        <div className="flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-52 py-3">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-1 text-gray-700 font-regular font-bold lg:text-lg">
            <img src='src/assets/images/salla.png' alt="Logo" className="w-10 h-10" />
            <div>
              <div>متجر</div>
              <div>سلة</div>
            </div>
          </div>

          {/* Search */}
          <div className="flex-1 px-4">
            <div className="relative ">
              <input
                type="text"
                placeholder="ابحث عما تريد"
                className="w-full border rounded pt-2 pb-2 pr-4 pl-12 text-right font-heading-small font-regular text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#21c2ac]"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>

          {/* Login & Cart */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <div className="text-right relative">
              <div className="flex items-center gap-1">
                <User size={20} className='text-gray-700 rounded-full bg-gray-200' />
                <div>
                  <div className='text-gray-400'>مرحبا بك</div>
                  <div className="flex items-center gap-1 font-body-small font-semibold font-regular mb-6 text-gray-700">
                    {/*{isLoggedIn ? userName : "تسجيل دخول"}*/}  
                    <Link to="/login">تسجيل دخول</Link>
                    <ChevronUp size={14} />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-right relative">
              <div className="flex items-center gap-1">
                <ShoppingCart size={20} className='text-gray-700 rounded-full bg-gray-200' />
                <div>
                  <div className='text-gray-400'>
                    <Link to="/">سلة المشتريات </Link>
                  </div>
                  <div className='font-semibold text-gray-700'>1,200 رس</div>
                </div>
              </div>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">2</span>
            </div>
          </div>
        </div>

        {/* Bottom Nav */}
        <nav className="hidden lg:flex bg-black text-white px-4 py-2 gap-6 justify-center text-sm">
          <Link to="/productDetailUpper" className="cursor-pointer flex items-center gap-1">كل المنتجات <ChevronDown size={16} /></Link>
          <Link to="/products" className="cursor-pointer flex items-center gap-1">الكترونيات <ChevronDown size={16} /></Link>
          <Link to="/products" className="cursor-pointer flex items-center gap-1">موبايلات <ChevronDown size={16} /></Link>
          <Link to="/products" className="cursor-pointer flex items-center gap-1">كاميرات مراقبة <ChevronDown size={16} /></Link>
          <Link to="/products" className="cursor-pointer flex items-center gap-1">سماعات رقمية <ChevronDown size={16} /></Link>
          <Link to="/products" className="cursor-pointer flex items-center gap-1">كاميرات رقمية <ChevronDown size={16} /></Link>
          <Link to="/products" className="cursor-pointer flex items-center gap-1">اكسسوارات <ChevronDown size={16} /></Link>
          <Link to="/products" className="cursor-pointer flex items-center gap-1">شاشات كمبيوتر <ChevronDown size={16} /></Link>
          <Link to="/products" className="cursor-pointer flex items-center gap-1">الكترونيات <ChevronDown size={16} /></Link>
          <Link to="/products" className="cursor-pointer flex items-center gap-1">سماعات <ChevronDown size={16} /></Link>
        </nav>
      </header>
    </div>
  );
};

export default HeaderNavbar;