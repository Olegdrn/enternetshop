import ProductList from "../components/Products/ProductsList";
import Top from "../components/Top";
import imgMainProductPage from "../assets/img/product_page/product_main_img.png";
import imgSecondProductPage from "../assets/img/product_page/iconcard.png";

export default function Product(){

  return(
    <>
    <Top/>
    <section className="first_product_section_page">
        <div className="product_switch">
            <a className="left_link_product" href="#">
                <div className="previous_product">
                </div>
            </a>
            <div className="center_product_img">
                <img src={imgMainProductPage} alt="oops"/>
            </div>
            <a className="right_link_product" href="#">
                <div className="next_product">
                </div>
            </a>
        </div>
        <div className="product_description">
            <article>
                <div className="product_description_first_el">
                    <p className="p1_product_desc">WOMEN COLLECTION</p>
                    <div className="desc_bottom_line"></div>
                </div>
                <div className="product_description_second_el">
                    <p className="p2_product_desc">MOSCHINO CHEAP AND CHIC</p>
                    <p className="p3_product_desc">Compellingly actualize fully researched processes before proactive
                        outsourcing. Progressively syndicate collaborative architectures before cutting-edge services.
                        Completely visualize parallel core competencies rather than exceptional portals. </p>
                    <p className="p4_product_desc">$561</p>
                </div>
            </article>
            <form className="form_cat" action="#">
                <div className="product_description_third_el">
                    <div className="choose1">
                        <p className="p_choose">CHOOSE COLOR</p>
                        <a className="arrow_link" href="#">
                            <div className="arrow"></div>
                        </a>
                    </div>
                    <div className="choose1">
                        <p className="p_choose">CHOOSE SIZE</p>
                        <a className="arrow_link" href="#">
                            <div className="arrow"></div>
                        </a>
                    </div>
                    <div className="choose1">
                        <p className="p_choose">QUANTITY</p>
                        <a className="arrow_link" href="#">
                            <div className="arrow"></div>
                        </a>
                    </div>
                </div>
                <div className="product_description_fourth_el">
                    <a className="desc_cart" href="#">
                        <img className="img1_hover_img_link" src={imgSecondProductPage} alt="noth"/>
                        <p className="p_cart"> Add to Cart</p>
                    </a>
                </div>
            </form>
        </div>
    </section>

    <ProductList/>
    </>
  )
}