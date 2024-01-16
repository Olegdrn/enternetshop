export default function Categories(){

  return(
    <>
    <section className="top_link container">
        <div className="first_line">
            <a className="top_link_content" href="/Product">
                <div className="item_women">
                    <p className="pp_item">30% OFF</p>
                    <p className="ppp_item">FOR WOMEN</p>
                </div>
            </a>
            <a className="top_link_content" href="/Product">
                <div className="item_men">
                    <p className="pp_item">HOT DEAL</p>
                    <p className="ppp_item">FOR MEN</p>
                </div>
            </a>
            <a className="top_link_content" href="/Product">
                <div className="item_kids">
                    <p className="pp_item">NEW ARRIVALS</p>
                    <p className="ppp_item">FOR KIDS</p>
                </div>
            </a>
        </div>
        <div className="second_link_line">
            <a className="top_link_content top_link_content_second_l" href="/Product">
                <div className="second_line">
                    <p className="pp_item">LUXERIOUS & TRENDY</p>
                    <p className="ppp_item">ACCESORIES</p>
                </div>
            </a>
        </div>
       
    </section>
    </>
  )
}