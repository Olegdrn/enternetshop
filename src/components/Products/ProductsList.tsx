import imgCardInTheIndexPage from "../../assets/img/product_line/card_img.png";
import {Product} from "../../types";
import { useEffect, useState } from "react";
import {imgArr} from "../../data";
import { useAppSelector } from "../../hooks/redux";
import ProductSceleton from "./ProductSceleton";

export default function ProductList(){

  const [productsData,setProductsData]= useState<Product[]>([]);
  const statusMen = useAppSelector((state)=> state.sorter.statusMen);
  const statusWomen = useAppSelector((state)=> state.sorter.statusWomen);
  const [isLoading, setIsLoading] = useState<boolean>(true);


  useEffect(()=>{
    fetch("https://659d0eca633f9aee79087df4.mockapi.io/ShopODR/products")
    .then(res=> res.json())
    .then(res => {
      setProductsData(res);
      setTimeout(()=>{
        setIsLoading(false);
      },1000);
    }
    )
  },[])

  const itemsList: Product[] = productsData.filter((product: Product, i: number)=>
    product.gender==="male"
  )


return(
<>
  <section className="product_card container">
    <div className="first_product_line">
      {productsData.map((product: Product, index:number) => 
        isLoading
        ?<ProductSceleton key={index}/>
        :
          <div className="product_elements" key={index} data-id={product.id} data-name={product.title} data-price={product.price}>
          <a className="product_link_content" href="#">
              <img className="img_product_link" src={imgArr[index]} alt="none"/>
              <div className="content_product_card">
                  <p className="pp_card">{product.title}</p>
                  <p className="ppp_card">{product.description}</p>
                  <p className="pppp_card">${product.price}</p>
              </div>
          </a>
          <div className="hover_img">
          <a className="hover_img_link" href="#">
            <img className="img_hover_img_link" src={imgCardInTheIndexPage}
              alt="noth"
            />
            <p className="ppppp_card">Add to Cart</p>
          </a>
      </div>
        </div>
      )
    }
    </div>
  </section>
</>
)

}