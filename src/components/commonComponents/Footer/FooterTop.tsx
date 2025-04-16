import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import AppleStore from "@/assets/images/apple.png"
import AndroidStore from "@/assets/images/android.png"

export default function FooterTop() {
  return (
    <div>
        <div className="flex max-md:flex-wrap md:px-10xl py-md w-full bg-surface-secondary">
          <div className="flex items-center w-full md:w-3/8 box-border">
            <div className="bg-content-border hover:bg-accent-primary
             rounded-full p-2  transition text-accent-primary hover:text-content-border">
              <Mail className=' '/>
            </div>
            <div className="ps-md box-border">
              <h6 className='text-content-dark pb-2 font-heading-bold'>الاشتراك فى النشرة البريدية</h6>
              <p className='text-content-base text-body-small'>انضم الآن واحصل على خصم 10٪ على مشترياتك التالية!</p>
            </div>
          </div>
          <div className="w-full md:w-3/8  ps-md" >
            <div className="flex-col justify-center  w-full items-center ">
              <label htmlFor="input" className="text-content-dark font-heading-medium">يمكنك إلغاء الاشتراك في أي لحظة</label>
              <div className="flex pt-3">
                <Input id='input' className="w-3/4 bg-surface-primary" type="email" placeholder="ادخل البريد الالكترونى" />
                <Button type="submit" className="ms-3 tansition bg-accent-primary text-surface-primary
                hover:text-accent-primary border hover:bg-surface-primary hover:border hover:border-accent-primary-active">اشتراك</Button>
              </div>
            </div>
          </div>
          <div className="flex-col content-center w-full md:w-1/4 ps-lg ">
            <h6 className="text-content-dark font-heading-medium"> تطبيقات الجوال</h6>
            <div className="flex gap-lg  pt-sm">
              <img className="w-5/12" src={AppleStore}/>
              <img className="w-5/12" src={AndroidStore}/>
            </div>
          </div>
        </div>
    </div>
  )
}
