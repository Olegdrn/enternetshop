import Menu from "./Menu/Menu";
import FirstHeaderImg from "../assets/img/header/logo.png";
import SecondHeaderImg from "../assets/img/header/Forma.png";
import ThirdHeaderImg from "../assets/img/header/Forma 1.png";
import FourthHeaderImg from "../assets/img/header/search.png";
import FifthHeaderImg from "../assets/img/header/Forma 2.png";
import {Searching} from "./Searching/Searching";

export default function Header(){

  return(
    <>
        <header className="header">
        <div className="head container">
            <div className="Head_img">
                <div className="left_img">
                    <div className="first_img"><a href="/"> <img src={FirstHeaderImg} 
                    alt="logo"/>
                    </a>
                    </div>
                    <Searching/>
                </div>
                <div className="right_img">
                    <div className="third_img"><a href="/Catalog"> <img src={SecondHeaderImg} 
                    alt="logo2"/>
                    </a>
                      <Menu/>
                    </div>
                    <div className="fourth_img"><a href="/Registration"><img src={ThirdHeaderImg}
                                alt="logo3"/></a>
                    </div>
                    <div className="fifth_img"><a href="/Cart"><img src={FifthHeaderImg} 
                    alt="logo3"/>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}