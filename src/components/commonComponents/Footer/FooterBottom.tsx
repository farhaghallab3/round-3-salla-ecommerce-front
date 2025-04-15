import footPhoto from "@/assets/images/photo_2021-11-21_10-54-47 1.png"
import footVisa from "@/assets/images/visa.png"
import footMaster from "@/assets/images/master.png"
import footPaypal from "@/assets/images/paypal.png"
import footMada from "@/assets/images/mada.png"

export default function FooterBottom() {
  return (
    <>
        <div className="flex max-md:flex-wrap justify-between py-md md:px-10xl w-full bg-surface-dark">
            <div>
                <p className="text-surface-primary">الحقوق محفوظة لمنصة سلة © 2023</p>
            </div>
            <div className="flex">
                <img className="me-sm" src={footPhoto}/>
                <p className="text-surface-primary me-sm"> الرقم الضريبي : 546987552</p>
                <img className="me-sm" src={footVisa}/>
                <img className="me-sm" src={footMaster}/>
                <img className="me-sm" src={footPaypal}/>
                <img className="me-sm" src={footMada}/>


            </div>

        </div>
    </>
  )
}
