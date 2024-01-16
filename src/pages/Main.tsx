import Advantages from "../components/Advantages";
import Categories from "../components/Categories";
import imgManInTheIndexPage from "../assets/img/top/man.png";
import rectangleInTheIndexPage from "../assets/img/top/Rectangle.png";
import ProductList from "../components/Products/ProductsList";


export default function Main(){
    //Альтернативный импорт jpg, еще можно перенести в public из src и вставлять 
    //ссылкой в html без точек (абсолютный путь)
    // const imgManInTheIndexPage: string = require('../assets/img/top/man.png');

  return(
    <>
    <section className="top">
        <div className="container">
            <div className="top_main">
                <img className="img_man" src={imgManInTheIndexPage} alt="man"/>
                <div className="the_brand">
                    <img className="img_rect" src= {rectangleInTheIndexPage} 
                    alt="Rectangle"
                    />
                    <div className="inscription">
                        <h1 className="mainp">THE BRAND</h1>
                        <div className="second_level">
                            <p className="_p">OF LUXERIOUS</p>&ensp;
                            <p className="p_p">FASHION</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Categories/>
    <ProductList/>
    <Advantages/>
    </>
  )
}