import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { changeMen, changeWomen } from "../features/sorter/sortingSlice";

export default function Sorting(){

    const [showTrandingSorting, setShowTrandingSorting] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const MenList = ()=>{
        dispatch(changeMen())
    }

    const WomenList = () =>{
        dispatch(changeWomen())
    }


  return(
    <>
    <div className="product_description_third_el">
        <div className="trendingNow">
            <div className="flex choose1">
                <p className="p_choose">TRENDING NOW</p>
                <a className="arrow_link" href="#" 
                onClick={()=>{setShowTrandingSorting(!showTrandingSorting)}}
                >
                <div className="arrow"></div>
                </a>
            </div>
            <div>
                {showTrandingSorting?(<div className="trandingSorting" >
                    <p className= "pSort detail pointer" 
                    onClick={MenList}
                    >
                    For men
                    </p>
                    <p className= "pSort detail pointer" 
                    onClick={WomenList}
                    >
                    For women
                    </p>
                </div>): null}
            </div>
        </div>

        <div className="choose1">
            <p className="p_choose">SIZE</p>
            <a className="arrow_link" href="#">
                <div className="arrow"></div>
            </a>
        </div>
        <div className="choose1">
            <p className="p_choose">PRICE</p>
            <a className="arrow_link" href="#">
                <div className="arrow"></div>
            </a>
        </div>
    </div>
    </>
  )
}
