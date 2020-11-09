import Layout from "../components/Layout";
import Header from "../components/Header";
import Head from "next/head";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

export default function KoclukSistemi(query) {
    return (
        <Layout>
            <Head>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="/styles/news_post_styles.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="/styles/news_post_responsive.css"
                />
            </Head>
            <div className="super_container">
                <Header id={query.query.id}></Header>


                <div className="home">
                    <div className="home_background_container prlx_parent">
                        <div
    className="home_background prlx"
    style={{backgroundImage: "url('/images/news_background.jpg')"}}
    />
                    </div>
                    <div className="home_content">
                        <h1>Koçluk Sistemi</h1>
                    </div>
                </div>

                <div className="news">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="news_post_container">
                                    <div className="news_post">
                                        <div className="news_post_image">
                                            <img
                                                src="/images/kocluk.jpeg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="news_post_top d-flex flex-column flex-sm-row">
                                            <div className="news_post_date_container">
                                                <div className="news_post_date d-flex flex-column align-items-center justify-content-center">
                                                    <div>Kemal</div>
                                                    <div>Balta</div>
                                                </div>
                                            </div>
                                            <a name="#op"></a>
                                            <div className="news_post_title_container">
                                                <div className="news_post_title">
                                                    <a href="#top" style={{pointerEvents: 'none', cursor: 'default'}}>
                                                        Koçluk Sistemi Nedir? Nasıl Uygulanır?
                                                    </a>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="news_post_text">
                                            <p>
                                                Başarının sadece matematikle elde edilemeyeceğini gördüğüm için ilk günden bu yana, k
                                                ariyer hayatım boyunca olgunlaştırdığım ve gerek tecrübelerim, gerekse de aldığım eğitimler sayesinde her
                                                geçen yıl geliştirmeye çalıştığım; öğrencimin yüksek başarılar elde etmesini neredeyse garantileyebilen
                                                "Kemal Balta Koçluk Sistemi"ni yaklaşık 7 yıl önce patentle koruma altına aldım ve bazı kuruluşlara
                                                tamamen aynı esaslara dayanacak şekilde danışmanlık şeklinde sunmaktayım.
                                            </p>
                                        </div>



                                        <p className="news_post_text" style={{ marginTop: 50 }}>
                                            Her özel ders öğrencim, sistemimde bulunan aşağıdaki unsurlardan faydalanmaktadır:
                                        </p>

                                        <div className="news_post_quote">
                                            <p className="news_post_quote_text">
                                                <span>* </span> Her ders sonunda hazırlanarak sisteme işlenen; Öğrencimin o dersteki durumunu, uygulamasını istediğim teknikleri ne denli uyguladığını,
                                                öğrencimin ilerleme durumunu, ödevini yapıp yapmadığını ve yeni ödev bilgisini içeren "Özel Ders Raporu".
                                            </p>
                                            <p className="news_post_quote_text">
                                                <span>* </span>Öğrencimin iyi olmadığı durumları tespit edip, çözüm yöntemi sunduğum ve takibini yaptığım "Vakaa Formları",
                                            </p>
                                            <p className="news_post_quote_text">
                                                <span>* </span>Öğrencimin zamanını en verimli şekilde değerlendirebilmesine olanak sağlayan ve kendisine özel hazırladığımız "Blok Saat Ders Programı"
                                            </p>
                                            <p className="news_post_quote_text">
                                                <span>* </span>Belirli aralıklarla yaptığımız veli görüşmelerinde velilerime sunduğum:
                                                Mevcut saptamaları, çözüm önerilerimi, öğrencimin güncel durumunu, uygulamakta olduğum yöntemleri,
                                                kısa-orta vadedeki hedeflerimizi ve sizlerden edindiğim geridönüşleri içeren "Veli Görüşme Formları" adı ile andığım Durum Raporları,
                                            </p>
                                            <p className="news_post_quote_text">
                                                <span>* </span>Öğrencimden mümkünse her ay en az iki defa aldığım Genel Deneme Sınav sonuç belgelerini kullanarak hazırladığım;
                                                sonuçlarına göre ağırlık vermemiz gereken dersleri belirlediğimiz, gerekiyorsa Blok Saat Programını güncelleyip,
                                                ihtiyaç olan Koçluk Tekniklerini ve kişiye özel uygulama detaylarını belirlediğimiz "Sınav Grafikleri"
                                            </p>
                                        </div>




                                    </div>
                                </div>
                            </div>

                            <SideBar id={query.query.id} />
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        </Layout>
    )

}
KoclukSistemi.getInitialProps = async ({ req, query }) => {
    // const res = await fetch('/api/files')

    return {query};
};
