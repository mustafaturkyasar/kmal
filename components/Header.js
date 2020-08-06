import Link from "next/link";
import Router from "next/router";


export default function Header(ctx) {
  return (
    <div>
      <header className="header d-flex flex-row">
        <div className="header_content d-flex flex-row align-items-center">
          <div className="logo_container">
            <div className="logo">
              <img src="/images/logo.png" alt="dasd" />
              <span>Kemal Balta</span>
              {
                console.log(ctx)
              }
            </div>
          </div>

          <nav className="main_nav_container">
            <div className="main_nav">
              <ul className="main_nav_list">


                <Link href={`/present?id=${ctx.id}`}>
                  <li className="main_nav_item">

                    <a href={`/present?id=${ctx.id}`}>AnaSayfa</a>
                  </li>
                </Link>



                <Link href={`/MatematikDers?id=${ctx.id}`}>
                  <li className="main_nav_item">
                    <a href="">Kurslarım</a>
                  </li>
                </Link>

                   <Link href={`/student/${ctx.id}?id=${ctx.id}`}>

                  <li className="main_nav_item">
                  <a href="/MatematikDers">Öğrenci Dosya</a>
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

      <div className="menu_container menu_mm">
        <div className="menu_close_container">
          <div className="menu_close"></div>
        </div>

        <div className="menu_inner menu_mm">
          <div className="menu menu_mm">
            <ul className="menu_list menu_mm">
              <li className="menu_item menu_mm">
                <a href="#">Home</a>
              </li>
              <li className="menu_item menu_mm">
                <a href="#">About us</a>
              </li>
              <li className="menu_item menu_mm">
                <a href="courses.html">Courses</a>
              </li>
              <li className="menu_item menu_mm">
                <a href="elements.html">Elements</a>
              </li>
              <li className="menu_item menu_mm">
                <a href="news.html">News</a>
              </li>
              <li className="menu_item menu_mm">
                <a href="contact.html">Contact</a>
              </li>
            </ul>

            <div className="menu_social_container menu_mm">
              <ul className="menu_social menu_mm">
                <li className="menu_social_item menu_mm">
                  <a href="#">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </li>
                <li className="menu_social_item menu_mm">
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="menu_social_item menu_mm">
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="menu_social_item menu_mm">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="menu_social_item menu_mm">
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="menu_copyright menu_mm">
              Colorlib All rights reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



