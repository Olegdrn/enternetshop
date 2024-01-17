import imgCardInTheIndexPage from "../../assets/img/product_line/card_img.png";
import {Product} from "../../types";
import { useEffect, useState } from "react";
import {imgArr} from "../../data";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import ProductSceleton from "./ProductSceleton";
import { loading } from "../../features/loading/loadingSlice";
import axios from "axios";
import ProductItem from "./ProductItem";

export default function ProductList(){

  const [productsData,setProductsData]= useState<Product[]>([]);
  const gender = useAppSelector((state)=> state.sorter.gender);
  const loadingStatus = useAppSelector((state)=> state.loader.loading);
  const dispatch = useAppDispatch();

 console.log(imgCardInTheIndexPage)
 
  //через fetch
  // useEffect(()=>{
  //   dispatch(loading())
  //   fetch("https://659d0eca633f9aee79087df4.mockapi.io/ShopODR/products?gender=" + gender)
  //   .then(res=> res.json())
  //   .then(res => {
  //     setProductsData(res);
  //     setTimeout(()=>{
  //       dispatch(loading())
  //     },1000);
  //   }
  //   )
  // },[gender]);


  useEffect(()=>{
    dispatch(loading())
    axios.get("https://659d0eca633f9aee79087df4.mockapi.io/ShopODR/products?gender=" + gender)
    .then(res => {
       setProductsData(res.data);
       setTimeout(()=>{
         dispatch(loading())
        },1000);
      }
    )
  },[gender]);



return(
<>
  <section className="product_card container">
    <div className="first_product_line">
      {productsData.map((product: Product, index:number) => 
        loadingStatus
        ?<ProductSceleton key={index}/>
        :<ProductItem index={index} product={product} imgArr={imgArr} img ={imgCardInTheIndexPage} />
      )
    }
    </div>
  </section>
</>
)

}