import imgFirstCartPage from "../../assets/img/top/navigation/exit.jpg";
import imgSecondCartPage from "../../assets/img/product_line/image_card_3.jpg";

export default function CardItem(){

  return(
    <>
            <div className="cart_id">
                <img className="cart_id_img" src={imgSecondCartPage} alt="oops"/>
                <div className="description_id">
                    <div className="id_cart_line">
                        <h4 className="card_id_head">MANGO PEOPLE</h4>
                        <a className="link_cart" href="#"><img src={imgFirstCartPage} alt="oops"/></a>
                    </div>
                    <h4 className="card_id_head">T-SHIRT</h4>
                    <p className="card_id_para">Price: <span className="card_id_para_color">$300</span> </p>
                    <p className="card_id_para">Color: Red</p>
                    <p className="card_id_para">Size: Xl </p>
                    <label className="card_id_para">
                        Quantity  <input className="quantity_inp" type="number" min="1" max="10"/>
                    </label>
                </div>
            </div>
    </>
  )
}
