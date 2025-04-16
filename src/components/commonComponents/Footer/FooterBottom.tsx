import footPhoto from "@/assets/images/photo_2021-11-21_10-54-47 1.png"
import footVisa from "@/assets/images/visa.png"
import footMaster from "@/assets/images/master.png"
import footPaypal from "@/assets/images/paypal.png"
import footMada from "@/assets/images/mada.png"

export default function FooterBottom() {
  return (
    <>
        <div className="flex max-lg:flex-wrap  justify-between py-md responsive-padding-x w-full bg-surface-dark">
            <div className="">
                <p className="text-surface-primary">الحقوق محفوظة لمنصة سلة © 2023</p>
            </div>
            <div className="flex max-lg:flex-wrap max-lg:pt-md">
                <div className="flex w-full lg:w-1/3">
                  <img className="me-sm" src={footPhoto}/>
                  <p className="text-surface-primary me-sm"> الرقم الضريبي : 546987552</p>
                </div>
                <div className="flex w-full lg:w-2/3 max-lg:pt-md">
                  <img className="me-sm" src={footVisa}/>
                  <img className="me-sm" src={footMaster}/>
                  <img className="me-sm" src={footPaypal}/>
                  <img className="me-sm" src={footMada}/>
                </div>
               
            </div>

        </div>
    </>
  )
}
