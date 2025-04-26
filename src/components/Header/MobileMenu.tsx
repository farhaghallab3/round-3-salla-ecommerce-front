import { FC, useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCategory } from '@/redux/slices/filtersSlice';

type Props = {
  setShowFilters: React.Dispatch<React.SetStateAction<boolean>>;
  showFilters: boolean;
};

const MobileMenu: FC<Props> = ({ setShowFilters, showFilters }) => {
  const dispatch = useDispatch();
  const [openSection, setOpenSection] = useState<string | null>(null);

  const handleClick = (category: string) => {
    dispatch(setCategory(category));
    setShowFilters(false);
  };

  const toggleSection = (section: string) => {
    setOpenSection(prev => (prev === section ? null : section));
  };

  return (
    <>
      {showFilters && (
        <>
        
          <div
            className="fixed inset-0 bg-black opacity-50 z-30"
            onClick={() => setShowFilters(false)}
          ></div>

         
          <div className="fixed top-0 right-0 w-[85%] h-full bg-white shadow-md z-40 p-4 flex flex-col overflow-y-auto text-[#21c2ac]">
           
               {/* Close Button */}
  {showFilters && (
    <button
      className="absolute relative top-4 right-[250px] left-9 w-9 h-9 bg-red-500 text-white flex items-center justify-center rounded-tl-full rounded-bl-full z-50"
      onClick={() => setShowFilters(false)}
    >
      <X className="w-5 h-5" />
    </button>
  )}

            <div className="mt-10 text-right text-black">
              <h2 className="font-bold text-xl mb-4 text-gray-600">جميع الأقسام</h2>
              <hr className="mb-4 border-gray-200 w-full" />

              <ul className="space-y-4 font-medium">
               
                <li>
                  <button className="w-full flex justify-between items-center text-gray-700">
                    موبايلات
                    <ChevronDown size={18} />
                  </button>
                </li>

               
                <li>
                  <div>
                    <button
                      className={`w-full flex justify-between items-center ${
                        openSection === 'electronics' ? 'text-[#21c2ac]' : 'text-gray-700'
                      }`}
                      onClick={() => toggleSection('electronics')}
                    >
                      إلكترونيات
                      {openSection === 'electronics' ? (
                        <ChevronUp size={18} />
                      ) : (
                        <ChevronDown size={18} />
                      )}
                    </button>

                   
                    {openSection === 'electronics' && (
                      <ul className="pr-4 mt-4 space-y-2 text-sm text-gray-600">
                        <li><Link to="/products" onClick={() => handleClick("screens")}>شاشات كمبيوتر</Link></li>
                        <li><Link to="products" onClick={() => handleClick("tv")}>شاشات تلفزيون</Link></li>
                        <li><Link to="/products" onClick={() => handleClick("accessories")}>إكسسوارات</Link></li>
                        <li><Link to="/products" onClick={() => handleClick("cameras")}>كاميرات رقمية</Link></li>
                        <li><Link to="/products" onClick={() => handleClick("tools")}>أدوات تصوير</Link></li>
                        <li><Link to="/products" onClick={() => handleClick("lenses")}>عدسات نيكون</Link></li>
                        <li><Link to="/products" onClick={() => handleClick("imported")}>شاشات استيراد</Link></li>
                      </ul>
                    )}
                  </div>
                </li>

                
                <li>
                  <button className="w-full flex justify-between items-center text-gray-700">
                    سماعات رقمية
                    <ChevronDown size={18} />
                  </button>
                </li>
                <li>
                  <button className="w-full flex justify-between items-center text-gray-700">
                    إضاءة مكتبية
                    <ChevronDown size={18} />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MobileMenu;
