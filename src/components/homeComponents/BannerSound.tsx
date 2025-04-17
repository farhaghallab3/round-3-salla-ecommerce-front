import { Link } from "react-router-dom";

export default function BannerSound() {
  return (
    <>
        <div className="w-full mt-5xl responsive-padding-x responsive-margin-y">
            <div className="flex max-md:flex-wrap">
                <div className="w-full md:w-1/3 px-sm">
                   <div className="w-full pt-2xl ps-md text-surface-primary rounded-xs bg-[url(/927169b24afd7b1b93c5b2414959346a.png)] min-h-[200px] bg-cover bg-center">
                       <p className="text-body-small ">سماعات ديجيتال</p>
                       <h6 className="text-lg font-semibold pt-sm">أفضل صوت نقي</h6>
                       <Link to={'/products'}><p className="text-body-small pt-md hover:text-accent-primary-active w-fit">تسوق الآن</p></Link>
                   </div>
                </div>
                <div className="w-full md:w-1/3 px-sm">
                    <div className="w-full pt-2xl ps-md text-surface-primary rounded-xs bg-[url(/d594249de448d0d9d1081e42a5edc57b.png)] min-h-[200px] bg-cover bg-center">
                        <p className="text-body-small ">سماعات ديجيتال</p>
                        <h6 className="text-lg font-semibold pt-sm">أفضل صوت نقي</h6>
                        <Link to={'/products'}><p className="text-body-small pt-md hover:text-accent-primary-active w-fit">تسوق الآن</p></Link>
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-sm">
                    <div className="w-full pt-2xl ps-md text-surface-primary rounded-xs bg-[url(/04b169783b2993eeb84d444420f19fc3.png)] min-h-[200px] bg-cover bg-center">
                        <p className="text-body-small ">سماعات ديجيتال</p>
                        <h6 className="text-lg font-semibold pt-sm">أفضل صوت نقي</h6>
                        <Link to={'/products'}><p className="text-body-small pt-md hover:text-accent-primary-active w-fit">تسوق الآن</p></Link>
                    </div>
                </div>
            </div>
            <div  className="mt-5 pe-22 rounded-xs flex justify-end  bg-[url(/a7b350293af3b1f7f955eaebb0562364.png)] pt-2xl text-surface-primary min-h-[200px] bg-cover bg-center mx-sm">
                <div className="w-auto">
                    <p className="text-body-small ">سماعات ديجيتال</p>
                    <h6 className="text-lg font-semibold pt-sm">أفضل صوت نقي</h6>
                    <Link to={'/products'}><p className="text-body-small pt-md hover:text-accent-primary-active ">تسوق الآن</p></Link>
                </div>
            </div>
        </div>
    </>
  )
}
