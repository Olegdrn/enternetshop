import { useAppDispatch } from "../hooks/redux";
import { increasingProductsAmount, decreasingProductsAmount } from "../features/pagination/paginationSlice";

export default function Pagination(){

    const dispatch = useAppDispatch();

    const increaseProductsAmount = () =>{
        dispatch(increasingProductsAmount());
    };

    const decreaseProductsAmount = () =>{
        dispatch(decreasingProductsAmount());
    };
    

  return(
    <>
    <nav className="pagination_">
        <ul className="pagination container">
            <li className="page-item">
                <a className="page-link" href="#">
                    <span>&laquo;</span>
                </a>
            </li>
            <li className="page-item">
                <a className="page-link" href="#" onClick={decreaseProductsAmount}>1</a>
            </li>
            <li className="page-item" >
                <a className="page-link" href="#"  onClick={increaseProductsAmount}>2</a>
            </li>
            <li className="page-item">
                <a className="page-link" href="#" onClick={increaseProductsAmount}>3</a>
            </li>
            <li className="page-item">
                <a className="page-link" href="#" onClick={increaseProductsAmount}>4</a>
            </li>
            <li className="page-item">
                <a className="page-link" href="#" onClick={increaseProductsAmount}>5</a>
            </li>
            <li className="page-item">
                <a className="page-link_" href="#" onClick={increaseProductsAmount}>6</a>
            </li>
            <li className="page-item"><a className="page-link_" href="#">.....</a></li>
            <li className="page-item"><a className="page-link__" href="#">20</a></li>
            <li className="page-item">
                <a className="page-link" href="#">
                    <span>&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
    </>
  )
}