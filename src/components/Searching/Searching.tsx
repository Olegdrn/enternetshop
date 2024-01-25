import React from "react";
import './Searching.module.scss';
import FourthHeaderImg from "../../assets/img/header/search.svg";
import CloseHeaderImg from "../../assets/img/header/close.svg";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { searching, setFilterSensor } from "../../features/searching/searchingSlice";
import { useRef } from "react";

export const Searching: React.FC = () => {

  const dispatch = useAppDispatch();
  const searchingText:string = useAppSelector((state)=>state.searcher.text);
  const inputRef = useRef<HTMLInputElement>(null);

  
  const inputFilterText: (event:any)=>void  = (event) =>{
    const searchText:string = event.target.value;
    dispatch(searching(searchText));
  }

  const closeSearch: ()=> void = ()=>{
    dispatch(searching(""));
    dispatch(setFilterSensor());
    inputRef.current?.focus();
  }

  return(
    <div className="searchField">
        <div>
          <img src={FourthHeaderImg} className="searchIcon" alt="logo1"/>
        </div>
        <div className="search">
            <input 
              ref={inputRef}
              className="inputSearch" 
              type="text" 
              value={searchingText} 
              placeholder="product" 
              onChange={inputFilterText}
            />
        </div>
        {searchingText
          ? <div  onClick={closeSearch}>
              <img 
                src={CloseHeaderImg} 
                className="searchIconClose" 
                alt="logo1"
              />
            </div>
          : <> </>
        }
    </div>
  )

}