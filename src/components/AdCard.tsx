import { Link } from "react-router-dom";
import { Ad } from "../components/homeComponents/AdsSection";

interface AdCardProps {
  ad: Ad;
}

function AdCard({ ad }: AdCardProps) {
  return (
    <article
      className={`flex flex-col items-center py-xl px-4xl ${ad.backgroundColorValue} rounded-small`}
    >
      <div className="flex flex-col items-center gap-lg">
        <div>
          <img src={ad.image} alt="" className="w-full" />
        </div>

        <div className="flex flex-col items-center gap-md">
          <div className="flex flex-col items-center gap-sm">
            <h3 className="font-heading-bold text-heading-small text-content-dark">
              {ad.heading}
            </h3>
            <p className="font-body-regular text-body-small text-content-base text-center">
              {ad.text}
            </p>
          </div>

          <Link
            to={ad.url}
            className="py-[16px] px-[30px] font-button-medium text-button-base text-content-dark hover:underline border border-transparent hover:border-white duration-300"
          >
            {ad.buttonValue}
          </Link>
        </div>
      </div>
    </article>
  );
}

export default AdCard;
