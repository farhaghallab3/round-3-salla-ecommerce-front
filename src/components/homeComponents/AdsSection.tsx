import adOneImage from "../../assets/images/ad-1.png";
import adTwoImage from "../../assets/images/ad-2.png";
import adThreeImage from "../../assets/images/ad-3.png";
import AdCard from "../AdCard";

export interface Ad {
  id: number;
  image: string;
  heading: string;
  text: string;
  buttonValue: string;
  backgroundColorValue: string;
  url: string;
}

const ads: Ad[] = [
  {
    id: 1,
    image: adOneImage,
    heading: "معالجة أسرع وأكثر ثراءً",
    text: "أسرع من EXPEED 4 ، يعالج EXPEED 5 بسرعة 45.7 ميجابكسل من البيانات لتقليل التشويش",
    buttonValue: "تسوق الآن",
    url: "/",
    backgroundColorValue: "bg-surface-shade-a",
  },
  {
    id: 2,
    image: adTwoImage,
    heading: "معالجة أسرع وأكثر ثراءً",
    text: "أسرع من EXPEED 4 ، يعالج EXPEED 5 بسرعة 45.7 ميجابكسل من البيانات لتقليل التشويش",
    buttonValue: "تسوق الآن",
    url: "/",
    backgroundColorValue: "bg-surface-shade-b",
  },
  {
    id: 3,
    image: adThreeImage,
    heading: "معالجة أسرع وأكثر ثراءً",
    text: "أسرع من EXPEED 4 ، يعالج EXPEED 5 بسرعة 45.7 ميجابكسل من البيانات لتقليل التشويش",
    buttonValue: "تسوق الآن",
    url: "/",
    backgroundColorValue: "bg-surface-shade-c",
  },
];

function AdsSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-lg responsive-padding-y responsive-padding-x bg-surface-primary">
      {ads.map((ad) => (
        <AdCard key={ad.id} ad={ad} />
      ))}
    </section>
  );
}

export default AdsSection;
