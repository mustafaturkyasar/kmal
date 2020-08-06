import Layout from "../components/Layout";
import Header from "../components/Header";
import Head from "next/head";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

export default function UzaktanCanliDers(query) {
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
                        <h1>Uzaktan Canlı Matematik Özel Ders</h1>
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
                                                src="/images/uzaktanders.jpeg"
                                                alt="https://unsplash.com/@dsmacinnes"
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
                                                        Uzaktan Canlı Matematik Özel Ders Nedir ?
                                                    </a>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="news_post_text">
                                            <p>
                                                Öğrenci ve velilerimizin zamanının o denli önemli olduğu günümüz Dünyasında, evden özel ders çok tercih edilir olmakta kanaatimce.
                                                Yaklaşık 6 yıldan bu yana Türkiye'nin farklı illerinde bulunan öğrencilerime Uzaktan Tablet,
                                                Bilgisayar veya geniş ekranlı Cep Telefonu üzerinden Matematik Özel ders vermekteyim ve yine yüzyüze derste olduğu gibi,
                                                her öğrencimin "Kemal Balta Koçluk Sistemi"nin bütün unsurlarından tam anlamıyla faydalanmasını sağlamaktayım.
                                            </p>
                                        </div>



                                        <p className="news_post_text" style={{ marginTop: 50 }}>
                                            Veli ve öğrenci ön görüşmesinden, ders esnasında yaptığımız çalışma detaylarına; tespit ve raporlamalardan,
                                            Kemal Balta Koçluk Sistemi tekniklerine kadar her unsur Yüzyüze Ders ile tamamen aynı kalitede ve aynı şekilde
                                            uygulanmaktadır.
                                        </p>

                                        <p className="news_post_text" style={{ marginTop: 50 }}>
                                            Uzaktan ders esnasında yıllar önce özel olarak yaptırdığım, zaman içerisinde gelişmiş olan bir yazılım kullanmaktayım.
                                            Bu yazılım uzaktan görüşme sağlayan mevcut bir program eşliğinde çalışmakta ve görüşmeyi kaliteli düzeyde tutabilmektedir.
                                        </p>
                                        <div className="news_post_quote">
                                            <p className="news_post_quote_text">
                                                <span>* </span>Uzaktan dersi kendi tekniğim ile, paylaşımlı ekranda anlık olarak sesli ve görüntülü anlatımla veriyorum.
                                            </p>
                                            <p className="news_post_quote_text">
                                                <span>* </span>Ses ve görüntü yüksek kalitede oluyor.
                                            </p>
                                            <p className="news_post_quote_text">
                                                <span>* </span>Ders anlatımının yanısıra, öğrencim sorularını anlık olarak soruyor ve yanıt alıyor.
                                            </p>
                                            <p className="news_post_quote_text">
                                                <span>* </span> Öğrencim bilgisayar, tablet veya geniş ekranlı cep telefonunun karşısına geçiyor. Yanına boş kağıtlarını ve kalemini alıyor. Hazır şekilde tam ders saatinde görüntülü arama yapmamı bekliyor.
                                            </p>
                                            <p className="news_post_quote_text">
                                                <span>* </span>Dersten önce öğrencimin ücretsiz şekilde uygulamayı indirip, Kullanıcı İsmi alması ve bana bildirmesi yeterli.
                                            </p>
                                            <p className="news_post_quote_text">
                                                <span>* </span>Dersler gerçekten çok verimli ve keyifli oluyor.
                                            </p>
                                            <p className="news_post_quote_text">
                                                <span>* </span>Dahası öğrencimin geliş gidiş için zaman harcaması veya velimin yorulması gerekmiyor.
                                            </p>
                                        </div>

                                        <p className="news_post_text" style={{ marginTop: 50 }}>
                                            NOT: Corona virüs önlem uygulamaları kapsamında bir süreliğine yüzyüze dersleri askıya almış olup, bütün özel derslerimi "Uzaktan Canlı Matematik Özel Dersi" olarak yapmaktayım.
                                        </p>


                                    </div>
                                </div>
                            </div>

                            <SideBar  id={query.query.id} />

                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        </Layout>
    )

}

UzaktanCanliDers.getInitialProps = async ({ req, query }) => {
    // const res = await fetch('/api/files')

    return {query};
};

