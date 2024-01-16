export default function Pagination(){

  return(
    <>
    <nav className="pagination_">
        <ul className="pagination container">
            <li className="page-item">
                <a className="page-link" href="#">
                    <span>&laquo;</span>
                </a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">4</a></li>
            <li className="page-item"><a className="page-link" href="#">5</a></li>
            <li className="page-item"><a className="page-link_" href="#">6</a></li>
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