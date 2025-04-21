import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronDown,
  ChevronUp,
  Star,
  Heart,
  CreditCard,
  Bell,
  User,
  Box,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  user?: {
    name: string;
    image: string;
  } | null;
}

const menuItems = [
  {
    label: "الإشعارات",
    icon: <Bell size={20} className="text-gray-500" />,
    link: "/notifications",
    badge: "2",
    badgeColor: "bg-red-400",
  },
  {
    label: "الطلبات",
    icon: <Box size={20} className="text-gray-500" />,
    link: "/orders",
  },
  {
    label: "طلبات بانتظار الدفع",
    icon: <CreditCard size={20} className="text-gray-500" />,
    link: "/pending-payments",
  },
  {
    label: "تقييم المتجر و المنتجات",
    icon: <Star size={20} className="text-gray-500" />,
    link: "/reviews",
  },
  {
    label: "حسابي",
    icon: <User size={20} className="text-gray-500" />,
    link: "/account",
  },
  {
    label: "المفضلة",
    icon: <Heart size={20} className="text-gray-500" />,
    link: "/favorites",
  },
  {
    label: "تسجيل الخروج",
    icon: <LogOut size={20} className="text-red-500" />,
    link: "/signin",
    textClass: "text-red-500 font-semibold",
  },
];

export default function UserDrawer({ isOpen, onClose, user }: Props) {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-xl z-50 p-4"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500">مرحبًا بك</span>
            <button onClick={onClose}>
              <X className="text-white text-sm w-5 h-5 rounded-full bg-red-400" />
            </button>
          </div>

          {user ? (
            <>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={user.image}
                  alt="user"
                  className="w-12 h-12 rounded-full border"
                />
                <div
                  className="flex items-center justify-between flex-row w-full cursor-pointer"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <span className="text-gray-700 font-semibold">
                    {user.name}
                  </span>
                  {showMenu ? (
                    <ChevronUp className="text-gray-500" />
                  ) : (
                    <ChevronDown className="text-gray-500" />
                  )}
                </div>
              </div>

              <hr />

              {showMenu && (
                <div className="space-y-3 text-right font-sans mt-4">
                  {menuItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className={`block cursor-pointer hover:text-primary ${
                        item.textClass || ""
                      }`}
                    >
                      {item.badge ? (
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            {item.icon}
                            {item.label}
                          </div>
                          <span
                            className={`border rounded-full ${item.badgeColor} text-white text-xs px-1`}
                          >
                            {item.badge}
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          {item.icon}
                          {item.label}
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="text-right font-sans mt-6 space-y-3">
              <p className="text-gray-600 text-sm">قم بتسجيل الدخول للوصول إلى حسابك</p>
              <Link
                to="/signin"
                onClick={onClose}
                className="inline-block w-full text-center bg-primary text-white py-2 rounded-xl font-semibold"
              >
                تسجيل الدخول
              </Link>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
