import FirstAdvantagesImg from "../assets/img/aside/aside_2.png";
import SecondAdvantagesImg from "../assets/img/aside/aside_1.png";
import ThirdAdvantagesImg from "../assets/img/aside/aside_0.png";

export default function Advantages(){

  return(
    <>
<div className="asid">
<div className="container">
    <div className="content_aside ">
        <div className="first_element_aside">
            <img className="first_element_column" src={FirstAdvantagesImg} alt="element1"/>
            <p className="p1_aside">Free Delivery</p>
            <p className="p2_aside">Worldwide delivery on all. Authorit tively morph next-generation innov tion with
                extensive models.</p>
        </div>
        <div className="first_element_aside">
            <img className="second_element_column" src={SecondAdvantagesImg} alt="element2"/>
            <p className="p1_aside">Sales & discounts</p>
            <p className="p2_aside">Worldwide delivery on all. Authorit tively morph next-generation innov tion with
                extensive models.</p>
        </div>
        <div className="first_element_aside">
            <img className="third_element_column" src={ThirdAdvantagesImg} alt="element3"/>
            <p className="p1_aside">Quality assurances</p>
            <p className="p2_aside">Worldwide delivery on all. Authorit tively morph next-generation innov tion with
                extensive models.</p>
        </div>
    </div>
</div>
</div>
    </>
  )
}

