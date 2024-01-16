import FirstBottomImg from "../assets/img/section/smile.png";

export default function Bottom(){

  return(
    <>
    <section className="bottom">
        <div className="bottom_backg">
        </div>
        <div className="container">
            <div className="bottom_padding">
                <div className="content_bottom">
                    <figure className="first_column_bottom">
                        <img className="first_element_bottom" src={FirstBottomImg}
                        alt="element1"
                        />
                        <p className="p1_bottom">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus
                            condimentum“</p>
                    </figure>
                    <div className="second_column_bottom">
                        <p className="p2_bottom">SUBSCRIBE <br/>
                            <span className="p21_bottom">FOR OUR NEWLETTER AND PROMOTION</span>
                        </p>
                        <div className="area_bottom">
                            <input className="inp1" type="email" placeholder="Enter Your Email"/>
                            <button className="but1" type="button">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}