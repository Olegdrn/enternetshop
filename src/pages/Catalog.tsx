import Advantages from "../components/Advantages";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import ProductList from "../components/Products/ProductsList";
import Sorting from "../components/Sorting";
import Top from "../components/Top";


export default function Catalog(){

  return(
    <>
    <Top/>
    <div className="filterSort container">
      <Filter/>
      <Sorting/>
    </div>
    <ProductList/>
    <Pagination/>
    <Advantages/>
    </>
  )
}