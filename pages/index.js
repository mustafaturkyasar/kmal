
import Layout from "../components/Layout";
import Login from "../components/Login";
import Head from "next/head";


export default function HomePage() {
  return (
      <Layout>
        <Head>
          <link
              rel="stylesheet"
              type="text/css"
              href="styles/news_post_styles.css"
          />
          <link
              rel="stylesheet"
              type="text/css"
              href="styles/news_post_responsive.css"
          />
        </Head>
        <div className="super_container">
          <div className="register">
            <div className="container-fluid">
              <div className="row row-eq-height">
                <div className="col-lg-6 nopadding">
                  <div className="search_section d-flex flex-column align-items-center justify-content-center">
                    <div
                        className="search_background"
                        style={{
                          backgroundImage: "url('/kemal/images/news_background.jpg')",
                        }}
                    />
                    <div className="search_content text-center">
                      <br /> <br /> <br />
                      <br /> <br /> <br /> <br /> <br />
                      <br /> <br /> <br /> <br /> <br />
                      <br /> <br /> <br />
                      <br /> <br /> <br /> <br /> <br />
                      <br /> <br /> <br /> <br /> <br />
                      <br /> <br /> <br />
                      <br /> <br /> <br /> <br /> <br />

                      <div className="home_content " style={{marginBottom:500}}>
                        <div className=" text-center search_content  mx-auto trans_200">
                          <h1 style={{ fontSize: 35 }}> Matematik Özel Ders</h1>
                        </div>
                      </div>
                      <div className="home_content " style={{marginBottom:300}}>
                        <div className=" text-center search_content  mx-auto trans_200">
                          <h1 style={{ fontSize: 35 }}> Uzaktan Canlı Matematik Özel Ders</h1>
                        </div>
                      </div>
                      <br />
                      <div className="home_content "style={{marginBottom:100}}>
                        <div className=" text-center search_content  mx-auto trans_200">
                          <h1 style={{ fontSize: 35 }}> Öğrenci Koçluğu</h1>
                        </div>
                      </div>
                      <br />
                      <br/>
                      <br />
                      <br/>
                      <br />
                      <br/>


                    </div>
                  </div>
                </div>
                <Login></Login>
              </div>
            </div>
          </div>
        </div>
      </Layout>
  );
}
