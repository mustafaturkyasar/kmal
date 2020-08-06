import Link from "next/link";

export default function SideBar(ctx) {
  return (
      <div className="col-lg-4">

        <div className="sidebar">
          <div className="sidebar_section">
            <div className="sidebar_section_title">
              <h3>Kullandığım Teknikler</h3>
            </div>
            <ul className="sidebar_list">
              <li className="sidebar_list_item">
                <a style={{ pointerEvents: "none", cursor: "default" }} href="#">
                  48 Saat Tekrarı
                </a>
              </li>
              <li className="sidebar_list_item">
                <a style={{ pointerEvents: "none" }} href="#">
                  Süreli soru çözümü
                </a>
              </li>
              <li className="sidebar_list_item">
                <a style={{ pointerEvents: "none", cursor: "default" }} href="#">
                  Evde Takılmama
                </a>
              </li>
              <li className="sidebar_list_item">
                <a style={{ pointerEvents: "none", cursor: "default" }} href="#">
                  Genel Tekrar Tekniği
                </a>
              </li>
              <li className="sidebar_list_item">
                <a style={{ pointerEvents: "none", cursor: "default" }} href="#">
                  Pota Çalışması (Sınava 2 ay kala)
                </a>
              </li>
            </ul>
          </div>

          <div className="sidebar_section">
            <div className="sidebar_section_title">
              <h3>Kurslarım</h3>
            </div>

            <div className="latest_posts">
              <div className="latest_post">
                <div className="latest_post_image">
                  <img
                      src="/images/dersmini.jpeg"
                      alt=""
                  />
                </div>
                <div className="latest_post_title">
                  <Link href={`/MatematikDers?id=${ctx.id}`}>
                    <a href="">Matematik Özel Ders</a>
                  </Link>
                </div>
                <div className="latest_post_meta">
                <span className="latest_post_author">
                  <a href="#">Kemal Balta</a>
                </span>
                  <span></span>
                  <span className="latest_post_comments">
                  <a href="#"></a>
                </span>
                </div>
              </div>

              <div className="latest_post">
                <div className="latest_post_image">
                  <img
                      src="/images/uzakmini.jpeg"
                      alt=""
                  />
                </div>
                <div className="latest_post_title">
                  <Link href={`/UzaktanCanliDers?id=${ctx.id}`}>
                    <a href="">Uzaktan Canlı Matematik Özel Ders</a>
                  </Link>

                </div>
                <div className="latest_post_meta">
                <span className="latest_post_author">
                  <a href="#">Kemal Balta</a>
                </span>
                  <span></span>
                  <span className="latest_post_comments">
                  <a href="#"></a>
                </span>
                </div>
              </div>

              <div className="latest_post">
                <div className="latest_post_image">
                  <img
                      src="/images/latest_3.jpg"
                      alt=""
                  />
                </div>
                <div className="latest_post_title">
                  <Link href={`/KoclukSistemi?id=${ctx.id}`}>
                    <a href="">Koçluk Sistemi</a>
                  </Link>
                </div>
                <div className="latest_post_meta">
                <span className="latest_post_author">
                  <a href="#">Kemal Balta</a>
                </span>
                  <span></span>
                  <span className="latest_post_comments">
                  <a href="#"></a>
                </span>
                </div>
              </div>
            </div>
          </div>


      </div>
    </div>
  );
}
