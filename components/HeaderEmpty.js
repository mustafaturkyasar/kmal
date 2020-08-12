import Link from "next/link";
import Router from "next/router";


export default function HeaderEmpty() {
    return (
        <div>
            <header className="header d-flex flex-row">
                <div className="header_content d-flex flex-row align-items-center">
                    <div className="logo_container">
                        <div className="logo">
                            <img src="/images/logo.png" alt="dasd" />
                            <span>Kemal Balta</span>

                        </div>
                    </div>

                    <nav className="main_nav_container">
                        <div className="main_nav">
                            <ul className="main_nav_list">


                                <Link >
                                    <li className="main_nav_item">

                                        <a>AnaSayfa</a>
                                    </li>
                                </Link>



                                <Link >
                                    <li className="main_nav_item">
                                        <a >Kurslarım</a>
                                    </li>
                                </Link>

                                <Link >

                                    <li className="main_nav_item">
                                        <a >Öğrenci Dosya</a>
                                    </li>

                                </Link>




                            </ul>
                        </div>
                    </nav>
                </div>

                <div className="header_side d-flex flex-row justify-content-around align-items-center">
                    <img src="/images/youtube.svg" alt="" />

                    <img src="/images/instagram.svg" alt="" />
                    <img src="/images/phone-call.svg" alt="" />
                    <span>0532 210 11 47</span>
                </div>

                <div className="hamburger_container">
                    <i className="fas fa-bars trans_200"></i>
                </div>
            </header>


        </div>
    );
}



