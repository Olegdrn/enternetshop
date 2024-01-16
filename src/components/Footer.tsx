import FirstFooterImg from "../assets/img/footer/face.png";
import SecondFooterImg from "../assets/img/footer/inst.png";
import ThirdFooterImg from "../assets/img/footer/pi.png";
import FourthFooterImg from "../assets/img/footer/tw.png";

export default function Footer(){

  return(
    <>
    <footer className="footer">
        <div className="container">
            <div className="footer_content">
                <p className="p_footer">&copy; 2022 Brand All Rights Reserved.</p>
                <nav className="footer_right_content">
                    <a className="link_footer" href="https://facebook.com/" target="_blank">
                      <img src={FirstFooterImg} alt="none"/>
                    </a>
                    <a className="link_footer" href="https://www.instagram.com/" target="_blank">
                      <img src={SecondFooterImg} alt="none"/>
                    </a>
                    <a className="link_footer" href="https://www.pinterest.ru/" target="_blank">
                      <img src={ThirdFooterImg} alt="none"/>
                    </a>
                    <a className="link_footer" href="https://twitter.com/" target="_blank">
                      <img src={FourthFooterImg} alt="none"/>
                    </a>
                </nav>
            </div>
        </div>
    </footer>
    </>
  )
}