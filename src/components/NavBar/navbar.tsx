// src/components/Header.tsx
import { FC, useState } from 'react';
import { ShoppingCart, User, ChevronDown, Phone, Mail, Search, Menu, X , LogOut} from 'lucide-react';
import { Link } from 'react-router-dom';







const HeaderNavbar: FC = () => {
    

  const [menuOpen, setMenuOpen] = useState(false);
  const isLoggedIn = true; //temporary value
  const userName = " فرحة غلاب"; //temporary value
  const userImage = "src/assets/images/lap.png"; //temporary value

  

  return (
    <div className=' w-full overflow-x-hidden max-w-[100vw]'>
    <header className=" w-full border-b text-sm font-light ovevrflow-x-hidden"> 
      {/* Top bar */}
      <div className=" hidden lg:flex justify-between items-center px-4 py-2 bg-gray-100 text-gray-600  px-4 sm:px-6 lg:px-52   ">
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
        <Link to="/products">سياسة الاستبدال أو الاسترجاع</Link>
        <span className='text-gray-400'>|</span>
        <span>تواصل معنا</span>
          
          
          
          
          
         
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden px-2 py-2 flex justify-between items-center bg-gray-100 text-gray-600 text-xs ">
        
        <button onClick={() => setMenuOpen(true)} className="text-gray-600">
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

      {/* Side Menu for Mobile */}
      {menuOpen && (
        <div className="lg:hidden fixed top-0 right-0 w-[85%] max-w-xs h-full bg-white shadow-md z-50 p-4 overflow-auto">


<button onClick={() => setMenuOpen(false)}>
              <X size={24} />
            </button>

{isLoggedIn ? (
            <div className="flex items-center gap-2 pt-8 mb-4  ">
              <img src={userImage} alt="Profile" className="w-15 h-15 rounded-full" />
              <span className='font-regular text-gray-700'>{userName}</span>
            </div>
          ) : (
            <Link to="/login" className="flex items-center gap-1">
              <User size={18} />
              تسجيل دخول
            </Link>
          )}
          <div className="flex justify-between items-center mb-4">
            
            
          </div>
          <ul className="flex flex-col gap-3 text-sm text-gray-700 font-regular">
            <Link to="/" className='text-gray-500 font-regular'>الصفحة الرئيسية</Link>
            <hr/>
            <div className="text-right relative">
            <div className="flex items-center gap-1">
              <ShoppingCart size={20} className='text-gray-700 rounded-full bg-gray-200 ' />
              <div>
                <div className='text-gray-400'>
                  <Link to="/">سلة المشتريات </Link>
                </div>
                <div>1,200 رس</div>
              </div>
            </div>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">2</span>
          </div>
            

            <li className='text-gray-500 font-regular'>تواصل معنا</li>
            <Link className='text-gray-500 font-regular' to="/products">سياسة الاستبدال أو الاسترجاع</Link>
            <Link className='text-gray-500 font-regular' to="/products">المفضلة</Link>
            <Link className='text-gray-500 font-regular' to="/products">رس - العربية</Link>
          </ul>
          <div className="mt-6 border-t pt-4">
            <nav className="flex flex-col gap-4">
              <Link to="/products" className='border-2 text-center text-accent-primary border-accent-primary  items-center gap-2 text-sm px-4 py-2 rounded-sm font-regular '>كل المنتجات</Link>
              <Link to="/products" className='border-2 text-center text-accent-primary border-accent-primary  items-center gap-2 text-sm px-4 py-2 rounded-sm font-regular '>الكترونيات</Link>
              <Link to="/products" className='border-2 text-center text-accent-primary border-accent-primary  items-center gap-2 text-sm px-4 py-2 rounded-sm font-regular '>موبايلات</Link>
              <Link to="/products" className='border-2 text-center text-accent-primary border-accent-primary  items-center gap-2 text-sm px-4 py-2 rounded-sm font-regular '>كاميرات مراقبة</Link>
              <Link to="/products" className='border-2 text-center text-accent-primary border-accent-primary  items-center gap-2 text-sm px-4 py-2 rounded-sm  font-regular '>سماعات رقمية</Link>
              <Link to="/products" className='border-2 text-center text-accent-primary border-accent-primary  items-center gap-2 text-sm px-4 py-2 rounded-sm font-regular '>كاميرات رقمية</Link>
              <Link to="/products" className='border-2 text-center text-accent-primary border-accent-primary  items-center gap-2 text-sm px-4 py-2 rounded-sm  font-regular'>اكسسوارات</Link>
              <Link to="/products" className='border-2 text-center text-accent-primary border-accent-primary  items-center gap-2 text-sm px-4 py-2 rounded-sm  font-regular '>شاشات كمبيوتر</Link>
              <Link to="/products" className='border-2 text-center text-accent-primary border-accent-primary  items-center gap-2 text-sm px-4 py-2 rounded-sm font-regular '>الكترونيات</Link>
              <Link to="/products" className='border-2 text-center text-accent-primary border-accent-primary  items-center gap-2 text-sm px-4 py-2 rounded-sm font-regular '>سماعات</Link>
              <Link 
  to="/login" 
  className="border-2 text-accent-primary border-accent-primary flex items-center gap-2 text-lg px-4 py-2 rounded-full bg-accent-primary text-white font-regular"
>
  <LogOut size={18} className='text-white' />
  تسجيل خروج
</Link>


            </nav>
          </div>
         
          
          
        </div>
      )}

      {/* Main nav */}
      <div className="flex justify-between-center items-center px-1 py-3 w-full px-4 sm:px-6 lg:px-52">

        {/* Right section - Logo */}
        <div className="text-right relative">
          <div className="flex items-center gap-1 text-gray-700 font-bold-regular lg:text-lg">
          <img src='src/assets/images/salla.png' alt="Profile" className="w-10 h-10 " />

            <div>
              <div>متجر</div>
              <div>سلة</div>
            </div>
          </div>
        </div>

        {/* Center - Search Box */}
        <div className="flex-1 max-w-lg mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="ابحث عما تريد"
              className="w-full border rounded px-10 py-2 text-right"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>

        {/* Left section - Cart and Login */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="text-right">
            <div className="flex items-center gap-1">
              <User size={20} className='text-gray-700 rounded-full bg-gray-200 ' />
              <div>
                <div className='text-gray-400'>مرحبا بك</div>
                <div className="flex items-center gap-1">
                  <Link to="/login">تسجيل دخول</Link>
                  <ChevronDown size={14} />
                </div>
              </div>
            </div>
          </div>

          <div className="text-right relative">
            <div className="flex items-center gap-1">
              <ShoppingCart size={20} className='text-gray-700 rounded-full bg-gray-200 ' />
              <div>
                <div className='text-gray-400'>
                  <Link to="/">سلة المشتريات </Link>
                </div>
                <div>1,200 رس</div>
              </div>
            </div>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">2</span>
          </div>
        </div>
      </div>

      {/* Bottom black nav */}
      <nav className="hidden lg:flex bg-black text-white px-4 py-2 gap-6 justify-center text-sm">
        <Link to="/products" className="cursor-pointer flex items-center gap-1">كل المنتجات <ChevronDown size={16} /></Link>
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
