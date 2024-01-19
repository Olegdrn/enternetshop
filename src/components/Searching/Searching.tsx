import React from "react";
import './Searching.module.scss';
import FourthHeaderImg from "../../assets/img/header/search.svg";

export default function Searching(){

  return(
    <div className="searchField">
        <a href="#">
          <img src={FourthHeaderImg} className="searchIcon" alt="logo1"/>
        </a>
        <div className="search">
            <input className="inputSearch" type="text" placeholder="product" />
        </div>
    </div>
  )
}