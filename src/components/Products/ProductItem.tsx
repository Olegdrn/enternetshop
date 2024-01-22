import {Product} from "../../types";

type CurrentProps = {
  product:Product;
  img:string;
  index:number;
  mainProductImg:string;
}

export default function ProductItem(props:CurrentProps){

  return(
    <>
      <div className="product_elements" key={props.index} data-id={props.product.id} data-name={props.product.title} data-price={props.product.price}>
          <a className="product_link_content" href="#">
              <img className="img_product_link" src={props.mainProductImg} alt="none"/>
              <div className="content_product_card">
                  <p className="pp_card">{props.product.title}</p>
                  <p className="ppp_card">{props.product.description}</p>
                  <p className="pppp_card">${props.product.price}</p>
              </div>
          </a>
          <div className="hover_img">
          <a className="hover_img_link" href="#">
            <img className="img_hover_img_link" src={props.img}
              alt="noth"
            />
            <p className="ppppp_card">Add to Cart</p>
          </a>
          </div>
      </div>
    </>
  )
}