import CardItem from "../components/Products/CardItem";
import imgFirstCartPage from "../assets/img/top/navigation/exit.jpg";
import imgSecondCartPage from "../assets/img/catalog/2man.png";

export default function Cart(){

  return(
    <>
    <section className="top_product_page">
        <div className="container top_third_page">
            <h2 className="h2_product_page">SHOPPING CART</h2>
        </div>
    </section>
    <section className="cart_page container">
        <form className="cart_elem" action="#">
            <CardItem/>
            <div className="cart_id">
                <div className="cart_id_size">
                    <img src={imgSecondCartPage} alt="oops"/>
                </div>
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
                        Quantity <input className="quantity_inp" type="number" min="1" max="10"/>
                    </label>
                </div>
            </div>

            <div className="couple_button">
                <button className="but1 but1_cart" type="reset">CLEAR SHOPPING CART</button>
                <button className="but1 but1_cart" type="button">CONTINUE SHOPPING</button>
            </div>
        </form>
        <section className="cart_column">
            <form action="#">
              <h4 className="head4_form head4_form_cart_form">SHIPPING ADRESS</h4>
              <input className="inp1 inp1_cartinp" type="text" placeholder="Country"/>
              <input className="inp1 inp1_cartinp" type="text" placeholder="State"/>
              <input className="inp1 inp1_cartinp" type="text" placeholder="Postcode / Zip"/>
              <button className="but1 but1_cart_form" type="button">GET A QUOTE</button>
            </form>
            <form className="second_form" action="#">
                <p className="second_form_para1">SUB TOTAL &emsp; $900</p>
                <p className="second_form_para">GRAND TOTAL &emsp; <span className="card_id_para_color">$900</span></p>
                <div className="hrbl"></div>
                <button className="but1 but1_second_form" type="button">PROCEED TO CHECKOUT</button>
            </form>
        </section>
    </section>
    </>
  )
}