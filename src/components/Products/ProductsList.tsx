import imgCardInTheIndexPage from "../../assets/img/product_line/card_img.png";
import {Product} from "../../types";
import { useEffect, useState } from "react";
import {imgArr} from "../../data";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import ProductSceleton from "./ProductSceleton";
import { loading } from "../../features/loading/loadingSlice";
import axios from "axios";
import ProductItem from "./ProductItem";
import { setFilterSensor } from "../../features/searching/searchingSlice";

export default function ProductList(){

  const [productsData,setProductsData]= useState<Product[]>([]);
  const gender:string = useAppSelector((state)=> state.sorter.gender);
  const loadingStatus:boolean = useAppSelector((state)=> state.loader.loading);
  const filter:string = useAppSelector((state)=>state.searcher.text);
  const filterSensor:boolean = useAppSelector((state)=> state.searcher.filterSensor)
  const dispatch = useAppDispatch();
  


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
  },[gender,filterSensor]);
  

  useEffect(()=>{
    if (filter) {
      const filteredProducts: Product[] = productsData.filter(product => product.title
      .toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
      setProductsData(filteredProducts);
    } else {
      dispatch(setFilterSensor())
    }
  },[filter])




return(
<>
  <section className="product_card container">
    <div className="first_product_line">
      {productsData.map((product: Product, index:number) => 
        loadingStatus
        ?<ProductSceleton key={index}/>
        :<ProductItem 
        index={index} 
        product={product} 
        imgArr={imgArr} 
        img ={imgCardInTheIndexPage} 
        />
      )
    }
    </div>
  </section>
</>
)

}



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