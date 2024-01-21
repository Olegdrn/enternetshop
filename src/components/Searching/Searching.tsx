import React from "react";
import './Searching.module.scss';
import FourthHeaderImg from "../../assets/img/header/search.svg";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { searching } from "../../features/searching/searchingSlice";

export default function Searching(){

  const dispatch = useAppDispatch();

  
  const inputFilterText = (event:any) =>{
    const searchText:string = event.target.value;
    dispatch(searching(searchText))
  }

  return(
    <div className="searchField">
        <a href="#">
          <img src={FourthHeaderImg} className="searchIcon" alt="logo1"/>
        </a>
        <div className="search">
            <input className="inputSearch" type="text" placeholder="product" onChange={inputFilterText}/>
        </div>
    </div>
  )
}