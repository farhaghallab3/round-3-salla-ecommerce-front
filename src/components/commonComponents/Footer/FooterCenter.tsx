import { ChevronsLeft } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';

export default function FooterCenter() {
  return (
    <>
        <div className="flex max-md:flex-wrap justify-between max-md:justify-center responsive-padding-x w-full py-5xl bg-surface-primary">
            <div className="w-full md:w-2/7 pe-lg">
               <h6 className="text-content-dark pb-md font-heading-bold">عن متجرنا</h6>
               <p className="text-content-base w-full">متجر سلة من افضل المتاجر التى تقوم ببيع 
                المنتجات الرقمية بأفضل الاسعار وماركات عالمية تسوق الان واطلع على
                 المزيد من التصاميم واستمتع بأفضل العروض والخصومات</p>
            </div>
            <div className="w-full md:w-1/7 text-content-base pe-lg">
                <h6 className="text-content-dark pb-md font-heading-bold max-md:pt-2xl">حسابي</h6>
                 <div className='flex  cursor-pointer pb-sm tansition hover:text-accent-primary-active'>
                    <ChevronsLeft />
                    <p>حسابي</p>
                 </div>
                 <div className='flex text-accent-primary cursor-pointer pb-sm tansition hover:text-accent-primary-active'>
                    <ChevronsLeft />
                    <p>طلباتي</p>
                 </div>
                 <div className='flex  cursor-pointer pb-sm tansition hover:text-accent-primary-active'>
                    <ChevronsLeft />
                    <p>سلة المشتريات</p>
                 </div>
                 <div className='flex  cursor-pointer pb-sm tansition hover:text-accent-primary-active'>
                    <ChevronsLeft />
                    <p>طلباتي</p>
                 </div>
            </div>
            <div className="w-full md:w-1/7 text-content-base ">
                <h6 className="text-content-dark pb-md font-heading-bold max-md:pt-2xl">روابط مهمة</h6>
                 <div className='flex  cursor-pointer pb-sm tansition hover:text-accent-primary-active'>
                    <ChevronsLeft />
                    <p>من نحن</p>
                 </div>
                 <p></p>
                 <div className='flex  cursor-pointer pb-sm tansition hover:text-accent-primary-active'>
                    <ChevronsLeft />
                    <p>سياسة الخصوصية</p>
                 </div>
                 <div className='flex  cursor-pointer pb-sm tansition hover:text-accent-primary-active'>
                    <ChevronsLeft />
                    <p>الشروط والاحكام</p>
                 </div>
                 <div className='flex  cursor-pointer pb-sm tansition hover:text-accent-primary-active'>
                    <ChevronsLeft />
                    <p>الدعم الفني</p>
                 </div>
            </div>
            <div className="w-full md:w-1/7 text-content-base md:ps-lg">
                <h6 className="text-content-dark pb-md font-heading-bold max-md:pt-2xl">تواصل معنا</h6>
                 <div className='flex   pb-xs'>
                    <ChevronsLeft />
                    <p>واتساب</p>
                 </div>
                 <p className='pb-sm ps-lg cursor-pointer tansition hover:text-accent-primary-active'>009612345678932</p>
                 <div className='flex   pb-xs '>
                    <ChevronsLeft />
                    <p>موبايل</p>
                 </div>
                 <p className='pb-sm ps-lg cursor-pointer tansition hover:text-accent-primary-active'>009612345678932</p>
                 <div className='flex   pb-xs'>
                    <ChevronsLeft />
                    <p>البريد</p>
                 </div>
                 <p className='ps-lg cursor-pointer tansition hover:text-accent-primary-active'>https://salla.sa</p>
            </div>
            <div className='w-full md:w-2/7 md:ps-5xl'>
                <h6 className="text-content-dark pb-md font-heading-bold max-md:pt-2xl">تابعنا على</h6>
                <div className='flex gap-md'>
                    <Facebook size={45} className='text-content-dim tansition  border border-transparent hover:text-accent-primary  p-2 rounded-full hover:border-accent-primary'/>
                    <Twitter size={45} className='text-content-dim tansition  border border-transparent hover:text-accent-primary  p-2 rounded-full hover:border-accent-primary'/>
                    <Instagram size={45} className='text-content-dim tansition  border border-transparent hover:text-accent-primary  p-2 rounded-full hover:border-accent-primary'/>
                </div>
            </div>
        </div>
    </>
  )
}
