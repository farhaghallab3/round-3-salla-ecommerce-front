import { Link } from "react-router-dom";
import smartWhatch from "../../assets/images/Image (3).png";
import smartPhone from "../../assets/images/Image (4).png";
import airPods from "../../assets/images/Image (5).png";

export default function CategoriesHome() {

    const categories =[
        {
          "id": 1,
          "title": "معالجة أسرع وأكثر ثراءً",
          "description": "أسرع من EXPEED 4 ، يعالج EXPEED 5 بسرعة 45.7 ميجابكسل من البيانات لتقليل التشويش",
          "image": smartWhatch,
          "buy":"تسوق الآن"

        },
        {
          "id": 2,
          "title": "معالجة أسرع وأكثر ثراءً",
          "description": "أسرع من EXPEED 4 ، يعالج EXPEED 5 بسرعة 45.7 ميجابكسل من البيانات لتقليل التشويش",
          "image": smartPhone,
          "buy":"تسوق الآن"
        },
        {
          "id": 3,
          "title": "معالجة أسرع وأكثر ثراءً",
          "description": "أسرع من EXPEED 4 ، يعالج EXPEED 5 بسرعة 45.7 ميجابكسل من البيانات لتقليل التشويش",
          "image": airPods,
          "buy":"تسوق الآن"

        }
      ]
      
  return (
    <div>
        <div className="flex justify-center w-full md:px-10xl mt-5xl">
            {categories.map((category) => <div className="px-sm w-full md:w-1/3">
            <div key={category.id} className={`flex-col justify-center items-center text-center px-sm w-full  py-lg
            ${category.id===1?"bg-surface-shade-a":''}
                ${category.id===2?"bg-surface-shade-b":''}
                    ${category.id===3?"bg-surface-shade-c":''}
            `}>
                <img className="mx-auto" src={category.image}/>
                <h5 className="text-content-dark font-medium pt-md">{category.title}</h5>
                <p className="text-content-base text-body-small pt-sm pb-lg">{category.description}</p>
                <Link to={'/'} className=" text-content-dark font-medium hover:text-button-primary-hover tansition">{category.buy}</Link>
            </div>
            </div>)}

        </div>
    </div>
  )
}
