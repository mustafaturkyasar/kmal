import Layout from "../components/Layout";
import Login from "../components/Login";
import Head from "next/head";


export default function HomePage() {
  return (
      <Layout>
        <Head>
          <script src="/js/custom.js"></script>
        </Head>

        <div className="super_container">
          <div className="register">
            <div className="container-fluid">
              <div className="row row-eq-height">
                <div className="col-lg-6 nopadding">
                  <div className="search_section d-flex flex-column align-items-center justify-content-center" >
                    <div
                        className="search_background"
                        style={{
                          backgroundImage: "url('/kemal/images/news_background.jpg')",
                        }}
                    />

                    <div className="logo_container" >
                      <div className="logo">
                        <img src="/images/logo.png" alt="dasd" />
                        <span>Kemal Balta</span>

                      </div>
                    </div>





                      <div className="hero_box d-flex flex-row align-items-center justify-content-start">
                        <img src="/images/professor.svg" className="svg" alt="" />
                        <div className="hero_box_content">
                          <h2 className="hero_box_title">Koçluk Sistemi</h2>

                        </div>

                    </div>

                    <div className="hero_box d-flex flex-row align-items-center justify-content-start">
                      <img src="/images/professor.svg" className="svg" alt="" />
                      <div className="hero_box_content">
                        <h2 className="hero_box_title">Koçluk Sistemi</h2>

                      </div>

                    </div>

                    <div className="hero_box d-flex flex-row align-items-center justify-content-start">
                      <img src="/images/professor.svg" className="svg" alt="" />
                      <div className="hero_box_content">
                        <h2 className="hero_box_title">Koçluk Sistemi</h2>

                      </div>

                    </div>
                   
                  </div>

                </div>
                <div  style={{marginTop : "20%", marginLeft : "10%"}}>
                  <Login ></Login>
                </div>

              </div>

            </div>
          </div>
        </div>
      </Layout>
  );
}
