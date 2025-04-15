import { Truck, CreditCard, RefreshCcwDot, LucideIcon } from "lucide-react";
import Headset from "@/assets/images/headpset-banner.png";
import Phone from "@/assets/images/phone-featured.png";

const FEATURES: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "منتجات مضمونة",
    description: "مدفوعات امنة أقساط تصل إلي 12 شهراً",
    icon: Truck,
  },
  {
    title: "شحن مجاني",
    description: "مدفوعات امنة أقساط تصل إلي 12 شهراً",
    icon: CreditCard,
  },
  {
    title: "مدفوعات امنة",
    description: "مدفوعات امنة أقساط تصل إلي 12 شهراً",
    icon: RefreshCcwDot,
  },
];

const BANNERS: {
  title: string;
  description: string;
  image: string;
}[] = [
  { title: "سماعات ديجيتال", description: "افضل صوت نقي", image: Headset },
  { title: "هواتف حديثة", description: "افضل صوت نقي", image: Phone },
];

export const FeaturesSection = () => {
  return (
    <div className="responsive-padding-x">
      {/* features */}
      <div className="grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {FEATURES.map((feature) => (
          <div
            key={feature.title}
            className="flex items-center gap-3 border-l p-8 justify-center"
          >
            <feature.icon size={40} className="text-accent-primary" />
            <div className="">
              <h3 className="text-xlarge font-medium text-content-dark">
                {feature.title}
              </h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* two banners */}
      <div className="flex shrink-0 flex-wrap justify-between gap-4 mt-12">
        {BANNERS.map((banner) => (
          <div
            key={banner.title}
            className="relative overflow-hidden w-full lg:w-[48%]"
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full object-center"
            />
            <div className="absolute top-1/2 left-6 -translate-y-1/2">
              <h3 className="text-[16px] text-content-base">{banner.title}</h3>
              <p className="text-xl xl:text-4xl font-bold">
                {banner.description}
              </p>
              <button className="text-content-dark text-medium font-medium mt-4">
                تسوق الان
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
