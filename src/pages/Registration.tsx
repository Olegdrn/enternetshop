import imgOk from "../assets/img//registration/ok.svg";


export default function Registration(){

  return(
  <>
    <section className="top_product_page">
        <div className="container top_third_page">
            <h2 className="h2_product_page">REGISTRATION</h2>
        </div>
    </section>
    <section className="registration container">
        <form className="input_column" action="#">
            <h4 className="head4_form">Your Name</h4>
            <input className="inp1 inp1_offerinp" type="text" placeholder="First Name"/>
            <input className="inp1 inp1_offerinp" type="text" placeholder="Last Name"/>
            <div className="whois">
                <label>
                    <input type="radio" name="who"/>
                     Male
                </label>
                <label>
                    <input type="radio" name="who"/> 
                     Female
                </label>
            </div>
            <h4 className="head4_form">Login details</h4>
            <input className="inp1 inp1_offerinp" type="email" placeholder="Email"/>
            <div className="passw">
                <input className="inp1 inp1_offerinp" type="password" placeholder="Password"/>
                <p className="advice">Please use 8 or more characters, with at least 1 number and a mixture of uppercase and
                    lowercase letters</p>
            </div>
            <button className="but1 but1_regist" type="submit">JOIN NOW</button>
        </form>
        <div className="offer_column">
            <h4 className="head4_offer">LOYALTY HAS ITS PERKS</h4>
            <p className="p_offer1">Get in on the loyalty program where you can earn points and unlock serious perks.
                Starting with these as
                soon as you join:</p>
            <div className="offer_img">
                <img src={imgOk} alt="oops"/>
                <p className="p_offer1">15% off welcome offer </p>
            </div>
            <div className="offer_img">
                <img src={imgOk} alt="oops"/>
                <p className="p_offer">Free shipping, returns and exchanges on all orders </p>
            </div>
            <div className="offer_img">
                <img src={imgOk} alt="oops"/>
                <p className="p_offer">$10 off a purchase on your birthday </p>
            </div>
            <div className="offer_img">
                <img src={imgOk} alt="oops"/>
                <p className="p_offer">Early access to products</p>
            </div>
            <div className="offer_img">
                <img src={imgOk} alt="oops"/>
                <p className="p_offer">Exclusive offers & rewards</p>
            </div>
        </div>
    </section>
  </>
  )
}